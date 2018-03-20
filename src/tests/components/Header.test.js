import React from "react";
//import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  //expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("h1").text()).toBe("Expensify");
  //expect(wrapper.find("h1")).to.have.length(1);

  expect(wrapper.find('NavLink').length).toBe(2);
  /* const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});
