import React from "react";
import { shallow } from "../../../enzyme";
import Login from "../login";
describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "admin" },
    });
    expect(wrapper.state("username")).toEqual("admin");
  });
  it("password check", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "admin" },
    });
    expect(wrapper.state("password")).toEqual("krishankant123");
  });
  it("login check with right data", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "admin" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "admin" },
    });
    wrapper.find('input[type="submit"]').simulate("click");
    expect(wrapper.state("username")).toBe("admin");
    expect(wrapper.state("password")).toBe("admin");
  });
  it("login check with wrong data", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "user" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "user" },
    });
    wrapper.find('input[type="submit"]').simulate("click");
    expect(wrapper.state("username")).not.toBe("admin");
    expect(wrapper.state("password")).not.toBe("admin");
  });
});
