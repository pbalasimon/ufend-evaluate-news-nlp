const { isURLValid } = require("../client/js/URLValidator");

describe("isURLValid function", () => {
  test("it should return true if the url is valid", () => {
    expect(isURLValid("http://www.google.es")).toBeTruthy();
  });
  test("it should return false if the url is valid", () => {
    expect(isURLValid("invalidURL")).toBeFalsy();
  });
});
