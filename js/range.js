$(document).ready(function(){

  //первый ползунок

  $( "#range-sum" ).mousemove(function() {
    $("#range-sum-caption").val( $(this).val() );
  });

  $( "#range-sum-plus" ).click(function() {
    let sum  = parseInt( $("#range-sum-caption").val(), 10 );
    let res = sum + 10000;
    if (res > 1000000) {res = 1000000;}
    $("#range-sum-caption").val(res);
    $( "#range-sum" ).val(res);

  });

  $( "#range-sum-minus" ).click(function() {
    let sum  = parseInt( $("#range-sum-caption").val(), 10 );

    let res = sum - 10000;
    if (res < 0) {  res = 0;}
    $("#range-sum-caption").val(res);
    $( "#range-sum" ).val(res);
  });

  $( "#range-sum-caption" ).keyup(function() {
    $('#range-sum').val($(this).val());
    if ($(this).val() > 1000000){$('#range-sum').val(1000000); $(this).val(1000000)}
    if ($(this).val() < 0){$('#range-sum').val(0); $(this).val(0)}
  });

  // второй ползунок

  $( "#range-time" ).mousemove(function() {
    $("#range-time-caption").val( $(this).val() );
  });

  $( "#range-time-plus" ).click(function() {
    let sum  = parseInt( $("#range-time-caption").val(), 10 );
    let res = sum + 1;
    if (res > 36) {res = 36;}
    $("#range-time-caption").val(res);
    $( "#range-time" ).val(res);
  });

  $( "#range-time-minus" ).click(function() {
    let sum  = parseInt( $("#range-time-caption").val(), 10 );
    let res = sum - 1;
    if (res < 0) {res = 0;}
    $("#range-time-caption").val(res);
    $( "#range-time" ).val(res);
  });

  $( "#range-time-caption" ).keyup(function() {
    $('#range-time').val($(this).val());
    if ($(this).val() > 36){$('#range-sum').val(36); $(this).val(36)}
    if ($(this).val() < 0){$('#range-sum').val(0); $(this).val(0)}
  });
  
});
