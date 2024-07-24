let containerEl = document.getElementById("container-x");
let spanEl = document.getElementById("span-1");
let para1 = document.getElementById("para-x");
let para2 = document.getElementById("para-y");
let buttonEl = document.getElementById("button-x");






let quote = [{
            color: "red",
            quotation: "Genius is one percent inspiration and ninety-nine percent perspiration.",
            day: "Morning",
            author: "By Alexis Carell"
        },
        {
            color: "Green",
            quotation: "Go ahead, make my day.",
            day: "Afternoon",
            author: "By Sir Francis Bacon"
        },
        {
            color: "blue",
            quotation: "He travels the fastest who travels alone.",
            day: "Evening",
            author: "By Forrest Gump"
        },
        {
            color: "yellow",
            quotation: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            day: "Morning",
            author: "By Albert Einstein"
        },
        {
            color: "pink",
            quotation: "All that glitters is not gold.",
            day: "Afternoon",
            author: "By Everett Dirksen"
        },
        {
            color: "orange",
            quotation: "A rose by any other name would smell as sweet.",
            day: "Evening",
            author: "By By Albert Einstein"
        },
        {
            color: "violet",
            quotation: "Ask not what your country can do for you; ask what you can do for your country.",
            day: "Morning",
            author: "By Forrest Gump"
        },
        {
            color: "brown",
            quotation: "For those to whom much is given, much is required.",
            day: "Afternoon",
            author: "By Sir Francis Bacon"
        },
        {
            color: "grey",
            quotation: "Life is like a box of chocolates. You never know what you're gonna get.",
            day: "Evening",
            author: "By Everett Dirksen"
        },
        {
            color: "skyblue",
            quotation: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            day: "Morning",
            author: "By Alexis Carell"
        }
    ];


function quote1() {
    
    let number = Math.random() * 10;
    let newNum = Math.ceil(number);
    console.log(newNum)
    for (let obj of quote.splice(0, newNum-1)) {
        containerEl.style.backgroundColor = obj.color;
        spanEl.textContent = obj.day;
        para1.textContent = obj.quotation;
        para1.style.color = obj.color;
        para2.style.color = obj.color;
        para2.textContent = obj.author;
        buttonEl.style.backgroundColor = obj.color;
    }

}