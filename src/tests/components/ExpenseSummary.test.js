import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correctly render ExpensesSummary component with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={43430} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly ExpensesSummary component with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expenseTotal={3000} />
  );
  expect(wrapper).toMatchSnapshot();
});
