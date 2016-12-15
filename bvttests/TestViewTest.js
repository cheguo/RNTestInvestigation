import it from "./helpers/appium";

describe("TestView testing", () => {

  it("The initial text is 'text'", function* (driver, done) {
    var text = yield driver.elementByName('Text');

    done();
  });

  it("click the button and text changes", function* (driver, done) {
    var button = yield driver.elementByClassName('XCUIElementTypeButton');
    yield button.click();

    var text = yield driver.elementByName('Text changed');

    done();
  });
 }
);
