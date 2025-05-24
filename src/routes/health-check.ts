// Packages
import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("", async (req: Request, res: Response) => {
  res.status(200).send();
});

export default router;
