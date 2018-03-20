import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const startDate = moment();
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate
  });
});

test("should generate set end date action object", () => {
  const endDate = moment();
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate
  });
});

test('should generate set sort by amount action', ()=> {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action',()=>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set text filter action with defaul value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter action', ()=>{
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})