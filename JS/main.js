const secondHand = document.querySelector('.handSec'); 
const minuteHand = document.querySelector('.handMin'); 
const hourHand = document.querySelector('.handHour'); 

function setDate() {
    const now = new Date(); 

    // +90 because transform property has rotated the hands by 90deg
    const seconds = now.getSeconds();
    const rotateSeconds = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${rotateSeconds}deg)`;
    
    // in 360 rotation, we have 60 mins, so we multiply by 360/60
    const mins = now.getMinutes();
    const rotateMins = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${rotateMins}deg)`;
    
    // In 360 rotation, we have 12 hours, so we multiply by 360/12
    // However, the hour hand keeps on moving throughout the hour. Now, in one
    // hour, the hour hand moves by 30 degrees. And in that time, 60 mins
    // elapse, so we will add 30/60 mins into the hour to keep it moving at
    // that pace.
    const hours = now.getHours();
    const rotateHours = (hours * 30) + (mins * 0.5) + 90;
    hourHand.style.transform = `rotate(${rotateHours}deg)`;
}

setInterval(setDate, 1000);
setDate();