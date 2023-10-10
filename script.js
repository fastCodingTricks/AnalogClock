
const hourHand = document.querySelector(".hour_hand");
const minuteHand = document.querySelector(".min_hand");
const secondHand = document.querySelector(".sec_hand");

function clock(){
    let now = new Date();
    const seconds = now.getSeconds() * 6;
    const minutes =  (now.getMinutes() + seconds / 360) * 6;
    const houres = (now.getHours() + minutes / 360) * 30;


    rotateClockHands(seconds,secondHand);
    rotateClockHands(minutes,minuteHand);
    rotateClockHands(houres,hourHand);

}

function rotateClockHands(degree,hand){

    hand.style.transform = `rotate(${degree}deg)`
}

setInterval(clock,1000);