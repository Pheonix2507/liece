var n = document.querySelectorAll(".drum").length;

for(var i = 0;i<n;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var pop = this.innerHTML;

        ma(pop);
        animate(pop);

    });

}

    document.addEventListener("keydown",function(rtc){
        ma(rtc.key);
        animate(rtc.key);
    });

function ma(key)
{
            switch(key){
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var so = new Audio("snare.mp3");
                so.play();
                break;

            case "k":
                var se = new Audio("crash.mp3");
                se.play();
                break;

            case "l":
                var pe = new Audio("kick-bass.mp3");
                pe.play();
                break;


            default: alert("KAMINE")
        }   
}

function animate(op)
{
    var ans = document.querySelector("."+op);

    ans.classList.add("pressed");

    setTimeout(function(){
        ans.classList.remove("pressed");
    },100);
}