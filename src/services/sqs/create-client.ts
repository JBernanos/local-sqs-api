// Packages
import { SQSClient } from "@aws-sdk/client-sqs";

export default new SQSClient({
  region: "elasticmq",
  endpoint: "http://localhost:9324",
  credentials: {
    accessKeyId: "x",
    secretAccessKey: "x",
  },
});
