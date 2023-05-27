import express from "express";
import path from "path";

import assetsRouter from "./assetsRouter.js";
import mainRouter from "./mainRouter.js";

const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

const app = express();

app.get("/api/v1/server", (_req, res) => {
  res.json({ message: "Online" });
});

if (process.env.NODE_ENV === "production") {
  app.get("/api/v1/web", (_req, res) => {
    res.json({ message: "Production" });
  });
} else {
  app.get("/api/v1/web", (_req, res) => {
    res.json({ message: "Development" });
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
