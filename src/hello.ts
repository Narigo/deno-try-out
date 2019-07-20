import { readFileStr } from "./read-file.ts";

(async () => {
  try {
    const content = await readFileStr("./assets/hello.txt");
    const content2 = await readFileStr("./assets/hello2.txt");
    const contentAgain = await readFileStr("./assets/hello.txt");

    console.log(content);
    console.log(content2);
    console.log(contentAgain);
  } catch (error) {
    console.log("there was an error!", error);
  }
})();

// import relatively
// live serve, use it as a module?
// use node code?
//
