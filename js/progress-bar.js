let progressText = $('#progress-text');

// Переменные для проверки изменения инпутов
let sumChanged = false;
let monthChanged = false;


$('#range-sum').on('change', function(){
  if(!sumChanged){
    sumChanged = true;
    progressAddPercent(23);
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
  // Получаем текущую ширину
  let currentPercent = $(progressLine).percWidth();
  // Увеличиваем текущую ширину на заданные проценты
  let newWidth = Math.round(currentPercent + count);
  $(progressLine).css({'width': newWidth + '%'});
  // меняем текст в полосе загрузки
  updateProgressText(newWidth);
}

function updateProgressText(val){
  $(progressText).text(val);
}
