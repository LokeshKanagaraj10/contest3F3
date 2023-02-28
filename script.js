
let userArray = [];

if(window.localStorage.getItem("currentUser")){
    window.location.href="dashboard.html";
}

function signup(){

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    let smallconfirmpassword = document.getElementById("smallconfirmpassword")

    
        if(fullName != "" && email != "" && password !="" && confirmpassword != ""){
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(regex.test(email)){
            
                if(password != confirmpassword){
                    smallconfirmpassword.style.display="block";
                    smallconfirmpassword.style.color="red";
                }
                else{
                    smallconfirmpassword.style.display="none";
                    let user= {
                        name : fullName,
                        email: email,
                        password : password
                    }
                   const userArray = localStorage.getItem("userArray");
                   var arr = [];
                   if(userArray){
                        arr = JSON.parse(localStorage.getItem("userArray"))
                        if(arr.filter((value) => value.email === email).length == 0){
                            arr.push(user);
                        }
                        else{
                            alert ("User already exit, Please Login")
                        }
                   }else{
                        arr = [user]
                   }
                    localStorage.setItem("userArray",JSON.stringify(arr));
                    window.location.href="login.html"
                    
                }      
            }
            else{
                alert("Please Enter Valid Email Address");
            }  
        }
        else{
            alert("Please fill the required details");
        }
    }


// let teacherArray = [];
// let currentUser={};




// 
// }




