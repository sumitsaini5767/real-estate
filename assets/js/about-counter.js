let valueDisplays=document.querySelectorAll(".about-counter-num");
let interval=4000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplay.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
})

$(document).ready(function(){
    $('.about-counter-num').counterUp({
        delay:10,
        time:2500
    });
});