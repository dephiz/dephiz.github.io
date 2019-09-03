let progressText = $('#progress-text');

// Переменные для проверки изменения инпутов
let sumChanged = false;
let monthChanged = false;
let zalogChanged = false;
let zalogItemChanged = false;
let nameChanged = false;
let phoneChanged = false;

// Начальное значение процента
let currentPercent = 10;


$('#range-sum').on('input', function(){
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
  } else {
    if($(this).val() == 0){
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
