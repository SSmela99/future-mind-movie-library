import lodash from "lodash";

export const filterEmptyValues = (values: object) => {
  return lodash.pickBy(values, lodash.identity);
};

export const objectToUrlString = (values: object) => {
  return lodash.join(
    lodash.map(values, (value, key) => `${key}=${value}`),
    "&"
  );
};

export const stringToObject = (value: string) => {
  return lodash.fromPairs(
    value
      .slice(1)
      .split("&")
      .map((pair) => pair.split("=").map(decodeURIComponent))
      .filter((pair) => pair[0] !== "" && pair[1] !== undefined)
  );
};
