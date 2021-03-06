function getRealTime() {
  var percent = new Date();
  var gio = percent.getHours();
  var phut = percent.getMinutes();
  var giay = percent.getSeconds();
  if (gio < 10) gio = "0" + gio;
  if (phut < 10) phut = "0" + phut;
  if (giay < 10) giay = "0" + giay;
  document.getElementById("realtime1").innerHTML =
    gio + ":" + phut + ":" + giay;
  // setInterval("getRealTime()", 1000);
}
setInterval("getRealTime()", 1000);

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  $(document).ready(function () {
    $.getJSON("http://nguyen-nulab.ddns.net:8001/web/updatert", function (
      response
    ) {
      var sensor1 = response.dose;
      var sensor1 = sensor1.toFixed(3);

      document.getElementById("sensor1").innerHTML = sensor1 + " µSv/h";

      var sensor2 = response.temperature;
      var sensor2 = sensor2.toFixed(2);
      document.getElementById("sensor2").innerHTML = sensor2 + " °C";

      var sensor3 = response.humidity;
      var sensor3 = sensor3.toFixed(2);
      document.getElementById("sensor3").innerHTML = sensor3 + " %";

      var sensor4 = response.dust;
      var sensor4 = sensor4.toFixed(3);
      document.getElementById("sensor4").innerHTML = sensor4 + " µg/m3";

      var sensor5 = response.CO;
      var sensor5 = sensor5.toFixed(1);
      document.getElementById("sensor5").innerHTML = sensor5 + " ppm";

      var ch44 = response.CH4;
      var ch44 = ch44.toFixed(1);
      document.getElementById("ch44").innerHTML = ch44 + " ppm";
    });
  });
}
setInterval("myTimer", 1000);
