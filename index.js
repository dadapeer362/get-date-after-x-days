const addDays = require("date-fns/addDays");
const result = function (days) {
  final = addDays(new Date("22-Aug-2020"), days);
  date = final.getDate();
  month = final.getMonth() + 1;
  year = final.getFullYear();
  total_date = `${date}-${month}-${year}`;
  return total_date;
};

module.exports = result;
