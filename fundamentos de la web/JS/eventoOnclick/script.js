function message(){
alert("Ninja was liked")
}

function esconder(el){
    el.remove();
}

function cambiar(x){

    if(x.innerText== "Login"){
       
        x.innerText="Logout"
    }
    else{
        x.innerText = "Login"
    }
}