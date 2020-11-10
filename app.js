let submitBtn = document.getElementById("calcBtn");
submitBtn.addEventListener("click", calculateBill)


function calculateBill() {
  let billAmt = document.getElementById('billAmt').value;
    if(billAmt == null || billAmt == ""){
      alert("Bill amount cannot be blank")
      return false
    }
  
  let serviceMultiplier = document.getElementById('serviceMult').value;

  let numberOfPeopleSharing = document.getElementById('numOfPeople').value;
    if(numberOfPeopleSharing == null || numberOfPeopleSharing == "") {
      alert("Number of people cannot be blank")
      return false
    }

  let calculatedAmt = (billAmt * serviceMultiplier) / numberOfPeopleSharing;
    document.getElementById('calculatedAmt').innerHTML = calculatedAmt;

  return calculatedAmt;
}