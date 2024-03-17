$(document).ready(function() {
  function updateTime() {
    var date = new Date();
    var hours = date.getHours() % 12;  // 12-hour format
    hours = hours ? hours : 12;        // Display "12" for midnight
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amPm = hours >= 12 ? "AM" : "PM";  // Determine AM/PM

    hours = hours.toString().padStart(2, '0'); // Add leading zero if needed
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    var timeString = hours + ":" + minutes + ":" + seconds;
    $("#time").text(timeString);
    $("#am-pm").text(amPm);
  }

  updateTime();
  setInterval(updateTime, 1000); // Update every second
});
