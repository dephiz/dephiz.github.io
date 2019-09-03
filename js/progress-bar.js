let progressText = $('#progress-text');

// Переменные для проверки изменения инпутов
let sumChanged = false;
let monthChanged = false;

// Начальное значение процента
let currentPercent = 10;


$('#range-sum').on('change', function(){
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

$('#range-time').on('change', function(){
  if(!monthChanged){
    monthChanged = true;
    progressAddPercent(23);
  }
});

// функция получения ширины элемента в процентах
$.fn.percWidth = function(){
  return this.outerWidth() / this.parent().outerWidth() * 100;
}

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
