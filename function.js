const countingNumber = document.getElementById("myNumber")
const myBtn = document.querySelector(".myBtn")
const Titleclick = document.querySelector(".title")
const myVideo = document.getElementById("myVideo")
const myWrapper = document.querySelector(".wrapper-box")

let titleCounting = 5;
let counting = 0;

// Titleclick.textContent= `Click the button ${titleCounting} times`;
Titleclick.textContent= `Hey there, please click the button ${titleCounting} times`;
countingNumber.textContent = `${(counting > 5)?5:counting}`
myBtn.addEventListener("click",()=>{
    //title counting
    titleCounting--;
    titleCounting = (titleCounting < 0)? 0:titleCounting;
    Titleclick.textContent= `Hey there, please click the button ${titleCounting} times`;

    //counting
    counting++;
    countingNumber.textContent = `${(counting > 5)?5:counting}`
    
    //sound affect
    playsound('btnClick.wav')

    if (counting === 5){
        rickRoll();
        myWrapper.classList.toggle("active")
        console.log("active wrapper")
    }
});

function rickRoll(){
    console.log("actived")
    myVideo.classList.toggle("active")
    setTimeout(() =>{
        myVideo.play();
    },2000)
    
}

function playsound(url){
    const sound_audio = new Audio(url);
    sound_audio.play();
}