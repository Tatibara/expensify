import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import { expenses } from "../fixtures/expenses";

let history, wrapper, startEditExpense, startRemoveExpense;

beforeEach(() => {
  history = { push: jest.fn() };
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      history={history}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handel edit of expense at the EditExpensePage", () => {
  const updates = {
    description: "Test Updates"
  };
  wrapper.find("ExpenseForm").prop("onSubmit")(updates);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, updates);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handel startRemoveExpense at the EditExpensePage", () => {
  wrapper.find("button").prop("onClick")();
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
