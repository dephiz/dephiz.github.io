$(document).ready(function(){

  //первый ползунок

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

  $( "#range-sum-caption" ).keyup(function() {
    $('#range-sum').val($(this).val());
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
    if ($(this).val() > 36){$('#range-sum').val(36); $(this).val(36)}
    if ($(this).val() < 0){$('#range-sum').val(0); $(this).val(0)}
      calc();
  });

  // $( "#range-time-caption" ).change(function() {
  //   alert();
  //   let z =parseInt($(this).val(), 10);
  //   let s = parseInt($('#range-sum').val(),10);
  //   $('#return-sum').html(calcSum(z,s));
  //   $('#monthly-payment').html(calcMonthSum(z,s));
  //
  // });

  function calc(){
    let z = parseInt($('#range-time').val(), 10);
    let s = parseInt($('#range-sum').val(), 10);
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

  // function calcMonthSum(){
  //   let z = parseInt($('#range-time').val(), 10);
  //   let s = parseInt($('#range-sum').val(), 10);
  //   let res  = (s/z)+(s*0.03);
  //   return Math.round(res);
  // }

});
