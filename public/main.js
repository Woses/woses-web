var links = 
[
    {
        "color": "rgb(255,255,255)",
        "background": "linear-gradient(63deg, rgba(255,255,255,1) 0%, rgba(88,155,255,1) 35%, rgba(13,14,62,1) 100%)",
        "logo": "img/steam.png",
        "header": "Steam",
        "desc": "Beschaffungsbeauftragter für Spiele. Gibt eigentlich kaum ein Spiel was ich nicht irgendwo besitze.",
        "link": "https://steamcommunity.com/id/WosesT/",
        "fontColor": "black",
    },
    {
        "color": "rgb(45,25,25)",
        "background": "linear-gradient(138deg, rgba(45,25,25,1) 0%, rgba(195,19,41,1) 100%)",
        "logo": "img/youtube.png",
        "header": "Youtube",
        "desc": "Memes, Speed Edits aber keine Seriöse Arbeit die wird wo anders hochgeladen.",
        "link": "https://www.youtube.com/channel/UCVrgqe9p_mSczxFXZycDcuw",
        "fontColor": "black",
    },
    {
        "color": "rgb(40,18,62)",
        "background": "linear-gradient(138deg, rgba(40,18,62,1) 0%, rgba(53,43,97,1) 100%)",
        "logo": "img/twitch.png",
        "header": "Twitch",
        "desc": "Wenn ich als Beschaffungsbeauftragter mal Spiele spiele oder etwas anderes mache und dabei ausversehen die Cam mitläuft.",
        "link": "https://www.twitch.tv/wosesfeld",
        "fontColor": "black",
    },
    {
        "color": "rgb(212,212,212)",
        "background": "linear-gradient(297deg, rgba(212,212,212,1) 5%, rgba(81,120,224,1) 59%)",
        "logo": "img/discord.png",
        "header": "Discord",
        "desc": "Ist wie SMS nur Online und geht trotzdem unterwegs. Telefonieren kann man damit auch? und das mit Tausenden Menschen Gleichzeitig.",
        "link": "https://discord.gg/mACjtDSKjs",
        "fontColor": "black",
    },
    {
        "color": "rgb(15,42,102)",
        "background": "linear-gradient(349deg, rgba(15,42,102,1) 0%, rgba(37,108,150,1) 100%)",
        "logo": "img/twitter.png",
        "header": "Twitter",
        "desc": "240 Zeichen/Müll/24h",
        "link": "https://twitter.com/wosesfeld",
        "fontColor": "black",
    },    
    {
        "color": "rgb(172,172,172)",
        "background": "linear-gradient(45deg, rgba(172,172,172,1) 0%, rgba(57,57,57,1) 100%)",
        "logo": "img/github.png",
        "header": "Github",
        "desc": "Hier kann man meinen Durchfall in Textform betrachten. Manchmal sogar in einer Gruppenarbeit.",
        "link": "https://github.com/Woses",
        "fontColor": "black",
    },    
    {
        "color": "rgb(219,146,17)",
        "background": "linear-gradient(323deg, rgba(219,146,17,1) 0%, rgba(57,57,57,1) 100%)",
        "logo": "img/plex.png",
        "header": "Plex",
        "desc": "Mein Privater Plex Server. Einfach nur, weil ich schon zu viel auf meinem Rechner/NAS/Server rumfliegen habe.",
        "link": "127.0.0.1",
        "fontColor": "black",
    },
];
let backgroundList = ["1.png", "2.png", "3.png"]

function createContent() {
    links.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("link")
        div.setAttribute("onclick", `window.open("${element.link}", "_blank")`);
        div.setAttribute("style",`
        background-color: ${element.color}; 
        background-image: ${element.background};
        background-size: cover;
        `);

        let inside = document.createElement("div");
        inside.classList.add("inside");

        let textDiv = document.createElement("div");
        textDiv.setAttribute("style", `color: ${element.fontColor};`)
        textDiv.classList.add("textDiv");

        let img = document.createElement("img");
        let header = document.createElement("p");
        let desc = document.createElement("p");
    
        img.setAttribute("src", element.logo);
        img.setAttribute("alt", element.logo)
        header.classList.add("header");
        desc.classList.add("desc");
    
        header.innerHTML = element.header;
        desc.innerHTML = element.desc;

        textDiv.appendChild(header);
        textDiv.appendChild(desc)

        inside.appendChild(img);
        inside.appendChild(textDiv);

        div.appendChild(inside);

        document.getElementById("links").appendChild(div)
    });
}

function hover() {
    let buttons = document.getElementsByClassName("link");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseenter', e => document.body.style.cursor = "pointer");
        buttons[i].addEventListener('mouseleave', e => document.body.style.cursor = "default");
    };
}

function chooseBackground(list) {
    let Dochtml = document.getElementsByTagName('html')[0];
    let random = Math.floor((Math.random() * list.length) + 1);
    console.log(list[random - 1]);
    Dochtml.setAttribute("style", `background-image: url(img/back/${list[random - 1]})`)
}

//onload
function load() {
    createContent()
    hover()
    chooseBackground(backgroundList)
}