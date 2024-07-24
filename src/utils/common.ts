export const hyphenizeURL = (route: string) =>
  route.replaceAll(" ", "-").toLowerCase();

export const isObjectEmpty = (object: object) => Object.keys(object).length === 0;
