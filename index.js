let title = document.querySelector('#connected');
let name1 = "STAY CONNECTED";
let index = 1;

const typewriter = () =>{
    let new_title = name1.slice(0,index);
    title.innerHTML = new_title;

    index > name1.length ? index = 1 : index++;


    setTimeout(() => typewriter(), 200);
}
typewriter();


function docket_github(){
    window.open("https://github.com/gayatrik26/Docket" , "_blank");
}
function docket_live(){
    window.open("https://dokect.netlify.app/","_blank");
}
function kharbar_github(){
    window.open("https://github.com/gayatrik26/News-Website","_blank");
}
function figma_live(){
    window.open("https://www.figma.com/file/Sca5BvXbFmNQBYcopGZoKP/app-ui?type=design&node-id=0-1&mode=design&t=LeKktWRFipk26M4r-0" , "_blank");
}
function amazon_live(){
    window.open("https://amazon-clone-homepage.netlify.app/", "_blank");
}
function amazon_github(){
    window.open("https://github.com/gayatrik26/amazon-clone/tree/main","_blank");
}

let about_textt = document.querySelector('.textt');


function loadtext(){
    console.log("works");
    about_textt.innerHTML = "Hello✌🏼, my name is Gayatri Kadam. I am in <br>my junior year at Delhi Technological University. <br>I am pursuing a  degree of bachelor's of technology <br>in  Engineering physics.🚀"
}

function hobbiess(){
    console.log("workss");
    about_textt.innerHTML = "- Football Enthusiast⚽<br>- Wordsmith: Writing short quotes✍🏼 <br>- The Tidy Organizer🫢<br>- Volunteering at Animal Shelters🐶🐕"
}

function achivements(){
    console.log("ach");
    about_textt.innerHTML = "Apr23 - Second runner🎖️ up in AAHVAAN <br>(annual sports fest of DTU) in Football⚽"
}
