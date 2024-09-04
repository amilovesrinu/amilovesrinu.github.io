const nikkah = new Date(2020, 5, 27, 12).getTime();
const edd = new Date(2024, 10, 1).getTime(); // November is month 10 (0-based)

let timer = setInterval(function() {
  // Get today's date
  const today = new Date().getTime();

  // Get the difference since nikkah
  const diff = today - nikkah;
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 

  // Calculate remaining time
  let tempDate = new Date(nikkah);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  const diffMonths = today - tempDate.getTime();
  let months = Math.floor(diffMonths / (1000 * 60 * 60 * 24 * 30));
  
  tempDate.setMonth(tempDate.getMonth() + months);
  const diffDays = today - tempDate.getTime();
  let days = Math.floor(diffDays / (1000 * 60 * 60 * 24));

  tempDate.setDate(tempDate.getDate() + days);
  const diffHours = today - tempDate.getTime();
  let hours = Math.floor(diffHours / (1000 * 60 * 60));

  // Get the difference until EDD
  const diffToEdd = edd - today;
  let daysToEdd = Math.floor(diffToEdd / (1000 * 60 * 60 * 24));
  let hoursToEdd = Math.floor((diffToEdd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display
  document.getElementById("timer").innerHTML =
    "<div class=\"section\"> \
      <div class=\"headline\">Big Day</div> \
      <div class=\"days\"> \
        <div class=\"numbers\">" + years + "</div>years</div> \
      <div class=\"hours\"> \
        <div class=\"numbers\">" + months + "</div>months</div> \
      <div class=\"minutes\"> \
        <div class=\"numbers\">" + days + "</div>days</div> \
      <div class=\"seconds\"> \
        <div class=\"numbers\">" + hours + "</div>hours</div> \
    </div> \
    <div class=\"section\"> \
      <div class=\"headline2\">Biggest Day</div> \
      <div class=\"edd\"> \
        <div class=\"numbers\">" + daysToEdd + "</div>days to EDD</div> \
      <div class=\"edd-hours\"> \
        <div class=\"numbers\">" + hoursToEdd + "</div>hours to EDD</div> \
    </div>";
}, 1000);
