
let teacherArray = [];
let currentUser={};
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
                const user = {
                    email : email,
                    password : password,
                    name : fullName
                }
                teacherArray.push(user);
                localStorage.setItem("teacherArray",JSON.stringify(teacherArray));
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



let loginButton = document.getElementById("loginbtn");
loginButton.addEventListener("click", function login(e){
    e.preventDefault(); 

    let loginemail = document.getElementById("loginemail").value;
    let loginpassword = document.getElementById("loginpassword").value;
        // console.log("loginemail ==>", loginemail)
        // console.log("loginpassword ==>", loginpassword)
    let teacherArray = JSON.parse(localStorage.getItem("teacherArray")) || [];

    const validateUser = teacherArray.find(user => user.email === loginemail && user.password === loginpassword)

    if(validateUser){
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let randomtoken = "";
        for(let i=0;i<16;i++){
            randomtoken += characters.charAt(Math.floor(Math.random()*characters.length))
        }
        currentUser = { 
            email : validateUser.email,
            password : validateUser.password,
            name : validateUser.name,
            token : randomtoken
        }
        
       localStorage.setItem("currentUser", JSON.stringify(currentUser))
       window.location.href = "dashboard.html";

    }
    else{
        alert("Incorrect Email and Password")
    }
    
})

    
let welName = document.getElementById("welcomename");
let welEmail = document.getElementById("welcomeemail");
currentUser = JSON.parse(localStorage.getItem('currentUser'));

welName.innerText +=`${currentUser.name}`
welEmail.innerText +=`${currentUser.email}`
console.log(currentUser.name)
let changeButton = document.getElementById("changebtn")

changeButton.addEventListener("click" , function changePassword(e){
   // console.log("change password button is clicked");
    
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // console.log("currentUser name==>",currentUser.name)

    oldpassword = document.getElementById("oldpassword").value;
    newpassword = document.getElementById("newpassword").value;
    confirmnewpassword = document.getElementById("confirmnewpassword").value;
    if(currentUser.password === oldpassword){
        if(newpassword === confirmnewpassword){
            alert("Password changed succusfully")
            currentUser.password = newpassword;
        }
        else{
            alert("Password Mismatch");
        }
    }else{
        alert("Old password is wrong");
    }
    
})

let logoutButton = document.getElementById("logoutbtn");
logoutButton.addEventListener("click" , function logout(e){
   // console.log("logout button is clicked");
    e.preventDefault();
    localStorage.setItem("currentUser", null);
    window.location.href = "login.html";
})
