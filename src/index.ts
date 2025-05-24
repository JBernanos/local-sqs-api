// Packages
import dotenv from "dotenv";
import express from "express";

// Routes
import healthCheckRoute from "./routes/health-check";

dotenv.config({});
const app: express.Express = express();

app.listen(process.env.API_PORT, async (): Promise<void> => {
  console.log(`(DEBUG) - APP Listening on port: ${process.env.API_PORT}`);

  app.use(`/${process.env.API_VERSION}/healthcheck`, healthCheckRoute);
});
