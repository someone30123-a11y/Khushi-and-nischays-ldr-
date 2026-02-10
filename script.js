let countdownTarget = new Date('2026-02-10T10:24:09Z').getTime();

let countdownFunction = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownTarget - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    if (distance < 0) {
        clearInterval(countdownFunction);
        console.log('Countdown finished!');
    }
}, 1000);
