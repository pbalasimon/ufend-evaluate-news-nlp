import validator from "validator";

function isURLValid(url) {
  return validator.isURL(url);
}

export { isURLValid };
