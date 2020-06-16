var password = 4238;
function checkForm(){
  if(document.submit.pw.value != password) {
    alert("Try it again");
  } else {
    alert("Success!");
  }
}