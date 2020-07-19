function validateURL(inputURL) {
  const regex = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\) \*\+,;=.]+$/
  );
  if (regex.test(inputURL)) {
    return true;
  } else {
    return false;
  }
}

export { validateURL };
