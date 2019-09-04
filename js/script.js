let currentTab = 0;
let maxTub = 3;
let steps = document.getElementsByClassName("step");
let btn = document.querySelector('#next-btn');

showTab(currentTab);

function showTab(n) {
  fixStepIndicator(n)
}

function next() {
  stopAnimateNextBtn();
  if(++currentTab <= maxTub){

    if(currentTab == 1){
      if(StepOneHasError()){
        alert("Заполните все поля калькулятора!");
        --currentTab;
        return;
      }
      showPrevBtn();
      $('#calculator-up-percents').text('+4% за выбор типа залога');
      progressAddPercent(9);
    }

    if(currentTab == 2){
      if(StepTwoHasError()){
        alert("Заполните все поля калькулятора!");
        --currentTab;
        return;
      }
      showPrevBtn();
      $('#calculator-up-percents').text('+3% за ввод ФИО');
      $('#next-btn').text('Отправить');
      addInfoToCard();
      progressAddPercent(1);
    }

    if(currentTab == 3){
      if(StepThreeHasError()){
        alert("Заполните все поля калькулятора!");
        --currentTab;
        return;
      } else {
        if(!$('#privacy-checkbox').prop('checked')){
          alert('Поддвердите согласие на обработу персональных данных');
          --currentTab;
          return;
        }
      }
      hidePrevBtn();
      $('.calculator-step').text('Все шаги пройдены');
    }

    showTab(currentTab);
  }
}

function prev(){
  animateNextBtn();
  --currentTab;
  $('#next-btn').text('Далее');
  if(currentTab == 0){
    $('#calculator-up-percents').text('+9% за следующий шаг');
    progressSubtractPercent(9);
  } else {
    $('#calculator-up-percents').text('+1% за следующий шаг');
    progressSubtractPercent(1);
  }

  if(currentTab > 0 && currentTab < maxTub){
    showPrevBtn();
  } else {
    hidePrevBtn();
  }

  showTab(currentTab);
}

function fixStepIndicator(n) {
  for (i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" step--active", "");
  }
  //... and adds the "active" class to the current step:
  steps[n].className += " step--active";

  // Ставим номер шага в шапку
  $('#step-number').text(n + 1);

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

function showPrevBtn() {
  $('#prev-btn').show();
}

function hidePrevBtn() {
  $('#prev-btn').hide();
}

function animateNextBtn(){
  $('#next-btn').addClass('animated_btn');
}

function stopAnimateNextBtn(){
  $('#next-btn').removeClass('animated_btn');
}
