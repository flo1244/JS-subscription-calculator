var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5; // basic plan
  if (subType === "standard") {
    monthlyCost = 7; // standard plan
  } else if (subType === "premium") {
    monthlyCost = 10; // premium plan
  }
  var total = subDuration * monthlyCost; //shows final cost based on how many months selected
  result.innerText = `You have chosen ${subDuration} month(s) ${subType} plan for $${total}!`;
};
