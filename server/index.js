import express from "express";
import path from "path";

import assetsRouter from "./routes/assetsRouter.js";
import mainRouter from "./routes/mainRouter.js";

const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

const app = express();

app.get("/api/server", (_req, res) => {
  res.json({ message: "Online" });
});

if (process.env.NODE_ENV === "production") {
  app.get("/api/web", (_req, res) => {
    res.json({ message: "BETA" });
  });
} else {
  app.get("/api/web", (_req, res) => {
    res.json({ message: "Under construction" });
  });
}

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetsRouter);
}

app.use(mainRouter);

app.listen(port, () => {
  console.log("Server listening on port", port);
});
