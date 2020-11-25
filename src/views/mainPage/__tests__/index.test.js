import { shallow } from "../../../enzyme";
import React from "react";
import Main from "../index";
describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Main />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "title", value: "title" },
    });
    wrapper.find("textarea").simulate("change", {
      target: { name: "text-area", value: "content" },
    });

    wrapper.find('input[type="submit"]').simulate("click");
    console.log(wrapper, wrapper.addNote);
    const notes = wrapper.prop("notes")[0];
    expect(notes.title).toEqual("title");
  });
});
