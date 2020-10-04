$(document).ready(function() {
    $('.submit').click(function(event) {
      event.preventDefault();
      console.log('clicked button');
      var name = document.getElementById('nameInput').value;
      var email = document.getElementById('exampleFormControlInput1').value;
      var message = document.getElementById('messageInput').value;
      var statusElm = document.getElementById('status');
  
      if (email.length > 5 && email.includes('@') && email.includes('.')) {
        console.log("email valid")
      } else {
        console.log("email invalid")
      }
      if (name.length > 2) {
        console.log(name);
      } else {
        console.log('name invalid')
      }
      if (message.length > 2) {
        document.getElementById('status').innerText = "Hello!thank you for contacting us!"
      } else {
        document.getElementById('status').innerText = "Null"
      }
    });
  
  });

  function message(){
    var vname = document.getElementById('thisName').value;
    var vemail = document.getElementById('thisEmail').value;
    var vmessage = document.getElementById('thisMessage').value;
    
    var name = document.getElementById('thisName');
    var email = document.getElementById('thisEmail');
    var message = document.getElementById('thisMessage');
    console.log(vname);
    console.log(vemail);
    console.log(vmessage);
    if(vname =='' && vemail =='' && vmessage ==''){
      name.style.borderColor='red';
      email.style.borderColor='red';
      message.style.borderColor='red';
      alert("please fill the form");
    
    }else{
      alert('Thank you for contact us');
      name.style.borderColor='';
      email.style.borderColor='';
      message.style.borderColor='';
    }
  }
    