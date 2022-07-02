import { Router } from "express";
import emojis from "./emojis";
import githubContent from "./github.content.routes";
const router = Router();

router.get("/", (req: any, res: any) => {
  res.json({
    message: "Hi there!",
  });
});

router.use("/emojis", emojis);

router.use("/content", githubContent);

export default router;
