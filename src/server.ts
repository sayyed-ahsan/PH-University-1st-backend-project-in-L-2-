import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `App is listening on port 

        💜🤍💜 🍎🍎🍎 🔥🔥🔥 🥳 ✅ ${config.port} ✅ 🥳 🔥🔥🔥 🍎🍎🍎 💜🤍💜         
        `
      );
    });
  } catch (error) {
    console.error(error);
  }
}

main();

process.on("unhandledRejection", () => {
  console.log(
    `😈😈😈 $$$$$^^^^^^ UnhandledRejection is detected ^^^^^^$$$$$ 😈😈😈`
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(
    `😈😈😈 $$$$$^^^^^^ UncaughtException is detected ^^^^^^$$$$$ 😈😈😈`
  );
  process.exit(1);
});
