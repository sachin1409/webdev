const inputs = document.querySelectorAll('.comment');

for (const input of inputs) {

  input.setAttribute('required', '');

}

const textarea = document.getElementById('message');
$(document).ready(function(){
  $("textarea").click(function(){
    textarea.value='';
  });
});
