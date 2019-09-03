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
    if(currentTab === 2){
      addInfoToCard();
    }
    showTab(currentTab);
  }
}

function fixStepIndicator(n) {
  for (i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" step--active", "");
  }
  //... and adds the "active" class to the current step:
  steps[n].className += " step--active";

  // Ставим номер шага в шапку
  $('#step-number').text(n + 1);

  if(n == 1){
    $('#calculator-up-percents').text('+4% за выбор типа залога');
  }

  if(n == 2){
    $('#calculator-up-percents').text('3% за ввод ФИО');
  }
}

function addInfoToCard(){
    card = $('#card1').html();
    $('#prev-info').empty();
    $('#prev-info').append(card);
}
