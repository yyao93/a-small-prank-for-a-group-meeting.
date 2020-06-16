var password = 4238; //Oh no you see this... I should've change the name of the file

var input = document.getElementById("password");

function myFunction() {
  alert("Hello");
  alert("I am doing this because I don't know who can talk today.");
  alert("I mean, if you have something to share, please share it.");
  alert("You are my life saver.");
  alert("I prepared a little bit just in case.");
  alert("Just a tiny little bit, and I have not fully understand it yet.");
  alert("If you want to talk, pleasssssssssse, thank!");
  alert("Otherwise, I will do it, I mean: otherwise, I have to do it, oh no, ahhhhhhhhhhhhhhhhh");
  alert("In that case, please try to solve the following puzzle, as me presenting is always not interesting, so I need this to cheer you up.");
  alert("There is a special price if you success");
  alert("By the way, I prepared this yesterday, if I couldn't answer your questions, Rafa can~");
}

$(document).ready(function(){
    $('#password').keypress(function(e){
      if(e.keyCode==13)
      $('#button').click();
    });
});

function check(){
  if(document.submit.pw.value != password) {
    alert("Password not correct, hahaha, please try it again");
  } else {
    alert("Success! Yeah! Did you hacked?");
    var img = new Image();
    var div = document.getElementById('price');
    img.onload = function() {
      div.innerHTML += '<img src="'+img.src+'" />'; 
    };
    img.src = 'giftcard.png';
    document.getElementById("price").innerHTML = "Please print this page to an A4 paper, and then scratch or peel to claim the code and redeem the price<br>";
  }
}

