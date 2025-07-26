//this usecase will give empty value-->undefined...since when we store the value before the event...the empty value is stored in the variable whenever the page laods.....
// const height=parseFloat(document.querySelector('#ht').value)

//we need to fetch the value when the event is completed ..like the value are submitted
//here we need to accept the form
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  //stop the value from being submitted
  e.preventDefault();

  //now fetch the height
  const height = parseFloat(document.querySelector("#ht").value);
  // console.log(height);

  const weight = parseFloat(document.querySelector("#wt").value);
  // console.log(weight);

  //operation

  bmi(height, weight);
});
function bmi(h, w) {
  if (h === "" || h < 0 || isNaN(h) || w === "" || w < 0 || isNaN(w)) {
    document.querySelector("#answer").textContent =
      "Please enter a valid input:";
  } else {
    const res = (w / Math.pow(h, 2)).toFixed(2);
    //inject answer in the answer section
    document.querySelector("#answer").textContent = res;
  }
}
