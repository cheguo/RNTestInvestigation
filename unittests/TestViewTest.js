import * as React from "react";
import { Text, ListView, Button } from "react-native";
import { shallow } from "enzyme";
import * as Chai from "chai";

var TestView = require("../components/TestView").TestView;

describe("#React Native UnitTest", () => {

    describe("#TestView Test", () => {

        it("Initially text it 'Text'", () => {
            const wrapper = shallow(<TestView />);

            Chai.expect(wrapper.find(Text)).to.have.length(1);

            Chai.expect(wrapper.contains(<Text>Text</Text>)).to.equal(true);
        });
    })
});
