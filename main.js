
      // function send() {
      //   let uname = document.querySelector("#uname");
      //   console.log([uname.value]);
        
      //  }

 

const btn = document.getElementById('d');
btn.addEventListener('click', function handleClick(event) {

  event.preventDefault();
const clear = document.getElementById('uname');
 console.log([clear.value]);
  clear.value = '';
});


function clicked(){
  alert('Comment Added Successfully as -'+uname.value);
}