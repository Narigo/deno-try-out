import { serve } from "https://deno.land/std/http/server.ts";
import { getString } from "./get-string.ts"
const s = serve("127.0.0.1:8000");

async function main() {
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode(getString()) });
  }
}

main();