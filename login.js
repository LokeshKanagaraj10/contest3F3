let loginButton = document.getElementById("loginbtn");
let currentUser = {};

loginButton.addEventListener("click", function login(e){
    e.preventDefault(); 

    let loginemail = document.getElementById("loginemail").value;
    let loginpassword = document.getElementById("loginpassword").value;
    let userArray = JSON.parse(localStorage.getItem("userArray"));
    let temp = userArray.filter((value) => value.email === loginemail && value.password === loginpassword)
     if(temp){
        console.log(temp)
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let randomtoken = "";
        for(let i=0;i<16;i++){
            randomtoken += characters.charAt(Math.floor(Math.random()*characters.length))
        }
            currentUser = {
                name : temp[0].name,
                email : temp[0].email,
                password : temp[0].password,
                token : randomtoken 
            }
       // console.log(currentUser);    
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        window.location.href = "dashboard.html";
        }
    else{
        alert("Incorrect Email and Password");
     }
})

//     const validateUser = teacherArray.find(user => user.email === loginemail && user.password === loginpassword)

//     if(validateUser){
//         
//         currentUser = { 
//             email : validateUser.email,
//             password : validateUser.password,
//             name : validateUser.name,
//             token : randomtoken
//         }
        
//        localStorage.setItem("currentUser", JSON.stringify(currentUser))
//        

//     }
//     else{
//         
    
// })
