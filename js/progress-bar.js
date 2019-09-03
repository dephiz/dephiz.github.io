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


$('#range-sum').on('input', function(){
  if(!sumChanged){
    sumChanged = true;
    progressAddPercent(23);

    if($('#range-time').val() == 0){
      $('#calculator-up-percents').text('+23% за выбор срока займа');
    } else {
      $('#calculator-up-percents').text('+9% к следующему шагу');
    }
  } else {
    if($(this).val() == 0){
      sumChanged = false;
      progressSubtractPercent(23);

      $('#calculator-up-percents').text('+23% за выбор суммы займа');
    }
  }
});

$('#range-sum-caption').on('input', function(){
  if(!sumChanged){
    sumChanged = true;
    progressAddPercent(23);
  } else {
    if($(this).val() == 0){
      sumChanged = false;
      progressSubtractPercent(23);
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
  if(!monthChanged){
    monthChanged = true;
    progressAddPercent(23);
  } else {
    if($(this).val() == ''){
      monthChanged = false;
      progressSubtractPercent(23);
    }
  }
});

$('#type-select').on('change', function(){
  if(!zalogChanged){
    zalogChanged = true;
    progressAddPercent(4);
  }
});

$('#home-input').on('change', function(){
  if(!zalogItemChanged){
    zalogItemChanged = true;
    progressAddPercent(14);
  }
});

$('#car-input').on('input', function(){
  if(!zalogItemChanged){
    zalogItemChanged = true;
    progressAddPercent(14);
  } else {
    if($(this).val() == ''){
      zalogItemChanged = false;
      progressSubtractPercent(14);
    }
  }
});

$('#name-input').on('input', function(){
  if(!nameChanged){
    nameChanged = true;
    progressAddPercent(3);
  } else {
    if($(this).val() == ''){
      nameChanged = false;
      progressSubtractPercent(3);
    }
  }
});

$('#phone-input').on('input', function(){
  if(!phoneChanged){
    phoneChanged = true;
    progressAddPercent(3);
  } else {
    if($(this).val() == ''){
      phoneChanged = false;
      progressSubtractPercent(3);
    }
  }
});

$('#next-btn').on('click', function(){
  if(firstClickNextBtn){
    firstClickNextBtn = false;
    progressAddPercent(9);
  } else {
    progressAddPercent(1);
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
