let currentTab = 0;
let maxTub = 2;
let steps = document.getElementsByClassName("step");
let btn = document.querySelector('#next-btn');


showTab(currentTab);

function showTab(n) {
  fixStepIndicator(n)
}

function next() {
  if(++currentTab <= maxTub){
    showTab(currentTab);
  }
}

function fixStepIndicator(n) {
  for (i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" step--active", "");
  }
  //... and adds the "active" class to the current step:
  steps[n].className += " step--active";
}
