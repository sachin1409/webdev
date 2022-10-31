function clicked() {
  var name1 = window.prompt("Enter your name");
  if (uname.value.length == 0) {
    alert('PLEASE ADD A COMMENT');
  }
  else {
    alert('Comment Added Successfully as -' + uname.value);
  }

  //Comment List

  let commentBoxValue = document.getElementById('uname').value;
 document.getElementById("unordered").innerHTML=(`Comment is :${commentBoxValue}`);




  const comm = document.getElementById('uname');
  let dat = new Date();
  //taking comment of user 
  let user = {
    name: name1,
    comment: comm.value,
    userID: Math.floor(Math.random() * 100),
    Date: dat
  }

  const myArray = Object.values(user);
  console.log(`Name Of the User:  ${myArray[0]}   Comment: ${myArray[1]}  UserId : ${myArray[2]} Date : ${myArray[3]}`);
  alert(`Name Of the User:  ${myArray[0]}   Comment: ${myArray[1]}  UserId : ${myArray[2]} Date : ${myArray[3]}`);
  comm.value = '';
}





