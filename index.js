let bulb = false;

function Toggle(){
    if(bulb==false){
        document.getElementById("Light_Bulb").style.backgroundColor = "#858585";
        document.body.style.backgroundColor = "#3d3d3d"
        bulb = true
    }
    else{
        document.getElementById("Light_Bulb").style.backgroundColor = "#fffa91";
        document.body.style.backgroundColor = "#ffffff"
        bulb = false;
    }
}
