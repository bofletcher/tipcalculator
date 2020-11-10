let submitBtn = document.getElementById("calcBtn");
submitBtn.addEventListener("click", calculateBill)


function calculateBill() {
  let billAmt = document.getElementById('billAmt').value;
  let serviceMultiplier = document.getElementById('serviceMult').value;
  let numberOfPeopleSharing = document.getElementById('numOfPeople').value;
  let calculatedAmt = (billAmt * serviceMultiplier) / numberOfPeopleSharing;
  document.getElementById('calculatedAmt').innerHTML = calculatedAmt;
  return calculatedAmt;
}