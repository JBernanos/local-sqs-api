// Packages
import { Router } from "express";

// Controllers
import { listQueues, createQueue, deleteQueue } from "../controllers/queue";

const router = Router();

router.get("", listQueues);

router.post("", createQueue);

router.delete("", deleteQueue);

export default router;
