$(document).ready(function() {
    $('input[type=password]').keyup(function() {
        var pswd = $(this).val();
        if(pswd.length < 8){
            $('#length').removeClass('valid').addClass('invalid');  
        }
      else{
       $('#length').removeClass('invalid').addClass('valid');
      }
      if(pswd.match(/[A-z]/)) {
        $('#letter').removeClass('invalid').addClass('valid');
      }
      else{
        $('#letter').removeClass('valid').addClass('invalid');
      }
     
      if(pswd.match(/[A-Z]/)) {
        $('#capital').removeClass('invalid').addClass('valid');
      }
      else{
        $('#capital').removeClass('valid').addClass('invalid');
      }
      if(pswd.match(/\d/)) {
        $('#number').removeClass('invalid').addClass('valid');
      }
      else{
        $('#number').removeClass('valid').addClass('invalid');
      }
    })
    $("#pswd").focus(function() {
        $('.pswd_info').show();
    })
    $("#pswd").blur(function() {
        $('.pswd_info').hide();
    });
    $('input[type=email]').keyup(function() {
        var Email = $(this).val();
        if(Email.match(/[@]/)) {
            $('.symbol').removeClass('invalidmail').addClass('valid');  
        }
      else{
       $('.symbol.com').removeClass('valid').addClass('invalidmail');
      } 
	  if(Email.match(/[.]/)) {
            $('.symbol1').removeClass('invalidmail').addClass('valid');  
        }
      else{
       $('.symbol.com').removeClass('valid').addClass('invalidmail');
      } 
      if(Email.match(/[A-z]/)){
        $('.symbol2').removeClass('invalidmail').addClass('valid');  
    }
  else{
   $('.symbol.com').removeClass('valid').addClass('invalidmail');
  } 
});
});