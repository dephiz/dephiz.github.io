let type = 'none';

let select = $('#type-select');

$(select).on('change', function() {
  type = $(select).val();
  let autoBlock = $('.step__auto');
  let homeBlock = $('.step__home');

  let cardHome = $('#card-item-home');
  let cardCar = $('#card-item-car');
  let cardCarYear = $('#card-item-car-year');

  if(type == 'pts'){
    $('#credit-type').text('ПТС');
    $(homeBlock).css({'display':'none'});
    $(autoBlock).css({'display':'flex'});

    $(cardHome).css({'display':'none'});
    $(cardCar).css({'display':'flex'});
    $(cardCarYear).css({'display':'flex'});
  }

  if(type == 'home'){
    $('#credit-type').text('Недвижимость');
    $(homeBlock).css({'display':'block'});
    $(autoBlock).css({'display':'none'});

    $(cardHome).css({'display':'flex'});
    $(cardCar).css({'display':'none'});
    $(cardCarYear).css({'display':'none'});
  }
});

$('#car-input').on('input', function(){
  $('#car-type').text($(this).val());
  if($(this).val() == ''){
    $('#car-type').text('?');
  }
});

$('#car-year-input').on('input', function(){
  $('#car-year-type').text($(this).val());
  if($(this).val() == ''){
    $('#car-year-type').text('?');
  }
});

$('#home-input').on('change', function(){
  $('#home-type').text($(this).val());
  if($(this).val() == ''){
    $('#home-type').text('?');
  }
});

$('#name-input').on('input', function(){
  $('#name-type').text($(this).val());
  if($(this).val() == ''){
    $('#name-type').text('?');
  }
});

$('#phone-input').on('input', function(){
  $('#phone-type').text($(this).val());
  if($(this).val() == ''){
    $('#phone-type').text('?');
  }
});
