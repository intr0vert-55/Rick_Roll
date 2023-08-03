const colors = ["#0079FF","#3AA6B9","00DFA2","#7A9D54","#F6FA70","#FFA41B"];
const text = ["Never gonna give you up","Never gonna let you down","Never gonna run around and desert you","Never gonna make you cry","Never gonna say goodbye","Never gonna tell a lie and hurt you"];
const title = document.querySelector(".title");
const col = document.querySelector(".container");
let count = 0;
setInterval(() =>{
    switch(count){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: {
            title.innerText = text[count];
            col.setAttribute("style", `background:${colors[count]}; opacity:0.8;`);
            count++;
            break;
        }
        default : {
            count = 0;
        }

    }
}, 700)