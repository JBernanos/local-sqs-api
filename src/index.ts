// Packages
import dotenv from "dotenv";
import express from "express";

// Routes
import healthCheckRoute from "./routes/health-check";
import queueRoute from "./routes/queue";

dotenv.config({});
const app: express.Express = express();

app.listen(process.env.API_PORT, async (): Promise<void> => {
  console.log(`(DEBUG) - APP Listening on port: ${process.env.API_PORT}`);

  app.use(express.json());
  app.use(`/${process.env.API_VERSION}/healthcheck`, healthCheckRoute);
  app.use(`/${process.env.API_VERSION}/queue`, queueRoute);
});
