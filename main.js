let launchDate = new Date('Nov 9, 2021 12:00:00');

let timer = setInterval(tick, 1000);

// Define func tick
function tick() {

    // Get current time
    let now = new Date().getTime();
    let t = launchDate - now;

    /* Determine the types of time */
    // Check launch date passed
    if(t > 0){
        // Calculation to get Days
        let days = Math.floor(t/(1000 * 60 * 60 * 24));
        
        // Test to see if days less than 10 
        if(days < 10){
            days = `0 ${days}`;
        }

        let hours = Math.floor( (t % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );

        // Test to see if hours less than 10
        if(hours < 10){
            hours = `0 ${hours}`;
        }

        let mins = Math.floor( (t % (1000 * 60 * 60) ) / (1000 * 60) );

        // Test to see if mins less than 10
        if(mins < 10){
            mins = `0 ${mins}`;
        }

        let secs = Math.floor( (t % (1000 * 60) ) / 1000 );

        // Test to see if secs less than 10
        if(secs < 10){
            secs = `0 ${secs}`;
        }

        // String literal to access Countdown in HTML 
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Select the Countdown in HTML
        document.querySelector('.countdown').innerText = time;
    }
}