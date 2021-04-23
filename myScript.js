var date = new Date()
var year = date.getFullYear();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = months[date.getMonth()];
document.getElementById("footer-year").innerHTML="© Copyright Dejan Malinov   " + "    " + month +","+year
