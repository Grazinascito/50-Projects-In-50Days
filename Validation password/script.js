function checkpassword(){
    let firstPass = document.getElementById('first-pass').value;
    let secondPass = document.getElementById('second-pass').value;
    console.log(firstPass,secondPass);

    let message = document.getElementById('message');

    if(firstPass != 0 && secondPass != 0){
        if(firstPass == secondPass){
            message.textContent = "Password Match!";
            message.style.color = "white";
            message.style.backgroundColor = "#00FF00";
        }else{
            message.textContent = "Password don't match!!";
            message.style.color = "white";
            message.style.backgroundColor = "#FF0000";
        }
    }else{
        alert("password can't be empty!");
    }


}