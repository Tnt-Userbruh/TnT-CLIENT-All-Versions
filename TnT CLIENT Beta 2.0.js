// ==UserScript==
// @name:         TπT Client BETA
// @author:       tntubruh777,l_gen_,1112joao_40690,joseatencionoob112,
// @description:  I recovered the Beta Version of TnT CLIENT (mod edited by legend)
// @version       Beta (THE BEST ONE WHEN STILL IN CODING)
// @match         *://*.moomoo.io/*
// @run-at        document_idle
// @grant         none
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABHRJREFUeF7tnD1PVEEUht9ZSwu1sN9/IFjxUQAxNjbuP1DiDxAaW6HTCixMbIzbWQqVicZkl4QbTEx2GxI1RglqjF+JYESUjzG7sGTdvffOmdmDGcxLQsOeOffwPnPeM3u5iwG/olLARFUNiwGBRLYJCIRAIlMgsnLYIQQSmQKRlcMOIZDIFIisHHYIgUSmQGTlsEMIJDIFIiuHHUIgkSkQWTnsEAKJTIHIymGHEEhkCkRWDjuEQCJTILJy2CFHDoi9ayOrWV6OuXLkNpy7YAKRbwCFSAJREFEzBYFoqqmQi0AURNRMQSCaairkIhAFETVTEIimmgq5CERBRM0UBKKppkIuAlEQUTMFgWiqqZCLQBRE1ExBIJpqKuQiEAURNVMQiKaaCrncQHq9SMDt+/7ql16v2rX+dHVVPWdewkfXbwdpG7TI6zcjEC+5CMRLLnkwO8ShFS2rJRAtS95WwD/4xwEEQiBpCtCyaFlBB6agRV49SMvykotAvOSSB/PYy2OvcLfQsoRC7YXRsrzkkgf/V5YFz4ek+ys38x8INwa1kWuZm+/CjUm7/eu3WO1QsSUXiLJDCESCLjQmYIYQSKjYknUEIlHpIIaWBYAzxLVnONRdCvXwOi3LSzxaFi1LsGFoWQKRQkNoWV7K0bJoWYINQ8sSiBQaQsvyUo6WRcsSbBhalkCk0BBalpdytCxalmDD0LIEIoWG0LK8lKNl0bIEG4aWJRApNCTAss4ufDrnczlrC09y4w/lIYe+k8Dxi4AtAigCpgjYFQCN7zqwUQXq33x+j0ZslJal/pE2RSDrHzawdOdlBQajTrGtLQO708BSA5Loi0A8Zsjzh++w+jTg848Ws8DipIQIgQiAbP3cxrPyK3z/uCnRND3G2jlgY9xlYwTiAJIJY/fx38IXzrthWVSAxbG8QAJxAKndf43PL9a7NWwAaUFoh+MC05wryXgWFALJAfK+9hXL82/TtWsH0opI+1naarszBixV0l4ikBwgCzPL2FzbkgNpREqg5FjX4QNxO2ukEYMlmMKDzOKyhJcAaSS1th9I6p35CSRT8eEyDC55AWnNEtcc2QMyDSRTBCLux+E6DM7kAul8UQKitcbaKpB0vblkh2Qed4bzP3PSaU0+3bHXIXUg6WeHSDvEeALxPWk1oSx2NQQ7pJcOaaxNsynJYLd2DUhOskM0O6Q3IJwhUhZ7cUMVGDMiGurtXSKdJdbOA0mJHSKmMjwBgxnnsbfznlZW13QmsnYcSMoEIgYy1Adjak4g4nwdgfbHqbQ7vxzquYLmvDmUDO6s3NbeApKJtJcJJBfIQBHm2JvUkFAgzdPVRjHr7yIE4rScocsw5l5XWDCQ7Du9jWsQiBNI88Q1C2OuikLzgjIGefsSAhGrnNEpkvVNm8JE2qmKpyyJgJkxA6NAYSr3/Un38ba6D6PrVjuHek8w2hcPloBCCbAlGHOiK22zI8wcsFPO+stgVim0rJ4hDew/KHeQaMXnOSxaVs8ADjcBO+Rw9fXO/geN7QGSq0wYIwAAAABJRU5ErkJggg==
// @namespace     nothing
// @license       MIT
// @require       https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require       https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// ==/UserScript==

/*
▒▒▒▒▒▒▒▒▒▒▒
   ▒▒░░░░░░▓▓▓▓▓▓▓▓▓
   ▒▒░░░░░░▓▓▓▓▓▓▓▓▓
   ▒▒    ░░   ▓▓▓
   ▒▒    ░░   ▓▓▓
   ▒▒    ░░   ▓▓▓
   ▒▒░░░░░░   ▓▓▓

 ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
╚██████╗███████╗██║███████╗██║ ╚████║   ██║
 ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝

FEATURES:
- Anti-altcha
- Easy to use UI
- BestHeal?  BestInsta?
- PING & FPS reducer and booster
- Cool visuals!
- Custom kill chat(go to update player value to change it)

*/

if (!window.msgpack) {
    let min = document.createElement("script");
    min.src = "https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js";
    min.onload = function () { console.log("msgpack loaded"); };
    document.body.appendChild(min);
}

(function() {
    let newFont = document.createElement("link");
    newFont.rel = "stylesheet";
    newFont.href = "https://fonts.googleapis.com/css?family=Ubuntu:700";
    newFont.type = "text/css";
    document.head.appendChild(newFont);
})();

(function() {
    let newFont = document.createElement("link");
    newFont.rel = "stylesheet";
    newFont.href = "https://fonts.googleapis.com/css2?family=Ancizar+Sans:ital,wght@0,100..1000;1,100..1000&display=swap";
    newFont.type = "text/css";
    document.head.appendChild(newFont);
})();

// name:         MooMoo.io Script Unpatcher (Any Hack) (All patches, fixes packets)
/* How to use

Copy and paste the code below to the end of your hack.
This technically will auto-fix all hacks after the first update in 2021.

If you do not have msgpack locally referencable, include the `// @require` line in your mod metadata as done above.

*/
const PACKET_MAP = {
    // wont have all old packets, since they conflict with some of the new ones, add them yourself if you want to unpatch mods that are that old.
    "33": "9",
    "7": "K",
    "ch": "6",
    "pp": "0",
    "13c": "c",

    // most recent packet changes
    "f": "9",
    "a": "9",
    "d": "F",
    "G": "z"
}

let originalSend = WebSocket.prototype.send;

WebSocket.prototype.send = new Proxy(originalSend, {
    apply: ((target, websocket, argsList) => {
        let decoded = msgpack.decode(new Uint8Array(argsList[0]));

        if (PACKET_MAP.hasOwnProperty(decoded[0])) {
            decoded[0] = PACKET_MAP[decoded[0]];
        }

        return target.apply(websocket, [msgpack.encode(decoded)]);
    })
});

function packet(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.send(binary);
}

function origPacket(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.nsend(binary);
}

const msgpackLite = window.msgpack;
const NativeWebSocket = window.WebSocket;
let mainSocket;

window.captchaCallbackHook = function() {
    hr = true;
};
if (window.captchaCallbackComplete) {
    window.captchaCallbackHook();
}

// ANTI ALTCHA
let whereverifybutton = document.querySelector("#altcha_checkbox")

function clicktheverify() {
    if (whereverifybutton) {
        whereverifybutton.click()
    }
}
setInterval(clicktheverify, 1000);

let cha = document.getElementById('altcha');
cha.style.display = "none";
let sb = document.getElementById('altcha_checkbox');
let mj = document.getElementById("enterGame");
mj.innerHTML = "Join the game";

let openMenu = false;
let placeSpTick = false;
let tdf = false;
let enemies = false;
let testMode = window.location.hostname == "127.0.0.1";
let cantWearTankGear = false;
let cantWearBullHat = false;
let doSpikeRedThingmajic = false;
let checkera = false;
let checkera2;
let awd = false;

function getEl(id) {
    return document.getElementById(id);
}

function safeRemove(elementId) {
    const element = getEl(elementId);
    if (element) element.remove();
}

let config = window.config || {};

// CLIENT:
config.clientSendRate = 9; // Aim Packet Send Rate
config.serverUpdateRate = 9;

// UI:
config.deathFadeout = 0;

config.playerCapacity = 9999;

// CHECK IN SANDBOX:
config.isSandbox = window.location.hostname == "sandbox.moomoo.io";

// CUSTOMIZATION:
config.skinColors = ["#bf8f54", "#cbb091", "#896c4b",
                     "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
                     "#8bc373", "#91b2db"];
config.weaponVariants = [{
    id: 0,
    src: "",
    xp: 0,
    val: 1,
}, {
    id: 1,
    src: "_g",
    xp: 3000,
    val: 1.1,
}, {
    id: 2,
    src: "_d",
    xp: 7000,
    val: 1.18,
}, {
    id: 3,
    src: "_r",
    poison: true,
    xp: 12000,
    val: 1.18,
}, {
    id: 4,
    src: "_e",
    poison: true,
    heal: true,
    xp: 24000,
    val: 1.18,
}];

// VISUAL:
config.anotherVisual = true;
config.useWebGl = false;
config.resetRender = true;

function waitTime(timeout) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, timeout);
    });
}

let botSkts = [];

// STORAGE:
let canStore;
if (typeof(Storage) !== "undefined") {
    canStore = true;
}

function saveVal(name, val) {
    if (canStore)
        localStorage.setItem(name, val);
}

function deleteVal(name) {
    if (canStore)
        localStorage.removeItem(name);
}

function getSavedVal(name) {
    if (canStore)
        return localStorage.getItem(name);
    return null;
}

// CONFIGS:
let gC = function(a, b) {
    try {
        let res = JSON.parse(getSavedVal(a));
        if (typeof res === "object") {
            return b;
        } else {
            return res;
        }
    } catch (e) {
        alert("dieskid");
        return b;
    }
};

let configs = {
    killChat: true,
    weaponGrinder: false,
    autoBuy: true,
    autoBuyEquip: true,
    autoPush: true,
    revTick: true,
    spikeTick: true,
    predictTick: true,
    autoPlace: true,
    placeVis: true,
    buildingHealth: true,
    autoReplace: true,
    antiTrap: true,
    showGrid: true,
    slowOT: true,
    attackDir: true,
    showDir: true,
    autoRespawn: false,
    PAB: false,
    autoBreakSpike: true,
    safeFalk: true,
};

window.removeConfigs = function() {
    for (let cF in configs) {
        deleteVal(cF, configs[cF]);
    }
};

for (let cF in configs) {
    configs[cF] = gC(cF, configs[cF]);
}

// MENU FUNCTIONS:
window.changeMenu = function() {};
window.debug = function() {};
window.wasdMode = function() {};

// PAGE 1:
window.startGrind = function() {};

// PAGE 3:
window.connectFillBots = function() {};
window.destroyFillBots = function() {};
window.tryConnectBots = function() {};
window.destroyBots = function() {};
window.resBuild = function() {};
window.toggleBotsCircle = function() {};
window.toggleVisual = function() {};

// SOME FUNCTIONS:
window.leave = function() {};

// nah hahahahahhh why good ping
window.ping = 0;

let statusGui = document.createElement("div");
statusGui.id = "statusGui";
document.body.append(statusGui);
statusGui.style = `
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.25);
                border-radius: 15px;
                position: absolute;
                width: 110px;
                height: auto;
                left: 20px;
                bottom: 170px;
                pointer-events: none;
                font-family: "Ubuntu";
                font-size: 13px;
                text-align: center;
                color: #fff;
            `;
getEl("gameUI").appendChild(statusGui);

function updateHtml() {
    statusGui.innerHTML = `
                <style>
                    @media only screen and (max-width: 896px) {
                        #mapDisplay {
                            width: 130px;
                            height: 130px;
                            bottom: 20px;
                            left: 20px;
                            top: auto;
                        }
                    }
                    #statusGui span {
                        margin-left: 5px;
                        font-family: Ubuntu;
                    }
                </style>

                PriXP: <span id="priXP">0</span><br>
                SecXP: <span id="secXP">0</span><br>
                FPS: <span id="gameFrames">60</span><br>
                Ping: <span id="gamePing">200</span><br>
                Packets: <span id="gamePackets">0</span><br>
                Insta: <span id="instaKilling">OFF</span><br>
                Shame: <span id="playerShame">0</span><br>
                Mills: <span id="gameAutoMills">OFF</span><br>
                `
}

updateHtml();

let PrePlaceCount = 0;

let renderIcons = "M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25";
let combatIcons = "M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z";


let wifi = "M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9c-66.4-50.1-159-50.1-225.3-.1a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3l103,121.3a15.9,15.9,0,0,0,24.2,0l103-121.4A16.4,16.4,0,0,0,246.9,80.5Z";


let firsto = [];
let streamerMode = false;
const HTML = {
    newLine: function(amount) {
        let text = ``;
        for (let i = 0; i < amount; i++) {
            text += `<br>`;
        }
        return text;
    },
    line: function() {
        return `<hr>`;
    },
    text: function(id, value, size, length) {
        return `<input type = "text" id = ${id} size = ${size} value = ${value} maxlength = ${length}>`;
    },
    justInfos: function(id, name, info, forSmart = false) {
        return `
          <div class="framev2 ${(configs[id]) ? "active" : ""}"; id=${id}>
            <label style="font-size: 18px;">${name}</label><br>
            <div style="font-size: 15px; color: #737373"; class="${forSmart ? "intoFrmaes" : ""}">${info}</div>
          </div>
        `;
    },
    checkBox: function(id, name, checked, rl) {
        return `${name}<input type = "checkbox" ${checked ? `checked` : ``} id = ${id}>`;
    },
    configCheckBox: function(id, name, checked, configObj) {
        let checkbox = `${name}<input type = "checkbox" ${checked ? `checked` : ``} id = ${id}>`;
        checkbox += `<script>document.getElementById('${id}').addEventListener('change', () => { ${configObj}[id] = !${configObj}[id]; });</script>`;
        return checkbox;
    },
    button: function(id, name, onclick, classs = "menuB") {
        return `<button class = ${classs} id = ${id} onclick = ${onclick}>${name}</button>`;
    },
    select: function(id, selects) {
        let text = `<select id = ${id}>`;
        selects.forEach((e,i)=>{
            text += `<option value = ${e.value} ${e.selected ? ` selected` : ``}>${e.name}</option>`;
            if (i == selects.length - 1) {
                text += `</select>`;
            }
        }
                       );
        return text;
    },
    rangeValue: function(id, id2, name, min, max, defaultValue) {
        return `
          <label style="font-size: 18px; color: #737373">${name} </label>
          <input style="margin-top: 16px" type="range" id="${id}" min="${min}" max="${max}" value="${defaultValue}">

          <input type="number" id=${id2} min="${min}" max="${max}">
        `;
    },
    values: function(id, name, ore) {
        return `
          <label style="font-size: 15px;"
            ${name}: <span id=${id} style="font-size: 15px;">${ore}</span>
          </label>
        `;
    },
    changeColor: function(id, name, color) {
        return `
          <label style="font-size: 15px;">
            ${name} <input type="color" id=${id} name=${id} value=${color} class="colorInput">
          </label>
        `;
    },
    modChange: function(id, selects) {
        console.log("test");
    },
    mod: function(id, selects) {
        let text = `<select id = ${id}>`;
        selects.forEach((e,i)=>{
            text += `<option value = ${e.value + "C"}>${e.name}</option>`;
            if (i == selects.length - 1) {
                text += `</select> `;
            }
            if (i == 0) {
                firsto.push(e.value + "C");
            }
        }
                       );
        selects.forEach((e,i)=>{
            text += `<input type = "checkbox"  ${e.checked ? `checked` : ``} id = ${e.value} style = "${i == 0 ? "display: inline-block;" : "display: none;"}">`;
        }
                       );
        return text;
    },
    hotkey: function(id, value, size, length) {
        return `<input type = "text" id = ${id} size = ${size} value = ${value} maxlength = ${length}><input type = "checkbox" checked id = ${id + "k"}>`;
    },
    addCheckBox: (id = "", isChecked = false, onclick = "! function(){}()") => `<label class="switch"><input type = "checkbox" id = "${id}" ${isChecked ? "checked" : ""} onclick = "${onclick}"><span class="slider round"></span></label>`,
    addOptions: function(id = "", selected = "", options = {}, oninput = "! function(){}()") {
        let optionsText = "";
        for (let i in options) {
            optionsText +=
                `<option ${i == selected ? "selected" : ""} value = "${i}">${i}</option>`;
        }
        return `<select class="select" id = "${id}" oninput = "${oninput}">${optionsText}</select>`;
    },
    makeCheckMenu: function(Name, Info, Id, useshity = false) {
        return `
        <div class="ButtonMenu1">
           ${Name}
           <div class = "holderInfo">
            ${Info}
           </div>
        </div>
        `;
    },
    addIcon: function(add, makeBox = "21px", colorlel = "#fff") {
        return `
        <svg class = "material-icons"; xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${makeBox}; width: ${makeBox}; margin-top: 2.5px; vertical-align: -5.5px">
            <g><path d="${add}" fill="${colorlel}" fill-opacity="1"></path>
        </g></svg>
        `;
    },
    addSmallIcon: function(add, makeBox = "22px", colorlel = "#fff", omgg = "24") {
        return `
        <svg viewBox="0 0 ${omgg} ${omgg}" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width: ${makeBox};height: ${makeBox};margin-left: 5px;position: absolute;">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="${add}"></path>
            <circle cx="8.5" cy="10.5" r="1"></circle>
            <circle cx="12.5" cy="7.5" r="1"></circle>
            <circle cx="16.5" cy="10.5" r="1"></circle>
        </svg>
        `;
    },
    addNewTheme: function(id, name) {
        return `
        <div class="theme selected">
            <div class="makeColor" id="${id}"></div>
            <span class="makeText" style="vertical-align: -5.5px">${name}</span>
        </div>
        `;
    }



};



// menu html & css
let backgroundEffect = document.createElement("div");
backgroundEffect.id = "backgroundEffect";
document.body.append(backgroundEffect);
let modMenus = document.createElement("div");
modMenus.id = "modMenus";
document.body.append(modMenus);
modMenus.style = `
    font-family: 'Hammersmith One';
    font-size: 12px;
    user-select: none;
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 600px;
    height: 460px;
    border-radius: 14px;
    transition: transform 0.4s;
    transform: scale(1);
    z-index: 999;
    padding: 5px;
    background: #0b1047;
`;

var gameUI = getEl("gameUI");
let menuToggled = false;
let menuIsToggling = false;
document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        menuIsToggling = true;
        $("#modMenus").fadeToggle(400, () => {
            menuToggled = !menuToggled;
            menuIsToggling = false;
        });
        $('#modMenus').css('transform', `scale(${menuToggled ? 0 : 1})`);
        gameUI.style.display = menuToggled ? "block" : "none";
        getEl("menuContainer").style.display = menuToggled ? "block" : "none";
        backgroundEffect.style.display = menuToggled ? "none" : "block";
    }
});

/* wifi svg
идея типо к каждому покафатилю добавит по иконки но ето долгя искат поетому потом :<
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="none"></rect>
  <filter id="glow">
    <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#FFFFFF" flood-opacity="1"></feDropShadow>
  </filter>
  <path d="M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9c-66.4-50.1-159-50.1-225.3-.1a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3l103,121.3a15.9,15.9,0,0,0,24.2,0l103-121.4A16.4,16.4,0,0,0,246.9,80.5Z" filter="url(#glow)" fill="#FFFFFF"></path>
</svg>
*/

safeRemove("resDisplay");
safeRemove("joinPartyButton");
safeRemove("partyButton");
safeRemove("settingsButton");
safeRemove("leaderboardButton");
safeRemove("killCounter");
safeRemove("promoImgHolder");
safeRemove("killCounter");
safeRemove("adCard");
safeRemove("chatButton");
safeRemove("mobileDownloadButtonContainer");
safeRemove("animation_container");
safeRemove("smallLinks");
safeRemove("twitterFollow");
safeRemove("youtubeFollow");
safeRemove("wideAdCard");

getEl('linksContainer2').innerHTML = 'TnT CLIENT Has been enabled,you are good to hack!' ;
document.title = 'TπT CLIENT MooMoo.io';

let newImg = document.createElement("img");
newImg.src = "https://static.vecteezy.com/system/resources/previews/023/741/168/non_2x/discord-logo-icon-social-media-icon-free-png.png";
newImg.style = `position: absolute; top: 10px; left: 12px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(newImg);

newImg.addEventListener("click", () => {
    let w = window.open("https://discord.gg/4skVv2dZZs", null, `height=650, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});

function updateInnerHTML() {
    backgroundEffect.innerHTML = `
        <style>
           .gui-container {
               max-width: 600px;
               margin: 50px auto;
               background-color: #fff;
               padding: 20px;
               border-radius: 8px;
               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
           }

           h1 {
               text-align: center;
           }

           button {
               padding: 10px 20px;
               background-color: #007bff;
               color: #fff;
               border: none;
               border-radius: 4px;
               cursor: pointer;
           }

           button:hover {
               background-color: #0056b3;
           }

           .content {
               max-height: 0;
               overflow: hidden;
               transition: max-height 0.3s ease;
           }

           .hidden {
               max-height: 0;
           }

           #mapDisplay,
           #storeButton,
           #allianceButton,
           #leaderboard,
           .actionBarItem {
               -webkit-border-radius: 15px;
               border-radius: 15px;
           }

       </style>
`; modMenus.innerHTML=` <style>
           :root {
               --primary-color: #AEB1E7;
               --primary-color2: #ade6c8;
               --theme-bg-color: rgba(16 18 27 / 40%);
               --border-color: rgba(113 119 144 / 25%);
               --theme-color: #f9fafb;
               --inactive-color: rgb(113 119 144 / 78%);
               --body-font: "Poppins", sans-serif;
               --hover-menu-bg: rgba(12 15 25 / 30%);
               --content-title-color: #999ba5;
               --content-bg: rgb(146 151 179 / 13%);
               --button-inactive: rgb(249 250 251 / 55%);
               --dropdown-bg: #21242d;
               --dropdown-hover: rgb(42 46 60);
               --popup-bg: rgb(22 25 37);
               --search-bg: #14162b;
               --overlay-bg: rgba(36, 39, 59, 0.3);
               --scrollbar-bg: rgb(1 2 3 / 40%);
           }

           #IconChangeColor {
               color: var(--primary-color);
           }

           .uiItem {
               font-size: 25px;
               padding: 5px;
               margin: 0px;
               text-align: center;
               transition: 1s;
               font-weight: normal;
           }

           .focused {
               box-shadow: 0 0 7px 7px var(--primary-color);
               background: var(--primary-color);
               transform: translateX(5px);
               opacity: 0.7;
           }

           .logoContent {
               top: 0px;
               left: 0px;
               height: 60px;
               width: 100%;
               background: transparent;
               position: relative;
               font-family: 'ADLaM Display';
               transition: 0.2s;
           }

           .logo {
               position: absolute;
               color: white;
               font-size: 20px;
               text-align: start;
               top: 15px;
               left: 20px;
               transition: 0.2s;
           }

           .afterLogoContent {
               top: 0px;
               left: 0px;
               height: 400px;
               width: 100%;
               position: relative;
               transition: 0.2s;
           }

           .sectionsHolder {
               position: absolute;
               top: 0px;
               left: 0px;
               height: 100%;
               width: 140px;
               background: transparent;
           }

           .mainContent {
               position: absolute;
               top: 0px;
               left: 140px;
               height: 100%;
               width: 460px;
               background: transparent;
           }

           .sectionTab {
               display: block;
               width: max-content;
               height: min-content;
               color: white;
               transition: .5s;
               margin: 10px 5px 0;
               text-align: left;
               border-radius: 6px;
               line-height: 25px;
               padding: 3px 6px;
           }

           .menuTab {
               display: grid;
               grid-template-columns: repeat(2, auto);
               grid-row-gap: 10px;
               grid-auto-rows: min-content;
               align-items: center;
               width: 100%;
               height: 100%;
               font-weight: bold;
               font-size: 16px;
               font-family: 'ADLaM Display';
               text-align: center;
               color: white;
           }

           .ButtonMenu1 {
               padding: 6px;
               border-radius: 5px;
               background: black;
               color: white;
               width: auto;
               height: auto;
               position: relative;
               text-align: left;
               font-size: medium;
               font-weight: normal;
               box-shadow: 0 0 0 2px var(--border-color);
               transition: 0.4s;
           }

           .ButtonMenu1:hover {
               color: var(--primary-color);
               box-shadow: 0 0 0 2px var(--primary-color);
               transform: scale(1.03);
           }

           .ButtonInMenu1 {
               padding: 1px;
               border-radius: 2px;
               width: auto;
               height: auto;
               position: relative;
               text-align: left;
               font-size: medium;
               margin-top: 15px;
           }

           /* CheckBox */
           input[type="checkbox"] {
               position: relative;
               appearance: none;
               width: 36px;
               height: 16.5px;
               background: #ccc;
               border-radius: 50px;
               box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
               cursor: pointer;
               top: 8px;
               transition: 0.4s;
               outline: none;
               border: none;
           }

           input:checked[type="checkbox"] {
               background: rgba(51, 51, 51);
           }

           input[type="checkbox"]::after {
               position: absolute;
               content: "";
               width: 16.5px;
               height: 16.5px;
               top: 0;
               left: 0;
               background: #fff;
               border-radius: 50%;
               box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
               transition: 0.4s;
           }

           input:checked[type="checkbox"]::after {
               left: 54%;
           }

           .holderInfo {
               padding-left: 0px;
               font-family: var(--body-font);
               font-size: 15px;
               font-weight: 500;
           }

           .madeBoxScroll::-webkit-scrollbar {
               display: none;
           }

           .madeBoxScroll {
               display: grid;
               grid-template-columns: repeat(1, auto);
               grid-row-gap: 6px;
               grid-auto-rows: min-content;
               font-size: 12px;
               overflow-y: auto;
               /* Enable scrolling */
               height: 390px;
               width: 220px;
               background-color: transparent;
               padding: 5px;
               border-radius: 5px;
               font-family: var(--body-font);
               font-size: 15px;
               font-weight: 500;
           }

           .iconMakerL {
               top: 40px;
           }

           #backgroundEffect {
               position: fixed;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background-image: radial-gradient(circle at center, var(--primary-color), var(--primary-color2));
               animation: aaaaaaAnimate 5s linear infinite alternate;
               z-index: 10;
               opacity: 0.5;
               display: none;
           }

           @keyframes aaaaaaAnimate {
               0% {
                   background-position: 0% 50%;
               }

               100% {
                   background-position: 100% 50%;
               }
           }

           .search-bar {
               height: 40px;
               display: flex;
               width: 100%;
               max-width: 400px;
               padding-left: 16px;
               border-radius: 4px;

               input {
                   width: 100%;
                   height: 100%;
                   border: none;
                   background-color: black;
                   border-radius: 4px;
                   font-family: var(--body-font);
                   font-size: 15px;
                   font-weight: 500;
                   padding: 0 20px 0 40px;
                   box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
                   background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
                   background-size: cover;
                   background-repeat: no-repeat;
                   background-position: 16px 48%;
                   color: var(--theme-color);

                   &::placeholder {
                       font-family: var(--body-font);
                       font-size: 15px;
                       font-weight: 500;
                   }
               }
           }

           .search-bar {
               max-width: 300px;
               margin: auto;
               transition: 0.4s;
               box-shadow: 0 0 0 1px var(--border-color);
               padding-left: 0;
               position: relative;
               top: 8px;
           }

           .theme {
               user-select: none;
               position: relative;
               display: block;
               width: 90px;
               height: 70px;
               top: 25%;
               left: 10%;
               border-radius: 6px;
               clip-path: inset(0 round 9px);
               text-align: center;
               line-height: 25px;
               color: white;
               background: #111113;
               transition: 0.2s;
               padding: 5px;
           }

           .theme:hover {
               transform: scale(1.1);
           }

           #themes {
               display: none;
               flex-wrap: wrap;
               grid-template-columns: repeat(3, 1fr);
               grid-row-gap: 20px;
               grid-auto-rows: min-content;
               align-items: center;
           }

           .makeColor {
               font-size: 12px;
               user-select: none;
               position: relative;
               display: block;
               width: 100%;
               height: 55%;
               border-radius: 6px;
               text-align: center;
               line-height: 25px;
               color: white;
               transition: 0.2s;
               margin-top: 2px;
               transform: scale(0.85);
           }

           .makeText {
               font-family: var(--body-font);
               font-size: 15px;
               font-weight: 500;
           }

           .framev2 {
               color: #343440;
               background-color: #99edff;
               border-radius: 5px;
               transition: all .3s;
               font-family: Verdana, sans-serif;
               padding: 10px;
               min-height: 60px;
               margin: 10px;
               text-align: start;
               transform: scale(1);
           }

           .framev2:hover {
               transform: scale(1.05)
           }

           .framev2.active {
               background-color: var(--primary-color);
               box-shadow: 0 0 7px 7px var(--primary-color);
               opacity: 10;
           }

           input[type="number"] {
               margin-left: 8px;
               font-size: 18px;
               color: #737373;
               overflow: hidden;
               outline: none;
               border-radius: 2px;
               padding: 2px 4px;
               appearance: none;
               margin-top: 8px;
               position: absolute;
               border: none;
               background: none;
               width: 45px;
               text-align: center;
           }

           input[type="number"]::-webkit-inner-spin-button,
           input[type="number"]::-webkit-outer-spin-button {
               -webkit-appearance: none;
               margin: 0;
           }

           input[type="number"] {
               -moz-appearance: textfield;
           }

           input[type="range"] {
               -webkit-appearance: none;
               appearance: none;
               width: 120px;
               cursor: pointer;
               outline: none;
               overflow: hidden;
               border-radius: 16px;
           }

           input[type="range"]::-webkit-slider-runnable-track {
               height: 10px;
               background: #8f8f8f;
               border-radius: 4px;
           }

           input[type="range"]::-moz-range-track {
               height: 10px;
               background: #8f8f8f;
               border-radius: 4px;
           }

           input[type="range"]::-webkit-slider-thumb {
               /* removing default appearance */
               -webkit-appearance: none;
               appearance: none;
               height: 10px;
               width: 10px;
               background-color: #8f8f8f;
               border-radius: 50%;
               border: 2px solid #222d2e;
               box-shadow: -407px 0 0 400px #222d2e;
           }

           input[type="range"]::-moz-range-thumb {
               height: 10px;
               width: 10px;
               background-color: #fff;
               border-radius: 50%;
               border: 1px solid #222d2e;
               box-shadow: -407px 0 0 400px #222d2e;
           }

           .colorInput {
               top: 6px;
               -webkit-appearance: none;
               -moz-appearance: none;
               background-color: transparent;
               width: 30px;
               height: 30px;
               border: none;
               position: relative;
           }

           .colorInput::-webkit-color-swatch {
               border-radius: 25%;
               border: 2px solid #000000;
               box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
           }

           .colorInput::-moz-color-swatch {
               border-radius: 25%;
               border: 2px solid #000000;
               box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
           }

           .menuB {
               margin-top: 10px;
               font-size: 1.2rem;
               padding: 0.7rem 2.5rem;
               border: none;
               outline: none;
               border-radius: 0.4rem;
               cursor: pointer;
               text-transform: uppercase;
               background-color: #333;
               color: #fff;
               font-weight: 700;
               transition: 0.6s;
           }

           .menuB:active {
               scale: 0.92;
           }

           .menuB:hover {
               background: rgb(2, 29, 78);
               background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, var(--primary-color) 60%);
               box-shadow: 0px 0px 30px var(--primary-color) inset;
               -webkit-mask-image: linear-gradient(270deg, transparent 0%, black 60%);
               mask-image: linear-gradient(270deg, transparent 0%, black 60%);
               color: rgb(4, 4, 38);
           }

           input[type="text"] {
               transition: 0.5s;
               color: rgb(200, 200, 200);
               padding: 2px;
               border-radius: 5px;
               border: none;
               outline: none;
               text-align: center;
               background: rgba(0, 0, 0, 0);
           }

           .logotext {
               float: left;
               font-family: "Inter", sans-serif;
               margin-top: 5px;
               color: white;
               width: auto;
               height: auto;
               font-size: 24.4px;
               padding-top: 7px;
               margin-left: 7px;
           }

           .logotext2 {
               font-family: Ubuntu, sans-serif;
               position: relative;
               color: var(--primary-color);
               font-size: 12px;
               text-shadow: 0 0 9px var(--primary-color);
           }

           select {
               transition: transform .7s;
               background-color: #333;
               border-radius: 4px;
               color: white;
               border: none;
               outline: none;
               padding: 3px;
               margin-top: 2px;
           }

           select:hover {
               transform: scale(1.05);
           }
       </style>
       <div>
           <div class="logoContent">
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.0/css/all.css">
               <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:500">
               <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
               <span class="logotext">TπT Client<font class="logotext2">BETA</font></span>
           </div>
           <div class="afterLogoContent">
               <div class="sectionsHolder">
                   <div class="sectionTab" id="sectionTab1">${HTML.addIcon("M246.78 18.656v101.22c7.988.266 16.003.267 24 0V18.655h-24zm-72.155 110.406v30.813h168.313v-30.813c-55.755 12.73-113.104 12.604-168.313 0zm-150.28 35.063l9.343 37.594 132.187 8.093 9.406.562-.655 9.406c-2.594 38.077 5.257 78.673 25.563 112.44l7.625-146.47-183.47-21.625zm463.186 0l-177.842 20.97 7.187 137.843c16.457-31.775 22.736-68.503 20.375-103.157l-.625-9.405 9.375-.563 132.188-8.093 9.343-37.595zm-260.624 14.438L216.25 383.188v44.187l44.375 66.53 43.03-65.342-13-250h-22.53V429.5h-18.688V178.562h-22.53zM38.186 220.72c3.52 11.234 8.043 23.026 13.345 34.936l104.5-8.562c-.358-6.42-.452-12.835-.28-19.188L38.187 220.72zm435.502 0l-117.563 7.186c.172 6.353.077 12.768-.28 19.188l104.5 8.562c5.3-11.91 9.825-23.702 13.342-34.937zm-315.844 45l-97.72 8c5.446 10.777 11.426 21.472 17.782 31.81l84.063-18.28c-1.735-7.117-3.12-14.322-4.126-21.53zm196.187 0c-1.003 7.207-2.36 14.414-4.092 21.53l84.03 18.28c6.357-10.338 12.338-21.033 17.782-31.81l-97.72-8zM167.19 305.25L88.75 322.313c6.694 9.8 13.67 19.05 20.75 27.468l64.938-26.342c-2.725-5.955-5.143-12.023-7.25-18.188zm177.5 0c-2.107 6.166-4.527 12.232-7.25 18.188l64.937 26.343c7.08-8.415 14.056-17.666 20.75-27.467l-78.438-17.063z")} Combat</div>
                   <div class="sectionTab" id="sectionTab2">${HTML.addIcon("M264.234 33.64a94.945 94.945 0 0 0-10.957.608C190.895 41.376 131.82 93.06 100.975 152.756c.118-.095.234-.193.353-.287l7.463-5.899 5.477 7.778c1.554 2.208 2.872 4.663 4.033 7.34 7.928-17.487 21.63-34.571 40.363-46.084l7.61-4.676 4.734 7.572c2.502 4.003 4.31 8.702 5.713 14.016 9.889-16.645 25.602-32.252 45.758-41.608l8.101-3.76 3.822 8.073c.153.323.298.652.442.982 9.782-13.132 23.275-24.935 39.728-32.572l8.102-3.762 3.822 8.072c1.356 2.864 2.351 6.017 3.104 9.416 8.43-10.724 19.573-20.548 32.812-27.744-18.601-9.895-38.4-15.936-58.178-15.972zm140.498 19.813c-21.58 4.89-40.88 18.458-50.029 31.264-5.337 7.47-6.704 14.015-5.808 17.388.895 3.374 3.457 6.667 14.306 8.53 3.785.65 8.053-.756 13.291-5.094 5.239-4.338 10.728-11.384 15.358-19.36 4.629-7.974 8.462-16.865 10.949-24.75.915-2.9 1.414-5.45 1.933-7.978zm-71.066 10.74c-19.686 10.104-35.007 28.047-40.684 42.725-1.002 2.592-1.669 5.007-2.07 7.205-.134 1.34-.288 2.68-.46 4.022-.123 3.113.378 5.538 1.23 7.058 1.706 3.045 5.005 5.597 15.976 4.703 3.827-.312 7.612-2.734 11.608-8.238 3.995-5.505 7.56-13.695 10.06-22.57 2.5-8.876 4-18.44 4.45-26.696.164-3.037.016-5.63-.11-8.209zm-61.148 21.221c-15.32 10.048-27.077 25.116-32.995 38.63.178 8.541-.428 17.78-1.966 26.833-.003.02-.008.039-.012.059 2.075 2.643 5.784 4.535 16.084 2.58 3.772-.716 7.28-3.525 10.668-9.422 3.388-5.898 6.065-14.421 7.61-23.512 1.544-9.09 2.021-18.762 1.591-27.018-.158-3.037-.581-5.6-.98-8.15zm-52.096 27.28c-18.503 12.135-31.833 31.6-35.92 46.798-2.384 8.867-1.373 15.474.646 18.32 2.02 2.847 5.57 5.036 16.385 2.983 3.773-.716 7.28-3.527 10.668-9.424 3.389-5.897 6.065-14.419 7.61-23.51 1.544-9.09 2.021-18.761 1.591-27.017-.158-3.038-.581-5.6-.98-8.15zm172.715 1.915a64.957 64.957 0 0 1-5.164 4.795c-7.692 6.37-17.404 10.759-27.819 8.971a53.37 53.37 0 0 1-5.308-1.19c-.211.553-.393 1.083-.545 1.585 9.883 3.882 19.338 8.95 27.293 14.312.488.329.951.657 1.427.986 14.312-1.453 31.422-7.418 45.325-17.963-2.27-1.23-4.543-2.485-7.352-3.652-7.635-3.17-16.909-5.96-25.992-7.549-.624-.109-1.244-.198-1.865-.295zm-233.983 22.87c-16.968 14.203-27.946 35.087-30.238 50.658-1.337 9.083.435 15.528 2.772 18.12 2.336 2.593 6.118 4.353 16.62 1.057 3.664-1.15 6.82-4.348 9.5-10.6 2.68-6.25 4.35-15.025 4.827-24.234.477-9.208-.174-18.869-1.56-27.02-.511-2.998-1.228-5.495-1.92-7.981zm167.551 2.595c-4.894 4.226-10.774 7.219-17.586 7.774-.776.063-1.542.098-2.305.129-4.164 5.764-3.952 9.104-2.789 11.761 1.4 3.198 6.544 7.467 15.371 9.99 15.132 4.326 38.685 2.928 58.618-6.681-1.981-1.656-3.96-3.338-6.483-5.04-6.855-4.62-15.39-9.193-23.978-12.552-7.288-2.85-14.632-4.777-20.848-5.38zm86.656 15.182a106.836 106.836 0 0 1-13.511 4.318c.112.164.23.326.34.49l4.949 7.434-7.397 5.006c-20.412 13.818-44.598 18.985-65.494 17.557 1.179 1.786 2.212 3.592 3.055 5.435l3.713 8.123-8.094 3.776c-18.069 8.427-37.682 10.878-55.32 9.015 3.324 5.162 5.82 10.156 7.115 15.174l2.232 8.648-8.63 2.3c-16.504 4.394-33.356 4.273-48.56 1.052 2.399 4.105 4.226 8.128 5.268 12.166l2.233 8.648-8.631 2.3c-17.359 4.621-35.103 4.246-50.908.525 3.2 5.494 5.503 10.687 6.41 16.017l1.59 9.344-9.414 1.103c-29.326 3.442-58.181-6.708-75.637-21.18-4.087-3.387-7.717-7.113-10.414-11.218 17.989 59.19 62.717 123.576 62.717 123.576l-35.479 68.797c49.496 25.554 105.19 38.708 170.56 32.514-1.767-32.096 16.473-55.814 33.022-74.514-14.59-.975-29.987-2.226-44.846-5.064-16.51-3.155-32.54-8.341-46.003-18.032-13.464-9.69-24.033-24.105-28.956-43.7l17.458-4.387c3.99 15.88 11.622 26 22.011 33.478 10.39 7.478 23.863 12.094 38.87 14.961 25.516 4.875 54.75 4.428 79.554 7.643 26.748-2.02 57.07 2.601 63.441-8.596 15.568-27.36 5.054-63.93-3.44-92.492 18.463-.61 28.178-1.69 38.735-4.967-8.607-34.5-21.86-54.883-43.703-73.5 1.629-20.453 4.194-42.05 1.164-61.75zm-143.705 10.031c-3.632 2.872-7.843 4.998-12.672 5.914-5.147.977-10.06 1.154-14.574.598-2.391 3.278-2.569 5.739-2.08 7.879 3.149 2.201 6.213 4.6 9.176 7.135a140.092 140.092 0 0 1 7.195 6.628c14.405 5.749 36.32 7.451 56.233 1.496-1.694-1.947-3.382-3.92-5.604-5.998-6.039-5.646-13.746-11.51-21.695-16.183-5.387-3.167-10.897-5.746-15.979-7.469zm-165.892 9.828C91.6 189.035 84.35 207.673 83.58 221.33c-.47 8.343 1.653 14.076 3.498 15.916 1.846 1.84 4.091 3.065 12.469-.613 2.48-1.089 4.922-4.003 6.73-9.848 1.808-5.845 2.59-13.96 2.32-22.369-.268-8.409-1.532-17.143-3.308-24.436-.448-1.84-1.006-3.23-1.525-4.865zm117.484 14.098c-4.367 4.56-9.797 8.02-16.357 9.266-4.519.857-8.861 1.105-12.909.779.005.14.01.28.02.418.17 2.194 1.611 5.283 4.533 8.59 1.106.886 2.201 1.789 3.281 2.713a137.466 137.466 0 0 1 3.963 3.544c12.956 8.865 35.325 15.08 57.012 12.59-1.326-2.214-2.642-4.454-4.465-6.888-4.955-6.618-11.512-13.74-18.52-19.735-5.473-4.682-11.249-8.637-16.558-11.277zm-51.684 23.215c-3.888 5.477-9.097 9.938-15.865 12.062-3.643 1.144-7.216 1.857-10.646 2.15 1.39 3.355 4.753 7.65 10.494 11.69 12.87 9.058 35.571 15.474 57.555 12.95-1.327-2.215-2.642-4.455-4.465-6.89-4.956-6.617-11.515-13.74-18.522-19.734-6.165-5.274-12.72-9.645-18.55-12.228zm-48.607 26.136c-2.982 6.2-7.496 11.62-14.174 14.551-.504.222-1.01.415-1.515.615a34.936 34.936 0 0 0 4.89 4.92c10.574 8.766 29.946 16.537 49.654 17.452-.717-1.297-1.208-2.436-2.085-3.8-3.937-6.115-9.315-12.875-15.207-18.734-5.892-5.858-12.349-10.798-18.014-13.533a32.419 32.419 0 0 0-3.549-1.47zm-48.676 9.061l-33.43 21.395 9.704 15.162 38.591-24.698a30.468 30.468 0 0 1-1.767-3.634c-4.235-.94-8.022-2.876-11.012-5.858a26.53 26.53 0 0 1-2.086-2.367z")} Player</div>
                   <div class="sectionTab" id="sectionTab3">${HTML.addIcon("M260.264 25.742c-8.315 14.136-16.582 27.34-26.84 38.324 5.71 12.268 7.027 27.05 3.213 42.352-3.693 14.814-12.696 30.46-27.72 40.926-9.218 6.42-20.75 10.58-33.995 11.13.044.04.085.082.13.124 27.867 26.39 78.488 49.25 114.93 47.94 10.39-19.972 13.76-42.98 12.362-66.872-2.45-41.87-20.68-85.56-42.08-113.924zm23.715 1.39c19.65 30.596 34.643 70.916 37.014 111.442 2.66 45.48-11.685 92.05-54.666 120.992 1.223 9.13 3.522 17.57 6.735 25.375 22.875-34.893 65.888-63.474 104.382-74.92 10.695-3.18 21.206-5.136 31.012-5.108 9.806.028 18.907 2.04 26.785 6.795 7.878 4.756 13.97 12.58 16.83 22.35 2.86 9.768 2.826 21.298.065 34.884l-18.31-3.72c2.346-11.547 2.02-20.088.316-25.915-1.706-5.828-4.452-9.124-8.557-11.602-4.036-2.437-9.938-3.76-17.11-3.822-12.096 13.07-15.27 25.72-14.275 37.42 1.096 12.875 7.967 24.907 15.946 32.612 11.34 10.95 23.726 14.673 34.97 13.002 11.246-1.67 21.882-8.785 29.368-22.53 24.563-45.1 19.074-91.64-6.992-133.954-9.293 6.84-21.606 8.167-33.426 5.63-13.45-2.89-27.08-10.564-38.736-22.22-11.656-11.656-19.33-25.287-22.22-38.736-2.23-10.387-1.46-21.146 3.396-29.91-27.773-16.384-59.202-29.51-92.527-38.063zM180.97 50.94c-.945-.023-1.906-.02-2.884.003-48.596 1.21-84.842 26.387-108.606 66.162 9.294 5.014 15.783 14.355 19.21 24.977 4.223 13.09 4.393 28.734.126 44.656-4.266 15.922-12.234 29.386-22.437 38.612-8.232 7.442-18.453 12.268-28.944 12.023-1.164 34.632 3.09 71.276 13.115 107.172 16.673-32.315 44.095-65.456 78.005-87.772 24.683-16.244 53.345-26.528 83.142-25.54 15.342.508 30.984 4.02 46.54 11.228 7.486-5.286 13.874-11.147 19.288-17.477-41.196-2.897-86.57-25.595-115.322-52.822-16.203-15.344-27.795-32.496-27.435-50.896.18-9.2 3.91-18.39 10.94-25.75 7.03-7.36 17.03-13.097 30.18-17.498l5.93 17.716c-11.174 3.742-18.407 8.295-22.6 12.686-4.195 4.39-5.677 8.417-5.77 13.21-.093 4.715 1.712 10.487 5.245 16.73 17.366 3.942 29.907.365 39.543-6.348 10.602-7.386 17.59-19.352 20.272-30.116 3.813-15.296.843-27.886-6.227-36.79-6.627-8.345-17.13-13.834-31.31-14.167zm227.643 15.744c-5.964-.177-10.498 1.516-13.52 4.537-4.027 4.028-5.695 10.745-3.716 19.96 1.978 9.212 7.814 20.1 17.162 29.448 9.347 9.35 20.235 15.186 29.448 17.165 9.214 1.978 15.93.31 19.96-3.72 4.027-4.027 5.695-10.742 3.716-19.956-1.978-9.214-7.816-20.102-17.164-29.45-9.348-9.348-20.236-15.186-29.45-17.164-2.303-.495-4.45-.762-6.437-.82zM54.503 131.93c-.37-.01-.744-.008-1.12.01-4.52.212-9.57 2.474-14.813 7.214-6.99 6.32-13.5 16.82-16.922 29.59-3.42 12.77-3.032 25.116-.138 34.084 2.893 8.968 7.695 13.952 13.197 15.426 5.503 1.474 12.153-.44 19.143-6.76 6.99-6.32 13.5-16.818 16.92-29.588 3.423-12.77 3.035-25.117.142-34.086-2.893-8.968-7.697-13.95-13.2-15.425-1.03-.277-2.103-.434-3.21-.465zm328.444 95.95c-.06.016-.116.03-.176.048-36.98 10.996-82.37 43.684-99.25 76.066 12.05 17.176 29.274 30.43 49.257 40.46 37.487 18.813 84.438 24.873 119.702 20.523-7.524-13.278-14.367-26.116-18.814-39.416-12.88-1.562-25.655-7.736-36.498-18.206-10.983-10.606-20.03-26.224-21.582-44.47-.952-11.192 1.214-23.258 7.36-35.005zm-180.842 21.827c-22.198 1.154-43.527 9.677-63.28 22.676-35.058 23.072-63.795 60.737-77.65 93.467 14.808.116 29 .546 42.376 3.12 7.655-12.19 20.408-21.6 36.593-26.24 14.675-4.21 32.724-4.237 49.3 3.54 10.17 4.773 19.536 12.68 26.635 23.878.014-.06.03-.114.045-.173 8.617-36.06 3.77-88.86-14.018-120.268zm21.67 1.28c16.844 36.825 19.482 85.828 10.52 123.33-5.187 21.703-14.244 40.32-30.36 49.208-8.057 4.445-17.88 5.81-27.77 3.403-9.89-2.408-19.857-8.202-30.243-17.387l12.377-13.995c8.826 7.806 16.387 11.794 22.286 13.23 5.9 1.437 10.128.707 14.326-1.61 4.13-2.276 8.227-6.726 11.867-12.907-5.27-17.01-14.64-26.083-25.272-31.072-11.697-5.49-25.552-5.555-36.215-2.497-15.153 4.346-24.57 13.21-28.746 23.785-4.175 10.574-3.33 23.34 4.83 36.697 28.356 46.408 74.964 64.432 128.37 60.46-.31-.856-.59-1.726-.83-2.62-3.496-13.046 1.72-26.303 10.946-36.506 9.226-10.203 22.69-18.17 38.612-22.438 7.96-2.133 15.853-3.158 23.39-3.12 7.538.036 14.72 1.136 21.266 3.247 11.163 3.6 20.895 10.593 25.692 20.66 24.98-15.106 48.997-33.986 70.59-56.04-36.322 1.72-78.734-5.455-115.016-23.665-39.46-19.804-71.826-53.956-77.04-103.1-7.917-3.42-15.786-5.725-23.58-7.064zm98.002 184.69c-5.804-.032-12.08.725-18.466 2.436-12.77 3.422-23.27 9.932-29.59 16.922s-8.233 13.64-6.76 19.143c1.475 5.502 6.458 10.304 15.427 13.197 8.968 2.893 21.316 3.283 34.086-.14 12.77-3.42 23.267-9.93 29.588-16.92 6.32-6.99 8.235-13.64 6.76-19.143-1.474-5.503-6.457-10.306-15.425-13.2-4.485-1.446-9.814-2.265-15.618-2.296z")} Render</div>
                   <div class="sectionTab" id="sectionTab4">${HTML.addIcon("M403.313 41.625c-1.107 0-2.24.017-3.344.063-30.174 1.248-56.498 23.386-71.72 55.906-29.436-20.315-63.812-25.884-91.313-12.125-22.492 11.25-38.903 33.383-42.687 60.843 10.962-4.476 21.618-7.177 31.75-8.438 4.333-11.497 12.952-19.848 24-25.375 20.797-10.404 49.765-8.923 72.656 13.97l18.625 18.624 6.533-25.156c8.723-32.558 30.745-47.522 53.093-48.438 22.346-.927 45.982 11.665 54.97 43.78 12.795 45.728-29.2 82.442-57.907 123.126h-95.19c-23.612-9.383-45.98-18.687-60.967-34.25-7.368-2.142-14.748-2.2-22.594.22-3.735 1.15-7.638 2.92-11.69 5.436 16.42 28.053 44.66 45.767 74.845 61.063.43.218.85.44 1.28.656 3.358 1.692 6.738 3.357 10.126 5 .89.434 1.763.882 2.658 1.314 2.396 1.155 4.79 2.293 7.187 3.437 14.53 6.938 28.997 13.736 42.313 21.25 17.27 9.75 36.245 28.402 50 48.814 4.14-23.795 6.27-45.762 19.875-66.5 35.98-54.857 86.962-108.22 68.03-178.875-11.262-42.03-46.238-64.318-80.53-64.345zm-298.75 77.656c-34.293.028-69.27 22.317-80.532 64.345C5.1 254.28 56.053 307.643 92.03 362.5c13.605 20.74 15.737 42.706 19.876 66.5 13.755-20.412 32.728-39.065 50-48.813 44.413-25.066 101.483-42.217 131.875-82.875-17.71-8.498-33.892-16.466-55.405-30.156H72.625c-16.633-23.38-28.21-47.227-20.656-74.22 8.705-31.11 31.163-43.916 52.874-43.842.7.002 1.395.033 2.094.062 22.347.916 44.4 15.88 53.124 48.438l6.5 25.156 18.657-18.625c22.89-22.892 51.858-24.404 72.655-14 8.082 4.043 14.844 9.614 19.594 16.813 12.327 6.815 23.973 11.22 35.967 15.687-4.12-26.854-20.396-48.43-42.53-59.5-27.5-13.76-61.846-8.22-91.282 12.094-15.222-32.52-41.577-54.628-71.75-55.876-1.104-.046-2.206-.064-3.313-.063zm292.843 264.626c-6.496 53.84-30.488 46.8-30.97 80.72-.208 15.372 14.203 28.062 32.064 28.062 17.86 0 32.594-12.684 32.594-28.063 0-34.092-26.52-27.088-33.688-80.72z")} Config</div>
                   <div class="sectionTab" id="sectionTab6">${HTML.addIcon("M62.522 17.166c-.412-.005-.826 0-1.243.012l-.003-.002c-9.747.288-20.823 5.23-29.843 14.25C16.242 46.62 12.596 67.62 23.31 78.334c7.99 7.988 21.715 8.026 34.47 1.22 16.166 30.05 42.153 57.687 71.437 76.374-18.77 24.156-29.97 54.48-29.97 87.375h18.69c0-28.9 9.826-55.474 26.342-76.53l2.156 39.405c2.91 2.622 5.82 5.224 8.732 7.832 4.356-12.66 10.49-24.082 18.785-33.344l13.057-14.578 2.568 19.4c3.6 27.192 6.476 50.554 9.908 67.99 15.483 13.69 30.924 27.27 46.223 40.555 5.405-2.125 11.38-3.683 17.63-5.1 18.31-4.148 40.412-6.538 60.058-9.835-37.685-43.742-77.43-88.55-117.246-132.668l-38.968-2.125c20.764-15.68 46.636-24.966 74.718-24.97v-18.69c-32.2.003-61.944 10.726-85.843 28.78-18.697-29.382-46.39-55.48-76.53-71.685 6.794-12.748 6.796-26.422-1.188-34.406-4.08-4.08-9.646-6.094-15.82-6.168zm319.773 2.682l-51.34 54.99 27.06 85.992L419.642 176l16.407-49.58-45.104-23.934-8.447 23.213 15.62 9.597 2.673-11.535 14.618 7.54-5.765 27.046-49.16-27.498L384 78l43.107 24.766 17.795-57.682-62.607-25.236zM203.79 32.305c-23.41 22.86-38.652 47.65-46.438 71.302.95 1.23 1.894 2.47 2.818 3.72 19.074-11.54 40.616-18.787 62.72-21.53-8.528-18.76-16.008-37.234-19.1-53.492zm139.29 3.027c-2.256.45-43.49 8.084-53.945 9.863l-13.783 97.078 75.595 85.483 116.612-14.272 24.63-100.953-44.635-18.63-4.655 15.092 12.768 8.856-26.49 79.732-85.477-21.86-31.407-99.814 30.787-40.574zm-99.756 99.93c-8.035.007-15.983.746-23.94 2.43a9462.44 9462.44 0 0 1 40.825 45.27c-.502-13.06-6.45-29.622-14.358-47.657-.843-.015-1.687-.044-2.528-.043zm49.067 53.3a233.982 233.982 0 0 0-15.814 12.737 6065.473 6065.473 0 0 1 40.684 46.173c13-2.56 26.228-6.366 38.982-11.928-21.436-4.717-51.77-8.685-60.724-26.168a234.736 234.736 0 0 1 9.285-6.922c-2.27-2.522-2.445-2.703-4.967-5.52-2.645-2.954-4.985-5.603-7.445-8.374zm-117.267 24.686c-7.373 17.72-11.074 40.45-10.783 63.322.422 33.24 5.29 63.63 16.855 79.524-18.443 39.608-40.69 81.563-69.343 102.687h-.004c-26.502 18.904-51.61 14.405-63.866.624-6.127-6.89-9.442-16.274-7.98-28.258 1.45-11.88 7.926-26.43 22.246-42.21 11.966-10.248 21.69-14.276 28.156-14.954 6.552-.687 9.854 1.214 12.336 4.327 4.963 6.226 5.048 20.812-7.48 31.327l12.013 14.316c19.1-16.03 22.676-41.487 10.082-57.29-6.297-7.9-17.036-12.51-28.9-11.268-11.865 1.245-24.787 7.553-38.885 19.76l-.41.357-.365.4c-16.57 18.11-25.296 36.22-27.34 52.973-2.045 16.753 2.874 32.043 12.564 42.94 19.38 21.79 56.224 25.322 88.68 2.175l.003-.002a160.698 160.698 0 0 0 16.992-13.967c29.887-7.726 58.962-10.74 92.3-37.436-21.193.977-40.373-1.7-53.542-15.13 13.405-25.285 23.347-52.815 34.78-79.87 4.153-9.833 8.482-19.624 13.212-29.285a8956.346 8956.346 0 0 1-13.22-11.605 47.82 47.82 0 0 1-1.582-.322l-5.325 15.978c-7.244-2.413-12.01-8.344-15.4-15.106-3.39-6.763-5.785-14.94-7.92-24.63-2.96-13.43-5.385-30.65-7.875-49.376zm192.2 78.113c-.95 3.686-2.002 7.268-3.15 10.75a3912.925 3912.925 0 0 1 38.073 45.722c15.284-8.49 29.937-19.356 42.938-32.674-23-3.926-50.907-14.148-77.862-23.797zm-19.044 1.066c-26.425 7.104-58.293 8.925-80.964 14.062-13.756 3.117-23.042 7.92-25.418 11.51-1.187 1.795-1.65 3.264-.867 6.848.784 3.583 3.327 9.055 8.585 16.04l.004.005.003.007c15.597 20.782 35.098 23.19 55.207 12.3 17.34-9.387 34.29-30.29 43.45-60.77zm9.195 26.633c-8.447 18.075-19.744 32.47-32.63 42.465 62.56 52.325 120.89 98.433 169.995 133.31-34.996-50.882-83.143-111.51-137.365-175.776z")} Settings</div>
               </div>
               <div class="mainContent">
                   <div class="menuTab" id="combat">
                       <div class="madeBoxScroll"> ${HTML.justInfos(`autoPlace`, `Auto Place`, "AutoPlacer")} ${HTML.justInfos("autoReplace", "Auto Replace", "AutoReplacer")} ${HTML.justInfos("antiTrap", "Anti Trap", "AntiTrap")} </div>
                       <div class="madeBoxScroll"> ${HTML.justInfos("autoPush", "Auto Push", `Auto Pushes Enemy Into Spike`)} ${HTML.justInfos("spikeTick", "Spike Tick", "Stacked SpikeTick")} ${HTML.justInfos("predictTick", "Predict Tick", "AntiSpiketick")} ${HTML.justInfos("revTick", "Reverse Tick", "Recommended")} ${HTML.justInfos("PAB", "Anti Bull", ` <div> ${HTML.values("antiBullVallOnClicks", "Value", "Always")} </div> `, true, true)} </div>
                   </div>
                   <div class="menuTab" id="player">
                       <div class="madeBoxScroll"> ${HTML.justInfos("weaponGrinder", "Auto Grind", "Auto Place Turrets")} ${HTML.justInfos("killChat", "Kill Chat", "Custom Kill Chat")} ${HTML.justInfos("autoRespawn", "Auto Respawn", "Auto respawn apon death")} ${HTML.justInfos("autoBreakSpike", "Auto Break Spike", "Auto Break Spikes")} ${HTML.justInfos("safeFalk", "Safe Falk", "AntiSpike")} </div>
                       <div class="madeBoxScroll"> ${HTML.justInfos("attackDir", "Attack Dir", "Distance Attack")} ${HTML.justInfos("showDir", "Real Dir", "Shows the distance of people")} ${HTML.justInfos("slowOT", "Slow One Tick", "Slow Tick")} </div>
                   </div>
                   <div class="menuTab" id="render">
                       <div class="madeBoxScroll"> ${HTML.justInfos("gridingBox", `Grids ${HTML.addSmallIcon(renderIcons, "22px", "#fff")}`, ` ${HTML.rangeValue("gridscale", "gridval", "", 60, 1440, 1440)} `, false)} ${HTML.justInfos("nightBox", `Night ${HTML.addSmallIcon(renderIcons, "22px", "#fff")}`, ` ${HTML.rangeValue("nightS", "nightV", "", 35, 75, 35)} `, false)} </div>
                       <div class="madeBoxScroll"> ${HTML.justInfos("placeVis", "Render Place", "Renders Where You Place")} ${HTML.justInfos("buildingHealth", "Build Hp", "Renders Building HP")} </div>
                   </div>
                   <div class="menuTab" id="themes"> ${HTML.addNewTheme("theme1", "Pale Blue")} ${HTML.addNewTheme("theme2", "Pink")} ${HTML.addNewTheme("theme3", "Fresh Green")} ${HTML.addNewTheme("theme4", "Minnesota")} ${HTML.addNewTheme("theme5", "Corat")} ${HTML.addNewTheme("theme6", "Sublime Light")} ${HTML.addNewTheme("theme7", "BigHead")} ${HTML.addNewTheme("theme8", "Timber")} ${HTML.addNewTheme("theme9", "Metallic")} </div>
               </div>
           </div>
       </div>
    `;
}
updateInnerHTML();






const tabs = [
    "#sectionTab1", "#sectionTab2", "#sectionTab3", "#sectionTab4", "#sectionTab6",
];
const externalTab = [
    "#combat", "#player", "#render", "#config", "#themes",
];
const themes = [
    "#theme1", "#theme2", "#theme3",
    "#theme4", "#theme5", "#theme6",
    "#theme7", "#theme8", "#theme9",
    "#theme10", "#theme11", "#theme12",
    "#theme13", "#theme14", "#theme15"
];

const themesColor = [
    "#AEB1E7", "#D6A4A4", "#89da72",
    "#5614B0", "#D38312", "#FC5C7D",
    "#BA5370", "#fc00ff", "#abbaab",
];
const themesColor2 = [
    "#ade6c8", "#DAE2F8", "#008f00",
    "#DBD65C", "#A83279", "#6A82FB",
    "#F4E2D8", "#00dbde", "#ffffff",
];
const hudElements = [];
const $ = window.$;

$(document).ready(function () {
    // Function to update theme
    const updateTheme = (index) => {
        const clickedTheme = $(themes[index]);
        $(themes.join(",")).removeClass("selected");
        clickedTheme.addClass("selected");
        $(':root').css('--primary-color', themesColor[index]);
        $(':root').css('--primary-color2', themesColor2[index]);
    };

    themes.forEach((theme, index) => {
        //$(theme).css("background", `linear-gradient(to bottom right, ${themesColor[index]}, ${themesColor2[index]})`);
        $(theme).css("background", themesColor[index]);
        $(theme).css("box-shadow", "0 0 3px 3px " + themesColor[index]);

    });

    themes.forEach((theme, index) => {
        $(theme).on("click", function () {
            updateTheme(index);
        });
    });

    const ToggleTab = (element) => {
        externalTab.forEach(tab => $(tab).hide());
        $(element).show().css("display", "grid").hide().show("slide", { direction: "left" }, 200);
    }

    ToggleTab(externalTab[1]);
    tabs.forEach((tab, index) => {
        $(tab).on("click", function () {
            if (!$(externalTab[index]).is(":visible")) {
                ToggleTab(externalTab[index]);
            }
        });
    });

    $(document).on("click", tabs.join(","), function () {
        const clickedTab = $(this);
        $(tabs.join(",")).removeClass("focused");
        clickedTab.addClass("focused");
    });
});

// add divs for button system:
function toggleButton(id, toggledId) {
    getEl(id).onclick = function(event) {
        if (!event.target.closest('.intoFrmaes')) {
            configs[toggledId || id] = !configs[toggledId || id];
            getEl(id).style.transition = "0.3s";
            if (configs[toggledId || id]) {
                getEl(id).style.backgroundColor = "var(--primary-color)";
                getEl(id).style.boxShadow = "0 0 7px 7px var(--primary-color)";
                getEl(id).style.opacity = "10";
                event.target.classList.add("active");
            } else {
                getEl(id).style.backgroundColor = "#99edff";
                getEl(id).style.boxShadow = "none";
                event.target.classList.remove("active");
            }
        }
    }
}

toggleButton("weaponGrinder");
toggleButton("killChat");
toggleButton("attackDir");
toggleButton("showDir");
toggleButton("autoRespawn");
toggleButton("slowOT");

toggleButton("autoPlace");
toggleButton("autoReplace");
toggleButton("autoPush");
toggleButton("spikeTick");
toggleButton("predictTick");
toggleButton("revTick");
toggleButton("antiTrap");
toggleButton("PAB");

toggleButton("placeVis");
toggleButton("buildingHealth");

toggleButton("autoBreakSpike");
toggleButton("safeFalk");


// value:
function madeSmartValue(id, options) {
    let modList = options.list;
    let externalNextBase = options.value;

    getEl(id).onclick = function() {
        let currentIndex = modList.indexOf(externalNextBase);
        let nextIndex = (currentIndex + 1) % modList.length;
        externalNextBase = modList[nextIndex];
        getEl(id).innerHTML = externalNextBase;
        options.value = externalNextBase;
    };
}

let clicksAB = { value: "Always", list: ["When Reloaded", "Always"] };
madeSmartValue("antiBullVallOnClicks", clicksAB);

// sliders and nm sync:
const syncSliderWithValue = (slider, valueField) => {
    const sync = () => { valueField.value = slider.value; };
    slider.addEventListener("input", sync);
    valueField.addEventListener("input", () => { slider.value = valueField.value; sync(); });
    sync();
};

syncSliderWithValue(document.querySelector("#gridscale"), document.querySelector("#gridval"));
syncSliderWithValue(document.querySelector("#nightS"), document.querySelector("#nightV"));

let WS = undefined;
let socketID = undefined;

let useWasd = false;
let secPacket = 0;
let secMax = 120;
let secTime = 1000;
let firstSend = {
    sec: false
};
let game = {
    tick: 0,
    tickQueue: [],
    tickBase: function(set, tick) {
        if (this.tickQueue[this.tick + tick]) {
            this.tickQueue[this.tick + tick].push(set);
        } else {
            this.tickQueue[this.tick + tick] = [set];
        }
    },
    tickRate: (1000 / config.serverUpdateRate),
    tickSpeed: 0,
    lastTick: performance.now()
};
let modConsole = [];

let dontSend = false;
let fpsTimer = {
    last: 0,
    time: 0,
    ltime: 0,
};
let lastMoveDir = undefined;
let lastsp = ["cc", 1, "__proto__"];

WebSocket.prototype.nsend = WebSocket.prototype.send;
WebSocket.prototype.send = function (message) {
    if (!WS) {
        WS = this;
        WS.addEventListener("message", function (msg) {
            getMessage(msg);
        });
        WS.addEventListener("close", (event) => {
            if (event.code == 4001) {
                window.location.reload();
            }
        });
    }
    if (WS == this) {
        dontSend = false;


        // EXTRACT DATA ARRAY:
        let data = new Uint8Array(message);
        let parsed = window.msgpack.decode(data);
        let type = parsed[0];
        data = parsed[1];

        // SEND MESSAGE:
        if (type == "6") {
            if (data[0]) {
                // ANTI PROFANITY:
                let profanity = [
                    "cunt",
                    "whore",
                    "fuck",
                    "shit",
                    "faggot",
                    "nigger",
                    "nigga",
                    "dick",
                    "vagina",
                    "minge",
                    "cock",
                    "rape",
                    "cum",
                    "sex",
                    "tits",
                    "penis",
                    "clit",
                    "pussy",
                    "meatcurtain",
                    "jizz",
                    "prune",
                    "douche",
                    "wanker",
                    "damn",
                    "bitch",
                    "dick",
                    "fag",
                    "bastard",
                ];
                let tmpString;
                profanity.forEach((profany) => {
                    if (data[0].indexOf(profany) > -1) {
                        tmpString = "";
                        for (let i = 0; i < profany.length; ++i) {
                            if (i == 1) {
                                tmpString += String.fromCharCode(0);
                            }
                            tmpString += profany[i];
                        }
                        let re = new RegExp(profany, "g");
                        data[0] = data[0].replace(re, tmpString);
                    }
                });

                // FIX CHAT:
                data[0] = data[0].slice(0, 30);
            }
        } else if (type == "L") {
            // MAKE SAME CLAN:
            data[0] = data[0] + String.fromCharCode(0).repeat(7);
            data[0] = data[0].slice(0, 7);
        } else if (type == "M") {
            // APPLY CYAN COLOR:
            data[0].name = data[0].name == "" ? "unknown" : data[0].name;
            data[0].moofoll = true;
            data[0].skin = data[0].skin == 10 ? "__proto__" : data[0].skin;
            lastsp = [data[0].name, data[0].moofoll, data[0].skin];
        } else if (type == "D") {
            if (my.lastDir == data[0] || [null, undefined].includes(data[0])) {
                dontSend = true;
            } else {
                my.lastDir = data[0];
            }
        } else if (type == "F") {
            if (!data[2]) {
                dontSend = true;
            } else {
                if (![null, undefined].includes(data[1])) {
                    my.lastDir = data[1];
                }
            }
        } else if (type == "K") {
            if (!data[1]) {
                dontSend = true;
            }
        } else if (type == "S") {
            instaC.wait = !instaC.wait;
            dontSend = true;
        } else if (type == "f") {
            if (data[1]) {
                if (player.moveDir == data[0]) {
                    dontSend = true;
                }
                player.moveDir = data[0];
            } else {
                dontSend = true;
            }
        }
        if (!dontSend) {
            let binary = window.msgpack.encode([type, data]);
            this.nsend(binary);

            // START COUNT:
            if (!firstSend.sec) {
                firstSend.sec = true;
                setTimeout(() => {
                    firstSend.sec = false;
                    secPacket = 0;
                }, secTime);
            }

            secPacket++;
        }
    } else {
        this.nsend(message);
    }
};
const PACKET_LIMIT = 1000;
let socket;

let packetCounter = 0;
let lastFlushTime = Date.now();

function sendPacket(packet) {
    packetCounter++;

    const currentTime = Date.now();
    const elapsedTime = (currentTime - lastFlushTime) / 1000;

    if (elapsedTime >= 1 / PACKET_LIMIT) {
        for (let i = 0; i < packetCounter; i++) {
            socket.emit("packet", packet);
        }
        packetCounter = 0;
        lastFlushTime = currentTime;
    }
}

function packet(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.send(binary);
}

function origPacket(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.nsend(binary);
}

window.leave = function () {
    origPacket("kys", {
        "frvr is so bad": true,
        "sidney is too good": true,
        "dev are too weak": true,
    });
};


//...lol
let io = {
    send: packet
};

function getMessage(message) {
    let data = new Uint8Array(message.data);
    let parsed = window.msgpack.decode(data);
    let type = parsed[0];
    data = parsed[1];
    let events = {
        A: setInitData, // id: setInitData,
        //B: disconnect,
        C: setupGame, // 1: setupGame,
        D: addPlayer, // 2: addPlayer,
        E: removePlayer, // 4: removePlayer,
        a: updatePlayers, // 33: updatePlayers,
        G: updateLeaderboard, // 5: updateLeaderboard,here
        H: loadGameObject, // 6: loadGameObject,
        I: loadAI, // a: loadAI,
        J: animateAI, // aa: animateAI,
        K: gatherAnimation, // 7: gatherAnimation,
        L: wiggleGameObject, // 8: wiggleGameObject,
        M: shootTurret, // sp: shootTurret,
        N: updatePlayerValue, // 9: updatePlayerValue,
        O: updateHealth, // h: updateHealth,//here
        P: killPlayer, // 11: killPlayer,
        Q: killObject, // 12: killObject,
        R: killObjects, // 13: killObjects,
        S: updateItemCounts, // 14: updateItemCounts,
        T: updateAge, // 15: updateAge,
        U: updateUpgrades, // 16: updateUpgrades,
        V: updateItems, // 17: updateItems,
        X: addProjectile, // 18: addProjectile,
        // Y: remProjectile, // 19: remProjectile,
        //Z: serverShutdownNotice,
        //0: addAlliance,
        //1: deleteAlliance,
        2: allianceNotification, // an: allianceNotification,
        3: setPlayerTeam, // st: setPlayerTeam,
        4: setAlliancePlayers, // sa: setAlliancePlayers,
        5: updateStoreItems, // us: updateStoreItems,
        6: receiveChat, // ch: receiveChat,
        7: updateMinimap, // mm: updateMinimap,
        8: showText, // t: showText,
        9: pingMap, // p: pingMap,
        0: pingSocketResponse,
    };
    if (type == "io-init") {
        socketID = data[0];
    } else {
        if (events[type]) {
            events[type].apply(undefined, data);
        }
    }
}

// MATHS:
Math.lerpAngle = function(value1, value2, amount) {
    let difference = Math.abs(value2 - value1);
    if (difference > Math.PI) {
        if (value1 > value2) {
            value2 += Math.PI * 2;
        } else {
            value1 += Math.PI * 2;
        }
    }
    let value = value2 + ((value1 - value2) * amount);
    if (value >= 0 && value <= Math.PI * 2) return value;
    return value % (Math.PI * 2);
};

// REOUNDED RECTANGLE:
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    if (r < 0)
        r = 0;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};

// GLOBAL VALUES:
function resetMoveDir() {
    keys = {};
    io.send("e");
}

let allChats = [];
let ticks = {
    tick: 0,
    delay: 0,
    time: [],
    manage: [],
};
let ais = [];
let players = [];
let alliances = [];
let alliancePlayers = [];
let allianceNotifications = [];
let gameObjects = [];
let liztobj = [];
let projectiles = [];
let deadPlayers = [];

let breakObjects = [];

let player;
let playerSID;
let tmpObj;

let enemy = [];
let nears = [];
let near = [];

let my = {
    reloaded: false,
    waitHit: 0,
    autoAim: false,
    revAim: false,
    ageInsta: true,
    reSync: false,
    bullTick: 0,
    anti0Tick: 0,
    antiSync: false,
    safePrimary: function(tmpObj) {
        return [0, 8].includes(tmpObj.primaryIndex);
    },
    safeSecondary: function(tmpObj) {
        return [10, 11, 14].includes(tmpObj.secondaryIndex);
    },
    lastDir: 0,
    autoPush: false,
    pushData: {}
}

// FIND OBJECTS BY ID/SID:
function findID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.id == tmp);
}

function findSID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.sid == tmp);
}

function findPlayerByID(id) {
    return findID(players, id);
}

function findPlayerBySID(sid) {
    return findSID(players, sid);
}

function findAIBySID(sid) {
    return findSID(ais, sid);
}

function findObjectBySid(sid) {
    return findSID(gameObjects, sid);
}

function findProjectileBySid(sid) {
    return findSID(gameObjects, sid);
}

let gameCanvas = getEl("gameCanvas");
let mainContext = gameCanvas.getContext("2d");
let mapDisplay = getEl("mapDisplay");
let mapContext = mapDisplay.getContext("2d");
mapDisplay.width = 300;
mapDisplay.height = 300;
let storeMenu = getEl("storeMenu");
let storeHolder = getEl("storeHolder");
let upgradeHolder = getEl("upgradeHolder");
let upgradeCounter = getEl("upgradeCounter");
let chatBox = getEl("chatBox");
chatBox.autocomplete = "off";
chatBox.style.textAlign = "center";
chatBox.style.width = "18em";
let chatHolder = getEl("chatHolder");
let actionBar = getEl("actionBar");
let leaderboardData = getEl("leaderboardData");
let itemInfoHolder = getEl("itemInfoHolder");
let menuCardHolder = getEl("menuCardHolder");
let diedText = getEl("diedText");
let mainMenu = getEl("mainMenu")
mainMenu.style.width = "100vw";
mainMenu.style.height = "100vh";
let screenWidth;
let screenHeight;
let maxScreenWidth = config.maxScreenWidth;
let maxScreenHeight = config.maxScreenHeight;
let pixelDensity = 1;
let delta;
let now;
let lastUpdate = performance.now();
let camX;
let camY;
let tmpDir;
let mouseX = 0;
let mouseY = 0;
let allianceMenu = getEl("allianceMenu");
let waterMult = 1;
let waterPlus = 0;

let outlineColor = "#525252";
let darkOutlineColor = "#3d3f42";
let outlineWidth = 5.5;

let firstSetup = true;
let keys = {};
let moveKeys = {
    87: [0, -1],
    38: [0, -1],
    83: [0, 1],
    40: [0, 1],
    65: [-1, 0],
    37: [-1, 0],
    68: [1, 0],
    39: [1, 0],
};
let attackState = 0;
let inGame = false;

let macro = {};
let mills = {
    place: 0,
    placeSpawnPads: 0
};
let lastDir;

let lastLeaderboardData = [];

// ON LOAD:
let inWindow = true;
window.onblur = function() {
    inWindow = false;
};
window.onfocus = function() {
    inWindow = true;
    if (player && player.alive) {
        // resetMoveDir();
    }
};
let ms = {
    avg: 0,
    max: 0,
    min: 0,
    delay: 0
}
function pingSocketResponse() {
    let pingTime = window.pingTime;
    const pingDisplay = document.getElementById("pingDisplay")
    pingDisplay.innerText = "";
    if (pingTime > ms.max || isNaN(ms.max)) {
        ms.max = pingTime;
    }
    if (pingTime < ms.min || isNaN(ms.min)) {
        ms.min = pingTime;
    }

    // if (pingTime >= 90) {
    //     doAutoQ = true;
    // } else {
    //     doAutoQ = false;
    // }
}

let placeVisible = [];

/** CLASS CODES */

class Utils {
    constructor() {

        // MATH UTILS:
        let mathABS = Math.abs,
            mathCOS = Math.cos,
            mathSIN = Math.sin,
            mathPOW = Math.pow,
            mathSQRT = Math.sqrt,
            mathATAN2 = Math.atan2,
            mathPI = Math.PI;

        let _this = this;

        // GLOBAL UTILS:
        this.round = function(n, v) {
            return Math.round(n * v) / v;
        };
        this.toRad = function(angle) {
            return angle * (mathPI / 180);
        };
        this.toAng = function(radian) {
            return radian / (mathPI / 180);
        };
        this.randInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.randFloat = function(min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        this.lerp = function(value1, value2, amount) {
            return value1 + (value2 - value1) * amount;
        };
        this.decel = function(val, cel) {
            if (val > 0) val = Math.max(0, val - cel);
            else if (val < 0) val = Math.min(0, val + cel);
            return val;
        };
        this.collisionDetection = function(obj1, obj2, scale) {
            return mathSQRT((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2) < scale;
        };
        this.getDistance = function(x1, y1, x2, y2) {
            return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
        };
        this.getDist = function(tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
            };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
            };
            return mathSQRT((tmpXY2.x -= tmpXY1.x) * tmpXY2.x + (tmpXY2.y -= tmpXY1.y) * tmpXY2.y);
        };
        this.getDirection = function(x1, y1, x2, y2) {
            return mathATAN2(y1 - y2, x1 - x2);
        };
        this.getDirect = function(tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
            };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
            };
            return mathATAN2(tmpXY1.y - tmpXY2.y, tmpXY1.x - tmpXY2.x);
        };
        this.getAngleDist = function(a, b) {
            let p = mathABS(b - a) % (mathPI * 2);
            return (p > mathPI ? (mathPI * 2) - p : p);
        };
        this.isNumber = function(n) {
            return (typeof n == "number" && !isNaN(n) && isFinite(n));
        };
        this.isString = function(s) {
            return (s && typeof s == "string");
        };
        this.kFormat = function(num) {
            return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
        };
        this.sFormat = function(num) {
            let fixs = [{
                num: 1e3,
                string: "k"
            },
                        {
                            num: 1e6,
                            string: "m"
                        },
                        {
                            num: 1e9,
                            string: "b"
                        },
                        {
                            num: 1e12,
                            string: "q"
                        }
                       ].reverse();
            let sp = fixs.find(v => num >= v.num);
            if (!sp) return num;
            return (num / sp.num).toFixed(1) + sp.string;
        };
        this.capitalizeFirst = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        this.fixTo = function(n, v) {
            return parseFloat(n.toFixed(v));
        };
        this.sortByPoints = function(a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
        };
        this.lineInRect = function(recX, recY, recX2, recY2, x1, y1, x2, y2) {
            let minX = x1;
            let maxX = x2;
            if (x1 > x2) {
                minX = x2;
                maxX = x1;
            }
            if (maxX > recX2)
                maxX = recX2;
            if (minX < recX)
                minX = recX;
            if (minX > maxX)
                return false;
            let minY = y1;
            let maxY = y2;
            let dx = x2 - x1;
            if (Math.abs(dx) > 0.0000001) {
                let a = (y2 - y1) / dx;
                let b = y1 - a * x1;
                minY = a * minX + b;
                maxY = a * maxX + b;
            }
            if (minY > maxY) {
                let tmp = maxY;
                maxY = minY;
                minY = tmp;
            }
            if (maxY > recY2)
                maxY = recY2;
            if (minY < recY)
                minY = recY;
            if (minY > maxY)
                return false;
            return true;
        };
        this.containsPoint = function(element, x, y) {
            let bounds = element.getBoundingClientRect();
            let left = bounds.left + window.scrollX;
            let top = bounds.top + window.scrollY;
            let width = bounds.width;
            let height = bounds.height;

            let insideHorizontal = x > left && x < left + width;
            let insideVertical = y > top && y < top + height;
            return insideHorizontal && insideVertical;
        };
        this.mousifyTouchEvent = function(event) {
            let touch = event.changedTouches[0];
            event.screenX = touch.screenX;
            event.screenY = touch.screenY;
            event.clientX = touch.clientX;
            event.clientY = touch.clientY;
            event.pageX = touch.pageX;
            event.pageY = touch.pageY;
        };
        this.hookTouchEvents = function(element, skipPrevent) {
            let preventDefault = !skipPrevent;
            let isHovering = false;
            // let passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
            let passive = false;
            element.addEventListener("touchstart", this.checkTrusted(touchStart), passive);
            element.addEventListener("touchmove", this.checkTrusted(touchMove), passive);
            element.addEventListener("touchend", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchcancel", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchleave", this.checkTrusted(touchEnd), passive);

            function touchStart(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (element.onmouseover)
                    element.onmouseover(e);
                isHovering = true;
            }

            function touchMove(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (_this.containsPoint(element, e.pageX, e.pageY)) {
                    if (!isHovering) {
                        if (element.onmouseover)
                            element.onmouseover(e);
                        isHovering = true;
                    }
                } else {
                    if (isHovering) {
                        if (element.onmouseout)
                            element.onmouseout(e);
                        isHovering = false;
                    }
                }
            }

            function touchEnd(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (isHovering) {
                    if (element.onclick)
                        element.onclick(e);
                    if (element.onmouseout)
                        element.onmouseout(e);
                    isHovering = false;
                }
            }
        };
        this.removeAllChildren = function(element) {
            while (element.hasChildNodes()) {
                element.removeChild(element.lastChild);
            }
        };
        this.generateElement = function(config) {
            let element = document.createElement(config.tag || "div");

            function bind(configValue, elementValue) {
                if (config[configValue])
                    element[elementValue] = config[configValue];
            }
            bind("text", "textContent");
            bind("html", "innerHTML");
            bind("class", "className");
            for (let key in config) {
                switch (key) {
                    case "tag":
                    case "text":
                    case "html":
                    case "class":
                    case "style":
                    case "hookTouch":
                    case "parent":
                    case "children":
                        continue;
                    default:
                        break;
                }
                element[key] = config[key];
            }
            if (element.onclick)
                element.onclick = this.checkTrusted(element.onclick);
            if (element.onmouseover)
                element.onmouseover = this.checkTrusted(element.onmouseover);
            if (element.onmouseout)
                element.onmouseout = this.checkTrusted(element.onmouseout);
            if (config.style) {
                element.style.cssText = config.style;
            }
            if (config.hookTouch) {
                this.hookTouchEvents(element);
            }
            if (config.parent) {
                config.parent.appendChild(element);
            }
            if (config.children) {
                for (let i = 0; i < config.children.length; i++) {
                    element.appendChild(config.children[i]);
                }
            }
            return element;
        };
        this.checkTrusted = function(callback) {
            return function(ev) {
                if (ev && ev instanceof Event && (ev && typeof ev.isTrusted == "boolean" ? ev.isTrusted : true)) {
                    callback(ev);
                } else {
                    //console.error("Event is not trusted.", ev);
                }
            };
        };
        this.randomString = function(length) {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        this.countInArray = function(array, val) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === val) count++;
            }
            return count;
        };
        this.hexToRgb = function(hex) {
            return hex.slice(1).match(/.{1,2}/g).map(g => parseInt(g, 16));
        };
        this.getRgb = function(r, g, b) {
            return [r / 255, g / 255, b / 255].join(", ");
        };
    }
};
class Animtext {
    // ANIMATED TEXT:
    constructor() {
        // INIT:
        this.init = function(x, y, scale, speed, life, text, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.scale = scale;
            this.startScale = this.scale;
            this.maxScale = scale * 1.5;
            this.scaleSpeed = 0.7;
            this.speed = speed;
            this.life = life;
            this.text = text;
            this.acc = 1;
            this.alpha = 0;
            this.maxLife = life;
            this.ranX = UTILS.randFloat(-1, 1);
        };

        // UPDATE:
        this.update = function(delta) {
            if (this.life) {
                this.life -= delta;
                if (configs.anotherVisual) {
                    this.y -= this.speed * delta * this.acc;
                    this.acc -= delta / (this.maxLife / 2.5);
                    if (this.life <= 200) {
                        if (this.alpha > 0) {
                            this.alpha = Math.max(0, this.alpha - (delta / 300));
                        }
                    } else {
                        if (this.alpha < 1) {
                            this.alpha = Math.min(1, this.alpha + (delta / 100));
                        }
                    }
                    this.x += this.ranX;
                } else {
                    this.y -= this.speed * delta;
                }
                this.scale += this.scaleSpeed * delta;
                if (this.scale >= this.maxScale) {
                    this.scale = this.maxScale;
                    this.scaleSpeed *= -1;
                } else if (this.scale <= this.startScale) {
                    this.scale = this.startScale;
                    this.scaleSpeed = 0;
                }
                if (this.life <= 0) {
                    this.life = 0;
                }
            }
        };

        // RENDER:
        this.render = function(ctxt, xOff, yOff) {
            ctxt.lineWidth = 10;
            ctxt.fillStyle = this.color;
            ctxt.font = this.scale + "px " + (configs.anotherVisual ? "34px Arial" : "Hammersmith One");
            if (configs.anotherVisual) {
                ctxt.globalAlpha = this.alpha;
                ctxt.strokeStyle = darkOutlineColor;
                ctxt.strokeText(this.text, this.x - xOff, this.y - yOff);
            }
            ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
            ctxt.globalAlpha = 1;
        };
    }
};
class Textmanager {
    // TEXT MANAGER:
    constructor() {
        this.texts = [];
        this.stack = [];

        // UPDATE:
        this.update = function(delta, ctxt, xOff, yOff) {
            ctxt.textBaseline = "middle";
            ctxt.textAlign = "center";
            for (let i = 0; i < this.texts.length; ++i) {
                if (this.texts[i].life) {
                    this.texts[i].update(delta);
                    this.texts[i].render(ctxt, xOff, yOff);
                }
            }
        };

        // SHOW TEXT:
        this.showText = function(x, y, scale, speed, life, text, color) {
            let tmpText;
            for (let i = 0; i < this.texts.length; ++i) {
                if (!this.texts[i].life) {
                    tmpText = this.texts[i];
                    break;
                }
            }
            if (!tmpText) {
                tmpText = new Animtext();
                this.texts.push(tmpText);
            }
            tmpText.init(x, y, scale, speed, life, text, color);
        };
    }
}
let Trees = [], Foodbush = [], StoneOreok = [], GoldMines = [];
class GameObject {
    constructor(sid) {
        this.sid = sid;

        // INIT:
        this.init = function(x, y, dir, scale, type, data, owner) {
            data = data || {};
            if (type == 0) Trees.push({ x: x, y: y });
            if (type == 1) Foodbush.push({ x: x, y: y });
            if (type == 2) StoneOreok.push({ x: x, y: y });
            if (type == 3) GoldMines.push({ x: x, y: y });
            this.sentTo = {};
            this.gridLocations = [];
            this.active = true;
            this.render = true;
            this.doUpdate = data.doUpdate;
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.lastDir = dir;
            this.xWiggle = 0;
            this.yWiggle = 0;
            this.visScale = scale;
            this.scale = scale;
            this.type = type;
            this.id = data.id;
            this.owner = owner;
            this.name = data.name;
            this.isItem = (this.id != undefined);
            this.group = data.group;
            this.maxHealth = data.health;
            this.health = this.maxHealth;
            this.layer = 2;
            if (this.group != undefined) {
                this.layer = this.group.layer;
            } else if (this.type == 0) {
                this.layer = 3;
            } else if (this.type == 2) {
                this.layer = 0;
            } else if (this.type == 4) {
                this.layer = -1;
            }
            this.colDiv = data.colDiv || 1;
            this.blocker = data.blocker;
            this.ignoreCollision = data.ignoreCollision;
            this.dontGather = data.dontGather;
            this.hideFromEnemy = data.hideFromEnemy;
            this.friction = data.friction;
            this.projDmg = data.projDmg;
            this.dmg = data.dmg;
            this.pDmg = data.pDmg;
            this.pps = data.pps;
            this.zIndex = data.zIndex || 0;
            this.turnSpeed = data.turnSpeed;
            this.req = data.req;
            this.trap = data.trap;
            this.healCol = data.healCol;
            this.teleport = data.teleport;
            this.boostSpeed = data.boostSpeed;
            this.projectile = data.projectile;
            this.shootRange = data.shootRange;
            this.shootRate = data.shootRate;
            this.shootCount = this.shootRate;
            this.spawnPoint = data.spawnPoint;
            this.onNear = 0;
            this.breakObj = false;
            this.alpha = data.alpha || 1;
            this.maxAlpha = data.alpha || 1;
            this.damaged = 0;
        };

        // GET HIT:
        this.changeHealth = function(amount, doer) {
            this.health += amount;
            return (this.health <= 0);
        };
        // GET SCALE:
        this.getScale = function(sM, ig) {
            sM = sM || 1;
            return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ?
                                 1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
        };
        // VISIBLE TO PLAYER:
        this.visibleToPlayer = function(player) {
            return !(this.hideFromEnemy) || (this.owner && (this.owner == player ||
                                                            (this.owner.team && player.team == this.owner.team)));
        };
        // UPDATE:
        this.update = function(delta) {
            if (this.health != this.healthMov) {
                this.health < this.healthMov ? (this.healthMov -= 1.9) : (this.healthMov += 1.9);
                if (Math.abs(this.health - this.healthMov) < 1.9) this.healthMov = this.health;
            };
            if (this.active) {
                if (this.xWiggle) {
                    this.xWiggle *= Math.pow(0.99, delta);
                }
                if (this.yWiggle) {
                    this.yWiggle *= Math.pow(0.99, delta);
                }
                if (config.anotherVisual) {
                    let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
                    if (d2 > 0.01) {
                        this.dir += d2 / 5;
                    } else {
                        this.dir = this.lastDir;
                    }
                } else {
                    if (this.turnSpeed && this.dmg) {
                        this.dir += this.turnSpeed * delta;
                    }
                }
            } else {
                if (this.alive) {
                    this.alpha -= delta / (200 / this.maxAlpha);
                    this.visScale += delta / (this.scale / 2.5);
                    if (this.alpha <= 0) {
                        this.alpha = 0;
                        this.alive = false;
                    }
                }
            }
        };

        // CHECK TEAM:
        this.isTeamObject = function(tmpObj) {
            return this.owner == null ? true : (this.owner && tmpObj.sid == this.owner.sid || tmpObj.findAllianceBySid(this.owner.sid));
        };
    }
}
class Items {
    constructor() {
        // ITEM GROUPS:
        this.groups = [{
            id: 0,
            name: "food",
            layer: 0
        }, {
            id: 1,
            name: "walls",
            place: true,
            limit: 30,
            layer: 0
        }, {
            id: 2,
            name: "spikes",
            place: true,
            limit: 15,
            layer: 0
        }, {
            id: 3,
            name: "mill",
            place: true,
            limit: 7,
            layer: 1
        }, {
            id: 4,
            name: "mine",
            place: true,
            limit: 1,
            layer: 0
        }, {
            id: 5,
            name: "trap",
            place: true,
            limit: 6,
            layer: -1
        }, {
            id: 6,
            name: "booster",
            place: true,
            limit: 12,
            layer: -1
        }, {
            id: 7,
            name: "turret",
            place: true,
            limit: 2,
            layer: 1
        }, {
            id: 8,
            name: "watchtower",
            place: true,
            limit: 12,
            layer: 1
        }, {
            id: 9,
            name: "buff",
            place: true,
            limit: 4,
            layer: -1
        }, {
            id: 10,
            name: "spawn",
            place: true,
            limit: 1,
            layer: -1
        }, {
            id: 11,
            name: "sapling",
            place: true,
            limit: 2,
            layer: 0
        }, {
            id: 12,
            name: "blocker",
            place: true,
            limit: 3,
            layer: -1
        }, {
            id: 13,
            name: "teleporter",
            place: true,
            limit: 2,
            layer: -1
        }];

        // PROJECTILES:
        this.projectiles = [{
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 25,
            speed: 1.6,
            scale: 103,
            range: 1000
        }, {
            indx: 1,
            layer: 1,
            dmg: 25,
            scale: 20
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 35,
            speed: 2.5,
            scale: 103,
            range: 1200
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 30,
            speed: 2,
            scale: 103,
            range: 1200
        }, {
            indx: 1,
            layer: 1,
            dmg: 16,
            scale: 20
        }, {
            indx: 0,
            layer: 0,
            src: "bullet_1",
            dmg: 50,
            speed: 3.6,
            scale: 160,
            range: 1400
        }];

        // WEAPONS:
        this.weapons = [{
            id: 0,
            type: 0,
            name: "tool hammer",
            desc: "tool for gathering all resources",
            src: "hammer_1",
            length: 140,
            width: 140,
            xOff: -3,
            yOff: 18,
            dmg: 25,
            range: 65,
            gather: 1,
            speed: 300
        }, {
            id: 1,
            type: 0,
            age: 2,
            name: "hand axe",
            desc: "gathers resources at a higher rate",
            src: "axe_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 30,
            spdMult: 1,
            range: 70,
            gather: 2,
            speed: 400
        }, {
            id: 2,
            type: 0,
            age: 8,
            pre: 1,
            name: "great axe",
            desc: "deal more damage and gather more resources",
            src: "great_axe_1",
            length: 140,
            width: 140,
            xOff: -8,
            yOff: 25,
            dmg: 35,
            spdMult: 1,
            range: 75,
            gather: 4,
            speed: 400
        }, {
            id: 3,
            type: 0,
            age: 2,
            name: "short sword",
            desc: "increased attack power but slower move speed",
            src: "sword_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 46,
            dmg: 35,
            spdMult: 0.85,
            range: 110,
            gather: 1,
            speed: 300
        }, {
            id: 4,
            type: 0,
            age: 8,
            pre: 3,
            name: "katana",
            desc: "greater range and damage",
            src: "samurai_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 59,
            dmg: 40,
            spdMult: 0.8,
            range: 118,
            gather: 1,
            speed: 300
        }, {
            id: 5,
            type: 0,
            age: 2,
            name: "polearm",
            desc: "long range melee weapon",
            src: "spear_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 45,
            knock: 0.2,
            spdMult: 0.82,
            range: 142,
            gather: 1,
            speed: 700
        }, {
            id: 6,
            type: 0,
            age: 2,
            name: "bat",
            desc: "fast long range melee weapon",
            src: "bat_1",
            iPad: 1.3,
            length: 110,
            width: 180,
            xOff: -8,
            yOff: 53,
            dmg: 20,
            knock: 0.7,
            range: 110,
            gather: 1,
            speed: 300
        }, {
            id: 7,
            type: 0,
            age: 2,
            name: "daggers",
            desc: "really fast short range weapon",
            src: "dagger_1",
            iPad: 0.8,
            length: 110,
            width: 110,
            xOff: 18,
            yOff: 0,
            dmg: 20,
            knock: 0.1,
            range: 65,
            gather: 1,
            hitSlow: 0.1,
            spdMult: 1.13,
            speed: 100
        }, {
            id: 8,
            type: 0,
            age: 2,
            name: "stick",
            desc: "great for gathering but very weak",
            src: "stick_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 1,
            spdMult: 1,
            range: 70,
            gather: 7,
            speed: 400
        }, {
            id: 9,
            type: 1,
            age: 6,
            name: "hunting bow",
            desc: "bow used for ranged combat and hunting",
            src: "bow_1",
            req: ["wood", 4],
            length: 120,
            width: 120,
            xOff: -6,
            yOff: 0,
            Pdmg: 25,
            projectile: 0,
            spdMult: 0.75,
            speed: 600
        }, {
            id: 10,
            type: 1,
            age: 6,
            name: "great hammer",
            desc: "hammer used for destroying structures",
            src: "great_hammer_1",
            length: 140,
            width: 140,
            xOff: -9,
            yOff: 25,
            dmg: 10,
            Pdmg: 10,
            spdMult: 0.88,
            range: 75,
            sDmg: 7.5,
            gather: 1,
            speed: 400
        }, {
            id: 11,
            type: 1,
            age: 6,
            name: "wooden shield",
            desc: "blocks projectiles and reduces melee damage",
            src: "shield_1",
            length: 120,
            width: 120,
            shield: 0.2,
            xOff: 6,
            yOff: 0,
            Pdmg: 0,
            spdMult: 0.7
        }, {
            id: 12,
            type: 1,
            age: 8,
            pre: 9,
            name: "crossbow",
            desc: "deals more damage and has greater range",
            src: "crossbow_1",
            req: ["wood", 5],
            aboveHand: true,
            armS: 0.75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            Pdmg: 35,
            projectile: 2,
            spdMult: 0.7,
            speed: 700
        }, {
            id: 13,
            type: 1,
            age: 9,
            pre: 12,
            name: "repeater crossbow",
            desc: "high firerate crossbow with reduced damage",
            src: "crossbow_2",
            req: ["wood", 10],
            aboveHand: true,
            armS: 0.75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            Pdmg: 30,
            projectile: 3,
            spdMult: 0.7,
            speed: 230
        }, {
            id: 14,
            type: 1,
            age: 6,
            name: "mc grabby",
            desc: "steals resources from enemies",
            src: "grab_1",
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 0,
            Pdmg: 0,
            steal: 250,
            knock: 0.2,
            spdMult: 1.05,
            range: 125,
            gather: 0,
            speed: 700
        }, {
            id: 15,
            type: 1,
            age: 9,
            pre: 12,
            name: "musket",
            desc: "slow firerate but high damage and range",
            src: "musket_1",
            req: ["stone", 10],
            aboveHand: true,
            rec: 0.35,
            armS: 0.6,
            hndS: 0.3,
            hndD: 1.6,
            length: 205,
            width: 205,
            xOff: 25,
            yOff: 0,
            Pdmg: 50,
            projectile: 5,
            hideProjectile: true,
            spdMult: 0.6,
            speed: 1500
        }];

        // ITEMS:
        this.list = [{
            group: this.groups[0],
            name: "apple",
            desc: "restores 20 health when consumed",
            req: ["food", 10],
            consume: function(doer) {
                return doer.changeHealth(20, doer);
            },
            scale: 22,
            holdOffset: 15,
            healing: 20,
            itemID: 0,
            itemAID: 16,
        }, {
            age: 3,
            group: this.groups[0],
            name: "cookie",
            desc: "restores 40 health when consumed",
            req: ["food", 15],
            consume: function(doer) {
                return doer.changeHealth(40, doer);
            },
            scale: 27,
            holdOffset: 15,
            healing: 40,
            itemID: 1,
            itemAID: 17,
        }, {
            age: 7,
            group: this.groups[0],
            name: "cheese",
            desc: "restores 30 health and another 50 over 5 seconds",
            req: ["food", 25],
            consume: function(doer) {
                if (doer.changeHealth(30, doer) || doer.health < 100) {
                    doer.dmgOverTime.dmg = -10;
                    doer.dmgOverTime.doer = doer;
                    doer.dmgOverTime.time = 5;
                    return true;
                }
                return false;
            },
            scale: 27,
            holdOffset: 15,
            healing: 30,
            itemID: 2,
            itemAID: 18,
        }, {
            group: this.groups[1],
            name: "wood wall",
            desc: "provides protection for your village",
            req: ["wood", 10],
            projDmg: true,
            health: 380,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 3,
            itemAID: 19,
        }, {
            age: 3,
            group: this.groups[1],
            name: "stone wall",
            desc: "provides improved protection for your village",
            req: ["stone", 25],
            health: 900,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 4,
            itemAID: 20,
        }, {
            age: 7,
            group: this.groups[1],
            name: "castle wall",
            desc: "provides powerful protection for your village",
            req: ["stone", 35],
            health: 1500,
            scale: 52,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 5,
            itemAID: 21,
        }, {
            group: this.groups[2],
            name: "spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 20, "stone", 5],
            health: 400,
            dmg: 20,
            scale: 49,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 6,
            itemAID: 22,
            shadow: {
                offsetX: 5, // Adjust the shadow's X offset as needed
                offsetY: 5, // Adjust the shadow's Y offset as needed
                blur: 20,  // Adjust the shadow's blur as needed
                color: "rgba(0, 0, 0, 0.5)" // Adjust the shadow's color and transparency as needed
            }

        }, {
            age: 5,
            group: this.groups[2],
            name: "greater spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 10],
            health: 500,
            dmg: 35,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 7,
            itemAID: 23,
        }, {
            age: 9,
            group: this.groups[2],
            name: "poison spikes",
            desc: "poisons enemies when they touch them",
            req: ["wood", 35, "stone", 15],
            health: 600,
            dmg: 30,
            pDmg: 5,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 8,
            itemAID: 24,
        }, {
            age: 9,
            group: this.groups[2],
            name: "spinning spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 20],
            health: 500,
            dmg: 45,
            turnSpeed: 0.003,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 9,
            itemAID: 25,
        }, {
            group: this.groups[3],
            name: "windmill",
            desc: "generates gold over time",
            req: ["wood", 50, "stone", 10],
            health: 400,
            pps: 1,
            turnSpeed: 0.0016,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 45,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 10,
            itemAID: 26,
        }, {
            age: 5,
            group: this.groups[3],
            name: "faster windmill",
            desc: "generates more gold over time",
            req: ["wood", 60, "stone", 20],
            health: 500,
            pps: 1.5,
            turnSpeed: 0.0025,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 11,
            itemAID: 27,
        }, {
            age: 8,
            group: this.groups[3],
            name: "power mill",
            desc: "generates more gold over time",
            req: ["wood", 100, "stone", 50],
            health: 800,
            pps: 2,
            turnSpeed: 0.005,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 12,
            itemAID: 28,
        }, {
            age: 5,
            group: this.groups[4],
            type: 2,
            name: "mine",
            desc: "allows you to mine stone",
            req: ["wood", 20, "stone", 100],
            iconLineMult: 12,
            scale: 65,
            holdOffset: 20,
            placeOffset: 0,
            itemID: 13,
            itemAID: 29,
        }, {
            age: 5,
            group: this.groups[11],
            type: 0,
            name: "sapling",
            desc: "allows you to farm wood",
            req: ["wood", 150],
            iconLineMult: 12,
            colDiv: 0.5,
            scale: 110,
            holdOffset: 50,
            placeOffset: -15,
            itemID: 14,
            itemAID: 30,
        }, {
            age: 4,
            group: this.groups[5],
            name: "pit trap",
            desc: "pit that traps enemies if they walk over it",
            req: ["wood", 30, "stone", 30],
            trap: true,
            ignoreCollision: true,
            hideFromEnemy: true,
            health: 500,
            colDiv: 0.2,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            alpha: 0.6,
            itemID: 15,
            itemAID: 31,
        }, {
            age: 4,
            group: this.groups[6],
            name: "boost pad",
            desc: "provides boost when stepped on",
            req: ["stone", 20, "wood", 5],
            ignoreCollision: true,
            boostSpeed: 1.5,
            health: 150,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 16,
            itemAID: 32,
        }, {
            age: 7,
            group: this.groups[7],
            doUpdate: true,
            name: "turret",
            desc: "defensive structure that shoots at enemies",
            req: ["wood", 200, "stone", 150],
            health: 800,
            projectile: 1,
            shootRange: 700,
            shootRate: 2200,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 17,
            itemAID: 33,
        }, {
            age: 7,
            group: this.groups[8],
            name: "platform",
            desc: "platform to shoot over walls and cross over water",
            req: ["wood", 20],
            ignoreCollision: true,
            zIndex: 1,
            health: 300,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 18,
            itemAID: 34,
        }, {
            age: 7,
            group: this.groups[9],
            name: "healing pad",
            desc: "standing on it will slowly heal you",
            req: ["wood", 30, "food", 10],
            ignoreCollision: true,
            healCol: 15,
            health: 400,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 19,
            itemAID: 35,
        }, {
            age: 9,
            group: this.groups[10],
            name: "spawn pad",
            desc: "you will spawn here when you die but it will dissapear",
            req: ["wood", 100, "stone", 100],
            health: 400,
            ignoreCollision: true,
            spawnPoint: true,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 20,
            itemAID: 36,
        }, {
            age: 7,
            group: this.groups[12],
            name: "blocker",
            desc: "blocks building in radius",
            req: ["wood", 30, "stone", 25],
            ignoreCollision: true,
            blocker: 300,
            health: 400,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 21,
            itemAID: 37,
        }, {
            age: 7,
            group: this.groups[13],
            name: "teleporter",
            desc: "teleports you to a random point on the map",
            req: ["wood", 60, "stone", 60],
            ignoreCollision: true,
            teleport: true,
            health: 200,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 22,
            itemAID: 38
        }];

        // CHECK ITEM ID:
        this.checkItem = {
            index: function(id, myItems) {
                return [0, 1, 2].includes(id) ? 0 : [3, 4, 5].includes(id) ? 1 : [6, 7, 8, 9].includes(id) ? 2 : [10, 11, 12].includes(id) ? 3 : [13, 14].includes(id) ? 5 : [15, 16].includes(id) ? 4 : [17, 18, 19, 21, 22].includes(id) ? [13, 14].includes(myItems) ? 6 :
                5 :
                id == 20 ? [13, 14].includes(myItems) ? 7 :
                6 :
                undefined;
            }
        }

        // ASSIGN IDS:
        for (let i = 0; i < this.list.length; ++i) {
            this.list[i].id = i;
            if (this.list[i].pre) this.list[i].pre = i - this.list[i].pre;
        }

        // TROLOLOLOL:
        if (typeof window !== "undefined") {
            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
            }
            //shuffle(this.list);
        }
    }
}
class Objectmanager {
    constructor(GameObject, liztobj, UTILS, config, players, server) {
        let mathFloor = Math.floor,
            mathABS = Math.abs,
            mathCOS = Math.cos,
            mathSIN = Math.sin,
            mathPOW = Math.pow,
            mathSQRT = Math.sqrt;

        this.ignoreAdd = false;
        this.hitObj = [];

        // DISABLE OBJ:
        this.disableObj = function(obj) {
            obj.active = false;
        };

        // ADD NEW:
        let tmpObj;
        this.add = function(sid, x, y, dir, s, type, data, setSID, owner) {
            tmpObj = findObjectBySid(sid);
            if (!tmpObj) {
                tmpObj = gameObjects.find((tmp) => !tmp.active);
                if (!tmpObj) {
                    tmpObj = new GameObject(sid);
                    gameObjects.push(tmpObj);
                }
            }
            if (setSID) {
                tmpObj.sid = sid;
            }
            tmpObj.init(x, y, dir, s, type, data, owner);
        };

        // DISABLE BY SID:
        this.disableBySid = function(sid) {
            let find = findObjectBySid(sid);
            if (find) {
                this.disableObj(find);
            }
        };

        // REMOVE ALL FROM PLAYER:
        this.removeAllItems = function(sid, server) {
            gameObjects.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid).forEach((tmp) => this.disableObj(tmp));
        };

        // CHECK IF PLACABLE:
        this.checkItemLocation = function(x, y, s, sM, indx, ignoreWater, placer) {
            let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(x, y, tmp.x, tmp.y) < s + (tmp.blocker ? tmp.blocker : tmp.getScale(sM, tmp.isItem)));
            if (cantPlace) return false;
            if (!ignoreWater && indx != 18 && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2) return false;
            return true;
        };

    }
}
class Projectile {
    constructor(players, ais, objectManager, items, config, UTILS, server) {
        // INIT:
        this.init = function (indx, x, y, dir, spd, dmg, rng, scl, owner) {
            this.active = true;
            this.tickActive = true;
            this.indx = indx;
            this.x = x;
            this.y = y;
            this.x2 = x;
            this.y2 = y;
            this.dir = dir;
            this.skipMov = true;
            this.speed = spd;
            this.dmg = dmg;
            this.scale = scl;
            this.range = rng;
            this.r2 = rng;
            this.owner = owner;
        };

        // UPDATE:
        this.update = function (delta) {
            if (this.active) {
                let tmpSpeed = this.speed * delta;
                if (!this.skipMov) {
                    this.x += tmpSpeed * Math.cos(this.dir);
                    this.y += tmpSpeed * Math.sin(this.dir);
                    this.range -= tmpSpeed;
                    if (this.range <= 0) {
                        this.x += this.range * Math.cos(this.dir);
                        this.y += this.range * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.range = 0;
                        this.active = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
        this.tickUpdate = function (delta) {
            if (this.tickActive) {
                let tmpSpeed = this.speed * delta;
                if (!this.skipMov) {
                    this.x2 += tmpSpeed * Math.cos(this.dir);
                    this.y2 += tmpSpeed * Math.sin(this.dir);
                    this.r2 -= tmpSpeed;
                    if (this.r2 <= 0) {
                        this.x2 += this.r2 * Math.cos(this.dir);
                        this.y2 += this.r2 * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.r2 = 0;
                        this.tickActive = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
    }
}
class Store {
    constructor() {
        // STORE HATS:
        this.hats = [{
            id: 45,
            name: "Shame!",
            dontSell: true,
            price: 0,
            scale: 120,
            desc: "hacks are for winners"
        }, {
            id: 51,
            name: "Moo Cap",
            price: 0,
            scale: 120,
            desc: "coolest mooer around"
        }, {
            id: 50,
            name: "Apple Cap",
            price: 0,
            scale: 120,
            desc: "apple farms remembers"
        }, {
            id: 28,
            name: "Moo Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 29,
            name: "Pig Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 30,
            name: "Fluff Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 36,
            name: "Pandou Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 37,
            name: "Bear Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 38,
            name: "Monkey Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 44,
            name: "Polar Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 35,
            name: "Fez Hat",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 42,
            name: "Enigma Hat",
            price: 0,
            scale: 120,
            desc: "join the enigma army"
        }, {
            id: 43,
            name: "Blitz Hat",
            price: 0,
            scale: 120,
            desc: "hey everybody i'm blitz"
        }, {
            id: 49,
            name: "Bob XIII Hat",
            price: 0,
            scale: 120,
            desc: "like and subscribe"
        }, {
            id: 57,
            name: "Pumpkin",
            price: 50,
            scale: 120,
            desc: "Spooooky"
        }, {
            id: 8,
            name: "Bummle Hat",
            price: 100,
            scale: 120,
            desc: "no effect"
        }, {
            id: 2,
            name: "Straw Hat",
            price: 500,
            scale: 120,
            desc: "no effect"
        }, {
            id: 15,
            name: "Winter Cap",
            price: 600,
            scale: 120,
            desc: "allows you to move at normal speed in snow",
            coldM: 1
        }, {
            id: 5,
            name: "Cowboy Hat",
            price: 1000,
            scale: 120,
            desc: "no effect"
        }, {
            id: 4,
            name: "Ranger Hat",
            price: 2000,
            scale: 120,
            desc: "no effect"
        }, {
            id: 18,
            name: "Explorer Hat",
            price: 2000,
            scale: 120,
            desc: "no effect"
        }, {
            id: 31,
            name: "Flipper Hat",
            price: 2500,
            scale: 120,
            desc: "have more control while in water",
            watrImm: true
        }, {
            id: 1,
            name: "Marksman Cap",
            price: 3000,
            scale: 120,
            desc: "increases arrow speed and range",
            aMlt: 1.3
        }, {
            id: 10,
            name: "Bush Gear",
            price: 3000,
            scale: 160,
            desc: "allows you to disguise yourself as a bush"
        }, {
            id: 48,
            name: "Halo",
            price: 3000,
            scale: 120,
            desc: "no effect"
        }, {
            id: 6,
            name: "Anti Insta",
            price: 4000,
            scale: 120,
            desc: "reduces damage taken but slows movement",
            spdMult: 0.94,
            dmgMult: 0.75
        }, {
            id: 23,
            name: "Anti Venom Gear",
            price: 4000,
            scale: 120,
            desc: "makes you immune to poison",
            poisonRes: 1
        }, {
            id: 13,
            name: "Medic Gear",
            price: 5000,
            scale: 110,
            desc: "slowly regenerates health over time",
            healthRegen: 3
        }, {
            id: 9,
            name: "Miners Helmet",
            price: 5000,
            scale: 120,
            desc: "earn 1 extra gold per resource",
            extraGold: 9999
        }, {
            id: 32,
            name: "Musketeer Hat",
            price: 5000,
            scale: 120,
            desc: "reduces cost of projectiles",
            projCost: 0.5
        }, {
            id: 7,
            name: "Bull Helmet",
            price: 6000,
            scale: 120,
            desc: "increases damage done but drains health",
            healthRegen: -5,
            dmgMultO: 1.5,
            spdMult: 0.96
        }, {
            id: 22,
            name: "Emp Helmet",
            price: 6000,
            scale: 120,
            desc: "turrets won't attack but you move slower",
            antiTurret: 1,
            spdMult: 0.7
        }, {
            id: 12,
            name: "Booster Hat",
            price: 6000,
            scale: 120,
            desc: "increases your movement speed",
            spdMult: 1.16
        }, {
            id: 26,
            name: "Barbarian Armor",
            price: 8000,
            scale: 120,
            desc: "knocks back enemies that attack you",
            dmgK: 0.6
        }, {
            id: 21,
            name: "Plague Mask",
            price: 10000,
            scale: 120,
            desc: "melee attacks deal poison damage",
            poisonDmg: 5,
            poisonTime: 6
        }, {
            id: 46,
            name: "Bull Mask",
            price: 10000,
            scale: 120,
            desc: "bulls won't target you unless you attack them",
            bullRepel: 1
        }, {
            id: 14,
            name: "Windmill Hat",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "generates points while worn",
            pps: 1.5
        }, {
            id: 11,
            name: "Spike Gear",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "deal damage to players that damage you",
            dmg: 0.45
        }, {
            id: 53,
            name: "Turret Gear",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "you become a walking turret",
            turret: {
                proj: 1,
                range: 700,
                rate: 2500
            },
            spdMult: 0.7
        }, {
            id: 20,
            name: "Samurai Armor",
            price: 12000,
            scale: 120,
            desc: "increased attack speed and fire rate",
            atkSpd: 0.78
        }, {
            id: 58,
            name: "Dark Knight",
            price: 12000,
            scale: 120,
            desc: "restores health when you deal damage",
            healD: 0.4
        }, {
            id: 27,
            name: "Scavenger Gear",
            price: 15000,
            scale: 120,
            desc: "earn double points for each kill",
            kScrM: 2
        }, {
            id: 40,
            name: "Tank Gear",
            price: 15000,
            scale: 120,
            desc: "increased damage to buildings but slower movement",
            spdMult: 0.3,
            bDmg: 3.3
        }, {
            id: 52,
            name: "Thief Gear",
            price: 15000,
            scale: 120,
            desc: "steal half of a players gold when you kill them",
            goldSteal: 0.5
        }, {
            id: 55,
            name: "Bloodthirster",
            price: 20000,
            scale: 120,
            desc: "Restore Health when dealing damage. And increased damage",
            healD: 0.25,
            dmgMultO: 1.2,
        }, {
            id: 56,
            name: "Assassin Gear",
            price: 20000,
            scale: 120,
            desc: "Go invisible when not moving. Can't eat. Increased speed",
            noEat: true,
            spdMult: 1.1,
            invisTimer: 1000
        }];

        // STORE ACCESSORIES:
        this.accessories = [{
            id: 12,
            name: "Snowball",
            price: 1000,
            scale: 105,
            xOff: 18,
            desc: "no effect"
        }, {
            id: 9,
            name: "Tree Cape",
            price: 1000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 10,
            name: "Stone Cape",
            price: 1000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 3,
            name: "Cookie Cape",
            price: 1500,
            scale: 90,
            desc: "no effect"
        }, {
            id: 8,
            name: "Cow Cape",
            price: 2000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 11,
            name: "Monkey Tail",
            price: 2000,
            scale: 97,
            xOff: 25,
            desc: "Super speed but reduced damage",
            spdMult: 1.35,
            dmgMultO: 0.2
        }, {
            id: 17,
            name: "Apple Basket",
            price: 3000,
            scale: 80,
            xOff: 12,
            desc: "slowly regenerates health over time",
            healthRegen: 1
        }, {
            id: 6,
            name: "Winter Cape",
            price: 3000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 4,
            name: "Skull Cape",
            price: 4000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 5,
            name: "Dash Cape",
            price: 5000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 2,
            name: "Dragon Cape",
            price: 6000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 1,
            name: "Super Cape",
            price: 8000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 7,
            name: "Troll Cape",
            price: 8000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 14,
            name: "Thorns",
            price: 10000,
            scale: 115,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 15,
            name: "Blockades",
            price: 10000,
            scale: 95,
            xOff: 15,
            desc: "no effect"
        }, {
            id: 20,
            name: "Devils Tail",
            price: 10000,
            scale: 95,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 16,
            name: "Sawblade",
            price: 12000,
            scale: 90,
            spin: true,
            xOff: 0,
            desc: "deal damage to players that damage you",
            dmg: 0.15
        }, {
            id: 13,
            name: "Angel Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "slowly regenerates health over time",
            healthRegen: 3
        }, {
            id: 19,
            name: "Shadow Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "increased movement speed",
            spdMult: 1.1
        }, {
            id: 18,
            name: "Blood Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "restores health when you deal damage",
            healD: 0.2
        }, {
            id: 21,
            name: "Corrupt X Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "deal damage to players that damage you",
            dmg: 0.25
        }];
    }
};
class ProjectileManager {
    constructor(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
        this.addProjectile = function(x, y, dir, range, speed, indx, owner, ignoreObj, layer, inWindow) {
            let tmpData = items.projectiles[indx];
            let tmpProj;
            for (let i = 0; i < projectiles.length; ++i) {
                if (!projectiles[i].active) {
                    tmpProj = projectiles[i];
                    break;
                }
            }
            if (!tmpProj) {
                tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server);
                tmpProj.sid = projectiles.length;
                projectiles.push(tmpProj);
            }
            tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
            tmpProj.ignoreObj = ignoreObj;
            tmpProj.layer = layer || tmpData.layer;
            tmpProj.inWindow = inWindow;
            tmpProj.src = tmpData.src;
            return tmpProj;
        };
    }
};
class AiManager {

    // AI MANAGER:
    constructor(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {

        // AI TYPES:
        this.aiTypes = [{
            id: 0,
            src: "cow_1",
            killScore: 150,
            health: 500,
            weightM: 0.8,
            speed: 0.00095,
            turnSpeed: 0.001,
            scale: 72,
            drop: ["food", 50]
        }, {
            id: 1,
            src: "pig_1",
            killScore: 200,
            health: 800,
            weightM: 0.6,
            speed: 0.00085,
            turnSpeed: 0.001,
            scale: 72,
            drop: ["food", 80]
        }, {
            id: 2,
            name: "Bull",
            src: "bull_2",
            hostile: true,
            dmg: 20,
            killScore: 1000,
            health: 1800,
            weightM: 0.5,
            speed: 0.00094,
            turnSpeed: 0.00074,
            scale: 78,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 100]
        }, {
            id: 3,
            name: "Bully",
            src: "bull_1",
            hostile: true,
            dmg: 20,
            killScore: 2000,
            health: 2800,
            weightM: 0.45,
            speed: 0.001,
            turnSpeed: 0.0008,
            scale: 90,
            viewRange: 900,
            chargePlayer: true,
            drop: ["food", 400]
        }, {
            id: 4,
            name: "Wolf",
            src: "wolf_1",
            hostile: true,
            dmg: 8,
            killScore: 500,
            health: 300,
            weightM: 0.45,
            speed: 0.001,
            turnSpeed: 0.002,
            scale: 84,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 200]
        }, {
            id: 5,
            name: "Quack",
            src: "chicken_1",
            dmg: 8,
            killScore: 2000,
            noTrap: true,
            health: 300,
            weightM: 0.2,
            speed: 0.0018,
            turnSpeed: 0.006,
            scale: 70,
            drop: ["food", 100]
        }, {
            id: 6,
            name: "MOOSTAFA",
            nameScale: 50,
            src: "enemy",
            hostile: true,
            dontRun: true,
            fixedSpawn: true,
            spawnDelay: 60000,
            noTrap: true,
            colDmg: 100,
            dmg: 40,
            killScore: 8000,
            health: 18000,
            weightM: 0.4,
            speed: 0.0007,
            turnSpeed: 0.01,
            scale: 80,
            spriteMlt: 1.8,
            leapForce: 0.9,
            viewRange: 1000,
            hitRange: 210,
            hitDelay: 1000,
            chargePlayer: true,
            drop: ["food", 100]
        }, {
            id: 7,
            name: "Treasure",
            hostile: true,
            nameScale: 35,
            src: "crate_1",
            fixedSpawn: true,
            spawnDelay: 120000,
            colDmg: 200,
            killScore: 5000,
            health: 20000,
            weightM: 0.1,
            speed: 0.0,
            turnSpeed: 0.0,
            scale: 70,
            spriteMlt: 1.0
        }, {
            id: 8,
            name: "MOOFIE",
            src: "wolf_2",
            hostile: true,
            fixedSpawn: true,
            dontRun: true,
            hitScare: 4,
            spawnDelay: 30000,
            noTrap: true,
            nameScale: 35,
            dmg: 10,
            colDmg: 100,
            killScore: 3000,
            health: 7000,
            weightM: 0.45,
            speed: 0.0015,
            turnSpeed: 0.002,
            scale: 90,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 1000]
        }];

        // SPAWN AI:
        this.spawn = function(x, y, dir, index) {
            let tmpObj = ais.find((tmp) => !tmp.active);
            if (!tmpObj) {
                tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server);
                ais.push(tmpObj);
            }
            tmpObj.init(x, y, dir, index, this.aiTypes[index]);
            return tmpObj;
        };
    }

};
class AI {
    constructor(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
        this.sid = sid;
        this.isAI = true;
        this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1);

        // INIT:
        this.init = function(x, y, dir, index, data) {
            this.x = x;
            this.y = y;
            this.startX = data.fixedSpawn ? x : null;
            this.startY = data.fixedSpawn ? y : null;
            this.xVel = 0;
            this.yVel = 0;
            this.zIndex = 0;
            this.dir = dir;
            this.dirPlus = 0;
            this.showName = 'aaa';
            this.index = index;
            this.src = data.src;
            if (data.name) this.name = data.name;
            this.weightM = data.weightM;
            this.speed = data.speed;
            this.killScore = data.killScore;
            this.turnSpeed = data.turnSpeed;
            this.scale = data.scale;
            this.maxHealth = data.health;
            this.leapForce = data.leapForce;
            this.health = this.maxHealth;
            this.chargePlayer = data.chargePlayer;
            this.viewRange = data.viewRange;
            this.drop = data.drop;
            this.dmg = data.dmg;
            this.hostile = data.hostile;
            this.dontRun = data.dontRun;
            this.hitRange = data.hitRange;
            this.hitDelay = data.hitDelay;
            this.hitScare = data.hitScare;
            this.spriteMlt = data.spriteMlt;
            this.nameScale = data.nameScale;
            this.colDmg = data.colDmg;
            this.noTrap = data.noTrap;
            this.spawnDelay = data.spawnDelay;
            this.hitWait = 0;
            this.waitCount = 1000;
            this.moveCount = 0;
            this.targetDir = 0;
            this.active = true;
            this.alive = true;
            this.runFrom = null;
            this.chargeTarget = null;
            this.dmgOverTime = {};
        };

        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function(delta) {
            if (this.animTime > 0) {
                this.animTime -= delta;
                if (this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if (animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if (tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };

        // ANIMATION:
        this.startAnim = function() {
            this.animTime = this.animSpeed = 600;
            this.targetAngle = Math.PI * 0.8;
            tmpRatio = 0;
            animIndex = 0;
        };

    };

};
class addCh {
    constructor(x, y, chat, tmpObj) {
        this.x = x;
        this.y = y;
        this.alpha = 0;
        this.active = true;
        this.alive = false;
        this.chat = chat;
        this.owner = tmpObj;
    };
};
class DeadPlayer {
    constructor(x, y, dir, buildIndex, weaponIndex, weaponVariant, skinColor, scale, name) {
        this.x = x;
        this.y = y;
        this.lastDir = dir;
        this.dir = dir + Math.PI;
        this.buildIndex = buildIndex;
        this.weaponIndex = weaponIndex;
        this.weaponVariant = weaponVariant;
        this.skinColor = skinColor;
        this.scale = scale;
        this.visScale = 0;
        this.name = name;
        this.alpha = 1;
        this.active = true;
        this.animate = function(delta) {
            let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
            if (d2 > 0.01) {
                this.dir += d2 / 20;
            } else {
                this.dir = this.lastDir;
            }
            if (this.visScale < this.scale) {
                this.visScale += delta / (this.scale / 2);
                if (this.visScale >= this.scale) {
                    this.visScale = this.scale;
                }
            }
            this.alpha -= delta / 30000;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.active = false;
            }
        }
    }
};
class Player {
    constructor(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
        this.id = id;
        this.sid = sid;
        this.tmpScore = 0;
        this.team = null;
        this.latestSkin = 0;
        this.oldSkinIndex = 0;
        this.skinIndex = 0;
        this.latestTail = 0;
        this.oldTailIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.lastHit = 0;
        this.showName = 'NOOO';
        this.tails = {};
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].price <= 0)
                this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].price <= 0)
                this.skins[hats[i].id] = 1;
        }
        this.points = 0;
        this.dt = 0;
        this.hidden = false;
        this.itemCounts = {};
        this.isPlayer = true;
        this.pps = 0;
        this.moveDir = undefined;
        this.skinRot = 0;
        this.lastPing = 0;
        this.iconIndex = 0;
        this.skinColor = 0;
        this.dist2 = 0;
        this.aim2 = 0;
        this.maxSpeed = 1;
        this.chat = {
            message: null,
            count: 0
        };
        this.backupNobull = true;

        // SPAWN:
        this.spawn = function(moofoll) {
            this.attacked = false;
            this.timeDamaged = 0;
            this.timeHealed = 0;
            this.pinge = 0;
            this.millPlace = 'NOOO';
            this.lastshamecount = 0;
            this.death = false;
            this.spinDir = 0;
            this.sync = false;
            this.antiBull = 0;
            this.bullTimer = 0;
            this.poisonTimer = 0;
            this.active = true;
            this.alive = true;
            this.lockMove = false;
            this.lockDir = false;
            this.minimapCounter = 0;
            this.chatCountdown = 0;
            this.shameCount = 0;
            this.shameTimer = 0;
            this.sentTo = {};
            this.gathering = 0;
            this.gatherIndex = 0;
            this.shooting = {};
            this.shootIndex = 9;
            this.autoGather = 0;
            this.animTime = 0;
            this.animSpeed = 0;
            this.mouseState = 0;
            this.buildIndex = -1;
            this.weaponIndex = 0;
            this.weaponCode = 0;
            this.weaponVariant = 0;
            this.primaryIndex = undefined;
            this.secondaryIndex = undefined;
            this.dmgOverTime = {};
            this.noMovTimer = 0;
            this.maxXP = 300;
            this.XP = 0;
            this.age = 1;
            this.kills = 0;
            this.upgrAge = 2;
            this.upgradePoints = 0;
            this.x = 0;
            this.y = 0;
            this.oldXY = {
                x: 0,
                y: 0
            };
            this.zIndex = 0;
            this.xVel = 0;
            this.yVel = 0;
            this.slowMult = 1;
            this.dir = 0;
            this.dirPlus = 0;
            this.targetDir = 0;
            this.targetAngle = 0;
            this.maxHealth = 100;
            this.health = this.maxHealth;
            this.oldHealth = this.maxHealth;
            this.damaged = 0;
            this.scale = config.playerScale;
            this.speed = config.playerSpeed;
            this.resetMoveDir();
            this.resetResources(moofoll);
            this.items = [0, 3, 6, 10];
            this.weapons = [0];
            this.shootCount = 0;
            this.weaponXP = [];
            this.reloads = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                53: 0,
            };
            this.bowThreat = {
                9: 0,
                12: 0,
                13: 0,
                15: 0,
            };
            this.damageThreat = 0;
            this.inTrap = false;
            this.canEmpAnti = false;
            this.empAnti = false;
            this.soldierAnti = false;
            this.poisonTick = 0;
            this.bullTick = 0;
            this.setPoisonTick = false;
            this.setBullTick = false;
            this.antiTimer = 2;
        };

        // RESET MOVE DIR:
        this.resetMoveDir = function() {
            this.moveDir = undefined;
        };

        // RESET RESOURCES:
        this.resetResources = function(moofoll) {
            for (let i = 0; i < config.resourceTypes.length; ++i) {
                this[config.resourceTypes[i]] = moofoll ? 100 : 0;
            }
        };

        // ADD ITEM:
        this.getItemType = function(id) {
            let findindx = this.items.findIndex((ids) => ids == id);
            if (findindx != -1) {
                return findindx;
            } else {
                return items.checkItem.index(id, this.items);
            }
        };

        // SET DATA:
        this.setData = function(data) {
            this.id = data[0];
            this.sid = data[1];
            this.name = data[2];
            this.x = data[3];
            this.y = data[4];
            this.dir = data[5];
            this.health = data[6];
            this.maxHealth = data[7];
            this.scale = data[8];
            this.skinColor = data[9];
        };

        // UPDATE POISON TICK:
        this.updateTimer = function() {

            this.bullTimer -= 1;
            if (this.bullTimer <= 0) {
                this.setBullTick = false;
                this.bullTick = game.tick - 1;
                this.bullTimer = config.serverUpdateRate;
            }
            this.poisonTimer -= 1;
            if (this.poisonTimer <= 0) {
                this.setPoisonTick = false;
                this.poisonTick = game.tick - 1;
                this.poisonTimer = config.serverUpdateRate;
            }

        };
        this.update = function(delta) {
            if (this.active) {
                let gear = {
                    skin: findID(hats, this.skinIndex),
                    tail: findID(accessories, this.tailIndex)
                }
                let spdMult = ((this.buildIndex >= 0) ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (gear.skin ? (gear.skin.spdMult || 1) : 1) * (gear.tail ? (gear.tail.spdMult || 1) : 1) * (this.y <= config.snowBiomeTop ? ((gear.skin && gear.skin.coldM) ? 1 : config.snowSpeed) : 1) * this.slowMult;
                this.maxSpeed = spdMult;
            }
        };

        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function(delta) {
            if (this.animTime > 0) {
                this.animTime -= delta;
                if (this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if (animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if (tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };

        // GATHER ANIMATION:
        this.startAnim = function(didHit, index) {
            this.animTime = this.animSpeed = items.weapons[index].speed;
            this.targetAngle = (didHit ? -config.hitAngle : -Math.PI);
            tmpRatio = 0;
            animIndex = 0;
        };

        // CAN SEE:
        this.canSee = function(other) {
            if (!other) return false;
            let dx = Math.abs(other.x - this.x) - other.scale;
            let dy = Math.abs(other.y - this.y) - other.scale;
            return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3;
        };

        // SHAME SYSTEM:
        this.judgeShame = function() {
            this.lastshamecount = this.shameCount;
            if (this.oldHealth < this.health) {
                if (this.hitTime) {
                    let timeSinceHit = game.tick - this.hitTime;
                    this.lastHit = game.tick;
                    this.hitTime = 0;
                    if (timeSinceHit < 2) {
                        this.shameCount++;
                    } else {
                        this.shameCount = Math.max(0, this.shameCount - 2);
                    }
                }
            } else if (this.oldHealth > this.health) {
                this.hitTime = game.tick;
            }
        };
        this.addShameTimer = function() {
            this.shameCount = 0;
            this.shameTimer = 30;
            let interval = setInterval(() => {
                this.shameTimer--;
                if (this.shameTimer <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        };

        // CHECK TEAM:
        this.isTeam = function(tmpObj) {
            return (this == tmpObj || (this.team && this.team == tmpObj.team));
        };

        // FOR THE PLAYER:
        this.findAllianceBySid = function (sid) {
            return this.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
        };
        this.checkCanInsta = function (nobull) {
            let totally = 0;
            if (this.alive && inGame) {
                let primary = {
                    weapon: this.weapons[0],
                    variant: this.primaryVariant,
                    dmg:
                    this.weapons[0] == undefined
                    ? 0
                    : items.weapons[this.weapons[0]].dmg,
                };
                let secondary = {
                    weapon: this.weapons[1],
                    variant: this.secondaryVariant,
                    dmg:
                    this.weapons[1] == undefined
                    ? 0
                    : items.weapons[this.weapons[1]].Pdmg,
                };
                let bull = this.skins[7] && !nobull ? 1.5 : 1;
                let pV =
                    primary.variant != undefined
                ? config.weaponVariants[primary.variant].val
                : 1;
                if (primary.weapon != undefined && this.reloads[primary.weapon] == 0) {
                    totally += primary.dmg * pV * bull;
                }
                if (
                    secondary.weapon != undefined &&
                    this.reloads[secondary.weapon] == 0
                ) {
                    totally += secondary.dmg;
                }
                if (
                    this.skins[53] &&
                    this.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) &&
                    near.skinIndex != 22
                ) {
                    totally += 25;
                }
                totally *= near.skinIndex == 6 ? 0.75 : 1;
                return totally;
            }
            return 0;
        };
        function delayPreplacerspeed() {
            const delayPreplacerspeed = 0.00000000000001 * 1000;
        }
        // UPDATE WEAPON RELOAD:
        this.manageReload = function() {
            if (this.shooting[53]) {
                this.shooting[53] = 0;
                this.reloads[53] = (2500 - game.tickRate);
            } else {
                if (this.reloads[53] > 0) {
                    this.reloads[53] = Math.max(0, this.reloads[53] - game.tickRate);
                }
            }
            // autoReplace
            if (this.reloads[this.weaponIndex] <= 1/20) {//autoReplace speed
                // place(2, getAttackDir());
                let index = this.weaponIndex;
                let nearObja = liztobj.filter((e) => (e.active || e.alive) && e.health < e.maxHealth && e.group !== undefined && UTILS.getDist(e, player, 0, 2) <= (items.weapons[player.weaponIndex].range + e.scale));
                for(let i = 0; i < nearObja.length; i++) {
                    let aaa = nearObja[i];

                    let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * 3.3;
                    let valaa = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1);
                    if(aaa.health - (valaa) <= 0 && near.length) {
                        place(near.dist2<((near.scale * 1.8) + 50)?4:2, caf(aaa, player) + Math.PI)
                        console.log("preplaced");
                    }
                }
            }

            if (this.gathering || this.shooting[1]) {
                if (this.gathering) {
                    this.gathering = 0;
                    this.reloads[this.gatherIndex] = (items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
                if (this.shooting[1]) {
                    this.shooting[1] = 0;
                    this.reloads[this.shootIndex] = (items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
            } else {
                this.attacked = false;
                if (this.buildIndex < 0) {
                    if (this.reloads[this.weaponIndex] > 0) {
                        this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - game.tickRate);
                        if (this == player) {
                            if (configs.weaponGrinder) {
                                for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                    checkPlace(player.getItemType(22), i);
                                }
                            }
                        }
                        if (this.reloads[this.primaryIndex] == 0 && this.reloads[this.weaponIndex] == 0) {
                            this.antiBull++;
                            game.tickBase(() => {
                                this.antiBull = 0;
                            }, 1);
                        }
                    }
                }
            }
        };
        const BASE_TRAP_PLACEMENT_RADIUS = 70;
        const LOW_HEALTH_THRESHOLD = 272.58;
        const BASE_PLACE_DELAY = 0.001;
        const SAFETY_BUFFER = 50;
        const TARGET_PREDICTION_STEPS = 20;
        const OPTIMIZED_SCORE_WEIGHT = 2.0;
        const ANGLE_INCREMENT = 27;
        const ENVIRONMENTAL_IMPACT_RADIUS = 100;
        const LINE_OF_SIGHT_BLOCKAGE_PENALTY = 20;
        const TEAMMATE_PROXIMITY_PENALTY = 20;
        const MAX_ENVIRONMENTAL_SCORE = 100;
        const HEATMAP_DECAY_RATE = 0.1;
        const ENVIRONMENTAL_ADAPTATION_MULTIPLIER = 1.5;

        let lastPlacementTime = 0;
        let enemyHeatmap = {};
        let enemyMovementPatterns = {};
        let environmentalFactors = {};
        let trapPositionCache = {};
        let teamCoordination = {};
        let liveCombatData = {};

        this.replacer = function(findObj) {
            // Check if the replacement conditions are met
            if (!findObj || !configs.autoReplace) return; // No object to replace or autoReplace is disabled
            if (!inGame) return; // Not in game
            if (this.antiTrapped) return; // Prevent replacement if anti-trapped

            game.tickBase(() => {
                const objAim = UTILS.getDirect(findObj, player, 0, 2); // Get direction to the object
                const objDst = UTILS.getDist(findObj, player, 0, 2); // Calculate distance to the object
                const nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, player, 0, 2) <= (player.scale + e.getScale() + 5))
                .sort((a, b) => UTILS.getDist(a, player, 0, 2) - UTILS.getDist(b, player, 0, 2))[0];

                // Check if weapon grinding is enabled and if the distance is within range
                if (configs.weaponGrinder && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;

                // Check for danger from spike traps
                const danger = this.checkSpikeTick();

                // If the object is within a certain distance
                if (objDst <= 300 && nearTrap) {
                    // If the trap is close enough, attempt to place a trap
                    if (nearTrap.dist2 <= 70 && [4, 5].includes(player.weapons[0]) && player.reloads[player.weapons[0]] == 0) {
                        this.testCanPlace(2, -Math.PI / 4, Math.PI / 4, (Math.PI / 20), nearTrap.aim2, 1);
                        this.testCanPlace(4, -Math.PI / 4, Math.PI / 4, Math.PI / 12, nearTrap.aim2 + Math.PI, 1);
                    } else if (!danger && nearTrap.dist2 <= items.weapons[nearTrap.primaryIndex || 5].range + (nearTrap.scale * 1.8)) {
                        this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                    } else {
                        if (player.items[4] == 15) {
                            this.testCanPlace(nearTrap.dist2 > 250 ? 4 : 2, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                        }
                    }
                    this.replaced = true; // Mark that a replacement has occurred
                }
            }, 1); // Execute the replacement logic on the next game tick
        };
        // FOR ANTI INSTA:
        this.addDamageThreat = function(tmpObj) {
            let primary = {
                weapon: this.primaryIndex,
                variant: this.primaryVariant
            };
            primary.dmg = primary.weapon == undefined ? 45 : items.weapons[primary.weapon].dmg;
            let secondary = {
                weapon: this.secondaryIndex,
                variant: this.secondaryVariant
            };
            secondary.dmg = secondary.weapon == undefined ? 50 : items.weapons[secondary.weapon].Pdmg;
            let bull = 1.5;
            let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1.18;
            let sV = secondary.variant != undefined ? [9, 12, 13, 15].includes(secondary.weapon) ? 1 : config.weaponVariants[secondary.variant].val : 1.18;
            if (primary.weapon == undefined ? true : this.reloads[primary.weapon] == 0) {
                this.damageThreat += primary.dmg * pV * bull;
            }
            if (secondary.weapon == undefined ? true : this.reloads[secondary.weapon] == 0) {
                this.damageThreat += secondary.dmg * sV;
            }
            if (this.reloads[53] <= game.tickRate) {
                this.damageThreat += 25;
            }
            this.damageThreat *= tmpObj.skinIndex == 6 ? 0.75 : 1;
            if (!this.isTeam(tmpObj)) {
                if (this.dist2 <= 300) {
                    tmpObj.damageThreat += this.damageThreat;
                }
            }
        };
    }
};



// SOME CODES:
function sendUpgrade(index) {
    player.reloads[index] = 0;
    packet("H", index);
}

function storeEquip(id, index) {
    packet("c", 0, id, index);
}

function storeBuy(id, index) {
    packet("c", 1, id, index);
}

function buyEquip(id, index) {
    let nID = player.skins[6] ? 6 : 0;
    if (player.alive && inGame) {
        if (index == 0) {
            if (player.skins[id]) {
                if (player.latestSkin != id) {
                    packet("c", 0, id, 0);
                }
            } else {
                if (configs.autoBuyEquip) {
                    let find = findID(hats, id);
                    if (find) {
                        if (player.points >= find.price) {
                            packet("c", 1, id, 0);
                            packet("c", 0, id, 0);
                        } else {
                            if (player.latestSkin != nID) {
                                packet("c", 0, nID, 0);
                            }
                        }
                    } else {
                        if (player.latestSkin != nID) {
                            packet("c", 0, nID, 0);
                        }
                    }
                } else {
                    if (player.latestSkin != nID) {
                        packet("c", 0, nID, 0);
                    }
                }
            }
        } else if (index == 1) {
            if (useWasd && (id != 11 && id != 0)) {
                if (player.latestTail != 0) {
                    packet("c", 0, 0, 1);
                }
                return;
            }
            if (player.tails[id]) {
                if (player.latestTail != id) {
                    packet("c", 0, id, 1);
                }
            } else {
                if (configs.autoBuyEquip) {
                    let find = findID(accessories, id);
                    if (find) {
                        if (player.points >= find.price) {
                            packet("c", 1, id, 1);
                            packet("c", 0, id, 1);
                        } else {
                            if (player.latestTail != 0) {
                                packet("c", 0, 0, 1);
                            }
                        }
                    } else {
                        if (player.latestTail != 0) {
                            packet("c", 0, 0, 1);
                        }
                    }
                } else {
                    if (player.latestTail != 0) {
                        packet("c", 0, 0, 1);
                    }
                }
            }
        }
    }
}

function selectToBuild(index, wpn) {
    packet("G", index, wpn);
}

function selectWeapon(index, isPlace) {
    if (!isPlace) {
        player.weaponCode = index;
    }
    packet("G", index, 1);
}

function sendAutoGather() {
    packet("K", 1, 1);
}

function sendAtck(id, angle) {
    packet("d", id, angle, 1);
}

// PLACER:
function place(id, rad, rmd) {
    try {
        if (id == undefined) return;
        let item = items.list[player.items[id]];
        let tmpS = player.scale + item.scale + (item.placeOffset || 0);
        let tmpX = player.x2 + tmpS * Math.cos(rad);
        let tmpY = player.y2 + tmpS * Math.sin(rad);
        if ((player.alive && inGame && player.itemCounts[item.group.id] == undefined ? true : player.itemCounts[item.group.id] < (config.isSandbox ? 299 : item.group.limit ? item.group.limit : 99))) {
            selectToBuild(player.items[id]);
            sendAtck(1, rad);
            selectWeapon(player.weaponCode, 1);
            if (rmd && getEl("placeVis").checked) {
                placeVisible.push({
                    x: tmpX,
                    y: tmpY,
                    name: item.name,
                    scale: item.scale,
                    dir: rad
                });
                game.tickBase(() => {
                    placeVisible.shift();
                }, 1);
                game.tickBase(() => {
                    placeVisible.shift();
                }, 2);
            }
        }
    } catch (e) {}
}
function checkPlace(id, rad) {
    try {
        if (id == undefined) return;
        let item = items.list[player.items[id]];
        let tmpS = player.scale + item.scale + (item.placeOffset || 0);
        let tmpX = player.x2 + tmpS * Math.cos(rad);
        let tmpY = player.y2 + tmpS * Math.sin(rad);
        if (objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player)) {
            place(id, rad, 1);
        }
    } catch (e) {}
}
function getDamageThreat(tmpObj) {
    tmpObj.instaThreat = 0;
    if (isTeam(tmpObj)) {
        let primary = {
            weapon: tmpObj.primaryIndex,
            variant: tmpObj.primaryVariant,
            dmg: tmpObj.primaryIndex == undefined ? 45 : items.weapons[tmpObj.primaryIndex].dmg,
        };
        let secondary = {
            weapon: tmpObj.secondaryIndex,
            variant: tmpObj.secondaryVariant,
            dmg: tmpObj.secondaryIndex == undefined ? 50 : items.weapons[tmpObj.secondaryIndex].Pdmg,
        };
        let bull = tmpObj.skinIndex == 7 ? 1.5 : 1;
        let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1.18;
        if (primary.weapon != undefined && tmpObj.reloads[primary.weapon] == 0) {
            tmpObj.instaThreat += primary.dmg * pV * bull;
        }
        if (secondary.weapon != undefined && tmpObj.reloads[secondary.weapon] == 0) {
            tmpObj.instaThreat += secondary.dmg;
        }
        if (tmpObj.reloads[53] === 0) {
            tmpObj.instaThreat += 25;
        }
        tmpObj.instaThreat *= player.skinIndex == 6 ? 0.75 : 1;
    }
}
let bestMonkeys = 0;
let canSync = {
    sync: false
};

let autoPush2 = {
    doPush: 1,
    pushAngle: null
};
// HEALING:
function soldierMult() {
    return player.latestSkin == 6 ? 0.75 : 1;
}
function getAttacker(damaged) {
    let attackers = enemy.filter(tmp => {
        //let damages = new Damages(items);
        //let dmg = damages.weapons[tmp.weaponIndex];
        //let by = tmp.weaponIndex < 9 ? [dmg[0], dmg[1], dmg[2], dmg[3]] : [dmg[0], dmg[1]];
        let rule = {
            //one: tmp.dist2 <= 300,
            //two: by.includes(damaged),
            three: tmp.attacked
        }
        return /*rule.one && rule.two && */rule.three;
    });
    return attackers;
}
function healer() {
    for (let i = 0; i < healthBased(); i++) {
        place(0, getAttackDir());
    }
}
function getMaxPot() {
    let dmg = 0;
    enemy.forEach(tmp => {
        if (getDist(player, tmp) - 63 <= items.weapons[tmp.weapons[0]].range) {
            dmg += player.checkCanInsta(false);
        }
    });
    return dmg;
}
function instaheal(e, t) {
    let foodType = (player.items[0] == 0 ? 20 : player.items[0] == 1 ? 40 : 30)
    let times = (e == "max" ? (100-player.health)/foodType : e == (null || undefined) ? 1 : e);
    for(let i = 0; i < times; i++) {
        place(0, getAttackDir());
    }
}
function fastHealing(speed) {
    let value = player.health;
    let damaged
    let attackers = getAttacker(damaged);
    let gearDmgs = [0.25, 0.45].map((val) => val * items.weapons[player.weapons[0]].dmg * soldierMult());
    let includeSpikeDmgs = !my.reSync && gearDmgs.includes(damaged);
    let maxPotential = getMaxPot();
    let canAntiHeal = false;


    let pingHeal = function() {
        return Math.max(0, maxPotential - window.pingTime);
    };
    let autoHeal;
    let doMaxHeal = function () {
        clearInterval(autoHeal);
        for (let i = 0; i < Math.ceil(Math.min(100 - value, 50) / items.list[player.items[0]].consume); i++) {
            place(player.items[0]);
        }
    };
    if (speed >= 100000) {
        canAntiHeal = true;
    } else {
        canAntiHeal = false;
    }

    // Heal:
    setTimeout(()=>{
        if (traps.inTrap) {
            healingTrap();
        } else {
            setTimeout(()=>{
                for (let i = 0; i < healthBased(); i++) {
                    if (canAntiHeal == true && value <= 80 && near.checkCanInsta(true) >= 100) {
                        setTimeout(()=>{
                            place(0, getAttackDir());
                            setTimeout(()=>{
                                place(0, getAttackDir());
                                setTimeout(()=>{
                                    place(0, getAttackDir());
                                }, speed*5);
                            }, speed*4);
                        }, speed*3);
                    } else {
                        place(0, getAttackDir());
                    }
                    healer();
                }
            }, speed*2);
        }
    }, speed);
}
function soldierMult() {
    return player.latestSkin == 6 ? 0.75 : 1;
}
function heal() {
    if (player.health === 100) {
        return;
    }
    if (player.skinIndex !== 70 && player.skinIndex !== 75) {
        let value = Math.ceil(100 / items.list[player.items[0]].healing);
        if (player.health === 58.75 && player.skinIndex === 6) {
            value = 1;
        }
        for (let i = 0; i < value; i++) {
            place(0, getAttackDir());
        }
    }
}
function healOnResourceGain() {
    if (player.wood > player.woodLast || player.stone > player.stoneLast || player.food > player.foodLast) {
        place(0, getAttackDir());
    }
}
function findAllianceBySid(sid) {
    return player.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
}
function healOnEnemySight() {
    if (enemy.length > 0) {
        place(0, getAttackDir());
    }
}
function healOnLowHealth() {
    if (player.health < 50) {
        place(0, getAttackDir());
    }
}
function healOnNoWeapon() {
    if (player.items[0] === 0) {
        place(0, getAttackDir());
    }
}
function healOnLevelUp() {
    if (player.level > player.levelLast) {
        place(0, getAttackDir());
    }
}
function getNearestEnemyDistance() {
    let nearestEnemy = enemy.reduce((nearest, current) => {
        return nearest.dist < current.dist ? nearest : current;
    });
    return nearestEnemy.dist;
}
function isBeingAttackedBy(attackerId) {
    let attackers = enemy.filter(tmp => tmp.id === attackerId && tmp.attacked);
    return attackers.length > 0;
}
function healOverTime() {
    if (player.health < 100) {
        place(0, getAttackDir());
    }
}
function smartHeal() {
    if (player.score > 10000) {
        if (player.health < 90) {
            place(0, getAttackDir());
        }
    } else {
        if (player.health < 70) {
            place(0, getAttackDir());
        }
    }
}
function panicHeal() {
    if (player.health < 50) {
        for (let i = 0; i < 10; i++) {
            place(0, getAttackDir());
        }
    }
}
function arenaHeal() {
    if (player.zone === 'arena') {
        if (player.health < 90) {
            place(0, getAttackDir());
        }
    }
}
function defensiveHeal() {
    if (player.latestDamage > 0 && player.health < 100) {
        place(0, getAttackDir());
    }
}
function healPlayer() {
    if (configs.shouldHeal) {
        place(0, getAttackDir());
    }
}
function getAttacker(damaged) {
    let attackers = enemy.filter(tmp => {
        //let damages = new Damages(items);
        //let dmg = damages.weapons[tmp.weaponIndex];
        //let by = tmp.weaponIndex < 9 ? [dmg[0], dmg[1], dmg[2], dmg[3]] : [dmg[0], dmg[1]];
        let rule = {
            //one: tmp.dist2 <= 300,
            //two: by.includes(damaged),
            three: tmp.attacked
        }
        return /*rule.one && rule.two && */rule.three;
    });
    return attackers;
}
function healer(extra) {
    if ([0, undefined].includes(extra)) {
        for (let i = 0; i < healthBased(); i++) {
            place(0, getAttackDir());
        }
    } else {
        for (let i = 0; i < healthBased() + extra; i++) {
            place(0, getAttackDir());
        }
    }
}
let resourceGainHealCooldown = false;
function healOnResourceGainAdvanced() {
    if (player.wood > player.woodLast || player.stone > player.stoneLast || player.food > player.foodLast) {
        if (!resourceGainHealCooldown) {
            place(0, getAttackDir());
            resourceGainHealCooldown = true;
            setTimeout(() => {
                resourceGainHealCooldown = false;
            }, 1000);
        }
    }
}
// GLOBAL VARIABLES
let lastPlayerCount = 0;
let lastZone = "";
// FUNCTIONS
function playerCountFunction() {
    return Object.keys(players).length;
}
function healOnPlayerJoin() {
    if (playerCountFunction() > lastPlayerCount) {
        place(0, getAttackDir());
    }
    lastPlayerCount = playerCountFunction();
}
function healOnAreaChange() {
    if (player.zone !== lastZone) {
        place(0, getAttackDir());
    }
    lastZone = player.zone;
}
// GAME TICK
function gameTick() {
    healOnPlayerJoin();
    healOnAreaChange();
}
function healOnWin() {
    if (player.wins > player.winsLast) {
        place(0, getAttackDir());
    }
}
function healOnHealingItemPickup() {
    let healingItems = [101, 102, 103, 104];
    if (healingItems.includes(player.items[0])) {
        place(0, getAttackDir());
    }
}
function healOnFlagCapture() {
    if (player.flagCaptures > player.flagCapturesLast) {
        place(0, getAttackDir());
    }
}
// ADVANCED:
function applCxC(value) {
    if (player.health == 100) {
        return 0;
    }
    if (player.skinIndex != 45 && player.skinIndex != 56) {
        return Math.ceil(value / items.list[player.items[0]].healing);
    }
    return 0;
}
function healthBased() {
    if (player.health == 100) {
        return 0;
    }
    if (player.skinIndex != 45 && player.skinIndex != 56) {
        return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
    }
    return 0;
}
function calcDmg(value) {
    return value * player.skinIndex == 6 ? 0.75 : 1;
}
function antirev() {
    if (tmpObj.isPlayer){
        for (let i = 0; i < healthBased(); i++) {
            place(0, getAttackDir());
            if (player.health == 55 && player.shameCount < 6 && player.skinIndex == 6) {
                place(0, getAttackDir());
                notif("antirev");
            } else if (player.health == 40 && player.shameCount < 6 && player.skinIndex != 6){
                place(0, getAttackDir());
                notif("antirev");
            } else if (player.health == 43.75 && player.shameCount < 5 && player.skinIndex == 6){
                place(0, getAttackDir());
                setTimeout(()=>{
                    place(0, getAttackDir());
                },5)
            } else if(player.health == 25 && player.shameCount < 4 && player.skinIndex == 6){
                place(0, getAttackDir());
                setTimeout(()=>{
                    place(0, getAttackDir());
                },5)
            } else if (player.health == 58.75 && player.shameCount < 6 && player.skinIndex == 6){
                place(0, getAttackDir());
                setTimeout(()=>{
                    place(0, getAttackDir());
                },5)
            } else if (player.health == 45 && player.shameCount < 6 && player.skinIndex != 6){
                place(0, getAttackDir());
                setTimeout(()=>{
                    place(0, getAttackDir());
                },5)
            }
            if (player.shameCount < 6) {
                setTimeout(()=>{
                    place(0, getAttackDir());
                },30)
            }
        }
    }
}
let slowHeal = function(timer) {
    setTimeout(() => {
        healer();
    }, 25);
}
let isHealing = false;
let delay = 20;
function Staryheal() {
    if (!isHealing && player.health < 100) {
        isHealing = true;
        if (player.health < 95) {
            place(0, getAttackDir());
            healer();// fast heal
            isHealing = false;
        } else {
            const healingDelay = 5;
            const healingIterations = Math.ceil((100 - player.health) / 10); // making it have delay so it wont packet spam
            let iterationCount = 0;
            function performHealing() {
                if (iterationCount < healingIterations) {
                    setTimeout(() => {
                        place(0, getAttackDir()); // slow heal
                        iterationCount++;
                        performHealing();
                    }, healingDelay);
                } else {
                    isHealing = false;
                }
            }
            performHealing();
        }
    }
}
// LATER:
function predictHeal(random) {
    for (let Preidict in random) {
        place(0, getAttackDir());
        console.log("health predicted");
    }
}
function antiSyncHealing(timearg) {
    my.antiSync = true;
    let healAnti = setInterval(() => {
        if (player.shameCount < 5) {
            place(0, getAttackDir());
        }
    }, 75);
    setTimeout(() => {
        clearInterval(healAnti);
        setTimeout(() => {
            my.antiSync = false;
        }, game.tickRate);
    }, game.tickRate);
}
function EmpMult() {
    return player.skinIndex == 22 ? 0.75 : 1;
}
function healer33() {
    for (let i = 0; i < healthBased(); i++) {
        place(0, getAttackDir());
    }
}
function healer1() {
    place(0, getAttackDir());
    return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
}


function noshameheal() {
    place(0, getAttackDir());
    if (player.shameCount >= 5) {
        place(0, getAttackDir());
        healer33();
    } else {
        if (player.shameCount <= 4 && player.skinIndex != 6 && player.skinIndex != 22) {
            buyEquip(6, 0);
            healer33();
        } else {
            if (player.shameCount >= 5 && player.skinIndex != 6 && player.skinIndex != 22) {
                return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
            }
        }
    }
}

function smartAntiInsta() {
    let enemies = getNearbyEnemies();
    for (let i = 0; i < enemies.length; i++) {
        let e = enemies[i];
        if (e.shooting && getDist(player, e) < 200 && !e.blocked) {
            place(getRandomDir());
        }
    }
}

function getNearbyEnemies() {
    let enemies = [];
    for (let i = 0; i < enemy.length; i++) {
        let e = enemy[i];
        if (getDist(player, e) < 250) {
            enemies.push(e);
        }
    }
    return enemies;
}

function getRandomDir() {
    let directions = [-1, 0, 1];
    return [directions[Math.floor(Math.random() * 3)], directions[Math.floor(Math.random() * 3)]];
}
setInterval(() => {
    if (configs.shouldHeal) {
        smartAntiInsta();
    }
}, 100);
let healSan = function() {
    if (config.isSandbox) {
        return 100;
    } else {
        return 80;
    }
}
let checkHealth = function() {
    return player.skinIndex != 45 && !autoQ && !my.antiSync;
}


const placedSpikePositions = new Set();
const placedTrapPositions = new Set();
function isPositionValid(position) {
    const playerX = player.x2;
    const playerY = player.y2;
    const distToPosition = Math.hypot(position[0] - playerX, position[1] - playerY);
    return distToPosition > 35;
}
function calculatePossibleTrapPositions(x, y, radius) {
    const trapPositions = [];
    const numPositions = 16;
    for (let i = 0; i < numPositions; i++) {
        const angle = (2 * Math.PI * i) / numPositions;
        const offsetX = x + radius * Math.cos(angle);
        const offsetY = y + radius * Math.sin(angle);
        const position = [offsetX, offsetY];
        if (!trapPositions.some(pos => isPositionTooClose(position, pos))) {
            trapPositions.push(position);
        }
    }
    return trapPositions;
}
function isPositionTooClose(position1, position2, minDistance = 50) {
    const dist = Math.hypot(position1[0] - position2[0], position1[1] - position2[1]);
    return dist < minDistance;
}

// EQUIP HATS:
function biomeGear() {
    if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
        buyEquip(31, 0);
    } else {
        if (player.y2 <= config.snowBiomeTop) {
            buyEquip(15, 0);
        } else {
            buyEquip(12, 0);
        }
    }
}

function woah(mover) {
    buyEquip(mover && player.moveDir == undefined ? 0 : 20, 1);
}
let advHeal = [];

class Traps {
    constructor(UTILS, items) {
        this.dist = 0;
        this.aim = 0;
        this.inTrap = false;
        this.replaced = false;
        this.antiTrapped = false;
        this.outOfTrap = false;
        this.info = {};

        this.notFast = function(obj = this.info) {
            return player.weapons[1] == 10 && ((obj.health > items.weapons[player.weapons[0]].dmg) || player.weapons[0] == 5);
        }

        this.testCanPlace = function(id, first = -(Math.PI / 2), repeat = (Math.PI / 2), plus = (Math.PI / 18), radian, replacer, yaboi) {
            try {
                let item = items.list[player.items[id]];
                let tmpS = player.scale + item.scale + (item.placeOffset || 0);
                let counts = {
                    attempts: 0,
                    placed: 0
                };
                let tmpObjects = [];
                gameObjects.forEach((p) => {
                    tmpObjects.push({
                        x: p.x,
                        y: p.y,
                        active: p.active,
                        blocker: p.blocker,
                        scale: p.scale,
                        isItem: p.isItem,
                        type: p.type,
                        colDiv: p.colDiv,
                        getScale: function(sM, ig) {
                            sM = sM || 1;
                            return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ?
                                                 1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
                        },
                    });
                });

                for (let i = first; i < repeat; i += plus) {
                    counts.attempts++;
                    let relAim = radian + i;
                    let tmpX = player.x2 + tmpS * Math.cos(relAim);
                    let tmpY = player.y2 + tmpS * Math.sin(relAim);
                    let cantPlace = tmpObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                    if (cantPlace) continue;
                    if (item.id != 18 && tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                    if ((!replacer && yaboi) || useWasd) {
                        if (useWasd ? false : yaboi.inTrap) {
                            if (UTILS.getAngleDist(near.aim2 + Math.PI, relAim + Math.PI) <= Math.PI && player.primaryIndex != 7) {
                                place(2, relAim, 1);
                            } else {
                                player.items[4] == 15 && place(4, relAim, 1);
                            }
                        } else {
                            if (UTILS.getAngleDist(near.aim2, relAim) <= config.gatherAngle / 1.5 && player.primaryIndex != 7) {
                                place(2, relAim, 1);
                            } else {
                                player.items[4] == 15 && place(4, relAim, 1);
                            }
                        }
                    } else {
                        place(id, relAim, 1);
                    }
                    tmpObjects.push({
                        x: tmpX,
                        y: tmpY,
                        active: true,
                        blocker: item.blocker,
                        scale: item.scale,
                        isItem: true,
                        type: null,
                        colDiv: item.colDiv,
                        getScale: function() {
                            return this.scale;
                        },
                    });
                    if (UTILS.getAngleDist(near.aim2, relAim) <= 1) {
                        counts.placed++;
                    }
                }
                if (counts.placed > 0 && replacer && item.dmg) {
                    if (near.dist2 <= items.weapons[player.weapons[0]].range + (player.scale * 1.8) && configs.spikeTick) {
                        instaC.canSpikeTick = true;
                    }
                }
            } catch (err) {}
        };
        /*   this.checkSpikeTick = function () {
                                            // more range for safe. also testing near.primaryIndex || 5
                                            if (getEl("safeAntiSpikeTick").checked && this.inTrap && near.dist2 <= items.weapons[near.primaryIndex || 5].range + near.scale && [3, 4, 5].includes(near.primaryIndex) && this.info.health <= items.weapons[player.weaponIndex].dmg * (config.weaponVariants[tmpObj[(player.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[player.weaponIndex].sDmg || 1) * 3.3) return true
                                    }*/
   this.checkSpikeTick = function() {
            try {
                if (this.inTrap && near.dist2 <= items.weapons[near.primaryIndex || 5].range + near.scale * 1.2 && [3, 4, 5].includes(near.primaryIndex) && this.info.health <= items.weapons[player.weaponIndex].dmg * (config.weaponVariants[player[(player.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[player.weaponIndex].sDmg || 1) * 3.3) return true
                if (![3, 4, 5].includes(near.primaryIndex)) return false;
                if (getEl("safeAntiSpikeTick").checked && this.inTrap && near.dist2 <= items.weapons[near.primaryIndex || 5].range + near.scale && [3, 4, 5].includes(near.primaryIndex) && this.info.health <= items.weapons[player.weaponIndex].dmg * (config.weaponVariants[tmpObj[(player.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[player.weaponIndex].sDmg || 1) * 3.3) return true
                if (near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                    let item = items.list[9];
                    let tmpS = near.scale + item.scale + (item.placeOffset || 0);
                    let danger = 0;
                    let counts = {
                        attempts: 0,
                        block: `unblocked`
                    };
                    for (let i = -1; i <= 1; i += 1/10) {
                        counts.attempts++;
                        let relAim = UTILS.getDirect(player, near, 2, 2) + i;
                        let tmpX = near.x2 + tmpS * Math.cos(relAim);
                        let tmpY = near.y2 + tmpS * Math.sin(relAim);
                        let cantPlace = gameObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                        if (cantPlace) continue;
                        if (tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                        danger++;
                        counts.block = `blocked`;
                        break;
                    }
                    if (danger && near.dist2 <= 200 && tdf) {
                        sendChat("Blocking Next SpikeTick")
                        my.anti0Tick = 1;
                        healer();
                        //player.chat.message = "AntiSpikeTick";
                        //player.chat.count = 2000;
                        return true;
                    }
                }
            } catch (err) {
                return null;
            }
            return false;
        }
        this.protect = function(aim) {
            if (!configs.antiTrap) return;
            if (player.items[4]) {
                checkPlace(2, (Math.PI / 2), -(Math.PI / 2), (Math.PI / 18), aim + Math.PI);
                checkPlace(2, (Math.PI / 2), -(Math.PI / 2) -(Math.PI / 18), aim + Math.PI);
                this.antiTrapped = true;
            }
        };
        function calculatePerfectAngle(x1, y1, x2, y2) {
            return Math.atan2(y2 - y1, x2 - x1);
        }
  this.autoPlace = function () {
    if (enemy.length && configs.autoPlace && !instaC.ticking) {
        if (game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
            if (gameObjects.length) {
                let near2 = { inTrap: false };
                let nearTrap = gameObjects
                    .filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5))
                    .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))[0];
                near2.inTrap = !!nearTrap;
                if (testMode ? enemy.length : (near.dist2 <= 450)) {
                    if (near.dist2 <= 200) {
                        this.testCanPlace(2, 0, Math.PI * 2, Math.PI / 24, near.aim2, 0, { inTrap: near2.inTrap });
                        this.testCanPlace(2, 0, Math.PI * 2, Math.PI / 24, near.aim2);
                    } else {
                        player.items[4] == 15 && this.testCanPlace(4, 0, Math.PI * 2, Math.PI / 24, near.aim2);
                    }
                }
            } else {
                if (testMode ? enemy.length : (near.dist2 <= 450)) {
                    player.items[4] == 15 && this.testCanPlace(4, 0, Math.PI * 2, Math.PI / 24, near.aim2);
                }
            }
        }
    }
};
let tbToggledOn = true;
if (tbToggledOn && enemy.length > 0) {
    enemy.sort((a, b) => UTILS.getDist(player, a) - UTILS.getDist(player, b));
    for (const enemyPlayer of enemy) {
        const enemyDistance = UTILS.getDist(player, enemyPlayer);
        const enemyInTrap = gameObjects.some(
            tmp => tmp.trap && tmp.active && UTILS.getDist(tmp, enemyPlayer, 0, 2) <= tmp.getScale() + 5
        );
        if (enemyInTrap) {
            const existingTrap = gameObjects.find(
                tmp => tmp.trap && tmp.active && UTILS.getDist(tmp, enemyPlayer, 0, 2) <= tmp.getScale() + 5
            );
            if (existingTrap) {
                this.testCanPlace(1, existingTrap.x, existingTrap.y);
            } else {
                this.testCanPlace(1, enemyPlayer.x, enemyPlayer.y);
            }
        } else if (enemyDistance > 0 && enemyDistance <= 80) {
            let spikeX = player.x + (80 / enemyDistance) * (enemyPlayer.x - player.x);
            let spikeY = player.y + (80 / enemyDistance) * (enemyPlayer.y - player.y);

            this.testCanPlace(1, spikeX, spikeY);
        }
    }
}
        this.autoPlace = function () {
            if (configs.autoPlace && game.tick % (Math.max(1, 2) || 1) === 0) {
                try {
                    const trap1 = gameObjects
                    .filter((e) => e.trap && e.active)
                    .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
                    .find((trap) => {
                        const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                        return (
                            trap !== player &&
                            (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) &&
                            trapDist <= 50
                        );
                    });
                    if (this.inTrap) {
                        let antiTrapAngles = Math.PI / Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                        this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), antiTrapAngles, near.aim2);
                    } else {
                        if (trap1 && near.dist2 <= 180) {
                            const trapX = trap1.x;
                            const trapY = trap1.y;
                            const circleRadius = 102;
                            const numPositions = 64;
                            for (let i = 0; i < numPositions; i++) {
                                const angle = (2 * Math.PI * i) / numPositions;
                                const offsetX = trapX + circleRadius * Math.cos(angle);
                                const offsetY = trapY + circleRadius * Math.sin(angle);
                                const position = [offsetX, offsetY];
                                const distToPlayer = Math.hypot(position[0] - player.x2, position[1] - player.y2);
                                if (
                                    isPositionValid(position) &&
                                    distToPlayer <= 87
                                ) {
                                    const angleToPlace = Math.atan2(position[1] - player.y2, position[0] - player.x2);
                                    checkPlace(2, angleToPlace);
                                }
                            }
                        } else if (!trap1 && near.dist2 <= 206) {
                            const maxTrapsToPlace = 3;
                            const trapRadius = 50;
                            const trapPositions = calculatePossibleTrapPositions(player.x2, player.y2, trapRadius);
                            let trapsPlaced = 0;
                            for (const position of trapPositions) {
                                if (
                                    trapsPlaced < maxTrapsToPlace &&
                                    isPositionValid(position)
                                ) {
                                    checkPlace(4, ...position);
                                    trapsPlaced++;
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        };
        this.autoPlace = function () {
            if (true) {
                if (game.tick % 0.5 === 0)
                    try {
                        if (configs.autoPlace) {
                            const dist = near.dist2;
                            const trap = gameObjects
                            .filter((e) => e.trap && e.active)
                            .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
                            .find((trap) => {
                                const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                                return (
                                    trap !== player &&
                                    (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) &&
                                    trapDist <= near.scale * 1.8
                                );
                            });
                            if (trap && dist <= 250) {
                                checkPlace(2, Math.atan2(player.y - trap.y, player.x - trap.x) + Math.PI);
                            } else if (!trap && dist <= 400) {
                                const angles = dist < 200 ? [0, 55, 110, 165, -55, -110, -165] : [0, 90, 180, 270];
                                for (let i = 0; i < angles.length; i++) {
                                    checkPlace(2, near.aim2 + toR(angles[i]));
                                }
                            }
                        }
                    } catch (e) {}
            } else if (enemy.length && configs.autoPlace && !instaC.ticking) {
                if (true) {
                    if (game.tick % (Math.max(1, 2) || 1) === 0) {
                        if (gameObjects.length) {
                            let near2 = {
                                inTrap: false,
                            };
                            let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function (a, b) {
                                return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                            })[0];
                            if (nearTrap) {
                                near2.inTrap = true;
                            } else {
                                near2.inTrap = false;
                            }
                            if (testMode ? enemy.length : (near.dist2 <= 300)) {
                                const numTries = near.dist2 <= 200 ? 12 : 4;
                                for (let i = 0; i < numTries; i++) {
                                    this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2, i / numTries, {inTrap: near2.inTrap});
                                }
                            }
                        } else {
                            if (testMode ? enemy.length : (near.dist2 <= 300)) {
                                this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                            }
                        }
                    }
                }
            }
        };


        this.autoPlace = function () {
            if (true) {
                try {
                    const dist = near.dist2;
                    const trap = gameObjects
                    .filter((e) => e.trap && e.active)
                    .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
                    .find((trap) => {
                        const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                        return (
                            trap !== player &&
                            (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) &&
                            trapDist <= near.scale * 1.8
                        );
                    });

                    if (trap && near.dist2 <= 250) {
                        const angleToTrap = Math.atan2(player.y - trap.y, player.x - trap.x);
                        checkPlace(2, angleToTrap + Math.PI);
                    } else if (!trap && dist <= 300) {
                        if (dist < 200) {
                            const maxAngle = Math.PI / 6;
                            const angleMultiplier = Math.min(1, Math.max(0, (dist - 150) / 130));
                            const adjustedAngle = maxAngle * angleMultiplier;

                            for (let i = -55; i < 55; i += 55) {
                                const perfectAngle = calculatePerfectAngle(near.x2, near.y2, player.x2, player.y2);
                                checkPlace(2, perfectAngle + adjustedAngle + toR(i));
                            }
                        }
                        if (dist >= 200) {
                            const maxAngle = Math.PI / 6;
                            const angleMultiplier = Math.min(1, Math.max(0, (dist - 150) / 130));
                            const adjustedAngle = maxAngle * angleMultiplier;

                            for (let i = -90; i < 270; i += 90) {
                                const perfectAngle = calculatePerfectAngle(near.x2, near.y2, player.x2, player.y2);
                                checkPlace(4, perfectAngle + adjustedAngle + toR(i));
                            }
                        }
                    }
                } catch (e) {}
            };
        }

        this.autoPlace = function () {
            if (configs.autoPlace && game.tick % (Math.max(1, 2) || 1) === 0) {
                if (true) {
                    try {
                        const trap1 = gameObjects
                        .filter((e) => e.trap && e.active)
                        .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
                        .find((trap) => {
                            const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                            return (
                                trap !== player &&
                                (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) &&
                                trapDist <= 50
                            );
                        });
                        if (this.inTrap) {
                            let antiTrapAngles = Math.PI / Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                            this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), antiTrapAngles, near.aim2);
                        } else {
                            if (trap1 && near.dist2 <= 180) {
                                const trapX = trap1.x;
                                const trapY = trap1.y;
                                const circleRadius = 102;
                                const numPositions = 64;
                                for (let i = 0; i < numPositions; i++) {
                                    const angle = (2 * Math.PI * i) / numPositions;
                                    const offsetX = trapX + circleRadius * Math.cos(angle);
                                    const offsetY = trapY + circleRadius * Math.sin(angle);
                                    const position = [offsetX, offsetY];
                                    const distToPlayer = Math.hypot(position[0] - player.x2, position[1] - player.y2);
                                    if (
                                        isPositionValid(position) &&
                                        distToPlayer <= 87
                                    ) {
                                        const angleToPlace = Math.atan2(position[1] - player.y2, position[0] - player.x2);
                                        checkPlace(2, angleToPlace);
                                    }
                                }
                            } else if (!trap1 && near.dist2 <= 206) {
                                const maxTrapsToPlace = 3;
                                const trapRadius = 50;
                                const trapPositions = calculatePossibleTrapPositions(player.x2, player.y2, trapRadius);
                                let trapsPlaced = 0;
                                for (const position of trapPositions) {
                                    if (
                                        trapsPlaced < maxTrapsToPlace &&
                                        isPositionValid(position)
                                    ) {
                                        checkPlace(4, ...position);
                                        trapsPlaced++;
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            };
        }

        this.autoPlace = function() {
            if (!configs.autoPlace) return;
            if (enemy.length && configs.autoPlace && !instaC.ticking) {
                if (game.tick % (Math.max(1, 2) || 1) === 0) {
                    if (gameObjects.length) {
                        let near2 = {
                            inTrap: false,
                        };
                        let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                            return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                        })[0];
                        if (nearTrap) {
                            near2.inTrap = true;
                        } else {
                            near2.inTrap = false;
                        }
                        if (near.dist3 <= 450) {
                            if (near.dist3 <= 200) {
                                this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2, 0, {
                                    inTrap: near2.inTrap
                                });
                            } else {
                                player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                            }
                        }
                    } else {
                        if (near.dist3 <= 450) {
                            player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                        }
                    }
                }
            }
        };

        function autoPlace() { // bug place
            let nearObj = [];
            if (gameObjects.length && enemy.length) {
                let inTrap = false;
                nearObj = gameObjects.filter((e)=>e.trap).sort(function(a, b) {
                    return (UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2));
                })[0];
                if (nearObj) {
                    if (!(player.sid != nearObj.owner.sid && !findAllianceBySid(nearObj.owner.sid)) && UTILS.getDist(nearObj, near, 0, 2) <= 70 && nearObj.active) {
                        inTrap = true;
                    } else {
                        inTrap = false;
                    }
                    if (near.dist2 <= 350) {
                        if (inTrap && near.dist2 <= 200) {
                            if (near.dist2 <= player.scale + near.scale + Math.PI * 2) {
                                checkPlace(2, near.aim2 - UTILS.getDirect(nearObj, near, 0, 2));
                                checkPlace(2, near.aim2 + UTILS.getDirect(nearObj, near, 0, 2));
                            }
                        }
                        if (near.dist2 <= near.scale + player.scale) {
                            checkPlace(2, near.aim2);
                        } else {
                            if (near.dist2 <= 200 && !instaC.canSpikeTick && !traps.in && !inTrap) {
                                checkPlace(2, near.aim2 + UTILS.toRad(90));
                                checkPlace(2, near.aim2 - UTILS.toRad(90));
                            } else {
                                if (near.dist2 <= 250) {
                                    checkPlace(2, near.aim2 + Math.PI);
                                } else {
                                    for (let i = 0; i < 360; i += 90) {
                                        checkPlace(4, UTILS.toRad(i));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }





        this.autoplace = function () {
            let oldXY = {
                x: undefined,
                y: undefined,
            };
            if (true) {



                let nearObj = [];
                let randomDir = Math.random() * Math.PI * 2;
                if (gameObjects.length && enemy.length) {
                    let nearsa = {
                        inTrap: false,
                    };
                    nearObj = gameObjects.filter((e)=>e.trap).sort(function(a, b) {
                        return (UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2));
                    })[0];
                    let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function (a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];
                    let near2 = {
                        inTrap: false,
                    };
                    if (nearTrap) {
                        near2.inTrap = true;
                    } else {
                        near2.inTrap = false;
                    }
                    if (nearObj) {
                        if (!(player.sid != nearObj.owner.sid && !findAllianceBySid(nearObj.owner.sid)) && UTILS.getDist(nearObj, near, 0, 2) <= 70 && nearObj.active) {
                            nearsa.inTrap = true;
                        } else {
                            nearsa.inTrap = false;
                        }
                        if (near.dist2 <= 600) {
                            if (nearsa.inTrap || near.dist2 <= 60 + near.scale) {
                                if (near.dist2 <= 250) {
                                    for (let i = 0; i < Math.PI * 2; i += Math.PI / 1.5) {
                                        checkPlace(2, near.aim2 + i);
                                    }
                                } else {
                                    for (let i = Math.PI / 1.5; i < Math.PI * 2; i += Math.PI / 1.5) {
                                        checkPlace(2, near.aim2 + i);
                                    }
                                }
                            } else {
                                if (player.items[4] == 15) {
                                    if (near.dist2 <= 200) {
                                        for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                            checkPlace(4, randomDir + i);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (near.dist2 <= 400) {
                            if (player.items[4] == 15) {
                                checkPlace(4, near.aim2);
                            }
                        }
                    }
                }
            }
        }



        this.replacer1 = function(findObj) {
            if (!findObj || !configs.autoReplace) return;
            if (!inGame) return;
            if (this.antiTrapped) return;
            game.tickBase(() => {
                let objAim = UTILS.getDirect(findObj, player, 0, 2);
                let objDst = UTILS.getDist(findObj, player, 0, 2);
                if (configs.autoGrind && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;
                if (objDst <= 400 && near.dist2 <= 400) {
                    let danger = this.checkSpikeTick();
                    if (!danger && near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                        //this.testCanPlace(2, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), objAim, 1);
                        this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                    } else {
                        player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                    }
                    this.replaced = true;
                }
            }, 1);
        }

        let spikePlaced = false;
        let spikSync = false;



        this.replacer = function(findObj) {
            if (!findObj || !configs.autoReplace) return;
            if (!inGame) return;
            if (this.antiTrapped) return;
            game.tickBase(() => {
                let objAim = UTILS.getDirect(findObj, player, 0, 2);
                let objDst = UTILS.getDist(findObj, player, 0, 2);
                if (configs.weaponGrinder && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;

                if(spikePlaced){
                    player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                    spikePlaced = false;
                }
                if (near.dist2 <= 250 && !spikSync) {
                    for (let i = 0; i < 24; i++) {
                        let angle = (Math.PI * 2) * i / 24;
                        this.testCanPlace(2, angle, angle + (Math.PI / 24), (Math.PI / 24), objAim, 1);
                        spikePlaced = true;
                    }
                }
                if (objDst <= 250 && near.dist2 <= 250) {
                    let danger = this.checkSpikeTick();
                    if (!danger && near.dist3 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {

                        this.testCanPlace(2, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), objAim, 1)
                        for (let i = 0; i < 24; i++) {
                            let angle = (Math.PI * 2) * i / 24;
                            this.testCanPlace(2, angle, angle + (Math.PI / 24), (Math.PI / 24), objAim, 1);
                            this.testCanPlace(2, (Math.PI / 2), (Math.PI / 2), (Math.PI / 2), near, objAim, 1)
                            spikSync = true;

                        }
                    } else {
                        player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                    }

                    this.replaced = true;
                }
            }, 1);
        };
    }
};

class Instakill {
    constructor() {
        if (secPacket > 60) return;
        this.wait = false;
        this.can = false;
        this.isTrue = false;
        this.nobull = false;
        this.ticking = false;
        this.canSpikeTick = false;
        this.startTick = false;
        this.readyTick = false;
        this.canCounter = false;
        this.revTick = false;
        this.syncHit = false;
        this.changeType = function (type) {
            this.wait = false;
            this.isTrue = true;
            my.autoAim = true;
           sendChat("omgdie");
            let instaLog = [type];
            let backupNobull = near.backupNobull;
            near.backupNobull = false;
            setTimeout(() => {
                setTimeout(() => {
                    if (near.skinIndex == 22) {
                        near.backupNobull = true;
                    }
                }, 1);
            }, 1);
            if (type == "rev") {
                selectWeapon(player.weapons[1]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                sendAutoGather();
                game.tickBase(() => {
                    if (near.dist2 <= 140 && configs.doSpikeOnReverse) {
                        place(2, getAttackDir());
                    }
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "nobull") {
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    buyEquip(21, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "normal") {
                this.isTrue = false;
                my.autoAim = false;
                buyEquip(6, 0);
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    sendAutoGather();
                    game.tickBase(() => {
                        selectWeapon(player.weapons[1]);
                        buyEquip(player.reloads[53] == 0 ? 53 : 20, 0);
                        game.tickBase(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                        }, 1);
                    }, 122);
                },100);
            } else {
                setTimeout(() => {
                    this.isTrue = false;
                    my.autoAim = false;
                }, 50);
            }
        };
        this.VelocityTickorBow = function() { // Stary Code
            this.isTrue = true;
            my.autoAim = true;
            biomeGear();
           sendChat("omg6");
            buyEquip(19, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                if (player.weapons[1] == 15) {
                    my.revAim = true;
                }
                selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                if ([9, 12, 13, 15].includes(player.weapons[1])) {
                    sendAutoGather();
                }
                packet("9", near.aim2, 1);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(18, 1);
                    if (![9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 2);
                }, 1);
            }, 1);
        };
        // spiketick
        let shuffledTicks = [];
        let lastDamage = 0;
        let radius = 100;

        function teleportPlayerTo(targetPosition) {
            player.position = {
                x: targetPosition.x,
                y: targetPosition.y
            };
        }

        const performSpikeTickAtAngle = angle => {
            const radians = angle * (Math.PI / 180);
            const targetPosition = {
                x: player.position.x + radius * Math.cos(radians),
                y: player.position.y + radius * Math.sin(radians)
            };
            teleportPlayerTo(targetPosition);
        };

        const getArrayValue = (index, array) => {
            index -= 428;
            return array[index];
        };

        const getArray = () => {
            return [
                "isTrue", "457564gCvaSV", "10885830MiQKSV", "weapons", "    ",
                "tickBase", "5080FVGhcW", "2682NqHuOF", "3rkOQDg", "1960ijtPV",
                "send", "getDirect", "986276xcsTAD", "11264ueamRE", "999429zeDXOx",
                "1503516UpKOdB", "25BlUGnX"
            ];
        };

        const arrayManager = targetValue => {
            let values = getArray();
            const getValue = index => getArrayValue(index, values);

            while (true) {
                try {
                    const calculatedValue = -parseInt(getValue(437)) / 1 +
                          parseInt(getValue(435)) / 2 * (parseInt(getValue(431)) / 3) +
                          -parseInt(getValue(441)) / 4 * (parseInt(getValue(439)) / 5) +
                          parseInt(getValue(442)) / 6 +
                          parseInt(getValue(438)) / 7 +
                          -parseInt(getValue(429)) / 8 * (-parseInt(getValue(430)) / 9) +
                          -parseInt(getValue(432)) / 10 * (parseInt(getValue(436)) / 11);
                    if (calculatedValue === targetValue) {
                        break;
                    } else {
                        values.push(values.shift());
                    }
                } catch (error) {
                    values.push(values.shift());
                }
            }
            return values;
        };

        const getTickValue = index => {
            const values = [
                "", "457564gCvaSV", "10885830MiQKSV", "weapons", "    ",
                "tickBase", "5080FVGhcW", "2682NqHuOF", "3rkOQDg", "1960ijtPV",
                "getDirect", "986276xcsTAD", "11264ueamRE", "999429zeDXOx",
                "1503516UpKOdB", "25BlUGnX"
            ];
            return values[index];
        };

        const shuffleTicks = () => {
            shuffledTicks = [];
            const tickCount = 10;
            for (let i = 0; i < tickCount; i++) {
                const randomIndex = Math.floor(Math.random() * getTickValue.length);
                shuffledTicks.push(getTickValue(randomIndex));
            }
        };

        function getNearestEnemy() {
            return {
                id: 1,
                position: {
                    x: 1,
                    y: 1
                },
                isDead: false
            };
        }

        function killEnemy(enemy) {
            enemy.isDead = true;
        }

         this.spikeTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            healer1();
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }, 1);
        };
        this.counterType = function() {
            this.isTrue = true;
            my.autoAim = true;
           sendChat("omg6");
            buyEquip(11, 0);
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }, 1);
        };
        this.rangeType = function(type) {
            this.isTrue = true;
            my.autoAim = true;
           sendChat("omg5");
            if (type == "ageInsta") {
                my.ageInsta = false;
                if (player.items[5] == 18) {
                    place(5, near.aim2);
                }
                packet("a", undefined, 1);
                buyEquip(22, 0);
                buyEquip(21, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(53, 0);
                    buyEquip(21, 1);
                    sendAutoGather();
                    game.tickBase(() => {
                        sendUpgrade(12);
                        selectWeapon(player.weapons[1]);
                        buyEquip(53, 0);
                        buyEquip(21, 1);
                        game.tickBase(() => {
                            sendUpgrade(15);
                            selectWeapon(player.weapons[1]);
                            buyEquip(53, 0);
                            buyEquip(21, 1);
                            game.tickBase(() => {
                                sendAutoGather();
                                this.isTrue = false;
                                my.autoAim = false;
                            }, 1);
                        }, 1);
                    }, 1);
                }, 1);
            } else {
                selectWeapon(player.weapons[1]);
                if (player.reloads[53] == 0 && near.dist2 <= 700 && near.skinIndex != 22) {
                    buyEquip(53, 0);
                } else {
                    buyEquip(20, 0);
                }
                buyEquip(11, 1);
                sendAutoGather();
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }
        };

        this.BoostOneTICKERS = function() { // Stary Code
            this.isTrue = true;
            my.autoAim = true;
            biomeGear();
           sendChat("omg4");
            buyEquip(19, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                packet("9", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(18, 1);
                    sendAutoGather();
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 5);
                }, 1);
            }, 1);
        };
                    this.threeOneTickType = function() {
                        this.isTrue = true;
                        my.autoAim = true;
                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                        biomeGear();
                        buyEquip(19, 1);
                        packet("a", near.aim2, 1);
                        game.tickBase(() => {
                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                            buyEquip(53, 0);
                            packet("a", near.aim2, 1);
                            game.tickBase(() => {
                                selectWeapon(player.weapons[0]);
                                buyEquip(7, 0);
                                sendAutoGather();
                                packet("a", near.aim2, 1);
                                game.tickBase(() => {
                                    sendAutoGather();
                                    this.isTrue = false;
                                    my.autoAim = false;
                                    packet("a", undefined, 1);
                                    this.readyTick = false;
                                }, 3);
                            }, 1);
                        }, 1);
                    };
                    this.kmTickType = function() {
                        this.isTrue = true;
                        my.autoAim = true;
                        my.revAim = true;
                        selectWeapon(player.weapons[1]);
                        buyEquip(53, 0);
                        buyEquip(19, 1);
                        sendAutoGather();
                        packet("a", near.aim2, 1);
                        game.tickBase(() => {
                            my.revAim = false;
                            selectWeapon(player.weapons[0]);
                            buyEquip(7, 0);
                            buyEquip(19, 1);
                            packet("a", near.aim2, 1);
                            game.tickBase(() => {
                                sendAutoGather();
                                this.isTrue = false;
                                my.autoAim = false;
                                packet("a", undefined, 1);
                                this.readyTick = false;
                            }, 3);
                        }, 1);
                    };
        // ff spike tick
        this.checkSoldier = function() {
            const canHit = traps.canHit();
            const nearReload = near.reloads[near.weaponIndex] !== 0;
            return (near.skinIndex !== 6 && canHit) || (!canHit && nearReload);
        };
        let preplacing = false;
        function preplacer() {
            let nearestObj = null;
            if (secPacket >= 90 || traps.antiTrapped) return;
            let range = items.weapons[player.weaponIndex].range + 150;
            gameObjects.forEach(tmpObj => {
                if (enemy.length) {
                    let objDst = UTILS.getDist(tmpObj, player, 0, 2);
                    let objAim = UTILS.getDirect(tmpObj, player, 0, 2);
                    if (tmpObj.health < 272.58 && objDst <= 120) {
                        nearestObj = tmpObj;
                    }
                }
            });
            let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) <= tmp.getScale() + 5);
            let spike = gameObjects.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) < 87 && !nearTrap.length);
            if (nearestObj) {
                let angle = UTILS.getDirect(nearestObj, player, 0, 2);
                let FindTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= near.scale + tmp.getScale() + 5).sort(function (a, b) {
                    return UTILS.getDist(a, near, 0, 5) - UTILS.getDist(b, near, 0, 5);
                })[0];
                game.tickBase(() => {
                    let condition = near.dist2 <= range && tmpObj.health <= 272.58 && fgdo(tmpObj, player) <= range || (near && near.reloads[near.weaponIndex] <= config.tickRate * (window.pingTime >= 200 ? 2 : 1)) || player.reloads[player.weaponIndex] * 1000 <= config.tickRate * (window.pingTime >= 200 ? 2 : 1);
                    if (condition) {
                        if (!retrappable || traps.inTrap) {
                            place(2, angle);
                            preplacing = true;
                        } else {
                            place(4, angle);
                            preplacing = true;
                        }
                    }
                }, 1);
            }
        }
        this.oneTickType = function() { // Stary Code
            notif("OneTick: true")
            this.isTrue = true;
            my.autoAim = true;
            biomeGear();
            buyEquip(19, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                if (player.weapons[1] == 15) {
                    my.revAim = true;
                }
                selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                if ([9, 12, 13, 15].includes(player.weapons[1])) {
                    sendAutoGather();
                }
                packet("9", near.aim2, 1);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(18, 1);
                    if (![9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 2);
                }, 1);
            }, 1);
        };
        this.BoostOneTICKERS = function() { // Stary Code
            this.isTrue = true;
            my.autoAim = true;
           sendChat("omg3");
            biomeGear();
            buyEquip(19, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                packet("9", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(18, 1);
                    sendAutoGather();
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 5);
                }, 1);
            }, 1);
        };
        this.PerfectedBoostSpiketick = function() { // Stary Code
            this.isTrue = true;
            my.autoAim = true;
           sendChat("omg2");
            biomeGear();
            buyEquip(19, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                packet("9", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    place(2, getAttackDir());
                    buyEquip(18, 1);
                    sendAutoGather();
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 5);
                }, 1);
            }, 1);
        };
        this.boostTickType = function() { // Stary Code
            this.isTrue = true;
            my.autoAim = true;
            sendChat("omg");
            biomeGear();
            buyEquip(11, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                if (player.weapons[1] == 15) {
                    my.revAim = true;
                }
                selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(53, 0);
                buyEquip(11, 1);
                if ([9, 12, 13, 15].includes(player.weapons[1])) {
                    sendAutoGather();
                }
                packet("9", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(0, 1);
                    if (![9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 5);
                }, 1);
            }, 1);
        };
        this.gotoGoal = function(goto, OT) {
            let slowDists = (weeeee) => weeeee * config.playerScale;
            let goal = {
                a: goto - OT,
                b: goto + OT,
                c: goto - slowDists(1),
                d: goto + slowDists(1),
                e: goto - slowDists(2),
                f: goto + slowDists(2),
                g: goto - slowDists(4),
                h: goto + slowDists(4)
            };
            let bQ = function (wwww, awwww) {
                if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2 && awwww == 0) {
                    buyEquip(31, 0);
                } else {
                    buyEquip(wwww, awwww);
                }
            }
            if (enemy.length) {
                let dst = near.dist2;
                this.ticking = true;
                if (dst >= goal.a && dst <= goal.b) {
                    bQ(22, 0);
                    bQ(11, 1);
                    if (player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0] || player.buildIndex > -1) {
                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                    }
                    return {
                        dir: undefined,
                        action: 1
                    };
                } else {
                    if (dst < goal.a) {
                        if (dst >= goal.g) {
                            if (dst >= goal.e) {
                                if (dst >= goal.c) {
                                    bQ(40, 0);
                                    bQ(10, 1);
                                    if (configs.slowOT) {
                                        player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                    } else {
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(22, 0);
                                    bQ(0, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                bQ(6, 0);
                                bQ(0, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                        } else {
                            biomeGear();
                            bQ(11, 1);
                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                            }
                        }
                        return {
                            dir: near.aim2 + Math.PI,
                            action: 0
                        };
                    } else if (dst > goal.b) {
                        if (dst <= goal.h) {
                            if (dst <= goal.f) {
                                if (dst <= goal.d) {
                                    bQ(40, 0);
                                    bQ(0, 1);
                                    if (configs.slowOT) {
                                        player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                    } else {
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(22, 0);
                                    bQ(0, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                bQ(6, 0);
                                bQ(0, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                        } else {
                            biomeGear();
                            bQ(11, 1);
                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                            }
                        }
                        return {
                            dir: near.aim2,
                            action: 0
                        };
                    }
                    return {
                        dir: undefined,
                        action: 0
                    };
                }
            } else {
                this.ticking = false;
                return {
                    dir: undefined,
                    action: 0
                };
            }
        }
        /** wait 1 tick for better quality */
        this.perfCheck = function(pl, nr) {
            if (nr.weaponIndex == 11 && UTILS.getAngleDist(nr.aim2 + Math.PI, nr.d2) <= config.shieldAngle) return false;
            if (![9, 12, 13, 15].includes(player.weapons[1])) return true;
            let pjs = {
                x: nr.x2 + (70 * Math.cos(nr.aim2 + Math.PI)),
                y: nr.y2 + (70 * Math.sin(nr.aim2 + Math.PI))
            };
            if (UTILS.lineInRect(pl.x2 - pl.scale, pl.y2 - pl.scale, pl.x2 + pl.scale, pl.y2 + pl.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                return true;
            }
            let finds = ais.filter(tmp => tmp.visible).find((tmp) => {
                if (UTILS.lineInRect(tmp.x2 - tmp.scale, tmp.y2 - tmp.scale, tmp.x2 + tmp.scale, tmp.y2 + tmp.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if (finds) return false;
            finds = liztobj.filter(tmp => tmp.active).find((tmp) => {
                let tmpScale = tmp.getScale();
                if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if (finds) return false;
            return true;
        }
    }
};




class Autobuy {
    constructor(buyHat, buyAcc) {
        this.hat = function() {
            buyHat.forEach((id) => {
                let find = findID(hats, id);
                if (find && !player.skins[id] && player.points >= find.price) packet("c", 1, id, 0);
            });
        };
        this.acc = function() {
            buyAcc.forEach((id) => {
                let find = findID(accessories, id);
                if (find && !player.tails[id] && player.points >= find.price) packet("c", 1, id, 1);
            });
        };
    }
};

class Autoupgrade {
    constructor() {
        this.sb = function(upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(38);
        };
        this.kh = function(upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(10);
            upg(38);
            upg(4);
            upg(25);
        };
        this.pb = function(upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(9);
            upg(38);
        };
        this.ph = function(upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(10);
            upg(38);
            upg(28);
            upg(25);
        };
        this.db = function(upg) {
            upg(7);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(34);
        };
        /* old functions */
        this.km = function(upg) {
            upg(7);
            upg(17);
            upg(31);
            upg(23);
            upg(10);
            upg(38);
            upg(4);
            upg(15);
        };
    };
};
class Damages {
    constructor(items) {
        // 0.75 1 1.125 1.5
        this.calcDmg = function(dmg, val) {
            return dmg * val;
        };
        this.getAllDamage = function(dmg) {
            return [this.calcDmg(dmg, 0.75), dmg, this.calcDmg(dmg, 1.125), this.calcDmg(dmg, 1.5)];
        };
        this.weapons = [];
        for (let i = 0; i < items.weapons.length; i++) {
            let wp = items.weapons[i];
            let name = wp.name.split(" ").length <= 1 ? wp.name : (wp.name.split(" ")[0] + "_" + wp.name.split(" ")[1]);
            this.weapons.push(this.getAllDamage(i > 8 ? wp.Pdmg : wp.dmg));
            this[name] = this.weapons[i];
        }
    }
}
/** CLASS CODES */
// jumpscare code warn
let tmpList = [];

// LOADING:
let UTILS = new Utils();
let items = new Items();
let objectManager = new Objectmanager(GameObject, gameObjects, UTILS, config);
let store = new Store();
let hats = store.hats;
let accessories = store.accessories;
let projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS);
let aiManager = new AiManager(ais, AI, players, items, null, config, UTILS);
let textManager = new Textmanager();

let traps = new Traps(UTILS, items);
let instaC = new Instakill();
let autoBuy = new Autobuy([40, 6, 7, 22, 53, 15, 31], [11, 21, 18, 13]);
let autoUpgrade = new Autoupgrade();

let lastDeath;
let minimapData;
let mapMarker = {};
let mapPings = [];
let tmpPing;

let antiinsta = true;
let antiinsta1 = false;

let breakTrackers = [];
let combatBot = {show: false, paths: [], toggle: false};
function sendChat(message) {
    packet("6", message.slice(0, 30));
}
let runAtNextTick = [];

function checkProjectileHolder(x, y, dir, range, speed, indx, layer, sid) {
    let weaponIndx = indx == 0 ? 9 : indx == 2 ? 12 : indx == 3 ? 13 : indx == 5 && 15;
    let projOffset = config.playerScale * 2;
    let projXY = {
        x: indx == 1 ? x : x - projOffset * Math.cos(dir),
        y: indx == 1 ? y : y - projOffset * Math.sin(dir),
    };
    let nearPlayer = players.filter((e) => e.visible && UTILS.getDist(projXY, e, 0, 2) <= e.scale).sort(function(a, b) {
        return UTILS.getDist(projXY, a, 0, 2) - UTILS.getDist(projXY, b, 0, 2);
    })[0];
    if (nearPlayer) {
        if (indx == 1) {
            nearPlayer.shooting[53] = 1;
        } else {
            nearPlayer.shootIndex = weaponIndx;
            nearPlayer.shooting[1] = 1;
            antiProj(nearPlayer, dir, range, speed, indx, weaponIndx);
        }
    }
}
let projectileCount = 0;

function antiProj(tmpObj, dir, range, speed, index, weaponIndex) {
    if (!tmpObj.isTeam(player)) {
        tmpDir = UTILS.getDirect(player, tmpObj, 2, 2);
        if (UTILS.getAngleDist(tmpDir, dir) <= 0.2) {
            tmpObj.bowThreat[weaponIndex]++;
            if (index == 5) {
                projectileCount++;
            }
            setTimeout(() => {
                tmpObj.bowThreat[weaponIndex]--;
                if (index == 5) {
                    projectileCount--;
                }
            }, range / speed);
            if (tmpObj.bowThreat[9] >= 1 && (tmpObj.bowThreat[12] >= 1 || tmpObj.bowThreat[15] >= 1)) {
                place(1, tmpObj.aim2);
                my.anti0Tick = 4;
                if (!my.antiSync) {
                    antiSyncHealing(4);
                }
            } else {
                if (projectileCount >= 2) {
                    place(1, tmpObj.aim2);
                    healer();
                    sendChat("hehehehhe");
                    buyEquip(22, 0);
                    buyEquip(13, 1);
                    my.anti0Tick = 4;
                    if (!my.antiSync) {
                        antiSyncHealing(4);
                    }
                } else {
                    if (projectileCount === 1) { // anti reverse or anti 1 tick with reaper
                        buyEquip(6, 0);
                        buyEquip(13, 1);
                    }
                    /*} else {
                    if (projectileCount >= 2) { // anti sync линия обороны N1
                    return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
                    player.chat.message = "pSyD";
                    healer();
                    buyEquip(6, 0);
                    }
                    }*/
                }
            }
        }
    }
}

// SHOW ITEM INFO:
function showItemInfo(item, isWeapon, isStoreItem) {
    if (player && item) {
        UTILS.removeAllChildren(itemInfoHolder);
        itemInfoHolder.classList.add("visible");
        UTILS.generateElement({
            id: "itemInfoName",
            text: UTILS.capitalizeFirst(item.name),
            parent: itemInfoHolder
        });
        UTILS.generateElement({
            id: "itemInfoDesc",
            text: item.desc,
            parent: itemInfoHolder
        });
        if (isStoreItem) {

        } else if (isWeapon) {
            UTILS.generateElement({
                class: "itemInfoReq",
                text: !item.type ? "primary" : "secondary",
                parent: itemInfoHolder
            });
        } else {
            for (let i = 0; i < item.req.length; i += 2) {
                UTILS.generateElement({
                    class: "itemInfoReq",
                    html: item.req[i] + "<span class='itemInfoReqVal'> x" + item.req[i + 1] + "</span>",
                    parent: itemInfoHolder
                });
            }
            if (item.group.limit) {
                UTILS.generateElement({
                    class: "itemInfoLmt",
                    text: (player.itemCounts[item.group.id] || 0) + "/" + (config.isSandbox ? 99 : item.group.limit),
                    parent: itemInfoHolder
                });
            }
        }
    } else {
        itemInfoHolder.classList.remove("visible");
    }
}

// RESIZE:
window.addEventListener("resize", UTILS.checkTrusted(resize));

function resize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    let scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
    gameCanvas.width = screenWidth * pixelDensity;
    gameCanvas.height = screenHeight * pixelDensity;
    gameCanvas.style.width = screenWidth + "px";
    gameCanvas.style.height = screenHeight + "px";
    mainContext.setTransform(
        scaleFillNative, 0,
        0, scaleFillNative,
        (screenWidth * pixelDensity - (maxScreenWidth * scaleFillNative)) / 2,
        (screenHeight * pixelDensity - (maxScreenHeight * scaleFillNative)) / 2
    );
}
resize();

// MOUSE INPUT:
var usingTouch;
const mals = document.getElementById('touch-controls-fullscreen');
mals.style.display = 'block';
mals.addEventListener("mousemove", gameInput, false);

function gameInput(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
let clicks = {
    left: false,
    middle: false,
    right: false,
};
mals.addEventListener("mousedown", mouseDown, false);

function mouseDown(e) {
    if (attackState != 1) {
        attackState = 1;
        if (e.button == 0) {
            clicks.left = true;
        } else if (e.button == 1) {
            clicks.middle = true;
        } else if (e.button == 2) {
            clicks.right = true;
        }
    }
}
mals.addEventListener("mouseup", UTILS.checkTrusted(mouseUp));

function mouseUp(e) {
    if (attackState != 0) {
        attackState = 0;
        if (e.button == 0) {
            clicks.left = false;
        } else if (e.button == 1) {
            clicks.middle = false;
        } else if (e.button == 2) {
            clicks.right = false;
        }
    }
}
mals.addEventListener("wheel", wheel, false);

function wheel(e) {
    if(player.shameCount > 1) {
        buyEquip(7, 0);
    } else {
        buyEquip(6, 0);
    }
}


// INPUT UTILS:
function getMoveDir() {
    let dx = 0;
    let dy = 0;
    for (let key in moveKeys) {
        let tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0];
        dy += !!keys[key] * tmpDir[1];
    }
    return dx == 0 && dy == 0 ? undefined : Math.atan2(dy, dx);
}

function getSafeDir() {
    if (!player)
        return 0;
    if (!player.lockDir) {
        lastDir = Math.atan2(mouseY - (screenHeight / 2), mouseX - (screenWidth / 2));
    }
    return lastDir || 0;
}
function SpikeX() {
    let spike;
    if (near.dist2 > 270 && !my.autoPush && enemy.length) {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    } else {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    }
    if (spike) {
        return spike.x;
    }
}
function SpikeY() {
    let spike;
    if (near.dist2 > 230 && !my.autoPush && enemy.length) {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    } else {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    }
    if (spike) {
        return spike.y;
    }
}
function SpikeDir() {
    let spike;
    if ((near.dist2 > 350 || !enemy.length) && !my.autoPush && enemy.length) {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    } else {
        if (traps.inTrap) {
            spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
                return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
            })[0];
        }
    }
    if (spike) {
        let aim = UTILS.getDirect(spike, player, 0, 2);
        return aim;
    } else {
        return lastDir || 0;
    }
}
let plusDir = 0;
let lastSpin = Date.now();
function getAttackDir(debug) {
    let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (items.weapons[player.weapons[0]].range + player.scale * 1.5)).sort(function(a, b) {
        return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
    })[0];
    if (debug) {
        if (!player)
            return "0";
        if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap)) && player.reloads[player.weapons[0]] == 0))
            lastDir = configs.weaponGrinder ? "getSafeDir()" : enemy.length ? my.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
        else
            if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0) lastDir = "getSafeDir()";
        else
            if (traps.inTrap) lastDir = "traps.aim";
        else
            if (breakObject.active) lastDir = "breakObject.aim";
        else
            if (!player.lockDir) {
                if (configs.noDir) return "undefined";
                lastDir = "getSafeDir()";
            }
        return lastDir;
    } else {
        if (!player)
            return 0;
        if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap)) && player.reloads[player.weapons[0]] == 0))
            lastDir = configs.weaponGrinder ? getSafeDir() : enemy.length ? my.revAim ? (near.aim2 + Math.PI) : near.aim2 : getSafeDir();
        else
            if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)
                lastDir = getSafeDir();
        else
            if (traps.inTrap)
                lastDir = traps.aim;
        else
            if (breakObject.active) lastDir = breakObject.aim;
        else
            if (traps.inTrap && player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0 && spike) {
                doSpikeRedThingmajic = true;
                lastDir = SpikeDir();
            } else
                if (!player.lockDir) {
                    if (configs.noDir) return undefined;
                    lastDir = getSafeDir();
                }
        return lastDir || 0;
    }
}

function getVisualDir() {
    if (!player)
        return 0;
    lastDir = getSafeDir();
    return lastDir || 0;
}

// KEYS:
function keysActive() {
    return (allianceMenu.style.display != "block" &&
            chatHolder.style.display != "block");
}

function keyDown(event) {
    let keyNum = event.which || event.keyCode || 0;
    if (player && player.alive && keysActive()) {
        if (!keys[keyNum]) {
            keys[keyNum] = 1;
            macro[event.key] = 1;
            if (keyNum == 69) {
                sendAutoGather();
            } else if (keyNum == 67) {
                updateMapMarker();
            } else if (player.weapons[keyNum - 49] != undefined) {
                player.weaponCode = player.weapons[keyNum - 49];
            } else if (moveKeys[keyNum]) {
                sendMoveDir();
            } else if (event.key == "m") {
                mills.placeSpawnPads = !mills.placeSpawnPads;
            } else if (event.key == "z") {
                mills.place = !mills.place;
            } else if (event.key == "Z") {
                typeof window.debug == "function" && window.debug();
            } else if (keyNum == 32) {
                packet("d", 1, getSafeDir(), 1);
                packet("d", 0, getSafeDir(), 1);
            }
        }
    }
}
function doOneFrame() {
    if (near.dist2 <= items.weapons[player.weapons[0]].range + (player.scale * 1.8) && near.skinIndex != 6) {
        buyEquip(53, 0);
        selectWeapon(player.weapons[0]);
        game.tickBase(() => {
            buyEquip(7, 0);
            sendAutoGather();
        }, 1);
    }
}
/*function doBoostTick() {
    if (near.dist2 >= 340 && near.dist2 <= 430 && [13].includes(player.secondaryIndex)) {
        buyEquip(53, 0);
        selectWeapon(player.weapons[1]);
        sendAutoGather();
        place(4, near.aim2);
        game.tickBase(() => {
            selectWeapon(player.weapons[0]);
            sendAutoGather();
        }, 1);
    }
}*/
// let xx = canvaz.width/2;
// let yy = canvaz.height/2;

// let mouze = {
//     x: xx - mouzeX,
//     y: yy - mouzeY
// }

// let ingamecoorformodabow = {
//     x: player.x + mouze.x,
//     y: player.x + mouze.x
// }

addEventListener("keydown", UTILS.checkTrusted(keyDown));

function keyUp(event) {
    if (player && player.alive) {
        let keyNum = event.which || event.keyCode || 0;
        if (keysActive()) {
            if (keys[keyNum]) {
                keys[keyNum] = 0;
                macro[event.key] = 0;
                if (moveKeys[keyNum]) {
                    sendMoveDir();
                } else if (event.key == ",") {
                    player.sync = true;
                }
            }
        }
    }
}

let autoChatActive = false; // Başlangıçta kapalı
let chatInterval; // Döngü için değişken
let messages = ["OP Mod", "TnT0 On Top", "Death Is Coming" , "Legend Edited The Mod"]; // Mesaj listesi
let msgIndex = 0; // Mesaj sırası

document.addEventListener("keydown", function(event) {
    if (event.key === "<") { // "T" tuşuna basınca başlat/durdur
        autoChatActive = !autoChatActive;
        console.log("Otomatik Mesaj: " + (autoChatActive ? "Açık" : "Kapalı"));

        if (autoChatActive) {
            sendChat(messages[msgIndex]); // 🔥 İlk mesajı anında gönder
            msgIndex = (msgIndex + 1) % messages.length;

            chatInterval = setInterval(() => {
                sendChat(messages[msgIndex]);
                msgIndex = (msgIndex + 1) % messages.length;
            }, 1500); // Her 3 saniyede bir mesaj değişir
        } else {
            clearInterval(chatInterval);
        }
    }
});

let toggleMessages = ["Death"]; // R tuşuna basınca değişen mesajlar
let toggleIndex = 0; // R tuşu için değişken

document.addEventListener("keydown", function(event) {
    if (event.repeat) return; // Tuşa basılı tutulursa tekrar etmesini önler

    if (event.key.toLowerCase() === "r" && document.activeElement.id.toLowerCase() !== "chatbox") {
        safeSendChat(toggleMessages[toggleIndex]); // R tuşuna özel mesaj
        toggleIndex = (toggleIndex + 1) % toggleMessages.length; // 0-1 arasında geçiş yap
    }
});

// 🔹 Güvenli Mesaj Gönderme Fonksiyonu
function safeSendChat(message) {
    try {
        if (typeof io !== "undefined" && io.send) {
            io.send("ch", message); // Mesajı chat'e gönderir
        } else {
            console.warn("Chat mesajı gönderilemedi, io.send tanımlı değil.");
        }
    } catch (error) {
        console.error("Mesaj gönderirken hata oluştu:", error);
    }
}





window.addEventListener("keyup", UTILS.checkTrusted(keyUp));

function sendMoveDir() {
    if(found) {
        packet("a", undefined, 1);
    } else {
        let newMoveDir = getMoveDir();
        if (lastMoveDir == undefined || newMoveDir == undefined || Math.abs(newMoveDir - lastMoveDir) > 0.3) {
            if (!my.autoPush && !found) {
                packet("a", newMoveDir, 1);
            }
            lastMoveDir = newMoveDir;
        }
    }
}

// BUTTON EVENTS:
function bindEvents() {}
bindEvents();

// ITEM COUNT DISPLAY:
let isItemSetted = [];

function updateItemCountDisplay(index = undefined) {
    for (let i = 3; i < items.list.length; ++i) {
        let id = items.list[i].group.id;
        let tmpI = items.weapons.length + i;
        if (!isItemSetted[tmpI]) {
            isItemSetted[tmpI] = document.createElement("div");
            isItemSetted[tmpI].id = "itemCount" + tmpI;
            getEl("actionBarItem" + tmpI).appendChild(isItemSetted[tmpI]);
            isItemSetted[tmpI].style = `
                        display: block;
                        position: absolute;
                        padding-left: 5px;
                        font-size: 2em;
                        color: #fff;
                        `;
            isItemSetted[tmpI].innerHTML = player.itemCounts[id] || 0;
        } else {
            if (index == id) isItemSetted[tmpI].innerHTML = player.itemCounts[index] || 0;
        }
    }
}

function doPathFind(target) {
    let nearBuilds = []
    try {
        let R = player;
        let N = gameObjects
        let centerX = R.x + (target[0] - R.x) / 2;
        let centerY = R.y + (target[1] - R.y) / 2;
        const nearBuilds = N.filter(e => Math.hypot(e.y - centerY, e.x - centerX) < 800 && e.active);
        let block = 30, node = function (x, y, gScore) {
            this.x = x;
            this.y = y;
            this.g = gScore;
            this.type = nearBuilds.some(e => {
                let exactScale = (/spike/.test(e.name) && R.sid != e.owner.sid && (R.team ? !e.isTeamObject(R) : true)) ? (e.scale + 32) : e.scale;
                if (e.name == "pit trap") {
                    if (e.owner && (R.sid == e.owner.sid || e.isTeamObject(R))) {
                        return false;
                    }
                }
                if (Math.hypot(e.y - y, e.x - x) < exactScale + block && Math.hypot(e.y - target[1], e.x - target[0]) > exactScale + block && Math.hypot(e.y - R.y2, e.x - R.x2) > exactScale + block) {
                    return true;
                }
                return false;
            }) ? "wall" : "space";
        }, myNode = new node(Math.round(R.x2 / block) * block, Math.round(R.y2 / block) * block, 0),
            targetNode = new node(Math.round(target[0] / block) * block, Math.round(target[1] / block) * block, 0),
            paths = [], foundset = [], currentTick = 0, endTick = 64, found = true;
        function positive(num) {
            return Math.abs(num);
        };
        while (!foundset.find(e => {
            return Math.hypot(e.y - targetNode.y, e.x - targetNode.x) < block;
        })) {
            currentTick++;
            if (currentTick >= endTick) {
                found = false;
                break;
            };
            let bestnode = currentTick === 1 ? myNode : foundset.filter(e => e.type == "space").sort((a, b) => a.good - b.good)[0];
            for (let i = 0; i < 3; i++) {
                for (let o = 0; o < 3; o++) {
                    if (i == 1 && o == 1) {
                        continue;
                    }
                    let x = bestnode.x + block * (-1 + i);
                    let y = bestnode.y + block * (-1 + o);
                    let n = new node(x, y, currentTick);
                    let good = (positive(n.x - targetNode.x) + positive(n.y - targetNode.y) / block) - currentTick;
                    n.good = good;
                    foundset.push(n);
                }
            }
            paths.push(bestnode);
        }
        return found ? paths : false;
    } catch (e) {}
}
function toRad2(degrees) {
    return degrees * 0.01745329251;
}
function getAngle(e) {
    return e * 57.2957795457;
}
function getAng(e) {
    return e * 57.2957795457;
}
let moveAng;
var retrappable = false;
function autoPush() {
    retrappable = true;
                let nearTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= (near.scale + tmp.getScale() + 15)).sort(function(a, b) {
                    return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                })[0];
                if (nearTrap) {
                    let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, nearTrap, 0, 0) <= (near.scale + nearTrap.scale + tmp.scale + 5)).sort(function(a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];
                    if (spike) {
                        let pos = {
                            x: spike.x + (250 * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                            y: spike.y + (250 * Math.sin(UTILS.getDirect(near, spike, 2, 0))),
                            x2: spike.x + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                            y2: spike.y + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.sin(UTILS.getDirect(near, spike, 2, 0)))
                        };
                         my.pushData = {
                                    x: spike.x + Math.cos(30),
                                    y: spike.y + Math.sin(30),
                                    x2: pos.x2 + Math.cos(60),
                                    y2: pos.y2 + Math.sin(60)
                                };
                        let finds = gameObjects.filter(tmp => tmp.active).find((tmp) => {
                            let tmpScale = tmp.getScale();
                            if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, pos.x2, pos.y2)) {
                                return true;
                            }
                        });
                        let pushAngle = Math.atan2(near.y2 - spike.y, near.x2 - spike.x)
                        let point = {
                x: near.x2 + Math.cos(pushAngle) * 30,
                y: near.y2 + Math.sin(pushAngle) * 60,
            }
                        if (2 == 1) {
                            if (my.autoPush) {
                                my.autoPush = false;
                                combatBot.show = false;
                            }
                        } else {
                            my.autoPush = true;
                            if (near.dist2 >= 120) {
                                my.autoPush = true;
                                combatBot.show = true;
                                let dir = doPathFind([my.pushData.x2, my.pushData.y2]);
                                var omg = (dir ? Math.atan2(dir[1].y - dir[0].y, dir[1].x - dir[0].x) : null);
                                io.send("9", omg, 1);
                                combatBot.paths = dir;
                            } else if (near.dist2 <= 110) {
                                combatBot.show = false;
                                my.autoPush = true;
                                let angle = Math.atan2(near.y2 - spike.y, near.x2 - spike.x)
                                let point = {
                                    x: near.x2 + Math.cos(angle) * 53,
                                    y: near.y2 + Math.sin(angle) * 53,
                                }
                                let data = {
                x: near.x + player.scale * Math.cos(UTILS.getDirect(near, spike, 2, 0)),
                y: near.y + player.scale * Math.sin(UTILS.getDirect(near, spike, 2, 0))
            }
                                let num = UTILS.getDist(near, spike, 2, 0);
                                let text = num.toString(10);
                                let scale = (player.scale / 10);
                                if (UTILS.getDist(near, spike, 2, 0) >= 105) {
                                        let spikeAim = UTILS.getDirect(spike, near, 0, 2);
                if (UTILS.getAngleDist(near.aim2, spikeAim) < 0.45) {
                    moveAng = near.aim2;
                    player.chat.message = ("Pushing:" + near.dist);
                } else {
                    let mDir = UTILS.getDirect(data, player, 0, 2);
                    moveAng = toRad2(getAngle(mDir) * 2 - getAng(near.aim2));
                    player.chat.message = ("Adjusting...");
                }
                io.send("9", moveAng, 1);
                                } else {
                                    io.send("9", Math.atan2(point.y - player.y2, point.x - player.x2), 1);
                                }
                            }
                        }
                    } else {
                        my.autoPush = false;
                        combatBot.show = false;
                    }
                } else {
                    my.autoPush = false;
                    combatBot.show = false;
                }
            }

// ADD DEAD PLAYER:
function addDeadPlayer(tmpObj) {
    deadPlayers.push(new DeadPlayer(tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.buildIndex, tmpObj.weaponIndex, tmpObj.weaponVariant, tmpObj.skinColor, tmpObj.scale, tmpObj.name));
}

/** APPLY SOCKET CODES */

// SET INIT DATA:
function setInitData(data) {
    alliances = data.teams;
}

// SETUP GAME:
function setupGame(yourSID) {
    keys = {};
    macro = {};
    playerSID = yourSID;
    attackState = 0;
    inGame = true;
    packet("d", 0, getAttackDir(), 1);
    my.ageInsta = true;
    if (firstSetup) {
        firstSetup = false;
        gameObjects.length = 0;
        liztobj.length = 0;
    }
}

// ADD NEW PLAYER:
function addPlayer(data, isYou) {
    let tmpPlayer = findPlayerByID(data[0]);
    if (!tmpPlayer) {
        tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager,
                               objectManager, players, ais, items, hats, accessories);
        players.push(tmpPlayer);
    }
    tmpPlayer.spawn(isYou ? true : null);
    tmpPlayer.visible = false;
    tmpPlayer.oldPos = {
        x2: undefined,
        y2: undefined
    };
    tmpPlayer.x2 = undefined;
    tmpPlayer.y2 = undefined;
    tmpPlayer.x3 = undefined;
    tmpPlayer.y3 = undefined;
    tmpPlayer.setData(data);
    if (isYou) {
        player = tmpPlayer;
        camX = player.x;
        camY = player.y;
        my.lastDir = 0;
        updateItems();
        updateAge();
        updateItemCountDisplay();
        if (player.skins[7]) {
            my.reSync = true;
        }
    }
}

// REMOVE PLAYER:
function removePlayer(id) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            players.splice(i, 1);
            break;
        }
    }
}

// UPDATE HEALTH:
function updateHealth(sid, value) {
    tmpObj = findPlayerBySID(sid);
    if (tmpObj) {
        tmpObj.oldHealth = tmpObj.health;
        tmpObj.health = value;
        tmpObj.judgeShame();
        if (tmpObj.oldHealth > tmpObj.health) {
            tmpObj.damaged = tmpObj.oldHealth - tmpObj.health;
            let damaged = tmpObj.damaged;
            tmpObj = findPlayerBySID(sid);
            let bullTicked = false;
            if (tmpObj == player) {
                if (tmpObj.skinIndex == 7 && (damaged == 5 || (tmpObj.latestTail == 13 && damaged == 2))) {
                    if (my.reSync) {
                        my.reSync = false;
                        tmpObj.setBullTick = true;
                    }
                    bullTicked = true;
                }
                if (inGame) {
                    advHeal.push([sid, value, tmpObj.damaged]);
                } else {
                    if (!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || (tmpObj.latestTail == 13 && tmpObj.damaged == 2))) {
                        tmpObj.setPoisonTick = true;
                    }
                }
            } else {
                if(tmpObj != player) {
                    if(tmpObj.maxShameCount < tmpObj.shameCount) {
                        tmpObj.maxShameCount = tmpObj.shameCount;
                    }
                }
            }
        }
    }
}

// KILL PLAYER:
function killPlayer() {
    inGame = false;
    lastDeath = {
        x: player.x,
        y: player.y,
    };
}

// UPDATE PLAYER ITEM VALUES:
function updateItemCounts(index, value) {
    if (player) {
        player.itemCounts[index] = value;
        updateItemCountDisplay(index);
    }
}

// UPDATE AGE:
function updateAge(xp, mxp, age) {
    if (xp != undefined) {
        player.XP = xp;
    }
    if (mxp != undefined) {
        player.maxXP = mxp;
    }
    if (age != undefined) {
        player.age = age;
    }
}

// UPDATE UPGRADES:
function updateUpgrades(points, age) {
    player.upgradePoints = points;
    player.upgrAge = age;
    if (points > 0) {
        tmpList.length = 0;
        UTILS.removeAllChildren(upgradeHolder);
        for (let i = 0; i < items.weapons.length; ++i) {
            if (items.weapons[i].age == age && (items.weapons[i].pre == undefined || player.weapons.indexOf(items.weapons[i].pre) >= 0)) {
                let e = UTILS.generateElement({
                    id: "upgradeItem" + i,
                    class: "actionBarItem",
                    onmouseout: function() {
                        showItemInfo();
                    },
                    parent: upgradeHolder
                });
                e.style.backgroundImage = getEl("actionBarItem" + i).style.backgroundImage;
                tmpList.push(i);
            }
        }
        for (let i = 0; i < items.list.length; ++i) {
            if (items.list[i].age == age && (items.list[i].pre == undefined || player.items.indexOf(items.list[i].pre) >= 0)) {
                let tmpI = (items.weapons.length + i);
                let e = UTILS.generateElement({
                    id: "upgradeItem" + tmpI,
                    class: "actionBarItem",
                    onmouseout: function() {
                        showItemInfo();
                    },
                    parent: upgradeHolder
                });
                e.style.backgroundImage = getEl("actionBarItem" + tmpI).style.backgroundImage;
                tmpList.push(tmpI);
            }
        }
        for (let i = 0; i < tmpList.length; i++) {
            (function(i) {
                let tmpItem = getEl('upgradeItem' + i);
                // tmpItem.onmouseover = function() {
                //     if (items.weapons[i]) {
                //         showItemInfo(items.weapons[i], true);
                //     } else {
                //         showItemInfo(items.list[i - items.weapons.length]);
                //     }
                // };
                tmpItem.onclick = UTILS.checkTrusted(function() {
                    packet("H", i);
                });
                UTILS.hookTouchEvents(tmpItem);
            })(tmpList[i]);
        }
        if (tmpList.length) {
            upgradeHolder.style.display = "block";
            upgradeCounter.style.display = "block";
            upgradeCounter.innerHTML = "SELECT ITEMS (" + points + ")";
        } else {
            upgradeHolder.style.display = "none";
            upgradeCounter.style.display = "none";
            showItemInfo();
        }
    } else {
        upgradeHolder.style.display = "none";
        upgradeCounter.style.display = "none";
        showItemInfo();
    }
}
function toR(e) {
    var n = ((e * Math.PI) / 180) % (2 * Math.PI);
    return n > Math.PI ? Math.PI - n : n;
}
function getDist(e, t) {
    try {
        return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch (e) {
        return Infinity;
    }
}
// GET DIRECTION
function getDir(e, t) {
    try {
        return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch (e) {
        return 0;
    }
}
function cdf(e, t) {
    try {
        return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch (e) {
        return Infinity;
    }
}
function caf(e, t) {
    try {
        return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch (e) {
        return 0;
    }
}
function toD(e) {
    var n = (e / Math.PI * 360) % 360;
    return n >= 360 ? n - 360 : n;
}


/* function caf(e, t) {
                try {
                    return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
                } catch (e) {
                    return 0;
                }
            }
*/

// KILL OBJECT:
function killObject(sid) {
    let findObj = findObjectBySid(sid);
    objectManager.disableBySid(sid);
    if (player && findObj) {
        for (let i = 0; i < breakObjects.length; i++) {
            if (breakObjects[i].sid == sid) {
                breakObjects.splice(i, 1);
                break;
            }
        }
        if (!player.canSee(findObj)) {
            breakTrackers.push({
                x: findObj.x,
                y: findObj.y
            });
        }
        if (breakTrackers.length > 8) {
            breakTrackers.shift();
        }
        for (let position of placedSpikePositions) {
            let storedPosition = JSON.parse(position);
            let distToStoredPosition = Math.hypot(storedPosition[0] - findObj.x, storedPosition[1] - findObj.y);
            if (distToStoredPosition <= 80) {
                placedSpikePositions.delete(position);
                break;
            }
        }
        traps.replacer(findObj);
    }
}

// KILL ALL OBJECTS BY A PLAYER:
function killObjects(sid) {
    if (player) objectManager.removeAllItems(sid);
}
function setTickout(doo, timeout) {
    if (!ticks.manage[ticks.tick + timeout]) {
        ticks.manage[ticks.tick + timeout] = [doo];
    } else {
        ticks.manage[ticks.tick + timeout].push(doo);
    }
}

// GAME TICKOUT:
function doNextTick(doo) {
    waitTicks.push(doo);
}
let waitTicks = [];
let placeableSpikes = [];
let placeableTraps = [];
let placeableSpikesPREDICTS = [];
let spike = gameObjects.filter(obj => (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "spinning spikes" || obj.name == "poison spikes") && fgdo(player, obj) < player.scale + obj.scale + 22 && !obj.isTeamObject(tmpObj) && obj.active)[0]

let reset = false
function fgdo(a, b) {
    return Math.sqrt(Math.pow((b.y - a.y), 2) + Math.pow((b.x - a.x), 2));
}
/*  function addFunction(action, tick) {//setTimeout per tick
                    if (typeof action != "function") {
                        return;
                    }
                    if (typeof queueTick[tC + tick] != "object") {
                        queueTick[tC + tick] = [action];
                    } else {
                        queueTick[tC + tick].push(action);
                    }
                }
                function addPunction(action, tick) {//setTimeout per tick
                    if (typeof action != "function") {
                        return;
                    }
                    if (typeof queuePackets[tC + tick] != "object") {
                        queuePackets[tC + tick] = [action];
                    } else {
                        queuePackets[tC + tick].push(action);
                    }
                }*/
let Ab = null , Ac = null , Ad = {wood: 0,stone: 0, food:0, score: 0} , priXP = 0 , secXP = 0 , maxPriXP = 0 , maxSecXP = 0 , addXP = (d) => {
    if(player.weaponIndex == player.weapons[0]) priXP += d; else secXP += d
}
setInterval(() => {
    try {
        Ab == player.weapons[0] && Ac == player.weapons[1] || (player.weapons[0] != Ab && (priXP = 0), player.weapons[1] != Ac && (secXP = 0)), Ab = player.weapons[0], Ac = player.weapons[1];
        let e = Number(document.getElementById("stoneDisplay").innerHTML)
        , t = Number(document.getElementById("foodDisplay").innerHTML)
        , n = Number(document.getElementById("woodDisplay").innerHTML)
        //, i = Number(document.getElementById("scoreDisplay").innerHTML)
        e > Ad.stone && (addXP(e - Ad.stone), Ad.stone = e), t > Ad.food && (addXP(t - Ad.food), Ad.food = t),
            n > Ad.wood && (addXP(n - Ad.wood), Ad.wood = n)//, i > Ad.score && (addXP(i - Ad.score), Ad.score = i)
    } catch (e) {};
}, 112.5);

let found = false;
let autoQ = false;

let autos = {
    insta: {
        todo: false,
        wait: false,
        count: 4,
        shame: 5
    },
    bull: false,
    antibull: 0,
    reloaded: false,
    stopspin: true
}

// Move:
function move(direction) {
    packet("9", direction, 1);
}

function setMoveDir(direction) {
    move(direction);

    game.tickBase(() => {
        move(lastMoveDir);
    }, 1);
}

function showSettingText(life, setting) {
    textManager.showText(player.x, player.y, player.scale, 0.1, life, setting, "#fff");
}

let infosed = [];
let movementDirs = [];
function handleMovement(final = false) {
    if (traps.inTrap || !configs.safeFalk) return;

    if (final) {
        if (!movementDirs.length) return move(lastMoveDir);

        let firstMove = movementDirs.sort((a, b) => b.score - a.score)[0];
        if (firstMove.reset) {
            io.send("e");
        } else move(firstMove.dir);

        movementDirs.length = 0;
    } else {
        const speed = player.maxSpeed;
        const weapon = items.weapons[player.weapons[player.weapons[1] == 10 ? 1 : 0]];
        const weapRange = weapon.range;
        let newPos = {
            x: player.x2 + (player.x2 - player.oldPos.x2) * speed + (Math.cos(lastMoveDir) * (player.scale / 2) * speed),
            y: player.y2 + (player.y2 - player.oldPos.y2) * speed + (Math.sin(lastMoveDir) * (player.scale / 2) * speed),
        };

        let spike = liztobj.filter(tmp => (tmp.dmg) && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + 40 + player.scale)).sort((a, b) => {
            return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
        })[0];

        if (spike && UTILS.getDist(spike, player, 0, 2) <= weapRange + spike.scale + player.scale) {
        } else {
            infosed = null;
        }

        if (spike) {
            for (let i = liztobj.length; i--;) {
                const SCOPE = liztobj[i];
                const val = (SCOPE.getScale(0.6, false) / 2) + weapRange + (player.scale / 2);

                if (UTILS.collisionDetection(newPos, spike, val) && UTILS.getDist(player, spike, 2, 0) >= UTILS.getDist(spike, newPos, 0, 0)) {
                    if (infosed === null) {
                        infosed = "stop";
                        showSettingText(1000, infosed);
                    }

                    movementDirs.push({
                        reset: true,
                        dir: undefined,
                        score: 3,
                        object: spike,
                    });
                    break;
                };
            }
        }
    }
};

function dodgeObjects() {
    game.tickBase(() => {
        handleMovement();
        handleMovement(1);
    }, 1);
}

let breakObject = {
    info: {},
    aim: 0,
    active: false,
};

// UPDATE PLAYER DATA:
function updatePlayers(data) {

    if (player.shameCount > 0) {
        my.reSync = true;
    } else {
        my.reSync = false;
    }

    game.tick++;
    enemy = [];
    nears = [];
    near = [];
    game.tickSpeed = performance.now() - game.lastTick;
    game.lastTick = performance.now();
    players.forEach((tmp) => {
        tmp.forcePos = !tmp.visible;
        tmp.visible = false;
        if((tmp.timeHealed - tmp.timeDamaged)>0 && tmp.lastshamecount<tmp.shameCount)
            tmp.pinge = (tmp.timeHealed - tmp.timeDamaged);
    });
    for (let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if (tmpObj) {
            tmpObj.t1 = (tmpObj.t2 === undefined) ? game.lastTick : tmpObj.t2;
            tmpObj.t2 = game.lastTick;
            tmpObj.oldPos.x2 = tmpObj.x2;
            tmpObj.oldPos.y2 = tmpObj.y2;
            tmpObj.x1 = tmpObj.x;
            tmpObj.y1 = tmpObj.y;
            tmpObj.x2 = data[i + 1];
            tmpObj.y2 = data[i + 2];
            tmpObj.x3 = tmpObj.x2 + (tmpObj.x2 - tmpObj.oldPos.x2);
            tmpObj.y3 = tmpObj.y2 + (tmpObj.y2 - tmpObj.oldPos.y2);
            tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 3] : tmpObj.d2;
            tmpObj.d2 = data[i + 3];
            tmpObj.dt = 0;
            tmpObj.buildIndex = data[i + 4];
            tmpObj.weaponIndex = data[i + 5];
            tmpObj.weaponVariant = data[i + 6];
            tmpObj.team = data[i + 7];
            tmpObj.isLeader = data[i + 8];
            tmpObj.oldSkinIndex = tmpObj.skinIndex;
            tmpObj.oldTailIndex = tmpObj.tailIndex;
            tmpObj.skinIndex = data[i + 9];
            tmpObj.tailIndex = data[i + 10];
            tmpObj.iconIndex = data[i + 11];
            tmpObj.zIndex = data[i + 12];
            tmpObj.visible = true;
            tmpObj.update(game.tickSpeed);
            tmpObj.dist2 = UTILS.getDist(tmpObj, player, 2, 2);
            tmpObj.aim2 = UTILS.getDirect(tmpObj, player, 2, 2);
            tmpObj.dist3 = UTILS.getDist(tmpObj, player, 3, 3);
            tmpObj.aim3 = UTILS.getDirect(tmpObj, player, 3, 3);
            tmpObj.damageThreat = 0;
            if (tmpObj.skinIndex == 45 && tmpObj.shameTimer <= 0) {
                tmpObj.addShameTimer();
            }
            if (tmpObj.oldSkinIndex == 45 && tmpObj.skinIndex != 45) {
                tmpObj.shameTimer = 0;
                tmpObj.shameCount = 0;
                if (tmpObj == player) {
                    healer();
                }
            }

            if (player.shameCount < 4 && near.dist3 <= 300 && near.reloads[near.primaryIndex] <= game.tickRate * (window.pingTime >= 200 ? 2 : 1)) {
                autoQ = true;
                healer();
            } else {
                if (autoQ) {
                    healer();
                }
                autoQ = false;
            }


            if (tmpObj == player) {
                if (liztobj.length) {
                    dodgeObjects();

                    let spike = liztobj.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + 40 + player.scale)).sort(function(a, b) {
                        return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
                    })[0];

                    let distToSpike = items.weapons[tmpObj.weaponIndex].range;
                    if (configs.autoBreakSpike && spike && UTILS.getDist(spike, player, 0, 2) <= distToSpike + spike.scale + player.scale) {
                        breakObject.info = spike;
                        breakObject.aim = UTILS.getDirect(spike, player, 0, 2);
                        breakObject.active = true;
                    } else {
                        breakObject.active = false;
                        breakObject.info = {};
                    }

                    let nearTrap = liztobj.filter(e => e.trap && e.active && UTILS.getDist(e, tmpObj, 0, 2) <= (tmpObj.scale + e.getScale() + 25) && !e.isTeamObject(tmpObj)).sort(function(a, b) {
                        return UTILS.getDist(a, tmpObj, 0, 2) - UTILS.getDist(b, tmpObj, 0, 2);
                    })[0];

                    if (nearTrap) {
                        let spike = liztobj.filter( // real real no skid
                            (obj) =>
                            obj.dmg &&
                            cdf(tmpObj, obj) <= tmpObj.scale + nearTrap.scale / 2 &&
                            !obj.isTeamObject(tmpObj) &&
                            obj.active
                        )[0];

                        traps.outOfTrap = false;
                        traps.dist = UTILS.getDist(spike ? spike : nearTrap, tmpObj, 0, 2);
                        traps.aim = UTILS.getDirect(spike ? spike : nearTrap, tmpObj, 0, 2);

                        if (!traps.inTrap && enemy.length) {
                            let simpleAim = UTILS.getDirect(nearTrap, tmpObj, 0, 2);
                            traps.protect(simpleAim);
                        }

                        traps.inTrap = true;
                        traps.info = nearTrap;
                    } else {
                        let checkNigers = enemy.length && near.dist2 <= 300;
                        if (traps.inTrap && checkNigers) {
                            sendChat("outOfTrap");
                            traps.outOfTrap = true;
                            my.anti0Tick = 2;
                            healer();
                            if (player.health < 45) healer();
                        } else traps.outOfTrap = false;

                        traps.inTrap = false;
                        traps.info = {};
                    }
                } else {
                    let checkNigers = enemy.length && near.dist2 <= 300; // bc kekekekekkeke
                    if (traps.inTrap && checkNigers) {
                        sendChat("outOfTrap");
                        traps.outOfTrap = true;
                        my.anti0Tick = 2;
                        healer();
                        if (player.health < 45) healer();
                    } else traps.outOfTrap = false;

                    traps.inTrap = false;
                }
            }
            if (tmpObj.weaponIndex < 9) {
                tmpObj.primaryIndex = tmpObj.weaponIndex;
                tmpObj.primaryVariant = tmpObj.weaponVariant;
            } else if (tmpObj.weaponIndex > 8) {
                tmpObj.secondaryIndex = tmpObj.weaponIndex;
                tmpObj.secondaryVariant = tmpObj.weaponVariant;
            }
        }
        i += 13;
    }
    if (textManager.stack.length) {
        let stacks = [];
        let notstacks = [];
        let num = 0;
        let num2 = 0;
        let pos = {
            x: null,
            y: null
        };
        let pos2 = {
            x: null,
            y: null
        }
        textManager.stack.forEach((text) => {
            if (text.value >= 0) {
                if (num == 0) pos = {
                    x: text.x,
                    y: text.y
                };
                num += Math.abs(text.value);
            } else {
                if (num2 == 0) pos2 = {
                    x: text.x,
                    y: text.y
                };
                num2 += Math.abs(text.value);
            }
        });
        if (num2 > 0) {
            textManager.showText(pos2.x, pos2.y, Math.max(45, Math.min(50, num2)), 0.18, 500, num2, "#8ecc51");
        }
        if (num > 0) {
            textManager.showText(pos.x, pos.y, Math.max(45, Math.min(50, num)), 0.18, 500, num, "#fff");
        }
        textManager.stack = [];
    }
    try {
        let t = 3e3;
        switch(player.weaponVariant) {
            case 0:
                t = 3e3;
                break;
            case 1:
                t = 7e3;
                break;
            case 2:
                t = 12e3;
                break;
            case 3:
                t = 1 / 0
        }
        (player.weaponIndex == player.weapons[0] ? maxPriXP = t : maxSecXP = t);
    } catch (e) {};
    if (runAtNextTick.length) {
        runAtNextTick.forEach((tmp) => {
            checkProjectileHolder(...tmp);
        });
        runAtNextTick = [];
    }
    for (let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if (tmpObj) {
            if (!tmpObj.isTeam(player)) {
                enemy.push(tmpObj);
                if (tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + (player.scale * 2)) {
                    nears.push(tmpObj);
                }
            }
            tmpObj.manageReload();
            if (tmpObj != player) {
                tmpObj.addDamageThreat(player);
            }
        }
        i += 13;
    }
    /*projectiles.forEach((proj) => {
                    tmpObj = proj;
                    if (tmpObj.active) {
                        tmpObj.tickUpdate(game.tickSpeed);
                    }
                });*/
    if (player && player.alive) {
        if (enemy.length) {
            near = enemy.sort(function(tmp1, tmp2) {
                return tmp1.dist2 - tmp2.dist2;
            })[0];
        } else {
            // console.log("no enemy");
        }
        if (game.tickQueue[game.tick]) {
            game.tickQueue[game.tick].forEach((action) => {
                action();
            });
            game.tickQueue[game.tick] = null;
        }
        if (advHeal.length) {
            advHeal.forEach(updHealth => {
                if (window.pingTime < 150) {
                    let sid = updHealth[0];
                    let value = updHealth[1];
                    let totalDamage = 100 - value;
                    let damaged = updHealth[2];
                    tmpObj = findPlayerBySID(sid);
                    let bullTicked = false;
                    if (tmpObj == player) {
                        if (tmpObj.skinIndex == 7 && (damaged == 5 || tmpObj.latestTail == 13 && damaged == 2)) {
                            if (my.reSync) {
                                my.reSync = false;
                                tmpObj.setBullTick = true;
                            }
                            bullTicked = true;
                        }
                        if (inGame) {
                            let attackers = getAttacker(damaged);
                            let gearDmgs = [0.25, 0.45].map(val => val * items.weapons[player.weapons[0]].dmg * soldierMult());
                            let includeSpikeDmgs = enemy.length ? !bullTicked && gearDmgs.includes(damaged) && near.skinIndex == 11 : false;
                            let healTimeout = 140 - window.pingTime;
                            let dmg = 100 - player.health;
                            let slowHeal = function (timer, tickBase) {
                                if (!tickBase) {
                                    setTimeout(() => {
                                        healer();
                                    }, timer);
                                } else {
                                    game.tickBase(() => {
                                        healer();
                                    }, 2);
                                }
                            };
                            if (true) {
                                if (enemy.length) {
                                    if ([0, 7, 8].includes(near.primaryIndex)) {
                                        if (damaged < 75) {
                                            slowHeal(healTimeout);
                                        } else {
                                            healer();
                                        }
                                    }
                                    if ([1, 2, 6].includes(near.primaryIndex)) {
                                        if (damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5) {
                                            healer();
                                        } else {
                                            slowHeal(healTimeout);
                                        }
                                    }
                                    if (near.primaryIndex == 3) {
                                        if (near.secondaryIndex == 15) {
                                            if (near.primaryVariant < 2) {
                                                if (damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1) {
                                                    tmpObj.canEmpAnti = true;
                                                    tmpObj.antiTimer = game.tick;
                                                    healer();
                                                } else {
                                                    slowHeal(healTimeout);
                                                }
                                            } else if (damaged > 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1) {
                                                tmpObj.canEmpAnti = true;
                                                tmpObj.antiTimer = game.tick;
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if (damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                            healer();
                                        } else {
                                            slowHeal(healTimeout);
                                        }
                                    }
                                    if (near.primaryIndex == 4) {
                                        if (near.primaryVariant >= 1) {
                                            if (damaged >= 10 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if (damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 3) {
                                            healer();
                                        } else {
                                            slowHeal(healTimeout);
                                        }
                                    }
                                    if ([undefined, 5].includes(near.primaryIndex)) {
                                        if (near.secondaryIndex == 10) {
                                            if (dmg >= (includeSpikeDmgs ? 10 : 20) && tmpObj.damageThreat + dmg >= 80 && tmpObj.shameCount < 6) {
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if (near.primaryVariant >= 2 || near.primaryVariant == undefined) {
                                            if (dmg >= (includeSpikeDmgs ? 15 : 20) && tmpObj.damageThreat + dmg >= 50 && tmpObj.shameCount < 6) {
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if ([undefined || 15].includes(near.secondaryIndex)) {
                                            if (damaged > (includeSpikeDmgs ? 8 : 20) && player.damageThreat >= 25 && game.tick - player.antiTimer > 1) {
                                                if (tmpObj.shameCount < 5) {
                                                    healer();
                                                } else {
                                                    slowHeal(healTimeout);
                                                }
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if ([9, 12, 13].includes(near.secondaryIndex)) {
                                            if (dmg >= 25 && player.damageThreat + dmg >= 70 && tmpObj.shameCount < 6) {
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if (damaged > 25 && player.damageThreat + dmg >= 95) {
                                            healer();
                                        } else {
                                            slowHeal(healTimeout);
                                        }
                                    }
                                    if (near.primaryIndex == 6) {
                                        if (near.secondaryIndex == 15) {
                                            if (damaged >= 25 && tmpObj.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                                healer();
                                            } else {
                                                slowHeal(healTimeout);
                                            }
                                        } else if (damaged >= 70 && tmpObj.shameCount < 4) {
                                            healer();
                                        } else {
                                            slowHeal(healTimeout);
                                        }
                                    }
                                    if (damaged >= 30 && near.reloads[near.secondaryIndex] == 0 && near.dist2 <= 150 && player.skinIndex == 11 && player.tailIndex == 21) {
                                        instaC.canCounter = true;
                                    }
                                } else if (damaged >= 70) {
                                    healer();
                                } else {
                                    slowHeal(healTimeout);
                                }
                            } else {
                                if (damaged >= (includeSpikeDmgs ? 8 : 25) && dmg + player.damageThreat >= 80 && game.tick - player.antiTimer > 1) {
                                    if (tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) {
                                        tmpObj.canEmpAnti = true;
                                    } else {
                                        player.soldierAnti = true;
                                    }
                                    tmpObj.antiTimer = game.tick;
                                    let shame = [0, 4, 6, 7, 8].includes(near.primaryIndex) ? 2 : 5;
                                    if (tmpObj.shameCount < shame) {
                                        healer();
                                    } else if (near.primaryIndex == 7 || player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21)) {
                                        slowHeal(healTimeout);
                                    } else {
                                        slowHeal(healTimeout, 1);
                                    }
                                } else if (near.primaryIndex == 7 || player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21)) {
                                    slowHeal(healTimeout);
                                } else {
                                    slowHeal(healTimeout, 1);
                                }
                                if (damaged >= 25 && near.dist2 <= 140 && player.skinIndex == 11 && player.tailIndex == 21) {
                                    instaC.canCounter = true;
                                }
                            }
                        } else if (!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || tmpObj.latestTail == 13 && tmpObj.damaged == 2)) {
                            tmpObj.setPoisonTick = true;
                        }
                    }
                } else {
                    let [sid, value, damaged] = updHealth;
                    let totalDamage = 100 - value;
                    let tmpObj = findPlayerBySID(sid);
                    let bullTicked = false;
                    if (tmpObj == player) {
                        if (tmpObj.skinIndex == 7 && (damaged == 5 || tmpObj.latestTail == 13 && damaged == 2)) {
                            if (my.reSync) {
                                my.reSync = false;
                                tmpObj.setBullTick = true;
                                bullTicked = true;
                            }
                        }
                        if (inGame) {
                            let attackers = getAttacker(damaged);
                            let gearDmgs = [0.25, 0.45].map(
                                (val) =>
                                val * items.weapons[player.weapons[0]].dmg * soldierMult()
                            );
                            let includeSpikeDmgs = enemy.length
                            ? !bullTicked &&
                                gearDmgs.includes(damaged) &&
                                near.skinIndex == 11
                            : false;
                            let healTimeout = 60;
                            let dmg = 100 - player.health;
                            let shameCountThreshold = [2, 5][[0, 4, 6, 7, 8].includes(near.primaryIndex) ? 0 : 1];
                            let slowHeal = function (timer, tickBase) {
                                if (!tickBase) {
                                    setTimeout(() => healer(), timer);
                                } else {
                                    game.tickBase(() => healer(), 2);
                                }
                            };
                            if (true) {
                                let canHealFast = [0, 7, 8].includes(near.primaryIndex) ? damaged < 75 : [1, 2, 6].includes(near.primaryIndex) ? damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 : [undefined, 5].includes(near.primaryIndex) ? dmg >= (includeSpikeDmgs ? 15 : 20) && tmpObj.damageThreat + dmg >= 50 && tmpObj.shameCount < 6 : near.primaryIndex == 3 && near.secondaryIndex == 15 ? damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1 : near.primaryIndex == 4 ? near.primaryVariant >= 1 ? damaged >= 10 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4 : damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 3 : near.primaryIndex == 6 && near.secondaryIndex == 15 ? damaged >= 25 && tmpObj.damageThreat + dmg >= 95 && tmpObj.shameCount < 4 : damaged >= 25 && player.damageThreat + dmg >= 95;
                                if (canHealFast) {
                                    healer();
                                } else {
                                    slowHeal(healTimeout);
                                }
                            } else {
                                let canHealFast = damaged >= (includeSpikeDmgs ? 8 : 25) && dmg + player.damageThreat >= 80 && game.tick - player.antiTimer > 1;
                                if (canHealFast) {
                                    if (tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) {
                                        tmpObj.canEmpAnti = true;
                                    } else {
                                        player.soldierAnti = true;
                                    }
                                    tmpObj.antiTimer = game.tick;
                                    if (tmpObj.shameCount < shameCountThreshold) {
                                        healer();
                                    } else {
                                        slowHeal(healTimeout, near.primaryIndex == 7 || player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21) ? 0 : 1);
                                    }
                                } else {
                                    slowHeal(healTimeout, near.primaryIndex == 7 || player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21) ? 0 : 1);
                                }
                            }
                        } else if (!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || tmpObj.latestTail == 13 && tmpObj.damaged == 2)) {
                            tmpObj.setPoisonTick = true;
                        }
                    }
                }
            });
            advHeal = [];
        }
        players.forEach((tmp) => {
            if (!tmp.visible && player != tmp) {
                tmp.reloads = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    53: 0,
                };
            }
            if (tmp.setBullTick) {
                tmp.bullTimer = 0;
            }
            if (tmp.setPoisonTick) {
                tmp.poisonTimer = 0;
            }
            tmp.updateTimer();
        });
        if (inGame) {
            if (enemy.length) {
                if (player.canEmpAnti) {
                    player.canEmpAnti = false;
                    if (near.dist2 <= 300 && !my.safePrimary(near) && !my.safeSecondary(near)) {
                        if (near.reloads[53] == 0) {
                            player.empAnti = true;
                            player.soldierAnti = false;
                            //modLog("EmpAnti");
                        } else {
                            player.empAnti = false;
                            player.soldierAnti = true;
                            //modLog("SoldierAnti");
                        }
                    }
                }
                let prehit = liztobj.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 3) <= (tmp.scale + near.scale)).sort(function(a, b) {
                    return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                })[0];
                if (prehit) {
                    if (near.dist2 <= items.weapons[player.weapons[0]].range + player.scale * 1.8 && configs.predictTick) {
                        instaC.canSpikeTick = true;
                        instaC.syncHit = true;
                        if (configs.revTick && player.weapons[1] == 15 && player.reloads[53] == 0 && instaC.perfCheck(player, near)) {
                            instaC.revTick = true;
                        }
                    }
                }
                const cSPPdt = [5].includes(near.primaryIndex) && tmpObj.damaged >= 45 || ([5].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 40) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 35) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 40 && player.skinIndex != 6);
                let antiSpikeTick = liztobj.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + player.scale)).sort(function(a, b) {
                    return UTILS.getDist(a, player, 0, 2) - UTILS.getDist(b, player, 0, 2);
                })[0];
                if (antiSpikeTick && !traps.inTrap) {
                    if (near.dist2 <= 300 && cSPPdt) {
                        my.anti0Tick = 2;
                        packet("6", "AntiSpikeTick");
                        dothing = true;
                        if (my.reSync) {
                            my.reSync = false;
                        }
                        // player.chat.message = "Anti Vel SpikeTick " + near.sid;
                        //player.chat.count = 2000;
                    }
                }
            }
            //if ((!useWasd ? true : ((player.checkCanInsta(true) >= 100 ? player.checkCanInsta(true) : player.checkCanInsta(false)) >= (player.weapons[1] == 10 ? 95 : 100))) && near.dist2 <= items.weapons[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]].range + near.scale * 1.8 && (instaC.wait || (!useWasd && Math.floor(Math.random() * 5) == 0)) && !instaC.isTrue && !my.waitHit && player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0 && (!useWasd ? true : getEl("instaType").value == "oneShot" ? (player.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate)) : true) && instaC.perfCheck(player, near) && rKeyPressed) {
            // if (player.checkCanInsta(true) >= 100) {
            //instaC.nobull = !useWasd ? false : instaC.canSpikeTick ? false : true;
            //} else {
            // niger                    // instaC.nobull = false;
            //}
            ////instaC.can = true;
            //} else {
            // instaC.can = false;
            ////////////////// //////}
            if (
                (useWasd
                 ? true
                 : (player.checkCanInsta(true) >= 100
                    ? player.checkCanInsta(true)
                    : player.checkCanInsta(false)) >=
                 (player.weapons[1] == 10 ? 95 : 100)) &&
                near.dist2 <=
                items.weapons[
                    player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]
                ].range +
                near.scale * 1.8 &&
                (instaC.wait || (useWasd && Math.floor(Math.random() * 5) == 0)) &&
                !instaC.isTrue &&
                !my.waitHit &&
                player.reloads[player.weapons[0]] == 0 &&
                player.reloads[player.weapons[1]] == 0 &&
                player.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) &&
                instaC.perfCheck(player, near)
            ) {
                if (player.checkCanInsta(true) >= 100) {
                    instaC.nobull = useWasd ? false : instaC.canSpikeTick ? false : true;
                } else {
                    instaC.nobull = false;
                }
                instaC.can = true;
            } else {
                instaC.can = false;
            }
            let dothing = false;

            //mostly all near.dist2 <= 300 and not if in range of weapon cuz gays spam 1 frame like x18k and weapon range thing not reliable
            async function antiSpikeTickop() {
                const thinga = near.dist2 <= 300 && [3, 4, 5].includes(near.primaryIndex) && traps.info.health <= items.weapons[near.weaponIndex].dmg * (config.weaponVariants[near[(near.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[near.weaponIndex].sDmg || 1) * 3.3;
                const thingaa = near.dist2 <= 300 && [3, 4, 5].includes(near.primaryIndex) && traps.info.health <= items.weapons[player.weaponIndex].dmg * (config.weaponVariants[player[(player.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val);
                if ([5].includes(near.primaryIndex) && near.dist2 <= 300 && traps.inTrap) {
                    await new Promise(resolve => setTimeout(resolve, 10));
                    if ([0].includes(near.secondaryIndex) && traps.inTrap) {
                        dothing = true;
                        my.anti0Tick = 2;
                        if (my.reSync) {
                            my.reSync = true;
                        }
                    }
                }
                if (traps.inTrap && thingaa && thinga) {
                    buyEquip(6, 0);
                    buyEquip(16, 1);
                    dothing = true;
                    if (my.reSync) {
                        my.reSync = false;
                    }
                    if ([5, 4, 3].includes(near.primaryIndex)) {
                        if (traps.inTrap) {
                            while (traps.inTrap) {
                                await new Promise(resolve => setTimeout(resolve, 10));
                                if (!traps.inTrap) {
                                    my.anti0Tick = 2;
                                    dothing = true;
                                    if (my.reSync) {
                                        my.reSync = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (dothing) {
                cantWearTankGear = true;
                cantWearBullHat = true;
            } else {
                cantWearTankGear = false;
                cantWearBullHat = false;
            }
            if (traps.inTrap && near.dist2 <= 200) {
                antiSpikeTickop();
            }
            if (near.dist2 <= 300) {
                intint();
            }
            async function intint() {
                let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) <= tmp.getScale() + 5);
                let spike = gameObjects.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) < 87 && !nearTrap.length);
                const doingInsta = instaC.can && player.skinIndex != 6 && !my.reSync;
                const instaThing = !instaC.canCounter && tmpObj.damageThreat;
                const cSPPdt = [5].includes(near.primaryIndex) && tmpObj.damaged >= 45 || ([5].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 40) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 35) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 40 && player.skinIndex != 6);
                const cswold = clicks.left && player.skinIndex == 7 || clicks.right && player.skinIndex == 45;
                const instaThing2 = [5, 4, 3].includes(near.primaryIndex) || [5, 4, 3].includes(near.primaryIndex) && near.skinIndex == 7 || [9, 12, 13, 15, 0].includes(near.secondaryIndex) || ([9, 12, 13, 15, 0].includes(near.secondaryIndex) && near.skinIndex == 53);

                if (near.dist2 <= 300) {
                    if (instaThing) {
                        if (instaThing2) {
                            await new Promise(resolve => setTimeout(resolve, 1));
                            if (instaThing2 && near.skinIndex == 53 && player.skinIndex != 6) {
                                my.anti0Tick = 2;
                                if (my.reSync) {
                                    my.reSync = false;
                                }
                            }
                        }
                    }
                    if (doingInsta && near.dist2 <= 300) {
                        while (doingInsta) {
                            await new Promise(resolve => setTimeout(resolve, 1));
                            if (cSPPdt && player.skinIndex != 6) {
                                my.anti0Tick = 2;
                                if (my.reSync) {
                                    my.reSync = false;
                                }
                            }
                        }
                    }
                    if (cswold) {
                        if (player.skinIndex != 6 && !instaC.canCounter && near.skinIndex == 53) {
                            my.anti0Tick = 1;
                            if (my.reSync) {
                                my.reSync = false;
                            }
                        }
                    }
                    if (traps.inTrap && player.skinIndex == 45 && near.skinIndex == 53) {
                        my.anti0Tick = 1;
                        if (my.reSync) {
                            my.reSync = false;
                        }
                    }
                    if (my.reSync && near.skinIndex == 53 && player.skinIndex != 6) {
                        my.anti0Tick = 2;
                        if (my.reSync) {
                            my.reSync = false;
                        }
                    }
                    if (!traps.inTrap && spike && player.skinIndex != 6) {
                        my.anti0Tick = 2;
                        if (my.reSync) {
                            my.reSync = false;
                        }
                    }
                    if (player.skinIndex == 6 && tmpObj.damaged >= 80) {
                        if (my.reSync) {
                            my.reSync = false;
                        }
                    }
                }
            }
            let plcAng;

            function chooseRandomWindmillType() {
                const options = [1.2828283922, 1.133232455373737775];
                const randomIndex = Math.floor(Math.random() * options.length);
                plcAng = options[randomIndex];
                return plcAng;
            }


            macro.q && place(0, getAttackDir());
            macro.f && place(4, getSafeDir());
            macro.v && place(2, getSafeDir());
            macro.y && place(5, getSafeDir());
            macro.h && place(player.getItemType(22), getSafeDir());
            macro.n && place(3, getSafeDir());
            if (game.tick % 1.5 == 0) {
                if (mills.place) {
                    plcAng = 1.4;
                    for (let i = -plcAng; i <= plcAng; i += plcAng) {
                        checkPlace(3, UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                    }
                } else {
                    if (mills.placeSpawnPads) {
                        for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                            checkPlace(player.getItemType(20), UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                        }
                    }
                }
            }
            if (instaC.can) {
                instaC.changeType("rev");
            }
            if (instaC.canCounter && !tdf) {
                instaC.canCounter = true;
                if (player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                    instaC.counterType();
                    io.send('6', 'Countered');
                }
            }
            if (instaC.canSpikeTick) {
                instaC.canSpikeTick = false;
                if ([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                    instaC.spikeTickType();
                }
            }
            if (!instaC.isTrue) {
                if (!clicks.middle && (clicks.left || clicks.right)) {
                    if (
                        player.weaponIndex !=
                        (clicks.right && player.weapons[1] == 10
                         ? player.weapons[1]
                         : player.weapons[0]) ||
                        player.buildIndex > -1
                    ) {
                        selectWeapon(
                            clicks.right && player.weapons[1] == 10
                            ? player.weapons[1]
                            : player.weapons[0]
                        );
                    }
                    if (
                        player.reloads[
                            clicks.right && player.weapons[1] == 10
                            ? player.weapons[1]
                            : player.weapons[0]
                        ] == 0 &&
                        !my.waitHit
                    ) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                } else if (traps.inTrap || breakObject.active) {
                    let weapon = player.weapons[traps.notFast() ? 1 : 0];
                    let weaponIndex = player.weaponIndex != weapon || player.buildIndex > -1;

                    if (traps.inTrap) {
                        weapon = player.weapons[traps.notFast() ? 1 : 0];
                    } else {
                        weapon = player.weapons[traps.notFast(breakObject.info) ? 1 : 0];
                    }

                    if (weaponIndex) selectWeapon(weapon);

                    if (player.reloads[weapon] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
                if (useWasd && !clicks.left && !clicks.right && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8) && !traps.inTrap) {
                    if ((player.weaponIndex != player.weapons[0]) || player.buildIndex > -1) {
                        selectWeapon(player.weapons[0]);
                    }
                    if (player.reloads[player.weapons[0]] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
                if (clicks.middle && !traps.inTrap) {
                    if (player.reloads[player.weapons[1]] == 0) {
                        if (my.ageInsta && player.weapons[0] != 4 && player.weapons[1] == 9 && player.age >= 9 && enemy.length) {
                            instaC.bowMovement();
                        } else {
                            instaC.rangeType();
                        }
                    }
                }
                if (macro.t && !traps.inTrap) {
                    if (player.reloads[player.weapons[0]] == 0 && (player.weapons[1] == 15 ? (player.reloads[player.weapons[1]] == 0) : true) && (player.weapons[0] == 5 || (player.weapons[0] == 4 && player.weapons[1] == 15))) {
                        instaC[(player.weapons[0] == 4 && player.weapons[1] == 15) ? "kmTickMovement" : "tickMovement"]();
                    }
                }
                if (macro["."] && !traps.inTrap) {
                    if (player.reloads[player.weapons[0]] == 0 && ([9, 12, 13, 15].includes(player.weapons[1]) ? (player.reloads[player.weapons[1]] == 0) : true)) {
                        instaC.boostTickMovement();
                    }
                }
                if (player.weapons[1] && !clicks.left && !clicks.right && !traps.inTrap && !(useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                    if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0) {
                        if (!my.reloaded) {
                            my.reloaded = true;
                            let fastSpeed = items.weapons[player.weapons[0]].spdMult < items.weapons[player.weapons[1]].spdMult ? 1 : 0;
                            if (player.weaponIndex != player.weapons[fastSpeed] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[fastSpeed]);
                            }
                        }
                        // if(useWasd) {
                        //     if (!autos.stopspin) {
                        //         setTimeout(()=>{
                        //             autos.stopspin = true;
                        //         }, 375);
                        //     }
                        // }
                    } else {
                        my.reloaded = false;
                        if(useWasd) {
                            autos.stopspin = false;
                        }
                        if (player.reloads[player.weapons[0]] > 0) {
                            if (player.weaponIndex != player.weapons[0] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[0]);
                            }
                        } else if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] > 0) {
                            if (player.weaponIndex != player.weapons[1] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[1]);
                            }
                            if(useWasd) {
                                if (!autos.stopspin) {
                                    setTimeout(()=>{
                                        autos.stopspin = true;
                                    }, 750);
                                }
                            }
                        }
                    }
                }
                if (!traps.inTrap && !traps.replaced) {
                    traps.autoPlace();
                }
            }
            if (!macro.q && !macro.f && !macro.v && !macro.h && !macro.n) {
                packet("D", getAttackDir());
            }
            let hatChanger = function () {
                if (my.anti0Tick > 0) {
                    buyEquip(6, 0);
                    buyEquip(16, 1);
                } else {
                    let antiBull = enemy.length && configs.PAB && ((clicksAB.value == "When Reloaded" && near.antiBull > 0) || (clicksAB.value == "Always" && near.reloads[near.primaryIndex] == 0));

                    if (clicks.left || clicks.right) {
                        let anti = player.empAnti ? 22 : player.soldierAnti ? 6 : antiBull ? 11 : biomeGear(1, 1);

                        if (((!enemy.length || near.dist2 >= 100) && player.shameCount > 0 && player.skinIndex != 45) || my.reSync) {
                            if (!cantWearBullHat) {
                                buyEquip(7, 0);
                                buyEquip(13, 1);
                            }
                        } else if (clicks.left) {
                            buyEquip(player.reloads[player.weapons[0]] == 0 ? configs.rubyFarm ? 40 : 7 : anti, 0);
                        } else if (clicks.right) {
                            buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : anti, 0);
                        }
                    } else if (traps.inTrap) {
                        let weapon = player.weapons[traps.notFast() ? 1 : 0];
                        let weaponRealoded = player.reloads[player.weapons[player.weapons[1] == 10 ? 1 : 0]] == 0;

                        if (traps.info.health <= items.weapons[weapon].dmg ? false : weaponRealoded) {
                            buyEquip(traps.outOfTrap ? 6 : 40, 0);
                        } else buyEquip(player.empAnti ? 22 : 6, 0);
                    } else if (breakObject.active) {
                        let weapon = player.weapons[traps.notFast(breakObject.info) ? 1 : 0];
                        let weaponRealoded = player.reloads[player.weapons[player.weapons[1] == 10 ? 1 : 0]] == 0;

                        if (breakObject.info.health <= items.weapons[weapon].dmg ? false : weaponRealoded) {
                            buyEquip(traps.outOfTrap ? 6 : 40, 0);
                        } else buyEquip(player.empAnti ? 22 : 6, 0);
                    } else {
                        if (player.empAnti || player.soldierAnti) {
                            buyEquip(player.empAnti ? 22 : 6, 0);
                        } else {
                            if (((!enemy.length || near.dist2 >= 100) && player.shameCount > 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                                buyEquip(13, 1);
                            } else {
                                if (player.y2 >= config.mapScale / 5 - config.riverWidth / 5 && player.y2 <= config.mapScale / 5 + config.riverWidth / 5 && !configs.alwaysFlipper) {
                                    biomeGear(1);
                                } else if (near.dist2 <= 300) {
                                    buyEquip(antiBull ? 11 : 6, 0);
                                } else {
                                    biomeGear(1);
                                }
                            }
                        }
                    }
                }
            }

            let SmartAntiSpiketick = function() {
                if (traps.inTrap) {
                    if (near.dist2 <= 150) {
                        buyEquip(6, 0);
                    }
                }
            }

            let accChanger = function() {
                if (instaC.can && player.checkCanInsta(true) >= 100) {
                    buyEquip(18, 1);
                } else if (clicks.left) {
                    buyEquip(13, 1);
                } else if (clicks.right) {
                    buyEquip(16, 1);
                } else if (near.dist2 <= 300 && !traps.inTrap && !clicks.left && !clicks.right) {
                    buyEquip(19, 1);
                } else {
                    traps.inTrap ? buyEquip(13, 1) : buyEquip(11, 1);
                }
            };
            if (my.anti0Tick > 0) {
                buyEquip(6, 0);
            }
            let wasdGears = function() {
                if (my.anti0Tick > 0) {
                    buyEquip(6, 0);
                } else {
                    if (clicks.left || clicks.right) {
                        if ((player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            if (clicks.left) {
                                buyEquip(player.reloads[player.weapons[0]] == 0 ? configs.weaponGrinder ? 40 : 7 : player.empAnti ? 22 : 6, 0);
                            } else if (clicks.right) {
                                buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                        if ((player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            buyEquip(player.reloads[player.weapons[0]] == 0 ? 7 : player.empAnti ? 22 : 6, 0);
                        }
                    } else if (traps.inTrap) {
                        if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                            buyEquip(40, 0);
                            sendAutoGather();
                        } else {
                            if ((player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else {
                        if (player.empAnti) {
                            buyEquip(22, 0);
                        } else {
                            if ((player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(6, 0);
                            }
                        }
                    }
                }
                if (clicks.left || clicks.right) {
                    if (clicks.left) {
                        buyEquip(18, 1);
                    } else if (clicks.right) {
                        buyEquip(13, 1);
                    }
                } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                    buyEquip(20, 1);
                } else if (traps.inTrap) {
                    buyEquip(13, 1);
                } else {
                    buyEquip(11, 1);
                }
            }
            if (storeMenu.style.display != "block" && !instaC.isTrue && !instaC.ticking) {
                if (useWasd) {
                    wasdGears();
                } else {
                    hatChanger();
                    SmartAntiSpiketick();
                    accChanger();
                }
            }
            //lastMoveDir = getSafeDir();
            //packet("f", lastMoveDir, 1);
            if (configs.autoPush && enemy.length && !traps.inTrap && !instaC.ticking) {
                autoPush();
            } else {
                if (my.autoPush) {
                    my.autoPush = false;
                    combatBot.show = false;
                    packet("f", lastMoveDir || undefined, 1);
                }
            }
            if (instaC.ticking) {
                instaC.ticking = false;
            }
            if (instaC.syncHit) {
                instaC.syncHit = false;
            }
            if (player.empAnti) {
                player.empAnti = false;
            }
            if (player.soldierAnti) {
                player.soldierAnti = false;
            }
            if (my.anti0Tick > 0) {
                my.anti0Tick--;
            }
            if (traps.replaced) {
                traps.replaced = false;
            }
            if (traps.antiTrapped) {
                traps.antiTrapped = false;
            }

            const getPotentialDamage = (build, user) => {
                const weapIndex = user.weapons[1] === 10 && !player.reloads[user.weapons[1]] ? 1 : 0;
                const weap = user.weapons[weapIndex];
                if (player.reloads[weap]) return 0;
                const weapon = items.weapons[weap];
                const inDist = cdf(build, user) <= build.getScale() + weapon.range;
                return (user.visible && inDist) ? weapon.dmg * (weapon.sDmg || 1) * 3.3 : 0;
            };

            const AutoReplace = () => {
                const replaceable = [];
                const playerX = player.x;
                const playerY = player.y;
                const gameObjectCount = gameObjects.length;

                for (let i = 0; i < gameObjectCount; i++) {
                    const build = gameObjects[i];
                    if (build.isItem && build.active && build.health > 0) {
                        const item = items.list[build.id];
                        const posDist = 35 + item.scale + (item.placeOffset || 0);
                        const inDistance = cdf(build, player) <= posDist * 2;
                        if (inDistance) {
                            let canDeal = 0;
                            const playersCount = players.length;
                            for (let j = 0; j < playersCount; j++) {
                                canDeal += getPotentialDamage(build, players[j]);
                            }
                            if (build.health <= canDeal) {
                                replaceable.push(build);
                            }
                        }
                    }
                }

                const findPlacementAngle = (player, itemId, build) => {
                    if (!build) return null;
                    const MAX_ANGLE = 2 * Math.PI;
                    const ANGLE_STEP = Math.PI / 360;
                    const item = items.list[player.items[itemId]];
                    let buildingAngle = Math.atan2(build.y - player.y, build.x - player.x);
                    let tmpS = player.scale + (item.scale || 1) + (item.placeOffset || 0);

                    for (let offset = 0; offset < MAX_ANGLE; offset += ANGLE_STEP) {
                        let angles = [(buildingAngle + offset) % MAX_ANGLE, (buildingAngle - offset + MAX_ANGLE) % MAX_ANGLE];
                        for (let angle of angles) {
                            return angle;
                        }
                    }
                    return null;
                };

                const replace = (() => {
                    let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) <= tmp.getScale() + 5);
                    let spike = gameObjects.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) < 87 && !nearTrap.length);
                    const buildId = spike ? 4 : 2;

                    replaceable.forEach(build => {
                        let angle = findPlacementAngle(player, buildId, build);
                        if (angle !== null) {
                            place(buildId, angle);
                            textManager.showText(build.x, build.y, 20, 0.15, 1850, '⭐', '#fff', 2);
                        }
                    });
                });

                if (near && near.dist3 <= 360) {
                    replace();
                }
                replace;
            }
            }
    }
}

// UPDATE LEADERBOARD:
let leaderboardElement = document.getElementById('leaderboard');
let textNode = leaderboardElement.firstChild;
if (textNode.nodeType === 3 && textNode.textContent === 'Leaderboard') {
    leaderboardElement.removeChild(textNode);
}

function updateLeaderboard(data) {
    lastLeaderboardData = data;
    UTILS.removeAllChildren(leaderboardData);

    // wow ok i removed my codes

    let tmpC = 1;
    for (let i = 0; i < data.length; i += 3) {
        const SID = data[i];
        const playerName = data[i + 1] || "unknown";
        const playerScore = UTILS.sFormat(data[i + 2]) || "0";

        const displayName = playerName.length > 10 ? playerName.substring(0, 10) + '...' : playerName;

        let playerColor;
        playerColor = SID === playerSID ? "#9854c4" : "#fff";

        const fragment = document.createDocumentFragment();
        const leaderHolder = UTILS.generateElement({
            class: "leaderHolder",
            children: [
                UTILS.generateElement({
                    class: "leaderboardItem",
                    children: [
                        UTILS.generateElement({
                            class: "placeMarkerContainer",
                            style: "display: flex; align-items: center; margin-top: 0.5px;",
                            children: [
                                UTILS.generateElement({
                                    class: "placeMarker",
                                    style: `
                                        width: 8px;
                                        height: 8px;
                                        border-radius: 50%;
                                        background: ${playerColor};
                                        display: inline-block;
                                        margin-right: 8px;
                                        margin-top: 2.5px;
                                    `
                                }),
                                UTILS.generateElement({
                                    class: "displayName",
                                    style: `
                                        margin-top: 2px;
                                        color: ${playerColor};
                                        font-size: 18px;
                                        max-width: 150px;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    `,
                                    text: displayName
                                })
                            ]
                        })
                    ]
                }),
                UTILS.generateElement({
                    class: "leaderScore",
                    style: `color: ${playerColor}`,
                    text: playerScore
                })
            ]
        });

        fragment.appendChild(leaderHolder);
        leaderboardData.appendChild(fragment);

        tmpC++;
    }
}

// LOAD GAME OBJECT:
function loadGameObject(data) {
    for (let i = 0; i < data.length;) {
        objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4],
                          data[i + 5], items.list[data[i + 6]], true, (data[i + 7] >= 0 ? {
            sid: data[i + 7]
        } : null));
        // sid, x, y, dir, s, type, data, setSID, owner
        /*let dist = UTILS.getDist({
                        x: data[i + 1],
                        y: data[i + 2]
                    }, player, 0, 2);
                    let aim = UTILS.getDirect({
                        x: data[i + 1],
                        y: data[i + 2]
                    }, player, 0, 2);
                    find = findObjectBySid(data[i]);
                    if (data[i + 6] == 15) {
                        if (find && !find.isTeamObject(player)) {
                            if (dist <= 100) {
                                traps.dist = dist;
                                traps.aim = aim;
                                traps.protect(aim);
                            }
                        }
                    }*/
        i += 8;
    }
}

// ADD AI:
function loadAI(data) {
    for (let i = 0; i < ais.length; ++i) {
        ais[i].forcePos = !ais[i].visible;
        ais[i].visible = false;
    }
    if (data) {
        let tmpTime = performance.now();
        for (let i = 0; i < data.length;) {
            tmpObj = findAIBySID(data[i]);
            if (tmpObj) {
                tmpObj.index = data[i + 1];
                tmpObj.t1 = (tmpObj.t2 === undefined) ? tmpTime : tmpObj.t2;
                tmpObj.t2 = tmpTime;
                tmpObj.x1 = tmpObj.x;
                tmpObj.y1 = tmpObj.y;
                tmpObj.x2 = data[i + 2];
                tmpObj.y2 = data[i + 3];
                tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 4] : tmpObj.d2;
                tmpObj.d2 = data[i + 4];
                tmpObj.health = data[i + 5];
                tmpObj.dt = 0;
                tmpObj.visible = true;
            } else {
                tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]);
                tmpObj.x2 = tmpObj.x;
                tmpObj.y2 = tmpObj.y;
                tmpObj.d2 = tmpObj.dir;
                tmpObj.health = data[i + 5];
                if (!aiManager.aiTypes[data[i + 1]].name)
                    tmpObj.name = config.cowNames[data[i + 6]];
                tmpObj.forcePos = true;
                tmpObj.sid = data[i];
                tmpObj.visible = true;
            }
            i += 7;
        }
    }
}

// ANIMATE AI:
function animateAI(sid) {
    tmpObj = findAIBySID(sid);
    if (tmpObj) tmpObj.startAnim();
}

// GATHER ANIMATION:
function gatherAnimation(sid, didHit, index) {
    tmpObj = findPlayerBySID(sid);
    if (tmpObj) {
        tmpObj.startAnim(didHit, index);
        tmpObj.gatherIndex = index;
        tmpObj.gathering = 1;

        // if(player.damageThreat >= 100 && cdf(player, tmpObj) <= 300)
        //     healer();

        if (didHit) {
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                // refind
                tmpObj = findPlayerBySID(sid);
                let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * (tmpObj.skinIndex == 40 ? 3.3 : 1);
                tmpObjects.forEach((healthy) => {
                    healthy.health -= val;
                    if (true) {
                        const r = Math.floor(Math.random() * 128) + 128;
                        const g = Math.floor(Math.random() * 128) + 128;
                        const b = Math.floor(Math.random() * 128) + 128;
                        const rgbColor = `rgb(${r}, ${g}, ${b})`;
                        textManager.showText(healthy.x, healthy.y, 30, 0.1, 400, Math.round(val), rgbColor);
                    }
                });
            }, 1);
        }
    }
}
if(nears.filter(near => near.gathering).length>1) {
    player.chat.message = "pSyD";
    healer();
}


// WIGGLE GAME OBJECT:
function wiggleGameObject(dir, sid) {
    tmpObj = findObjectBySid(sid);
    if (tmpObj) {
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir);
        if (tmpObj.health) {
            objectManager.hitObj.push(tmpObj);
        }
    }
}

// SHOOT TURRET:
function shootTurret(sid, dir) {
    tmpObj = findObjectBySid(sid);
    if (tmpObj) {
        if (config.anotherVisual) {
            tmpObj.lastDir = dir;
        } else {
            tmpObj.dir = dir;
        }
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI);
    }
}
function randomthing() {
    const options = [];
    for (let i = 0; i < 100; i++) {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        options.push(randomNum);
    }
    const randomIndex = Math.floor(Math.random() * options.length);
    thing = options[randomIndex];
    return thing;
}
function randomthing2() {
    const options2 = [];
    for (let i = 0; i < 100; i++) {
        const randomNum2 = Math.floor(1000 + Math.random() * 9000);
        options2.push(randomNum2);
    }
    const randomIndex2 = Math.floor(Math.random() * options2.length);
    thing2 = options2[randomIndex2];
    return thing2;
}
let thing;
let thing2;
// UPDATE PLAYER VALUE:
function updatePlayerValue(index, value, updateView) {
    if (player) {
        player[index] = value;
        if (index == "points") {
            if (configs.autoBuy) {
                autoBuy.hat();
                autoBuy.acc();
            }
        } else if (index == "kills") {
            if (configs.killChat) {
                io.send("6", value + "Get Killed by TnT0");
                setTimeout(() => {1500
                                  io.send("6", "TnT CLIENT On Top!");
                                 }, 1000);
            }
        }
    }
}

// ACTION BAR:
function updateItems(data, wpn) {
    if (data) {
        if (wpn) {
            player.weapons = data;
            player.primaryIndex = player.weapons[0];
            player.secondaryIndex = player.weapons[1];
            if (!instaC.isTrue) {
                selectWeapon(player.weapons[0]);
            }
        } else {
            player.items = data;
        }
    }

    for (let i = 0; i < items.list.length; i++) {
        let tmpI = items.weapons.length + i;
        let actionBarItem = getEl("actionBarItem" + tmpI);
        actionBarItem.style.display = player.items.indexOf(items.list[i].id) >= 0 ? "inline-block" : "none";
    }

    for (let i = 0; i < items.weapons.length; i++) {
        let actionBarItem = getEl("actionBarItem" + i);
        actionBarItem.style.display = player.weapons[items.weapons[i].type] == items.weapons[i].id ? "inline-block" : "none";
    }

    let kms = player.weapons[0] == 3 && player.weapons[1] == 15;
    if (kms) {
        getEl("actionBarItem3").style.display = "none";
        getEl("actionBarItem4").style.display = "inline-block";
    }
}

// ADD PROJECTILE:
function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
    projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer, inWindow).sid = sid;
    runAtNextTick.push(Array.prototype.slice.call(arguments));
}

// REMOVE PROJECTILE:
function remProjectile(sid, range) {
    for (let i = 0; i < projectiles.length; ++i) {
        if (projectiles[i].sid == sid) {
            projectiles[i].range = range;
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                let val = projectiles[i].dmg;
                tmpObjects.forEach((healthy) => {
                    if (healthy.projDmg) {
                        healthy.health -= val;
                    }
                });
            }, 1);
        }
    }
}

// SHOW ALLIANCE MENU:
function allianceNotification(sid, name) {
}

function setPlayerTeam(team, isOwner) {
    if (player) {
        player.team = team;
        player.isOwner = isOwner;
        if (team == null)
            alliancePlayers = [];
    }
}

function setAlliancePlayers(data) {
    alliancePlayers = data;
}

// STORE MENU:
function updateStoreItems(type, id, index) {
    if (index) {
        if (!type)
            player.tails[id] = 1;
        else {
            player.latestTail = id;
        }
    } else {
        if (!type)
            player.skins[id] = 1,
                id == 7 && (my.reSync = true); // testing perfect bulltick...
        else {
            player.latestSkin = id;
        }
    }
}

let modMessageSent = false; // Aynı mesajı tekrar göndermemesi için değişken

function receiveChat(sid, message) {
    if (message.includes("<img") || message.includes("onerror=") || message.includes("<iframe")) {
        console.warn("Tehlikeli mesaj engellendi: " + message);
        return; // Mesaj gösterilmeyecek
    }

    let player = findPlayerBySID(sid);
    if (!player) return;

    player.chatMessage = message;
    player.chatCountdown = config.chatCountdown;

    // 🔥 Eğer mesaj içinde "mod" geçiyorsa ve daha önce cevap verilmemişse
    if (message.toLowerCase().includes("mod") && !modMessageSent) {
        sendChat("NO = NIGGA"); // Anında cevap ver
        modMessageSent = true; // Tekrar etmesini engelle
        setTimeout(() => { modMessageSent = false; }, 5000); // 5 saniye sonra tekrar cevap verebilir
    }
}



// MINIMAP:
function updateMinimap(data) {
    minimapData = data;
}

// SHOW ANIM TEXT:
function showText(x, y, value, type) {
    textManager.showText(x, y, 50, 0.18, useWasd ? 500 : 1500, Math.abs(value), (value>=0)?"#fff":"#8ecc51");
}

// RENDER LEAF:
function renderLeaf(x, y, l, r, ctxt) {
    let endX = x + (l * Math.cos(r));
    let endY = y + (l * Math.sin(r));
    let width = l * 0.4;
    ctxt.moveTo(x, y);
    ctxt.beginPath();
    ctxt.quadraticCurveTo(((x + endX) / 2) + (width * Math.cos(r + Math.PI / 2)),
                          ((y + endY) / 2) + (width * Math.sin(r + Math.PI / 2)), endX, endY);
    ctxt.quadraticCurveTo(((x + endX) / 2) - (width * Math.cos(r + Math.PI / 2)),
                          ((y + endY) / 2) - (width * Math.sin(r + Math.PI / 2)), x, y);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

// RENDER CIRCLE:
function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || mainContext;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

function renderHealthCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || mainContext;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

// RENDER STAR SHAPE:
function renderStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

function renderHealthStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

// RENDER RECTANGLE:
function renderRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

function renderHealthRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

// RENDER RECTCIRCLE:
function renderRectCircle(x, y, s, sw, seg, ctxt, dontStroke, dontFill) {
    ctxt.save();
    ctxt.translate(x, y);
    seg = Math.ceil(seg / 2);
    for (let i = 0; i < seg; i++) {
        renderRect(0, 0, s * 2, sw, ctxt, dontStroke, dontFill);
        ctxt.rotate(Math.PI / seg);
    }
    ctxt.restore();
}

// RENDER BLOB:
function renderBlob(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    let tmpOuter;
    ctxt.beginPath();
    ctxt.moveTo(0, -inner);
    for (let i = 0; i < spikes; i++) {
        tmpOuter = UTILS.randInt(outer + 0.9, outer * 1.2);
        ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter,
                              Math.cos(rot + (step * 2)) * inner, Math.sin(rot + (step * 2)) * inner);
        rot += step * 2;
    }
    ctxt.lineTo(0, -inner);
    ctxt.closePath();
}

// RENDER TRIANGLE:
function renderTriangle(s, ctx) {
    ctx = ctx || mainContext;
    let h = s * (Math.sqrt(3) / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-s / 2, h / 2);
    ctx.lineTo(s / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.fill();
    ctx.closePath();
}

// PREPARE MENU BACKGROUND:
function prepareMenuBackground() {
    // let tmpMid = config.mapScale / 2;
    // let attempts = 0;
    // for (let i = 0; i < items.list.length * 3;) {
    //     if (attempts >= 1000) break;
    //     attempts++;
    //     let type = items.list[UTILS.randInt(0, items.list.length - 1)];
    //     let data = {
    //         x: tmpMid + UTILS.randFloat(-1000, 1000),
    //         y: tmpMid + UTILS.randFloat(-600, 600),
    //         dir: UTILS.fixTo(Math.random() * (Math.PI * 2), 2)
    //     };
    //     if (objectManager.checkItemLocation(data.x, data.y, type.scale, 0.6, type.id, true)) {
    //         objectManager.add(i, data.x, data.y, data.dir, type.scale, type.id, type);
    //     } else {
    //         continue;
    //     }
    //     i++;
    // }
}

const speed = 1;
// RENDER PLAYERS:
function renderDeadPlayers(xOffset, yOffset) {
    mainContext.fillStyle = "#91b2db";
    const currentTime = Date.now();
    deadPlayers.filter(dead => dead.active).forEach((dead) => {
        if (!dead.startTime) {
            dead.startTime = currentTime;
            dead.angle = 0;
            dead.radius = 0.1;
        }
        const timeElapsed = currentTime - dead.startTime;
        const maxAlpha = 1;
        dead.alpha = Math.max(0, maxAlpha - (timeElapsed / 3000));
        dead.animate(delta);
        mainContext.globalAlpha = dead.alpha;
        mainContext.strokeStyle = outlineColor;
        mainContext.save();
        mainContext.translate(dead.x - xOffset, dead.y - yOffset);
        dead.radius -= 0.001;
        dead.angle += 0.0174533;
        const moveSpeed = 1;
        const x = dead.radius * Math.cos(dead.angle);
        const y = dead.radius * Math.sin(dead.angle);
        dead.x += x * moveSpeed;
        dead.y += y * moveSpeed;
        mainContext.rotate(dead.angle);
        renderDeadPlayer(dead, mainContext);
        mainContext.restore();
        mainContext.fillStyle = "#91b2db";
        if (timeElapsed >= 3000) {
            dead.active = false;
            dead.startTime = null;
        }
    });
}
// RENDER PLAYERS:
function renderPlayers(xOffset, yOffset, zIndex) {
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "#91b2db";
    for (var i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if (tmpObj.zIndex == zIndex) {
            tmpObj.animate(delta);
            if (tmpObj.visible) {
                tmpObj.skinRot += (0.002 * delta);
                tmpDir = (tmpObj==player?getVisualDir():(tmpObj.dir || 0));
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                // RENDER PLAYER:
                mainContext.rotate(tmpDir + tmpObj.dirPlus);
                renderPlayer(tmpObj, mainContext);
                mainContext.restore();
            }
        }
    }
}
// RENDER DEAD PLAYER:
function renderDeadPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS||1);
    let oHandAngle = (obj.buildIndex < 0)?(items.weapons[obj.weaponIndex].hndS||1):1;
    let oHandDist = (obj.buildIndex < 0)?(items.weapons[obj.weaponIndex].hndD||1):1;
    // TAIL/CAPE:
    renderTail2(13, ctxt, obj);
    // WEAPON BELLOW HANDS:
    if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0,
                             items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // HANDS:
    ctxt.fillStyle = "#ececec";
    renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
    renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle),
                 (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);
    // WEAPON ABOVE HANDS:
    if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0,
                             items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // BUILD ITEM:
    if (obj.buildIndex >= 0) {
        var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }
    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);
    // SKIN
    renderSkin2(48, ctxt, null, obj)
}

// RENDER PLAYER:
function renderPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
    let oHandAngle = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndS || 1) : 1;
    let oHandDist = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndD || 1) : 1;

    let katanaMusket = (obj == player && obj.weapons[0] == 3 && obj.weapons[1] == 15);

    // TAIL/CAPE:
    if (obj.tailIndex > 0) {
        renderTailTextureImage(obj.tailIndex, ctxt, obj);
    }

    // WEAPON BELLOW HANDS:
    if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[katanaMusket ? 4 : obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0,
                             items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }

    // HANDS:
    ctxt.fillStyle = config.skinColors[obj.skinColor];
    renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
    renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle),
                 (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);

    // WEAPON ABOVE HANDS:
    if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0,
                             items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }

    // BUILD ITEM:
    if (obj.buildIndex >= 0) {
        var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }

    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);

    // SKIN:
    if (obj.skinIndex > 0) {
        ctxt.rotate(Math.PI/2);
        if (obj.shameCount > 2) {
            let set = function () {
                if (obj.shameCount <= 1) {
                    return 0;
                } else {
                    return 1 / 8 * Math.min(7, obj.shameCount - 1);
                }
            }
            ctxt.globalAlpha = set();
            renderSkin(45, ctxt, null, obj);
        }
        ctxt.globalAlpha = 1;
        renderTextureSkin(obj.skinIndex, ctxt, null, obj);
    }
}

// RENDER NORMAL SKIN
var skinSprites2 = {};
var skinPointers2 = {};
function renderSkin2(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites2[index];
    if (!tmpSkin) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        //tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    var tmpObj = parentSkin||skinPointers2[index];
    if (!tmpObj) {
        for (var i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers2[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale/2, -tmpObj.scale/2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin2(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

// RENDER SKIN:
function renderTextureSkin(index, ctxt, parentSkin, owner) {
    if (!(tmpSkin = skinSprites[index + (txt ? "lol" : 0)])) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true,
                this.onload = null
        }
            ,
            tmpImage.src = setSkinTextureImage(index, "hat", index),
            skinSprites[index + (txt ? "lol" : 0)] = tmpImage,
            tmpSkin = tmpImage
    }
    var tmpObj = parentSkin||skinPointers[index];
    if (!tmpObj) {
        for (var i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale/2, -tmpObj.scale/2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

var FlareZHat = {
    6: "https://cdn.discordapp.com/attachments/1334460038005391361/1344571814063509515/latest.png?ex=67c35fd5&is=67c20e55&hm=189f1767e5c3fd2bd83b751c2e36ac10a18673ab29122cd204c3cc226802f443&",
    7: "https://i.imgur.com/fU8j4Mu.png",
    26: "https://i.imgur.com/qs4JUlQ.png",
    12: "https://i.imgur.com/mHlDhUr.png",
    15: "https://i.imgur.com/M3gtVf5.png",
    31: "https://i.imgur.com/dnlS49y.png",
    //11: "https://i.imgur.com/yfqME8H.png",
    "11_p": "https://i.imgur.com/97c6ctt.png",
    //"11_top": "https://i.imgur.com/s7Cxc9y.png",
    40: "https://i.imgur.com/Vy5c63a.png",
    6: "https://i.imgur.com/ELjrEOg.png",

    22: "https://i.imgur.com/NylMS9X.png",
    53: "https://i.imgur.com/pTpe6ig.png",
    "53_p": "https://i.imgur.com/Y1aNReX.png",
    "53_top": "https://i.imgur.com/zat5EYJ.png",
};

function setSkinTextureImage(id, type, id2) {
    if (true) {
        if(FlareZHat[id] && type == "hat") {
            return FlareZHat[id];
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    } else {
        if(type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if(type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}
// RENDER SKINS:
let skinSprites = {};
let skinPointers = {};
let tmpSkin;

function renderSkin(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = parentSkin || skinPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

// RENDER TAIL:
var FlareZAcc = {
    21: "https://i.imgur.com/4ddZert.png",
    19: "https://i.imgur.com/sULkUZT.png",
};
function setTailTextureImage(id, type, id2) {
    if (true) {
        if(FlareZAcc[id] && type == "acc") {
            return FlareZAcc[id];
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    } else {
        if(type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if(type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}
function renderTailTextureImage(index, ctxt, owner) {
    if (!(tmpSkin = accessSprites[index + (txt ? "lol" : 0)])) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true,
                this.onload = null
        }
            ,
            tmpImage.src = setTailTextureImage(index, "acc"),//".././img/accessories/access_" + index + ".png";
            accessSprites[index + (txt ? "lol" : 0)] = tmpImage,
            tmpSkin = tmpImage;
    }
    var tmpObj = accessPointers[index];
    if (!tmpObj) {
        for (var i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff||0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale/2), -(tmpObj.scale/2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

let accessSprites = {};
let accessPointers = {};
var txt = true;

function renderTail(index, ctxt, owner) {
    tmpSkin = accessSprites[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = accessPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

var accessSprites2 = {};
var accessPointers2 = {};
function renderTail2(index, ctxt, owner) {
    tmpSkin = accessSprites2[index];
    if (!tmpSkin) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    var tmpObj = accessPointers2[index];
    if (!tmpObj) {
        for (var i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers2[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff||0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale/2), -(tmpObj.scale/2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

// mymymymy CODE
let weaponsT = {
    "sword_1": "",
    "sword_1_r": "https://i.imgur.com/V9dzAbF.png",
    "sword_1_d": "https://i.imgur.com/h5jqSRp.png",
    "sword_1_g": "https://i.imgur.com/wOTr8TG.png",
    "toolhammer_0": "https://sploop.io/img/entity/stone_toolhammer.png",
    "samurai_1": "https://i.imgur.com/Sk0tO6Z.png",
    "samurai_1_g": "https://i.imgur.com/Sk0tO6Z.png",
    "samurai_1_d": "https://i.imgur.com/4xTrrzV.png",
    "samurai_1_r": "https://i.imgur.com/4xTrrzV.png",
    "great_hammer_1": "https://i.imgur.com/Xt4vcc8.png",
    "greathammer_1_g": "https://i.imgur.com/Xt4vcc8.png",
    "greathammer_1_d": "https://i.imgur.com/Xt4vcc8.png",
    "great_hammer_1_r": "https://i.imgur.com/Xt4vcc8.png",
    "spear_1": "https://cdn.discordapp.com/attachments/1350124232994062477/1350790382354694204/lH4JjY5SxEAAAAASUVORK5CYII.png?ex=67d80513&is=67d6b393&hm=a92b8ff0b28aa6511ccddc51ab17539494de7991a514aa1e734792306e621b57&",
    "spear_1_g": "https://cdn.discordapp.com/attachments/386994737090920450/637525090975744020/end_scytheEX_1.png?ex=67d70c42&is=67d5bac2&hm=6328514146db351d65cf0d76a67fd69e407ca61e7f4fab710605eaac697d5ee2&format=webp&quality=lossless&width=320&height=500",
    "spear_1_d": "https://media.discordapp.net/attachments/1324209507810803784/1324604743133298831/spythe_1__designed_d.png?ex=67d7050c&is=67d5b38c&hm=465eae4400955fce48947336b10529fdd666b610fd5aa219f557b25c3b131cb1&=&format=webp&quality=lossless&width=320&height=500",
    "spear_1_r": "https://media.discordapp.net/attachments/386994737090920450/599858559609470977/spythe_1_designed_r.png?ex=67d677d1&is=67d52651&hm=8b2402aa8ce244f03620b782f4d1b6aabf33f09291b12ccbe58199d191fdbd73&=&format=webp&quality=lossless&width=320&height=500", // die
    "musket_1": "https://i.imgur.com/pH6B1ZX.png",
};

function setWpt(id, type) {
    if (true) {
        if(weaponsT[id] && type == "weapons") {
            return weaponsT[id];
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    } else {
        if(type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if(type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}

// RENDER TOOL:
let toolSprites = {};
function renderTool(obj, variant, x, y, ctxt) {
    let tmpSrc = obj.src + (variant || "");
    let tmpSprite = toolSprites[tmpSrc + "lol"];
    if (!tmpSprite) {
        tmpSprite = new Image();
        tmpSprite.onload = function() {
            this.isLoaded = true;
        }
        tmpSprite.src = setWpt(tmpSrc, "weapons");
        toolSprites[tmpSrc + "lol"] = tmpSprite;
    }
    if (tmpSprite.isLoaded) ctxt.drawImage(tmpSprite, x + obj.xOff - (obj.length / 2), y + obj.yOff - (obj.width / 2), obj.length, obj.width);
}

// RENDER PROJECTILES:
function renderProjectiles(layer, xOffset, yOffset) {
    for (let i = 0; i < projectiles.length; i++) {
        tmpObj = projectiles[i];
        if (tmpObj.active && tmpObj.layer == layer && tmpObj.inWindow) {
            tmpObj.update(delta);
            if (tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale)) {
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                mainContext.rotate(tmpObj.dir);
                renderProjectile(0, 0, tmpObj, mainContext, 1);
                mainContext.restore();
            }
        }
    };
}

// RENDER PROJECTILE:
let projectileSprites = {};//fz iz zexy

function renderProjectile(x, y, obj, ctxt, debug) {
    if (obj.src) {
        let tmpSrc = items.projectiles[obj.indx].src;
        let tmpSprite = projectileSprites[tmpSrc];
        if (!tmpSprite) {
            tmpSprite = new Image();
            tmpSprite.onload = function() {
                this.isLoaded = true;
            }
            tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
            projectileSprites[tmpSrc] = tmpSprite;
        }
        if (tmpSprite.isLoaded)
            ctxt.drawImage(tmpSprite, x - (obj.scale / 2), y - (obj.scale / 2), obj.scale, obj.scale);
    } else if (obj.indx == 1) {
        ctxt.fillStyle = "#939393";
        renderCircle(x, y, obj.scale, ctxt);
    }
}

// RENDER AI:
let aiSprites = {};

function renderAI(obj, ctxt) {
    let tmpIndx = obj.index;
    let tmpSprite = aiSprites[tmpIndx];
    if (!tmpSprite) {
        let tmpImg = new Image();
        tmpImg.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImg.src = "https://moomoo.io/img/animals/" + obj.src + ".png";
        tmpSprite = tmpImg;
        aiSprites[tmpIndx] = tmpSprite;
    }
    if (tmpSprite.isLoaded) {
        let tmpScale = obj.scale * 1.2 * (obj.spriteMlt || 1);
        ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, tmpScale * 2, tmpScale * 2);
    }
}

// RENDER WATER BODIES:
function renderWaterBodies(xOffset, yOffset, ctxt, padding) {

    // MIDDLE RIVER:
    let tmpW = config.riverWidth + padding;
    let tmpY = (config.mapScale / 2) - yOffset - (tmpW / 2);
    if (tmpY < maxScreenHeight && tmpY + tmpW > 0) {
        ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
    }
}

// RENDER GAME OBJECTS:
let gameObjectSprites = {};
function getResSprite(obj) {
    let biomeID = (obj.y>=config.mapScale-config.snowBiomeTop)?2:((obj.y<=config.snowBiomeTop)?1:0);
    let tmpIndex = (obj.type + "_" + obj.scale + "_" + biomeID);
    let tmpSprite = gameObjectSprites[tmpIndex];
    if (!tmpSprite) {
        let blurScale = 15;
        let colors = [["#b4db62", "#9ebf57"], ["#ffb7c5", "#ff87c5"], ["#ffaa00", "#ff8000"], ];
        let select = colors[Math.floor(Math.random() * colors.length)];
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = (obj.scale * 2.1) + outlineWidth;
        let tmpContext = tmpCanvas.getContext('2d');
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(UTILS.randFloat(0, Math.PI));
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        if (obj.type == 0) {var tmpScale;for (var i = 0; i < 2; ++i) {tmpScale = tmpObj.scale * (!i?1:0.5);renderBlob(tmpContext, 7, tmpScale, tmpScale * 0.7);tmpContext.fillStyle = !biomeID ? !i ? select[1] : select[0] : !i ? "#8cd1a8" : "#addbb2";tmpContext.fill();if (!i);tmpContext.stroke();}

                           } else if (obj.type == 1) {
                               renderBlob(tmpContext, 6, tmpObj.scale, tmpObj.scale * 0.7);
                               tmpContext.fillStyle = biomeID == 2 ? "#e3b5a7" : (biomeID?"#e3f1f4":"#89a54c");
                               tmpContext.fill();
                               tmpContext.stroke();

                               //tmpContext.shadowBlur = null;
                               //tmpContext.shadowColor = null;

                               tmpContext.fillStyle = biomeID == 2 ? "#e3b5a7" : (biomeID?"#e3f1f4":"#89a54c");
                               tmpContext.fill();
                               tmpContext.stroke();

                               //tmpContext.shadowBlur = null;
                               //tmpContext.shadowColor = null;

                               tmpContext.fillStyle = biomeID == 2 ? "#fcc9b9" : (biomeID?"#6a64af":"#c15555");
                               let tmpRange;
                               let berries = 4;
                               let rotVal = (Math.PI * 2) / berries;
                               for (let i = 0; i < berries; ++i) {
                                   tmpRange = UTILS.randInt(tmpObj.scale/3.5, tmpObj.scale/2.3);
                                   renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(10, 12), tmpContext);
                               }
                           } else if (obj.type == 2 || obj.type == 3) {
                               tmpContext.fillStyle = (obj.type==2)?(biomeID==2?"#938d77":"#939393"):"#e0c655";
                               renderStar(tmpContext, 3, obj.scale, obj.scale);
                               tmpContext.fill();
                               tmpContext.stroke();

                               tmpContext.shadowBlur = null;
                               tmpContext.shadowColor = null;

                               tmpContext.fillStyle = (obj.type==2)?(biomeID==2?"#b2ab90":"#bcbcbc"):"#ebdca3";
                               renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
                               tmpContext.fill();
                           }
        tmpSprite = tmpCanvas;
        gameObjectSprites[tmpIndex] = tmpSprite;
    }
    return tmpSprite;
}
// GET ITEM SPRITE:
let itemSprites = [];

function getItemSprite(obj, asIcon) {
    let tmpSprite = itemSprites[obj.id];
    if (!tmpSprite || asIcon) {
        let blurScale = !asIcon ? 20 : 5;
        let tmpCanvas = document.createElement("canvas");
        let reScale = ((!asIcon && obj.name == "windmill") ? items.list[4].scale : obj.scale);
        tmpCanvas.width = tmpCanvas.height = (reScale * 2.5) + outlineWidth + (items.list[obj.id].spritePadding || 0) + blurScale;

        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(asIcon ? 0 : (Math.PI / 2));
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth * (asIcon ? (tmpCanvas.width / 81) : 1);
        if (!asIcon) {
            tmpContext.shadowBlur = 15;
            tmpContext.shadowColor = `rgba(0, 0, 0, 0.2)`;
        }

        if (obj.name == "apple") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#ffffff";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#ffffff";
            let leafDir = -(Math.PI / 2);
            renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir),
                       25, leafDir + Math.PI / 2, tmpContext);
        } else if (obj.name == "cookie") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#ffffff";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#ffffff";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                             UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "cheese") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#ffffff";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#ffffff";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                             UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
                "#a5974c" : "#939393";
            let sides = (obj.name == "castle wall") ? 4 : 3;
            renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
                "#c9b758" : "#bcbcbc";
            renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
     } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
           obj.name == "spinning spikes") {
    tmpContext.globalAlpha = 0.5;

    // Set shadow properties for the blue shadow effect
    tmpContext.shadowColor = "rgba(0, 0, 255, 0.8)"; // Blue shadow
    tmpContext.shadowBlur = 20; // Increase blur for a more pronounced shadow
    tmpContext.shadowOffsetX = 5; // Horizontal offset of the shadow
    tmpContext.shadowOffsetY = 5; // Vertical offset of the shadow

    // Set fill style to dark black
    tmpContext.fillStyle = "#000000"; // Dark black for spikes
    let tmpScale = (obj.scale * 0.6);
    renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
    tmpContext.fill();
    tmpContext.stroke();

    // Reset shadow properties for subsequent drawings
    tmpContext.shadowColor = "transparent"; // Reset shadow color
    tmpContext.shadowBlur = 0; // Reset shadow blur
    tmpContext.shadowOffsetX = 0; // Reset horizontal offset
    tmpContext.shadowOffsetY = 0; // Reset vertical offset

    // Draw the inner circle with white color
    tmpContext.fillStyle = "#fffef7";
    renderCircle(0, 0, tmpScale, tmpContext);
    tmpContext.fillStyle = "#fffef7";
    renderCircle(0, 0, tmpScale / 2, tmpContext, true);

        } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
    // Set the global alpha for transparency
    tmpContext.globalAlpha = 0.5;

    // Draw the windmill base (circle) with shiny light red color
    tmpContext.fillStyle = "rgba(255, 102, 102, 0.4)"; // Light red with transparency
    renderCircle(0, 0, reScale, tmpContext);

    // Draw the windmill body (rectangle with rounded corners) with shiny light red color
    tmpContext.fillStyle = "rgba(255, 102, 102, 0.4)"; // Light red with transparency
    renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);

    // Draw the windmill top (smaller circle) with shiny light red color
    tmpContext.fillStyle = "rgba(255, 102, 102, 0.4)"; // Light red with transparency
    renderCircle(0, 0, reScale * 0.5, tmpContext);

    // Set the stroke style for the black border
    tmpContext.strokeStyle = "black"; // Black border
    tmpContext.lineWidth = 4; // Set the border width

    // Reset alpha for the border
    tmpContext.globalAlpha = 1;

    // Draw the border for the base circle
    renderCircle(0, 0, reScale, tmpContext);
    tmpContext.stroke(); // Apply the stroke to the last drawn shape

    // Draw the border for the body rectangle
    renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
    tmpContext.stroke(); // Apply the stroke to the last drawn shape

    // Draw the border for the top circle
    renderCircle(0, 0, reScale * 0.5, tmpContext);
    tmpContext.stroke(); // Apply the stroke to the last drawn shape

    // Create a radial gradient for a shiny effect
    const gradient = tmpContext.createRadialGradient(0, 0, reScale * 0.5, 0, 0, reScale * 0.5);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)'); // Bright white with high transparency for shine
    gradient.addColorStop(1, 'rgba(255, 102, 102, 0)'); // Fully transparent light red

    tmpContext.fillStyle = gradient;
    tmpContext.fill(); // Fill with the gradient for a shiny effect

    // Set shadow properties for the black border
    tmpContext.shadowColor = "rgba(0, 0, 0, 0.8)"; // Dark shadow color
    tmpContext.shadowBlur = 20; // Increased shadow blur for a more pronounced effect
    tmpContext.shadowOffsetX = 10; // Increased shadow offset X for a more dramatic shadow
    tmpContext.shadowOffsetY = 10; // Increased shadow offset Y for a more dramatic shadow

    // Redraw the shapes to apply the shadow
    tmpContext.fillStyle = "rgba(255, 102, 102, 0.4)"; // Light red with transparency
    renderCircle(0, 0, reScale, tmpContext);
    renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
    renderCircle(0, 0, reScale * 0.5, tmpContext);

    // Draw the border again to apply the shadow effect
    tmpContext.strokeStyle = "black"; // Black border
    tmpContext.lineWidth = 4; // Set the border width
    tmpContext.stroke(); // Apply the stroke to the last drawn shape
        } else if (obj.name == "mine") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#939393";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#bcbcbc";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "sapling") {
            tmpContext.globalAlpha = 0.5;
            for (let i = 0; i < 2; ++i) {
                let tmpScale = obj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
                tmpContext.fill();
                if (!i) tmpContext.stroke();
            }
   } else if (obj.name == "pit trap") {
    // Set overall transparency for the pit trap
    tmpContext.globalAlpha = 1; // Set to 1 for full opacity

    // Draw the outer star shape for the pit trap with a color
    tmpContext.fillStyle = "#a0cac2"; // Color for the body
    renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1); // Draw the outer star
    tmpContext.fill(); // Fill the outer star

    // Set shadow properties for the border
    tmpContext.shadowColor = "rgba(0, 0, 0, 1)"; // Solid black shadow
    tmpContext.shadowBlur = 100; // Large blur effect for the shadow
    tmpContext.shadowOffsetX = 15; // Horizontal shadow offset
    tmpContext.shadowOffsetY = 15; // Vertical shadow offset

    // Set the stroke style for the border
    tmpContext.strokeStyle = "black"; // Solid black color for the border
    tmpContext.lineWidth = 5; // Set a thicker line width for the border

    // Draw the border for the outer star
    tmpContext.stroke(); // Apply the stroke for the outer star

    // Reset shadow properties for the inner star
    tmpContext.shadowColor = "transparent"; // No shadow for the inner star

    // Draw the inner star shape for the pit trap with a color
    tmpContext.fillStyle = "#a0cac2"; // Color for the inner star
    renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65); // Draw the inner star
    tmpContext.fill(); // Fill the inner star

    // Set the stroke style for the inner star
    tmpContext.strokeStyle = "black"; // Solid black color for the inner star border
    tmpContext.lineWidth = 5; // Set a thicker line width for the inner star border

    // Draw the border for the inner star
    tmpContext.stroke(); // Apply the stroke for the inner star


        } else if (obj.name == "boost pad") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#fffef7";
            renderTriangle(obj.scale * 1, tmpContext);
        } else if (obj.name == "turret") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#fffef7";
            let tmpLen = 50;
            renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if (obj.name == "platform") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            let tmpCount = 4;
            let tmpS = obj.scale * 2;
            let tmpW = tmpS / tmpCount;
            let tmpX = -(obj.scale / 2);
            for (let i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if (obj.name == "healing pad") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#fffef7";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "spawn pad") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#fffef7";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if (obj.name == "blocker") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#fffef7";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "teleporter") {
            tmpContext.globalAlpha = 0.5;
            tmpContext.fillStyle = "#fffef7";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#fffef7";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        }
        tmpSprite = tmpCanvas;
        if (!asIcon)
            itemSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}

function getItemSprite2(obj, tmpX, tmpY) {
    let tmpContext = mainContext;
    let reScale = (obj.name == "windmill" ? items.list[4].scale : obj.scale);
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(obj.dir);
    tmpContext.strokeStyle = outlineColor;
    tmpContext.strokeStyle = "rgba(0, 0, 0, 0.5)"; // Updated with 0.5 opacity
    tmpContext.lineWidth = outlineWidth;
    if (obj.name == "apple") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#fffef7";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#fffef7";
        let leafDir = -(Math.PI / 2);
        renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir),
                   25, leafDir + Math.PI / 2, tmpContext);
    } else if (obj.name == "cookie") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#fffef7";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#fffef7";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for (let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                         UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if (obj.name == "cheese") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#f4f3ac";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#c3c28b";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for (let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                         UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
            "#a5974c" : "#939393";
        let sides = (obj.name == "castle wall") ? 4 : 3;
        renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
            "#c9b758" : "#bcbcbc";
        renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
               obj.name == "spinning spikes") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
        let tmpScale = (obj.scale * 0.6);
        renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderCircle(0, 0, tmpScale / 2, tmpContext, true);
    } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#fffef7";
        renderCircle(0, 0, reScale, tmpContext);
        tmpContext.fillStyle = "#fffef7";
        renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#fffef7";
        renderCircle(0, 0, reScale * 0.5, tmpContext);
    } else if (obj.name == "mine") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#939393";
        renderStar(tmpContext, 3, obj.scale, obj.scale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#bcbcbc";
        renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "sapling") {
        mainContext.globalAlpha = 0.5;
        for (let i = 0; i < 2; ++i) {
            let tmpScale = obj.scale * (!i ? 1 : 0.5);
            renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
            tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
            tmpContext.fill();
            if (!i) tmpContext.stroke();
        }
    } else if (obj.name == "pit trap") {
        tmpContext.fillStyle = "#a5974c";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = outlineColor;
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "boost pad") {
        mainContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#000000";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#dbd97d";
        renderTriangle(obj.scale * 1, tmpContext);
    } else if (obj.name == "turret") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#000000";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if (obj.name == "platform") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for (let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if (obj.name == "healing pad") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "spawn pad") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if (obj.name == "blocker") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "teleporter") {
        tmpContext.globalAlpha = 0.5;
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    }
    tmpContext.restore();
}

let objSprites = [];

function getObjSprite(obj) {
    let tmpSprite = objSprites[obj.id];
    if (!tmpSprite) {
        // let blurScale = isNight ? 20 : 0;
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = obj.scale * 2.5 + outlineWidth + (items.list[obj.id].spritePadding || 0) + 0;
        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
        tmpContext.rotate(Math.PI / 2);
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        // if (isNight) {
        //     tmpContext.shadowBlur = 20;
        //     tmpContext.shadowColor = `rgba(0, 0, 0, ${Math.min(0.3, obj.alpha)})`;
        // }
        if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
            tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
            let tmpScale = obj.scale * 0.6;
            renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#cc5151";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#cc5151";
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpSprite = tmpCanvas;
        objSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}

// GET MARK SPRITE:
function getMarkSprite(obj, tmpContext, tmpX, tmpY) {
    let center = {
        x: screenWidth / 2,
        y: screenHeight / 2,
    };
    tmpContext.lineWidth = outlineWidth;
    mainContext.globalAlpha = 0.2;
    tmpContext.strokeStyle = outlineColor;
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(90**10);
    if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
        tmpContext.fillStyle = (obj.name == "poison spikes")?"#7b935d":"#939393";
        var tmpScale = (obj.scale);
        renderStar(tmpContext, (obj.name == "spikes")?5:6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#a34040";
        } else {
            tmpContext.fillStyle = "#c9b758";
        }
        renderCircle(0, 0, tmpScale/2, tmpContext, true);
    } else if (obj.name == "turret") {
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#939393";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if (obj.name == "teleporter") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    } else if (obj.name == "platform") {
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for (let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if (obj.name == "healing pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "spawn pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if (obj.name == "blocker") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderRectCircle(0, 0, obj.scale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext);

    } else if (obj.name == "pit trap") {
        tmpContext.fillStyle = "#a5974c";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#a34040";
        } else {
            tmpContext.fillStyle = outlineColor;
        }
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    }
    tmpContext.restore();
}

// OBJECT ON SCREEN:
function isOnScreen(x, y, s) {
    return (x + s >= 0 && x - s <= maxScreenWidth && y + s >= 0 && (y,
                                                                    s,
                                                                    maxScreenHeight));
}

// RENDER GAME OBJECTS:
function renderGameObjects(layer, xOffset, yOffset) {
    let tmpSprite;
    let tmpX;
    let tmpY;
    liztobj.forEach((tmp) => {
        tmpObj = tmp;
        if (tmpObj.active && liztobj.includes(tmp) && tmpObj.render) {
            tmpX = tmpObj.x + tmpObj.xWiggle - xOffset;
            tmpY = tmpObj.y + tmpObj.yWiggle - yOffset;
            if (layer == 0) {
                tmpObj.update(delta);
            }
            mainContext.globalAlpha = tmpObj.alpha;
            if (tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0))) {
                if (tmpObj.isItem) {
                    if ((tmpObj.dmg || tmpObj.trap) && !tmpObj.isTeamObject(player)) {
                        tmpSprite = getObjSprite(tmpObj);
                    } else {
                        tmpSprite = getItemSprite(tmpObj);
                    }

                    mainContext.save();
                    mainContext.translate(tmpX, tmpY);
                    mainContext.rotate(tmpObj.dir);
                    if (!tmpObj.active) {
                        mainContext.scale(tmpObj.visScale / tmpObj.scale, tmpObj.visScale / tmpObj.scale);
                    }
                    mainContext.drawImage(tmpSprite, -(tmpSprite.width / 2), -(tmpSprite.height / 2));

                    if (tmpObj.blocker) {
                        mainContext.strokeStyle = "#db6e6e";
                        mainContext.globalAlpha = 0.3;
                        mainContext.lineWidth = 6;
                        renderCircle(0, 0, tmpObj.blocker, mainContext, false, true);
                    }
                    mainContext.restore();
                } else {
                    tmpSprite = getResSprite(tmpObj);
                    mainContext.drawImage(tmpSprite, tmpX - (tmpSprite.width / 2), tmpY - (tmpSprite.height / 2));
                }
            }
            if (configs.buildingHealth) {
                if (layer == 3) {
                    if (tmpObj.health < tmpObj.maxHealth) {
                        const endAngle = ((tmpObj.health / tmpObj.maxHealth) * 360) * (Math.PI / 180);
                        const radius = 14;
                        const scale = 22;
                        mainContext.save();
                        mainContext.strokeStyle = "";
                        mainContext.lineWidth = 16;
                        mainContext.lineCap = "round";
                        mainContext.shadowColor = "";
                        mainContext.translate(tmpX, tmpY);
                        mainContext.beginPath();
                        mainContext.arc(0, 0, scale, 0, endAngle);
                        mainContext.stroke();
                        mainContext.restore();

                        mainContext.save();
                        mainContext.strokeStyle = tmpObj.isTeamObject(player) ? "#0091ff" : "#FF0000";
                        mainContext.shadowColor = tmpObj.isTeamObject(player) ? "" : "rgb(200, 50, 50)";
                        mainContext.shadowBlur = 50;
                        mainContext.lineWidth = 14 / 2.5;
                        mainContext.lineCap = "round";
                        mainContext.shadowColor = "";
                        mainContext.translate(tmpX, tmpY);
                        mainContext.beginPath();
                        mainContext.arc(0, 0, scale, 0, endAngle);
                        mainContext.stroke();
                        mainContext.restore();
                    }
                }
            }
        }
    });


    // PLACE VISIBLE:
    if (layer == 0) {
        if (placeVisible.length) {
            placeVisible.forEach((places) => {
                tmpX = places.x - xOffset;
                tmpY = places.y - yOffset;
                markObject(places, tmpX, tmpY);
            });
        }
    }
}

function markObject(tmpObj, tmpX, tmpY) {
    getMarkSprite(tmpObj, mainContext, tmpX, tmpY);
}

// RENDER MINIMAP:
class MapPing {
    constructor(color, scale) {
        this.init = function(x, y) {
            this.scale = 0;
            this.x = x;
            this.y = y;
            this.active = true;
        };
        this.update = function(ctxt, delta) {
            if (this.active) {
                this.scale += 0.05 * delta;
                if (this.scale >= scale) {
                    this.active = false;
                } else {
                    ctxt.globalAlpha = (1 - Math.max(0, this.scale / scale));
                    ctxt.beginPath();
                    ctxt.arc((this.x / config.mapScale) * mapDisplay.width, (this.y / config.mapScale) *
                             mapDisplay.width, this.scale, 0, 2 * Math.PI);
                    ctxt.stroke();
                }
            }
        };
        this.color = color;
    }
}

function pingMap(x, y) {
    tmpPing = mapPings.find(pings => !pings.active);
    if (!tmpPing) {
        tmpPing = new MapPing("#fff", config.mapPingScale);
        mapPings.push(tmpPing);
    }
    tmpPing.init(x, y);
}

function updateMapMarker() {
    mapMarker.x = player.x;
    mapMarker.y = player.y;
}

function renderMinimap(delta) {
    if (player && player.alive) {
        mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height);

        // RENDER PINGS:
        mapContext.lineWidth = 4;
        for (let i = 0; i < mapPings.length; ++i) {
            tmpPing = mapPings[i];
            mapContext.strokeStyle = tmpPing.color;
            tmpPing.update(mapContext, delta);
        }

        if (true) {
            const collections = [
                { collection: Trees, radius: 3, color: "#8ecc51" },
                { collection: Foodbush, radius: 5, color: "#ff3333" },
                { collection: StoneOreok, radius: 5, color: "#888888" },
                { collection: GoldMines, radius: 5, color: "#ffee33" },
            ];

            const renderCircleWithScale = (x, y, radius, color) => {
                mapContext.fillStyle = color;
                mapContext.scale = 13200.0;
                renderCircle(
                    x / config.mapScale * mapDisplay.width,
                    y / config.mapScale * mapDisplay.height,
                    radius,
                    mapContext,
                    true
                );
            };

            for (const { collection, radius, color } of collections) {
                for (let i of collection) {
                    renderCircleWithScale(i.x, i.y, radius, color);
                }
            }
        }

        // RENDER BREAK TRACKS:
        mapContext.globalAlpha = 1;
        mapContext.fillStyle = "#ff0000";
        if (breakTrackers.length) {
            mapContext.fillStyle = "#abcdef";
            mapContext.font = "34px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            for (let i = 0; i < breakTrackers.length;) {
                mapContext.fillText("!", (breakTrackers[i].x / config.mapScale) * mapDisplay.width,
                                    (breakTrackers[i].y / config.mapScale) * mapDisplay.height);
                i += 2;
            }
        }

        // RENDER PLAYERS:
        mapContext.globalAlpha = 1;
        mapContext.fillStyle = "#fff";
        renderCircle((player.x / config.mapScale) * mapDisplay.width,
                     (player.y / config.mapScale) * mapDisplay.height, 7, mapContext, true);
        mapContext.fillStyle = "rgba(255,255,255,0.35)";
        if (player.team && minimapData) {
            for (let i = 0; i < minimapData.length;) {
                renderCircle((minimapData[i] / config.mapScale) * mapDisplay.width,
                             (minimapData[i + 1] / config.mapScale) * mapDisplay.height, 7, mapContext, true);
                i += 2;
            }
        }

        // DEATH LOCATION:
        if (lastDeath) {
            mapContext.fillStyle = "#fc5553";
            mapContext.font = "34px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            mapContext.fillText("x", (lastDeath.x / config.mapScale) * mapDisplay.width,
                                (lastDeath.y / config.mapScale) * mapDisplay.height);
        }

        // MAP MARKER:
        if (mapMarker) {
            mapContext.fillStyle = "#fff";
            mapContext.font = "34px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            mapContext.fillText("x", (mapMarker.x / config.mapScale) * mapDisplay.width,
                                (mapMarker.y / config.mapScale) * mapDisplay.height);
        }
    }
}

// ICONS:
let crossHairs = ["https://cdn.discordapp.com/attachments/1339237455420981360/1351944705897795667/1782436.png?ex=67dc381f&is=67dae69f&hm=519b329f23587fcb0231581539f1a82f30431b83b37281a1d391f2bc59e43985&", "https://cdn.discordapp.com/attachments/1339237455420981360/1351944705897795667/1782436.png?ex=67dc381f&is=67dae69f&hm=519b329f23587fcb0231581539f1a82f30431b83b37281a1d391f2bc59e43985&"];
let crossHairSprites = {};
let iconSprites = {};
let icons = ["crown", "skull"];

function loadIcons() {
    for (let i = 0; i < icons.length; ++i) {
        let tmpSprite = new Image();
        tmpSprite.onload = function() {
            this.isLoaded = true;
        };
        tmpSprite.src = "./../img/icons/" + icons[i] + ".png";
        iconSprites[icons[i]] = tmpSprite;
    }
    for (let i = 0; i < crossHairs.length; ++i) {
        let tmpSprite = new Image();
        tmpSprite.onload = function () {
            this.isLoaded = true;
        };
        tmpSprite.src = crossHairs[i];
        crossHairSprites[i] = tmpSprite;
    }
}
loadIcons();

function cdf (e, t){
    try {
        return Math.hypot((t.y2||t.y)-(e.y2||e.y), (t.x2||t.x)-(e.x2||e.x));
    } catch(e){
        return Infinity;
    }
}

// UPDATE GAME:
function updateGame() {
    if(gameObjects.length && inGame) {
        gameObjects.forEach((tmp) => {
            if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) <= 1200) {
                if(!liztobj.includes(tmp)) {
                    liztobj.push(tmp);
                    tmp.render = true;
                }
            } else {
                if(liztobj.includes(tmp)) {
                    if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                        tmp.render = false;
                        const index = liztobj.indexOf(tmp);
                        if (index > -1) { // only splice array when item is found
                            liztobj.splice(index, 1); // 2nd parameter means remove one item only
                        }
                    }
                } else if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                    tmp.render = false;
                    const index = liztobj.indexOf(tmp);
                    if (index > -1) { // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                } else {
                    tmp.render = false;
                    const index = liztobj.indexOf(tmp);
                    if (index > -1) { // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
        })
        // gameObjects = gameObjects.filter(e => UTILS.getDistance(e.x, e.y, player.x, player.y) <= 1000)
    }

    // if (config.resetRender) {
    mainContext.beginPath();
    mainContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    // }
    mainContext.globalAlpha = 1;

    // MOVE CAMERA:
    if (player) {
        if (false) {
            camX = player.x;
            camY = player.y;
        } else {
            let tmpDist = UTILS.getDistance(camX, camY, player.x, player.y);
            let tmpDir = UTILS.getDirection(player.x, player.y, camX, camY);
            let camSpd = Math.min(tmpDist * 0.0045 * delta, tmpDist);
            if (tmpDist > 0.05) {
                camX += camSpd * Math.cos(tmpDir);
                camY += camSpd * Math.sin(tmpDir);
            } else {
                camX = player.x;
                camY = player.y;
            }
        }
    } else {
        camX = config.mapScale / 2 + config.riverWidth;
        camY = config.mapScale / 2;
    }

    // INTERPOLATE PLAYERS AND AI:
    let lastTime = now - (1000 / config.serverUpdateRate);
    let tmpDiff;
    for (let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if (tmpObj && tmpObj.visible) {
            if (tmpObj.forcePos) {
                tmpObj.x = tmpObj.x2;
                tmpObj.y = tmpObj.y2;
                tmpObj.dir = tmpObj.d2;
            } else {
                let total = tmpObj.t2 - tmpObj.t1;
                let fraction = lastTime - tmpObj.t1;
                let ratio = (fraction / total);
                let rate = 170;
                tmpObj.dt += delta;
                let tmpRate = Math.min(1.7, tmpObj.dt / rate);
                tmpDiff = (tmpObj.x2 - tmpObj.x1);
                tmpObj.x = tmpObj.x1 + (tmpDiff * tmpRate);
                tmpDiff = (tmpObj.y2 - tmpObj.y1);
                tmpObj.y = tmpObj.y1 + (tmpDiff * tmpRate);
                if (config.anotherVisual) {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                } else {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                }
            }
        }
    }

    // RENDER CORDS:
    let xOffset = camX - (maxScreenWidth / 2);
    let yOffset = camY - (maxScreenHeight / 2);

    // RENDER BACKGROUND:
    if (config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#42955a";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.mapScale - config.snowBiomeTop - yOffset <= 0) {
        mainContext.fillStyle = "#bdb66b";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= 0) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset);
        mainContext.fillStyle = "#42955a";
        mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth,
                             maxScreenHeight - (config.snowBiomeTop - yOffset));
    } else {
        mainContext.fillStyle = "#42955a";
        mainContext.fillRect(0, 0, maxScreenWidth,
                             (config.mapScale - config.snowBiomeTop - yOffset));
        mainContext.fillStyle = "#bdb66b";
        mainContext.fillRect(0, (config.mapScale - config.snowBiomeTop - yOffset), maxScreenWidth,
                             maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset));
    }

    // RENDER WATER AREAS:
    if (!firstSetup) {
        waterMult += waterPlus * config.waveSpeed * delta;
        if (waterMult >= config.waveMax) {
            waterMult = config.waveMax;
            waterPlus = -1;
        } else if (waterMult <= 1) {
            waterMult = waterPlus = 1;
        }
        mainContext.globalAlpha = 1;
        mainContext.fillStyle = "#dbc666";
        renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding);
        mainContext.fillStyle = "#91b2db";
        renderWaterBodies(xOffset, yOffset, mainContext, (waterMult - 1) * 250);
    }
    if (configs.showGrid) {
        mainContext.lineWidth = 3;
        mainContext.strokeStyle = "#000";
        mainContext.globalAlpha = 0.05;
        mainContext.beginPath();
        let ratfrr = parseFloat(getEl("gridscale").value);
        for (var x = -xOffset % ratfrr; x < maxScreenWidth; x += ratfrr) {
            if (x > 0) {
                mainContext.moveTo(x, 0);
                mainContext.lineTo(x, maxScreenHeight);
            }
        }
        for (var y = -yOffset % ratfrr; y < maxScreenHeight; y += ratfrr) {
            if (y > 0) {
                mainContext.moveTo(0, y);
                mainContext.lineTo(maxScreenWidth, y);
            }
        }
        mainContext.stroke();
    }

    // RENDER DEAD PLAYERS:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderDeadPlayers(xOffset, yOffset);

    // RENDER BOTTOM LAYER:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderGameObjects(-1, xOffset, yOffset);

    // RENDER PROJECTILES:
    mainContext.globalAlpha = 1;
    mainContext.lineWidth = outlineWidth;
    renderProjectiles(0, xOffset, yOffset);

    // RENDER PLAYERS:
    renderPlayers(xOffset, yOffset, 0);

    // RENDER AI:
    mainContext.globalAlpha = 1;
    for (let i = 0; i < ais.length; ++i) {
        tmpObj = ais[i];
        if (tmpObj.active && tmpObj.visible) {
            tmpObj.animate(delta);
            mainContext.save();
            mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
            mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - (Math.PI / 2));
            renderAI(tmpObj, mainContext);
            mainContext.restore();
        }
    }

    // RENDER GAME OBJECTS (LAYERED):
    renderGameObjects(0, xOffset, yOffset);
    renderProjectiles(1, xOffset, yOffset);
    renderGameObjects(1, xOffset, yOffset);
    renderPlayers(xOffset, yOffset, 1);
    renderGameObjects(2, xOffset, yOffset);
    renderGameObjects(3, xOffset, yOffset);

    // MAP BOUNDARIES:
    mainContext.fillStyle = "#000";
    mainContext.globalAlpha = 0.09;
    if (xOffset <= 0) {
        mainContext.fillRect(0, 0, -xOffset, maxScreenHeight);
    }
    if (config.mapScale - xOffset <= maxScreenWidth) {
        let tmpY = Math.max(0, -yOffset);
        mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
    }
    if (yOffset <= 0) {
        mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset);
    }
    if (config.mapScale - yOffset <= maxScreenHeight) {
        let tmpX = Math.max(0, -xOffset);
        let tmpMin = 0;
        if (config.mapScale - xOffset <= maxScreenWidth)
            tmpMin = maxScreenWidth - (config.mapScale - xOffset);
        mainContext.fillRect(tmpX, config.mapScale - yOffset,
                             (maxScreenWidth - tmpX) - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
    }

    // RENDER DAY/NIGHT TIME:
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = `rgba(0, 5, 80, 0.${parseFloat(getEl("nightS").value)})`;
    mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);

    // RENDER PLAYER AND AI UI:
    mainContext.strokeStyle = darkOutlineColor;
    mainContext.globalAlpha = 1;
    for (let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if (tmpObj.visible && tmpObj.showName === 'NOOO') {
            mainContext.strokeStyle = darkOutlineColor;

            // NAME AND HEALTH:
            let tmpText = (tmpObj.team ? "[" + tmpObj.team + "] " : "") + (tmpObj.name || ""); //+ (tmpObj.isPlayer ? " {" + tmpObj.sid + "}" : "");
            if (tmpText != "") {
                // bots.forEach((bot) => {
                //     if (tmpObj.sid == bot.sid) return;
                // });
                function rainbowName(RainbowCycle) {
                    return `hsla(${RainbowCycle - 50}, 85%, 50%, 1)`;
                }
                let rainbowHue = (performance.now() / 4) % 360;
                let shitNAMES = tmpObj == player ? rainbowName(rainbowHue) : ((tmpObj.team && tmpObj.team == player.team)) ? "#a6c7e7" : "#ebaebc";
                mainContext.font = (tmpObj.nameScale || 30) + "px Hammersmith One";
                mainContext.fillStyle = shitNAMES;
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                mainContext.lineWidth = (tmpObj.nameScale ? 11 : 8);
                mainContext.lineJoin = "round";
                mainContext.strokeText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset + tmpObj.scale) + config.nameY);
                mainContext.fillText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset + tmpObj.scale) + config.nameY);
                if (tmpObj.isLeader && iconSprites["crown"].isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - (tmpS / 2) - (mainContext.measureText(tmpText).width / 2) - config.crownPad;
                    mainContext.drawImage(iconSprites["crown"], tmpX, (tmpObj.y - yOffset + tmpObj.scale) +
                                          config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                }
                if (tmpObj.iconIndex == 1 && iconSprites["skull"].isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - (tmpS / 2) + (mainContext.measureText(tmpText).width / 2) + config.crownPad;
                    mainContext.drawImage(iconSprites["skull"], tmpX, (tmpObj.y - yOffset + tmpObj.scale) +
                                          config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                }
                if (tmpObj.isPlayer && instaC.wait && near == tmpObj && (tmpObj.backupNobull ? crossHairSprites[1].isLoaded : crossHairSprites[0].isLoaded) && enemy.length) {
                    let tmpS = tmpObj.scale * 2.2;
                    mainContext.drawImage((tmpObj.backupNobull ? crossHairSprites[1] : crossHairSprites[0]), tmpObj.x - xOffset - tmpS / 2, tmpObj.y - yOffset - tmpS / 2, tmpS, tmpS);
                }
                // izbot = false;
                // HEALTH HOLDER:
                mainContext.fillStyle = darkOutlineColor;
                mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad,
                                      (tmpObj.y - yOffset - tmpObj.scale) - config.nameY, (config.healthBarWidth * 2) +
                                      (config.healthBarPad * 2), 17, 8);
                mainContext.fill();

                // HEALTH BAR:
                mainContext.fillStyle = (tmpObj == player || (tmpObj.team && tmpObj.team == player.team)) ? "#8ecc51" : "#cc5151";
                mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth,
                                      (tmpObj.y - yOffset - tmpObj.scale) - config.nameY + config.healthBarPad,
                                      ((config.healthBarWidth * 2) * (tmpObj.health / tmpObj.maxHealth)), 17 - config.healthBarPad * 2, 7);
                mainContext.fill();
            }

            if (tmpObj.isPlayer) {
                // SHAME COUNT:
                mainContext.globalAlpha = 1;
                mainContext.font = "30px Hammersmith One";
                mainContext.fillStyle = "red";
                mainContext.strokeStyle = darkOutlineColor;
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                mainContext.lineWidth = 8;
                mainContext.lineJoin = "round";
                let tmpS = config.crownIconScale;
                let tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(tmpText).width / 2 + config.crownPad + (tmpObj.iconIndex == 1 ? 30 * 2.75 : 30);
                mainContext.strokeText(tmpObj.skinIndex == 45 && tmpObj.shameTimer > 0 ? tmpObj.shameTimer : tmpObj.shameCount, tmpX, tmpObj.y - yOffset + tmpObj.scale + config.nameY);
                mainContext.fillText(tmpObj.skinIndex == 45 && tmpObj.shameTimer > 0 ? tmpObj.shameTimer : tmpObj.shameCount, tmpX, tmpObj.y - yOffset + tmpObj.scale + config.nameY);

                // PLAYER TRACER:
                if (!tmpObj.isTeam(player)) {
                    let center = {
                        x: screenWidth / 2,
                        y: screenHeight / 2,
                    };
                    let alpha = Math.min(1, (UTILS.getDistance(0, 0, player.x - tmpObj.x, (player.y - tmpObj.y) * (16 / 9)) * 100) / (config.maxScreenHeight / 2) / center.y);
                    let dist = center.y * alpha / 2;
                    let tmpX = dist * Math.cos(UTILS.getDirect(tmpObj, player, 0, 0));
                    let tmpY = dist * Math.sin(UTILS.getDirect(tmpObj, player, 0, 0));
                    mainContext.save();
                    mainContext.translate((player.x - xOffset) + tmpX, (player.y - yOffset) + tmpY);
                    mainContext.rotate(tmpObj.aim2 + Math.PI / 2);
                    let by = 255 - (tmpObj.sid * 2);
                    mainContext.fillStyle = `rgb(${by}, ${by}, ${by})`;
                    mainContext.globalAlpha = alpha;
                    let renderTracer = function(s, ctx) {
                        ctx = ctx || mainContext;
                        let h = s * (Math.sqrt(3) / 2);
                        ctx.beginPath();
                        ctx.moveTo(0, -h / 1.5);
                        ctx.lineTo(-s / 2, h / 2);
                        ctx.lineTo(s / 2, h / 2);
                        ctx.lineTo(0, -h / 1.5);
                        ctx.fill();
                        ctx.closePath();
                    }
                    renderTracer(25, mainContext);
                    mainContext.restore();
                }
            }
        }
    }

    if (player) {
        // AUTOPUSH LINE:
if (my.autoPush) {
            if(combatBot.paths.length && combatBot.show) {
                        mainContext.save();
                        mainContext.beginPath();
                        mainContext.strokeStyle = "#c3e5e8";
                        mainContext.lineWidth = 6;
                        mainContext.moveTo(player.x-xOffset, player.y-yOffset);
                        for(let i = 0; i < combatBot.paths.length; i++) {
                            let a = combatBot.paths[i];
                            mainContext.lineTo(a.x - xOffset, a.y - yOffset);
                        }
                        mainContext.stroke();
                if (combatBot.paths.length) {
                   mainContext.beginPath();
                   mainContext.strokeStyle = "#fff";
                   mainContext.moveTo(combatBot.paths[combatBot.paths.length - 1].x - xOffset, combatBot.paths[combatBot.paths.length - 1].y - yOffset);
                   mainContext.lineTo(my.pushData.x2 - xOffset, my.pushData.y2 - yOffset);
                   mainContext.lineTo(my.pushData.x - xOffset, my.pushData.y - yOffset);
                   mainContext.stroke();
                    } else {
                        mainContext.beginPath();
                    }
            }
                            mainContext.lineWidth = 5;
                            mainContext.globalAlpha = 1;
                            mainContext.beginPath();


                            mainContext.strokeStyle = "#fff";
                            mainContext.lineTo(my.pushData.x2 - xOffset, my.pushData.y2 - yOffset);
                            mainContext.lineTo(my.pushData.x - xOffset, my.pushData.y - yOffset);
                            mainContext.stroke();
            mainContext.restore();
                        }
        if (doSpikeRedThingmajic) {
            mainContext.globalAlpha = 0.25;
            mainContext.beginPath();

            mainContext.fillStyle = "rgba(255, 0, 0)";
            const spikeX = SpikeX() - xOffset;
            const spikeY = SpikeY() - yOffset;
            const radius = 50;
            mainContext.arc(spikeX, spikeY, radius, 0, Math.PI * 2);
            mainContext.fill();

        }
    }
    mainContext.globalAlpha = 1;

    // RENDER ANIM TEXTS:
    textManager.update(delta, mainContext, xOffset, yOffset);

    // RENDER CHAT MESSAGES:
    for (let i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if (tmpObj.visible) {
            if (tmpObj.chatCountdown > 0) {
                tmpObj.chatCountdown -= delta;
                if (tmpObj.chatCountdown <= 0) tmpObj.chatCountdown = 0;
                mainContext.font = "30px 'Permanent Marker', Rock Salt"; // Font size and style
                let tmpSize = mainContext.measureText(tmpObj.chatMessage);
                let braceWidth = 15; // Width for the braces
                let tmpH = 47;
                let tmpW = tmpSize.width + 15 + braceWidth; // Adjusting width for braces
                let tmpX = tmpObj.x - xOffset;
                let tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;

                mainContext.lineWidth = 5; // Border thickness
                mainContext.strokeStyle = "black"; // Border color

                // Calculate the center and dimensions
                const centerX = tmpX; // Center X
                const centerY = tmpY; // Center Y
                const width = tmpW; // Width of the box
                const height = tmpH; // Height of the box
                const cornerRadius = 12; // Radius for rounded corners

                // Draw the rounded rectangle border
                mainContext.beginPath(); // Start a new path
                mainContext.moveTo(centerX - width / 2 + cornerRadius, centerY - height / 2); // Move to the top left corner
                mainContext.lineTo(centerX + width / 2 - cornerRadius, centerY - height / 2); // Top edge
                mainContext.quadraticCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY - height / 2 + cornerRadius); // Top right corner
                mainContext.lineTo(centerX + width / 2, centerY + height / 2 - cornerRadius); // Right edge
                mainContext.quadraticCurveTo(centerX + width / 2, centerY + height / 2, centerX + width / 2 - cornerRadius, centerY + height / 2); // Bottom right corner
                mainContext.lineTo(centerX - width / 2 + cornerRadius, centerY + height / 2); // Bottom edge
                mainContext.quadraticCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY + height / 2 - cornerRadius); // Bottom left corner
                mainContext.lineTo(centerX - width / 2, centerY - height / 2 + cornerRadius); // Left edge
                mainContext.quadraticCurveTo(centerX - width / 2, centerY - height / 2, centerX - width / 2 + cornerRadius, centerY - height / 2); // Top left corner
                mainContext.closePath(); // Close the path
                mainContext.strokeStyle = "black"; // Black border
                mainContext.lineWidth = 2; // Border thickness
                mainContext.stroke(); // Apply the stroke to draw the border

                // Background for chat box with black color
                mainContext.fillStyle = "#000"; // Black background
                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.fill(); // Fill the rectangle with black color

                // Set text properties
                mainContext.font = "32px 'Creepster', sans-serif"; // Use a rough font
                mainContext.fillStyle = "red"; // Blood color for text fill
                mainContext.lineWidth = 1; // Border thickness
                mainContext.strokeStyle = "black"; // Black color for border

                // Set shadow properties for a black shadow effect
                mainContext.shadowColor = "black"; // Shadow color
                mainContext.shadowBlur = 20; // Blur effect for shadow
                mainContext.shadowOffsetX = 0; // Horizontal shadow offset
                mainContext.shadowOffsetY = 0; // Vertical shadow offset

                // Draw the text with a rough effect
                const roughness = 2; // Adjust this value for more or less roughness
                for (let i = -roughness; i <= roughness; i++) {
                    for (let j = -roughness; j <= roughness; j++) {
                        mainContext.fillText(tmpObj.chatMessage, tmpX + i, tmpY + j); // Fill text with blood color
                        mainContext.strokeText(tmpObj.chatMessage, tmpX + i, tmpY + j); // Stroke for neon effect
                    }
                }

                // Reset shadow properties to avoid affecting other drawings
                mainContext.shadowColor = "transparent"; // Reset shadow color
                mainContext.shadowBlur = 0; // Reset blur
                mainContext.shadowOffsetX = 0; // Reset horizontal offset
                mainContext.shadowOffsetY = 0; // Reset vertical offset

                // Handle chat message countdown
                if (tmpObj.chat.count > 0) {
                    tmpObj.chat.count -= delta;
                    if (tmpObj.chat.count <= 0) tmpObj.chat.count = 0;
                    let tmpSize = mainContext.measureText(tmpObj.chat.message);
                    let braceWidth = 20; // Width for the braces
                    let tmpH = 47;
                    let tmpW = tmpSize.width + 17 + braceWidth; // Adjusting width for braces
                    let tmpX = tmpObj.x - xOffset;
                    let tmpY = tmpObj.y - tmpObj.scale - yOffset + 90 * 2;

                    // Background for chat box with black color
                    mainContext.fillStyle = "#000"; // Black background
                    mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                    mainContext.fill();

                    // Draw the text with a rough effect
                    for (let i = -roughness; i <= roughness; i++) {
                        for (let j = -roughness; j <= roughness; j++) {
                            mainContext.fillText(tmpObj.chat.message, tmpX + i, tmpY + j); // Fill text with blood color
                            mainContext.strokeText(tmpObj.chat.message, tmpX + i, tmpY + j); // Stroke for neon effect
                        }
                    }
                } else {
                    tmpObj.chat.count = 0;
                }
            }
        }
    }

    if (allChats.length) {
        allChats
            .filter((ch) => ch.active)
            .forEach((ch) => {
            if (!ch.alive) {
                if (ch.alpha <= 1) {
                    ch.alpha += delta / 250;
                    if (ch.alpha >= 1) {
                        ch.alpha = 1;
                        ch.alive = true;
                    }
                }
            } else {
                ch.alpha -= delta / 5000;
                if (ch.alpha <= 0) {
                    ch.alpha = 0;
                    ch.active = false;
                }
            }
            if (ch.active) {
                mainContext.font = "32px 'Fraktur', sans-serif"; // Font size and style
                let tmpSize = mainContext.measureText(ch.chat);
                let braceWidth = 20; // Width for the braces
                let tmpH = 40;
                let tmpW = tmpSize.width + 15 + braceWidth; // Adjusting width for braces
                let tmpX = ch.x - xOffset;
                let tmpY = ch.y - yOffset - 90;

                mainContext.globalAlpha = ch.alpha;

                mainContext.fillStyle = ch.owner.isTeam(player)
                    ? "#8ecc51" // Team indication color
                : "#cc5151"; // Enemy indication color
                mainContext.strokeStyle = "rgb(173, 216, 230)"; // Light blue border color
                mainContext.strokeText(ch.owner.name, tmpX, tmpY - 45);
                mainContext.fillText(ch.owner.name, tmpX, tmpY - 45);

                mainContext.lineWidth = 2; // Neon border thickness
                mainContext.fillStyle = "#ccc"; // Keep this color
                mainContext.strokeStyle = "rgb(173, 216, 230)"; // Light blue border color

                mainContext.roundRect(
                    tmpX - tmpW / 2,
                    tmpY - tmpH / 2,
                    tmpW,
                    tmpH,
                    6
                );
                mainContext.stroke();
                mainContext.fill();

                // Draw the braces
                mainContext.fillStyle = "#ffffff"; // White color for braces
                mainContext.fillText(" {", tmpX - tmpW / 2 - 5, tmpY); // Left brace
                mainContext.fillText("}", tmpX + tmpW / 2 - 5, tmpY); // Right brace

                // Draw the chat message with neon effect
                mainContext.fillStyle = "#ffffff"; // White text
                mainContext.lineWidth = 2; // Neon border thickness
                mainContext.strokeStyle = "cyan"; // Neon cyan color for border
                mainContext.strokeText(ch.chat, tmpX, tmpY); // Stroke for neon effect
                mainContext.fillText(ch.chat, tmpX, tmpY); // Fill text
                ch.y -= delta / 100;
            }
        });
    }
    mainContext.globalAlpha = 1;
    // RENDER MINIMAP:
    renderMinimap(delta);
}

// UPDATE & ANIMATE:
window.requestAnimFrame = function() {
    return null;
}
window.rAF = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
        window.setTimeout(callback, 1000/9);
    };
})();

function updateGameInfo() {
    let timer = performance.now();
    let diff = timer - fpsTimer.last;
    if (diff >= 1000) {

        fpsTimer.ltime = fpsTimer.time * (1000 / diff);

        fpsTimer.last = timer;
        fpsTimer.time = 0;
    }
    fpsTimer.time++;

    getEl("secXP").innerHTML = Math.round(priXP) + "/" + maxPriXP;
    getEl("priXP").innerHTML = Math.round(secXP) + "/" + maxSecXP;
    getEl("gameFrames").innerHTML = Math.round(fpsTimer.ltime);
    getEl("gamePing").innerHTML = window.pingTime;
    getEl("gamePackets").innerHTML = secPacket;
    getEl("instaKilling").innerHTML = instaC.wait ? "ON" : "OFF";
    player &&(getEl("playerShame").innerHTML = player.shameCount);
    getEl("gameAutoMills").innerHTML = mills.place ? "ON" : "OFF";
}

function doUpdate() {
    //rape modulus
    now = performance.now();
    delta = now - lastUpdate;
    lastUpdate = now;

    updateGameInfo();
    updateGame();
    rAF(doUpdate);
    ms.avg = Math.round((ms.min+ms.max)/2);
}

prepareMenuBackground();
doUpdate();

let changeDays = {};
window.debug = function() {
    my.waitHit = 0;
    my.autoAim = false;
    instaC.isTrue = false;
    traps.inTrap = false;
    itemSprites = [];
    objSprites = [];
    gameObjectSprites = [];
};
window.wasdMode = function() {
    useWasd = !useWasd;
    toggleUseless(useWasd);
};
window.startGrind = function() {
    if (configs.weaponGrinder) {
        for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
            checkPlace(player.getItemType(22), i);
        }
    }
};
window.resBuild = function() {
    if (gameObjects.length) {
        gameObjects.forEach((tmp) => {
            tmp.breakObj = false;
        });
        breakObjects = [];
    }
};
window.toggleBotsCircle = function() {
    player.circle = !player.circle;
};
window.toggleVisual = function() {
    config.anotherVisual = !config.anotherVisual;
    gameObjects.forEach((tmp) => {
        if (tmp.active) {
            tmp.dir = tmp.lastDir;
        }
    });
};


// main menu edits
let editMainMenu = `
<style>

  /* Styles for the main menu */
  #setupCard {
    vertical-align: top;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    margin: 5px;
    display: inline-block;
    padding: 18px;
    border-radius: 15px;
    background: linear-gradient(350deg, #966200, #00b57c);
    box-shadow: 0px 0px 13px 18px rgb(189 0 255 / 50%);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    overflow: hidden;
  }

  /* Styles for the main menu background */
  #mainMenu {
    background-image: url('data:image/png;base64,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');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Styles for guide card */
  #guideCard {
    vertical-align: top;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    margin: 5px;
    display: inline-block;
    padding: 18px;
    border-radius: 15px;
    background: linear-gradient(135deg, #300f45, #bb00bb);
    box-shadow: 0px 0px 13px 18px rgb(189 0 255 / 50%);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    overflow-y: scroll;
  }

  /* Additional styles */
  #nameInput::selection {
    background: rgba(255, 255, 255, 0.5);
  }

  #guideCard::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .menuCard {
    background: rgba(26, 25, 25, 0.9);
    text-align: center;
    box-shadow: inset 0px 0px 0px black;
  }

  .skinColorItem {
    height: 25px;
    width: 25px;
    border: 4px solid rgb(0 0 0 / 24%);
    transition: .5s;
  }


  /* Game Name */
  #gameName {
    font-family: Ancizar Sans, sans-serif;
    font-size: 120px;
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 15px #ffac30) drop-shadow(0 0 25px #ffac30) drop-shadow(0 0 40px #ffb43b);
    text-shadow: 0px 0px 0px #e67cff;
    text-align: center;
    color: #ffeed0;
    margin-top: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    pointer-events: none;
    user-select: none;
    padding: 93px;
  }
</style>
`

const gameName = document.getElementById("gameName");
if (gameName) {
    gameName.innerHTML = "TπT CLIENT";
}

$("#mainMenu").append(editMainMenu);

//GREETING CARD
        let greetings = false;

        function getGreeting() {
            const hour = new Date().getHours();
            if (hour < 12) {
                return "Good Morning!";
            } else if (hour < 18) {
                return "Good Afternoon!";
            } else {
                 return "Good Evening!";
            }
        }

        function greeting() {
            if (!greetings) {
                greetings = true;
                const frameMsg = Object.assign(document.createElement("div"), {
                    innerHTML: `${getGreeting()}`,
                    style: `
                position: fixed;
                top: -100px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 2rem;
                color: white;
                z-index: 9999;
                opacity: 3;
                transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.2);
                border: 2px solid #0000;
                border-radius: 5px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            `
        });
            document.body.appendChild(frameMsg);
                setTimeout(function() {
                    frameMsg.style.top = "7%";
                    frameMsg.style.opacity = "1";
                }, 100);
                setTimeout(function() {
                    frameMsg.style.top = "-100px";
                    frameMsg.style.opacity = "0";
                    setTimeout(function() {
                        frameMsg.remove();
                        greetings = false;
                    }, 500);
                }, 3000);
            }
        }
        greeting();











//add more code here,idk just skid some











