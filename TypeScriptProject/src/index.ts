import devServer from "./server/dev";
import prodServer from "./server/prod";
import express from "express";

import { name } from "@/utils";

const port = 3000;
const app = express();

// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
  devServer(app);
} else {
  prodServer(app);
}

console.log("server side", name);

app.listen(port, () => {
  console.log(`The application is running on port ${port}.`);
});
