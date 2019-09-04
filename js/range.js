$(document).ready(function(){

  //первый ползунок
  calc();

  $( "#range-sum" ).mousemove(function() {
    $("#range-sum-caption").val( $(this).val() );

    calc();
  });

  $( "#range-sum-plus" ).click(function() {
    let sum  = parseInt( $("#range-sum-caption").val(), 10 );
    let res = sum + 10000;
    if (res > 1000000) {res = 1000000;}
    $("#range-sum-caption").val(res);
    $( "#range-sum" ).val(res);
  calc();
  });

  $( "#range-sum-minus" ).click(function() {
    let sum  = parseInt( $("#range-sum-caption").val(), 10 );

    let res = sum - 10000;
    if (res < 0) {  res = 0;}
    $("#range-sum-caption").val(res);
    $( "#range-sum" ).val(res);
      calc();
  });

  $( "#range-sum-caption" ).blur(function() {
    if ($("#range-sum-caption").val() === '') {$("#range-sum-caption").val('0');$("#range-sum").val(0);calc();}
  });

  $( "#range-time-caption" ).blur(function() {
    if ($("#range-time-caption").val() === ''){$("#range-time-caption").val('0');$("#range-time").val(0);calc();}
  });

  $( "#range-sum-caption" ).keyup(function() {
    $('#range-sum').val($(this).val());
    if ($("#range-sum-caption").val() === '') {$("#range-sum").val(0);}
    if ($(this).val() > 1000000){$('#range-sum').val(1000000); $(this).val(1000000)}
    if ($(this).val() < 0){$('#range-sum').val(0); $(this).val(0)}
      calc();
  });

  // второй ползунок

  $( "#range-time" ).mousemove(function() {
    $("#range-time-caption").val( $(this).val() );

      calc();
  });

  $( "#range-time-plus" ).click(function() {
    let sum  = parseInt( $("#range-time-caption").val(), 10 );
    let res = sum + 1;
    if (res > 36) {res = 36;}
    $("#range-time-caption").val(res);
    $( "#range-time" ).val(res);
      calc();
  });

  $( "#range-time-minus" ).click(function() {
    let sum  = parseInt( $("#range-time-caption").val(), 10 );
    let res = sum - 1;
    if (res < 0) {res = 0;}
    $("#range-time-caption").val(res);
    $( "#range-time" ).val(res);
      calc();
  });

  $( "#range-time-caption" ).keyup(function() {
    $('#range-time').val($(this).val());
    if ($("#range-time-caption").val() === '') {$("#range-time").val(0);}
    if ($(this).val() > 36){$('#range-sum').val(36); $(this).val(36)}
    if ($(this).val() < 0){$('#range-sum').val(0); $(this).val(0)}
      calc();
  });

  function calc(){
    let z = parseInt($('#range-time').val(), 10);
    let s = parseInt($('#range-sum').val(), 10);

    let percent1 = $("#range-sum").val() / 1000000 * 100;
    $("#range-sum").css('background', 'linear-gradient(90deg, rgba(33,150,83,1)'+ percent1 +'%, rgba(238,242,247,1)'+ percent1+'%)');

    let percent2 = $("#range-time").val() / 36 * 100;
    $("#range-time").css('background', 'linear-gradient(90deg, rgba(33,150,83,1)'+ percent2 +'%, rgba(238,242,247,1)'+ percent2+'%)');


    moment.locale('ru');
    let d = moment().add(z, 'month');
    $('#return-calendar').html(moment(d).format('dddd'));
    $('#return-d').html(moment(d).format('Do MMMM'));
    $('#return-y').html(moment(d).format('YYYY'));
    if (z == 0 || s == 0) {
      $('#return-sum').html(0 + ' ₽');
      $('#monthly-payment').html(0 + ' ₽');
    }else {
      let resSum = ((s * 0.03) * z) + s;
      let resMonth = (s/z)+(s*0.03);
        $('#return-sum').html(Math.round(resSum) + ' ₽');
        $('#monthly-payment').html(Math.round(resMonth) + ' ₽');
    }
  }


$( "#calculator-close" ).click(function() {
$('#calculator-fastrequest').hide();
$('#calc-overlay').hide();
$('.calculator-fastrequest__body').show();
$('.calculator-fastrequest__result').hide();
});

$( "#show-fastrequest" ).click(function() {
$('#calculator-fastrequest').show();
$('#calc-overlay').show();

});

$( "#fastrequest-done" ).click(function() {
$('.calculator-fastrequest__body').hide();
$('.calculator-fastrequest__result').show();

});

});
