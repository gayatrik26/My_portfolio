let title = document.querySelector('#connected');
let name1 = "STAY CONNECTED";
let index = 1;
const url = "https://drive.google.com/file/d/1WWpIK24GFAzyqHKBA6KLpIKO3ZzsgX2R/view?usp=sharing"

const typewriter = () =>{
    let new_title = name1.slice(0,index);
    title.innerHTML = new_title;

    index > name1.length ? index = 1 : index++;


    setTimeout(() => typewriter(), 200);
}
typewriter();


function ez_github(){
    window.open("https://github.com/gayatrik26/EZ-Utilities" , "_blank");
}
function ez_live(){
    window.open("https://chromewebstore.google.com/detail/ez-utilities/bjdfnnianbafojfjefkffmnabnffibgc?hl=en-GB&authuser=0","_blank");
}
function kharbar_github(){
    window.open("https://github.com/gayatrik26/KhabarNow-","_blank");
}
function movie_live(){
    window.open("https://moviehive2.netlify.app/" , "_blank");
}
function movie_github(){
    window.open("https://github.com/gayatrik26/MoiveHive-2.0" , "_blank");
}
function text_live(){
    window.open("https://textsmith.netlify.app/", "_blank");
}
function text_github(){
    window.open("https://github.com/gayatrik26/TextSmith","_blank");
}
function passgen_github(){
    window.open("https://github.com/gayatrik26/Js-Password-generator","_blank");
}
function passgen_live(){
    window.open("https://js-password-generator-five.vercel.app/ ","_blank");
}

let about_textt = document.querySelector('.textt');


function loadtext(){
    // console.log("works");
    about_textt.innerHTML = "Hello✌🏼, my name is Gayatri Kadam. I am in <br>my junior year at Delhi Technological University. <br>I am pursuing a  degree of bachelor's of technology <br>in  Engineering physics.🚀"
}

function hobbiess(){
    // console.log("workss");
    about_textt.innerHTML = "- Football Enthusiast⚽<br>- Wordsmith: Writing short quotes✍🏼 <br>- The Tidy Organizer🫢<br>- Volunteering at Animal Shelters🐶🐕"
}

function achivements(){
    // console.log("ach");
    about_textt.innerHTML = "Apr23 - Second runner🎖️ up in AAHVAAN <br>(annual sports fest of DTU) in Football⚽"
}