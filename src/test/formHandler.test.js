const handleSubmit = require("../client/js/formHandler");

describe("Test handleSubmit function", () => {
  test("expected  to be defined  : return true", () => {
    expect(handleSubmit.handleSubmit).toBeDefined();
  });
});
