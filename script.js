let title=document.getElementById("title")
let nameField=document.getElementById("nameField")
let login=document.getElementById("login")
let signUp=document.getElementById("signUp")


signUp.onclick=()=>{
    title.innerHTML="Sign Up"
    nameField.hidden=false
}

login.onclick=()=>{
    title.innerHTML="Login"
    nameField.hidden=true
}