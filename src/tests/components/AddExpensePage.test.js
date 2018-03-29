import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import moment from "moment";

let startAddExpense, history, wrapper;

beforeEach(()=>{
     startAddExpense = jest.fn();
     history = { push: jest.fn() };
  
     wrapper = shallow(
      <AddExpensePage startAddExpense={startAddExpense} history={history} />
    );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handel onSubmit at AddExpensePage correctly", () => {
  const expense = {
    description: "new description",
    amount: "22.34",
    createdAt: moment(),
    note: ""
  };

  wrapper.find("ExpenseForm").prop("onSubmit")(expense);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expense);
});
