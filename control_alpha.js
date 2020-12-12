
console.log("control ok")

function control_alpha(){
    let val = 10;
    document.getElementById("1a").style.opacity=0.6
    
}


function sliderChange(val) {
    //get value from slider
    let Ch1 = document.getElementById('Ch1').value;
    //change value of alpha object
    document.getElementById("1a").style.opacity=Ch1/10
    document.getElementById("1b").style.opacity=Ch1/10

    //get value from slider
    let Ch2 = document.getElementById('Ch2').value;
    //change value of alpha object
    document.getElementById("2a").style.opacity=Ch2/10
    document.getElementById("2b").style.opacity=Ch2/10

    //get value from slider
    let Ch3 = document.getElementById('Ch3').value;
    //change value of alpha object
    document.getElementById("3a").style.opacity=Ch3/10
    document.getElementById("3b").style.opacity=Ch3/10

    //get value from slider
    let Ch4 = document.getElementById('Ch4').value;
    //change value of alpha object
    document.getElementById("4a").style.opacity=Ch4/10
    document.getElementById("4b").style.opacity=Ch4/10

    //get value from slider
    let Ch5 = document.getElementById('Ch5').value;
    //change value of alpha object
    document.getElementById("5a").style.opacity=Ch5/10
    document.getElementById("5b").style.opacity=Ch5/10

    //get value from slider
    let Ch6 = document.getElementById('Ch6').value;
    //change value of alpha object
    document.getElementById("6a").style.opacity=Ch6/10
    document.getElementById("6b").style.opacity=Ch6/10

    //get value from slider
    let Ch7 = document.getElementById('Ch7').value;
    //change value of alpha object
    document.getElementById("7a").style.opacity=Ch7/10
    document.getElementById("7b").style.opacity=Ch7/10

    //get value from slider
    let Ch8 = document.getElementById('Ch8').value;
    //change value of alpha object
    document.getElementById("8a").style.opacity=Ch8/10
    document.getElementById("8b").style.opacity=Ch8/10

    //get value from slider
    let Ch9 = document.getElementById('Ch9').value;
    //change value of alpha object
    document.getElementById("9a").style.opacity=Ch9/10
    document.getElementById("9b").style.opacity=Ch9/10

    //get value from slider
    let Ch10 = document.getElementById('Ch10').value;
    //change value of alpha object
    document.getElementById("10a").style.opacity=Ch10/10
    document.getElementById("10b").style.opacity=Ch10/10
    console.log(Ch1);
    }