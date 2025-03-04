import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export async function get() {
  const sw = await readFile(
    // eslint-disable-next-line no-undef
    fileURLToPath(new URL("./noop-service-worker.js", import.meta.url)),
    {
      encoding: "utf8",
    },
  );
  return {
    body: sw,
  };
}
