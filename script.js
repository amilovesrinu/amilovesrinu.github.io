const nikkah = new Date(2020, 5,27,12).getTime();
// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = today - nikkah;
  // math
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)); 
  let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30))/(1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + years + "</div>years</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + months + "</div>months</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
</div>";

}, 1000);

