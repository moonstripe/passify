var schedule = require('node-schedule');

function scheduleTest() {
    let startTime = new Date(Date.now() + 5000);
let endTime = new Date(startTime.getTime() + 5000);
var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Time for tea!');
});
// var j = schedule.scheduleJob({minute: 1}, function(){
//     console.log('Time for tea!');
//   });
}
scheduleTest();