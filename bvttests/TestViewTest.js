import it from "./helpers/appium";

describe("TestView testing", () => {

  it("The initial text is 'text'", function* (driver, done) {
    var text = yield driver.elementById('Text');
    var password = yield driver.elementById('change');

    done();
  });

  it("should log in and out", function* (driver, done) {

    done();
  });
 }
);
