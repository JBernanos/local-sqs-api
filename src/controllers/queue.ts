// Packages
import { Request, Response } from "express";
import { CreateQueueCommand, DeleteQueueCommand, ListQueuesCommand } from "@aws-sdk/client-sqs";

// Services
import sqs from "../services/sqs/create-client";

export const listQueues = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await sqs.send(new ListQueuesCommand({}));
    res.status(200).send({ queueUrls: response.QueueUrls ?? null });
  } catch (error) {
    res.status(500).send({ message: error });
  }
  return;
};

export const createQueue = async (req: Request, res: Response): Promise<void> => {
  if (!req.body || !req.body.queueName) {
    res.status(400).send({ error: "Request body should be a JSON and queueName field should be present." });
    return;
  }

  try {
    const response = await sqs.send(new CreateQueueCommand({ QueueName: req.body.queueName }));
    res.status(200).send({ queueUrl: response.QueueUrl ?? null });
  } catch (error) {
    res.status(500).send({ error: error });
  }
  return;
};

export const deleteQueue = async (req: Request, res: Response): Promise<void> => {
  if (!req.query.queueUrl) {
    res.status(400).send({ error: "Request queries should include queueUrl." });
    return;
  }

  const queueUrl: string = req.query.queueUrl as string;
  try {
    await sqs.send(new DeleteQueueCommand({ QueueUrl: queueUrl }));
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: error });
  }
  return;
};
