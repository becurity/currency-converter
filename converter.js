function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}else{
    switch(y){
        case "Canadian Dollar":
            document.getElementById("value2").value = x * 0.76;
        break;

        case "Pound":
            document.getElementById("value2").value = x * 1.24;
        break;

        case "Naira":
            document.getElementById("value2").value = x * 0.028;
        break;


    }
}
}