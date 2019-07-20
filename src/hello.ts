import { readFileStr } from "./read-file.ts";

(async () => {
  const content = await readFileStr("./hello.txt");
  
  console.log(content);
})();

// import relatively
// live serve, use it as a module?
// use node code?
//
