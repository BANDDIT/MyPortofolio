/*
let welcoming = document.createElement("div");
let container = document.querySelector("header");
welcoming.innerHTML = "Welcome to Arrick's Website";
welcoming.classList.add("welcoming");
welcoming.classList.add("scaleIn");
setTimeout(function() {
    div.classList.remove('scale-in');
}, 1000000000000);
container.appendChild(welcoming);
*/
/*
let perkenalan = document.createElement("h1");
let container = document.querySelector(".perkenalan_nama");
perkenalan.classList.add("isi_perkenalan");
perkenalan.classList.add("konten_rights");
let str = "Hi, My name is Arrick!";
for (let i = 0; i < str.length(); i++) {
    perkenalan.innerHTML += str.charAt(i);
    container.appendChild(perkenalan);
    for (let j = 0; j < 10000; j++) {};
}
*/


let perkenalan = document.getElementById('isi_perkenalan');
let str = "Hi, My name is Arrick!",
    i = 0;

function typing() {
    if (i < str.length) {
        document.getElementById('isi_perkenalan').innerHTML += str.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

let perkenalan2 = document.getElementById('promotion');
let str2 = "I'm a future software engineer. I have a high passion in today's and future technology.";
let j = 0;
//javascript itu ngejalanin semuanya pada saat yang bersamaan
function typing2() {
    if (j < str2.length) {
        perkenalan2.innerHTML += str2.charAt(j);
        j++;
        setTimeout(typing2, 50);
    }
}
setTimeout(typing2, 2000);

let early = document.getElementById('h3_bot');
let str3 = "Early Life";
let k = 0;

function typing3() {
    if (k < str3.length) {
        early.innerHTML += str3.charAt(k);
        k++;
        setTimeout(typing3, 20);
    }
}
typing3();

let intro = document.getElementById('intro');
let str4 = "I was born in Jakarta at 23 April 2003. I was the first born children in my family. I love to code since I was in highschool, I practice to learn C and Pascal by using competitive programming. In university, I join Bina Nusantara Computer Club where I used to improve my coding skills that help me to become a future software engineer.";
let l = 0;

function typing4() {
    if (l < str4.length) {
        intro.innerHTML += str4.charAt(l);
        l++;
        setTimeout(typing4, 50);
    }
}
typing4();
/*
for (let i = 0; i < str.length(); i++) {
    perkenalan.innerHTML += str.charAt(i);
}*/
/*
let perkenalan2 = document.createElement("p");
let container2 = document.querySelector("#text1");
perkenalan2.classList.add("isi_perkenalan");
perkenalan2.innerHTML = "I'm a future software engineer. I have a high passion in today's and future technology. ";

container2.appendChild(perkenalan2);

*/