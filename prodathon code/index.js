function signup() { 
    if(document.getElementById("name").value =="")
       {
             alert("Name cannot be empty");
             document.getElementById("name").focus();
             
        }

       if(document.getElementById("email").value =="")
       {
             alert("Email cannot be empty");
             document.getElementById("email").focus();
             
        }
if(document.getElementById("pass").value =="")
       {
             alert("password cannot be empty");
             document.getElementById("pass").focus();
             
        }
else 
       {
             var name=document.getElementById("name").value;
             alert("Thank You "+name+"for Signing up...Your  can Login  to  play  the quiz:");
             
             
             
        }
} 


