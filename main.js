
      // function send() {
      //   let uname = document.querySelector("#uname");
      //   console.log([uname.value]);
        
      //  }

 

const btn = document.getElementById('d'); //button id
btn.addEventListener('click', function re() {
const clear = document.getElementById('uname'); //comment box id
  console.log([clear.value]); // it will clear the comment box
  clear.value = '';
});

//ALERT-POP UP
function clicked(){
  if(uname.value.length==0) {
    alert('PLEASE ADD A COMMENT');
  }
  else{
  alert('Comment Added Successfully as -'+uname.value);
  }
}