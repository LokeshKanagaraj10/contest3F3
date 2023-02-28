    
let welName = document.getElementById("welcomename");
let welEmail = document.getElementById("welcomeemail");
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let userArray = JSON.parse(localStorage.getItem("userArray"));
let temp2 = userArray.filter((value) => value.email === currentUser.email)

welName.innerHTML +=`<h2>Welcome back : <strong>${currentUser.name}</strong></h2>`
welEmail.innerHTML +=`<h2>Your Email ID : <strong>${currentUser.email}</strong></h2>`
//console.log(currentUser.name)
let changeButton = document.getElementById("changebtn")

changeButton.addEventListener("click" , function changePassword(e){
    e.preventDefault();
   console.log("change password button is clicked");
    
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // console.log("currentUser name==>",currentUser.name)

    oldpassword = document.getElementById("oldpassword").value;
    newpassword = document.getElementById("newpassword").value;
    confirmnewpassword = document.getElementById("confirmnewpassword").value;
    if(currentUser.password === oldpassword){
        if(newpassword === confirmnewpassword){
            currentUser.password = newpassword;
            localStorage.setItem("currentUser",JSON.stringify(currentUser));

            temp2[0].password = newpassword;
            localStorage.setItem("userArray",JSON.stringify(userArray));
            alert("password changes successfully");
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
