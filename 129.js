// (Pyramid of Doom)
setTimeout(() => {
    console.log("HTML");
    setTimeout(() => {
        console.log("CSS");
        setTimeout(() => {
            console.log("JavaScript");
            setTimeout(() => {
                console.log("React");

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);