let progressText = $('#progress-text');

// Переменные для проверки изменения инпутов
let sumChanged = false;
let monthChanged = false;
let zalogChanged = false;
let zalogItemChanged = false;
let nameChanged = false;
let phoneChanged = false;

// first click next button
let firstClickNextBtn = true;

// Начальное значение процента
let currentPercent = 10;

function getCurrentProcces(){
  return currentPercent;
}

$('#range-sum').on('input', function(){
  if(!sumChanged){
    sumChanged = true;
    progressAddPercent(23);

    if($('#range-time').val() == 0){
      stopAnimateNextBtn();
      $('#calculator-up-percents').text('+23% за выбор срока займа');
    } else {
      $('#calculator-up-percents').text('+9% к следующему шагу');
      animateNextBtn();
    }
  } else {
    if($(this).val() == 0){
      sumChanged = false;
      progressSubtractPercent(23);
      stopAnimateNextBtn();
      $('#calculator-up-percents').text('+23% за выбор суммы займа');
    }
  }
});

$('#range-sum-plus').on('click', function(){
  if(!sumChanged){
    sumChanged = true;
    progressAddPercent(23);

    if($('#range-time').val() == 0){
      stopAnimateNextBtn();
      $('#calculator-up-percents').text('+23% за выбор срока займа');
    } else {
      $('#calculator-up-percents').text('+9% к следующему шагу');
      animateNextBtn();
    }
  }
});

$('#range-sum-minus').on('click', function(){
  if(sumChanged){
    if($('#range-sum-caption').val() - 10000 <= 0){
      $('#calculator-up-percents').text('+23% за выбор суммы займа');
      sumChanged = false;
      stopAnimateNextBtn();
      progressSubtractPercent(23);
    }
  }
});

$('#range-time-plus').on('click', function(){
  if(!monthChanged){
    monthChanged = true;
    progressAddPercent(23);

    if($('#range-sum').val() == 0){
      stopAnimateNextBtn();
      $('#calculator-up-percents').text('+23% за выбор суммы займа');
    } else {
      $('#calculator-up-percents').text('+9% к следующему шагу');
      animateNextBtn();
    }
  }
});

$('#range-time-minus').on('click', function(){
  if(monthChanged){
    if($('#range-time').val() - 1 <= 0){
      monthChanged = false;
      stopAnimateNextBtn();
      progressSubtractPercent(23);
      $('#calculator-up-percents').text('+23% за выбор срока займа');
    }
  }
});

$('#range-sum-caption').on('input', function(){
  if($(this).val() == 0){
    if(sumChanged){
      $('#calculator-up-percents').text('+23% за выбор суммы займа');
      sumChanged = false;
      stopAnimateNextBtn();
      progressSubtractPercent(23);
    }
  } else {
    if(!sumChanged){
      if($('#range-time').val() == 0){
        stopAnimateNextBtn();
        $('#calculator-up-percents').text('+23% за выбор срока займа');
      } else {
        $('#calculator-up-percents').text('+9% к следующему шагу');
        animateNextBtn();
      }
      sumChanged = true;
      progressAddPercent(23);
    }
  }
});

$('#range-time').on('input', function(){
  if(!monthChanged){
    monthChanged = true;
    progressAddPercent(23);

    if($('#range-sum').val() == 0){
      $('#calculator-up-percents').text('+23% за выбор суммы займа');
    } else {
      $('#calculator-up-percents').text('+9% к следующему шагу');
      animateNextBtn();
    }
  } else {
    if($(this).val() == 0){
      monthChanged = false;
      progressSubtractPercent(23);

      $('#calculator-up-percents').text('+23% за выбор срока займа');
    }
  }
});

$('#range-time-caption').on('input', function(){
  if($(this).val() == 0){
    if(monthChanged){
      $('#calculator-up-percents').text('+23% за выбор срока займа');
      monthChanged = false;
      stopAnimateNextBtn();
      progressSubtractPercent(23);
    }
  } else {
    if(!monthChanged){
      if($('#range-sum').val() == 0){
        stopAnimateNextBtn();
        $('#calculator-up-percents').text('+23% за выбор суммы займа');
      } else {
        $('#calculator-up-percents').text('+9% к следующему шагу');
        animateNextBtn();
      }
      monthChanged = true;
      progressAddPercent(23);
    }
  }
});

$('#type-select').on('change', function(){
    if(!zalogChanged){
      zalogChanged = true;
      progressAddPercent(4);
    }

    if($(this).val() == 'pts'){
      $('#calculator-up-percents').text('+14% за ввод марки и модели автомобиля');
    } else {
      $('#calculator-up-percents').text('+14% за выбор типа недвижимости');
    }
});

$('#home-input').on('change', function(){
  if(!zalogItemChanged){
    zalogItemChanged = true;
    progressAddPercent(14);
  }
  $('#calculator-up-percents').text('+1% за следующий шаг');
  animateNextBtn();
});

$('#car-input').on('input', function(){
  animateNextBtn();
  $('#calculator-up-percents').text('+1% за следующий шаг');
  if(!zalogItemChanged){
    zalogItemChanged = true;
    progressAddPercent(14);
  } else {
    if($(this).val() == ''){
      zalogItemChanged = false;
      progressSubtractPercent(14);
      stopAnimateNextBtn();
      $('#calculator-up-percents').text('+14% за ввод марки и модели автомобиля');
    }
  }
});

$('#name-input').on('input', function(){
  if($('#phone-input').val() == ''){
    $('#calculator-up-percents').text('+3% за ввод номера телефона');
  } else {
    animateNextBtn();
    $('#calculator-up-percents').text('Отправьте заявку и мы позвоним через 10 минут !');
  }
  if(!nameChanged){
    nameChanged = true;
    progressAddPercent(3);
  } else {
    if($(this).val() == ''){
      $('#calculator-up-percents').text('+3% за ввод ФИО');
      nameChanged = false;
      progressSubtractPercent(3);
    }
  }
});

$('#phone-input').on('input', function(){
  if($('#name-input').val() == ''){
    $('#calculator-up-percents').text('3% за ввод ФИО');
  } else {
    animateNextBtn();
    $('#calculator-up-percents').text('Отправьте заявку и мы позвоним через 10 минут !');
  }
  if(!phoneChanged){
    phoneChanged = true;
    progressAddPercent(3);
  } else {
    if($(this).val() == ''){
      $('#calculator-up-percents').text('+3% за ввод номера телефона');
      phoneChanged = false;
      progressSubtractPercent(3);
    }
  }
});

function progressAddPercent(count){
  let progressLine = $('.calculator-progress__line');
  currentPercent = currentPercent + count;
  $(progressLine).css({'width': currentPercent + '%'});
  // меняем текст в полосе загрузки
  updateProgressText(currentPercent);
}

function progressSubtractPercent(count){
  let progressLine = $('.calculator-progress__line');
  currentPercent = currentPercent - count;
  $(progressLine).css({'width': currentPercent + '%'});
  // меняем текст в полосе загрузки
  updateProgressText(currentPercent);
}

function updateProgressText(val){
  $(progressText).text(val);
}
