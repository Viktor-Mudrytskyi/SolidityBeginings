import * as ethers from "ethers";
import dotenv from "dotenv";
import fs from "fs";
import { dot } from "node:test/reporters";

async function main() {
  dotenv.config();
  if (!process.env.PRIVATE_KEY) {
    throw new Error("PRIVATE_KEY environment variable is not defined");
  }

  if (!process.env.PRIVATE_KEY_PASSWORD) {
    throw new Error("PRIVATE_KEY environment variable is not defined");
  }

  if (!process.env.RPC_URL) {
    throw new Error("RPC_URL environment variable is not defined");
  }
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD
  );

  fs.writeFileSync(".encryptedKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
