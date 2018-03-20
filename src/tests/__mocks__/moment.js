// import moment from 'moment'; ohterwise goes in a loop
const moment = require.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
