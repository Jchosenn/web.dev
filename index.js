// let num1 = querySelector("#num1");
// let num2 = querySelector("#num2");
// let result = querySelector("#result");

    // alert("Welcome to the JavaScript world!");

    // let entrance = "door";

    // if(entrance == "Door"){
    //     alert("Welcome into the hall of fame!");
    // }
    // else if(entrance == "window"){
    //     alert("Not a nice way in")
    // }
    // else{
    //     alert("You are not welcome here!")
    // }


    // let routine = "was held up at traffic";
    
    // let early = "";

    // if(routine == "class at silicon delta"){
    //     if(early == "8:00 AM"){
    //         alert("You came early to class today!");
    //     }
    //     else if( early == "9:00 AM"){
    //         alert("You came past one hour late today!");
    //     }
    //     else{
    //         alert("Missed attendance today!");
    //     }
    // }
    // else if(routine == "was held up at traffic"){
    //     alert("Try to leave home early next time!");
    // }
    // else{
    //     alert("Not a student at silicon delta!");
    // }

// let damage = 5;

// let health = 0;

// if (damage > 0){
//     health -= damage;
//     alert("your new health is " + health);
// }
// else if (damage ==0){
//     alert("Try some adventure!");
// }


    const body = document.body;
    const sunIcon = document.querySelector("#lightModeIcon");
    const moonIcon = document.querySelector("#darkModeIcon");

    // Hide sun icon initially for dark mode
    sunIcon.style.display = "none";

    moonIcon.addEventListener("click", () => {
        body.classList.add("dark-mode");
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
    });

    sunIcon.addEventListener("click", () => {
        body.classList.remove("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
    });


