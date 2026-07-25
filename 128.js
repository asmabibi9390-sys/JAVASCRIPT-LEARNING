// Callback Hell (Pyramid of Doom)
setTimeout(() => {
    console.log("Download Started");
    setTimeout(() => {
        console.log("Download Completed");
    }, 2000);

}, 1000);