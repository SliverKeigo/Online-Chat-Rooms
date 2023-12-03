import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import { Express } from "express";

export default function (app: Express) {
  const config = require("../../webpack.config.js");
  const compiler = webpack(config);

  app.get("/main", function (req, res, next) {
    res.redirect("/main/main.html");
  });

  app.get("/chatRoom", function (req, res, next) {
    res.redirect("/chatRoom/chatRoom.html");
  });

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
}
