function dataValidate(){
    try{

        var inputUser = document.getElementById("user");
        var inputPass = document.getElementById("pass");
        var user = inputUser.value;
        var pass = inputPass.value;

        if(user=="" || pass ==""){
            alert("Error. Datos incompletos");
        }
        else if(user != "userMac" || pass != "Mac1234"){
            alert("Usuario y/o contraseña incorrecta");
        }
        else{
            alert("Bienvenido");
        }

    }catch(error){
        console.log(error);
    }
}

function classValidation(){

    var inputUser = document.getElementById("user");
    var inputPass = document.getElementById("pass");

    if(inputUser.value==""){
        inputUser.classList.add('error-border');
    }else{
        inputUser.classList.add('success-border');
    }

    if(inputPass.value=="" || inputPass.value==null){
        inputPass.classList.add('error-border');
    }else{
        inputPass.classList.add('success-border');
    }
}