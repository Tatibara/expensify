import selectExpensesTotal from "../../selectors/expenses-total";
import { expenses } from "../fixtures/expenses";

/* const total = getExpensesTotal(expenses);
console.log(total); */

test("should return 0 if no expenses", () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test("should correctly add up a single expenses", () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(234);
});
test("should correctly add up multiple expenses", () => {
  expect(selectExpensesTotal(expenses)).toBe(114234);
});
