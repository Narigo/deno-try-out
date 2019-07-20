export interface ReadOptions {
  encoding?: string;
}

export async function readFileStr(
  filename: string,
  opts: ReadOptions = {}
): Promise<string> {
  const decoder = new TextDecoder(opts.encoding);
  return decoder.decode(await Deno.readFile(filename));
}
