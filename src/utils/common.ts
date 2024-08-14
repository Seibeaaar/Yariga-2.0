export const hyphenizeURL = (route: string) =>
  route.replaceAll(" ", "-").toLowerCase();

export const isObjectEmpty = (object: object) => Object.keys(object).length === 0;

export const formatPluralNoun = (
  number: number,
  singular: string,
  plural: string
) => {
  return Math.abs(number) === 1 ? singular : plural;
}
