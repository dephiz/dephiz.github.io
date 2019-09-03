let currentTab = 0;
let maxTub = 3;
let steps = document.getElementsByClassName("step");
let btn = document.querySelector('#next-btn');

showTab(currentTab);

function showTab(n) {
  fixStepIndicator(n)
}

function next() {
  if(++currentTab <= maxTub){
    if(currentTab == 1){
      if(StepOneHasError()){
        --currentTab;
        return;
      }
      progressAddPercent(9);
    }

    if(currentTab == 2){
      if(StepTwoHasError()){
        --currentTab;
        return;
      }
      addInfoToCard();
      progressAddPercent(1);
    }

    if(currentTab == 3){
      if(StepThreeHasError()){
        --currentTab;
        return;
      }

      $('.calculator-step').text('Все шаги пройдены');
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
    $('#next-btn').text('Отправить');
  } else {
    $('#next-btn').text('Далее');
  }

  if(n == 3){
    $('#calculator-up-percents').text('');
  }
}

function addInfoToCard(){
    card = $('#card1').html();
    $('#prev-info').empty();
    $('#prev-info').append(card);
}

function StepOneHasError(){
  let error = false;
  let inputs = $('.calculator__range');
  for (var i = 0; i < inputs.length; i++) {
    if($(inputs[i]).val() == 0){
      error = true;
    }
  }

  if (error){
    return true;
  } else {
    return false;
  }
}

function StepTwoHasError(){
  let error = false;

  if($('#type-select').val() == null){
    error = true;
  } else {
    if($('#type-select').val() == 'pts'){
      if($('#car-input').val() == ''){
        error = true;
      }
    } else {
      if($('#home-input').val() == null){
        error = true;
      }
    }
  }

  if (error){
    return true;
  } else {
    return false;
  }
}

function StepThreeHasError(){
  let error = false;

  if($('#name-input').val() == ''){
    error = true;
  }

  if($('#phone-input').val() == ''){
    error = true;
  }

  if (error){
    return true;
  } else {
    return false;
  }
}
