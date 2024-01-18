const a=document.getElementsByTagName('audio')[0];
const btnPlay=document.getElementById('play');
const btnPause=document.getElementById('pause');
const btnStop=document.getElementById('stop');
const btnMute=document.getElementById('mute');
const volumeRange=document.getElementById('volume');
const durationRange=document.getElementById('duration');
const speed=document.getElementById('rate');
const audioSource=document.getElementById("audioSource")
const cardImg= document.getElementById('cardImg');
const Sound1 =document.getElementById('Sound1')
const Sound2 =document.getElementById('Sound2')
const Sound3 =document.getElementById('Sound3')
const Sound4 =document.getElementById('Sound4')



btnPlay.addEventListener('click',function(){
    a.play();
    a.ontimeupdate=()=>{
        durationRange.value=a.currentTime
    }
    
})

btnPause.addEventListener('click',function(){
    a.pause();
})

btnStop.addEventListener('click',function(){
    a.load();
    a.pause();
})

btnMute.addEventListener('click',function(){
    a.muted=!a.muted;
    if(a.muted==true){
        btnMute.innerHTML=`
        <i class="fa-solid fa-volume-xmark"></i>
        `
    }
    else{
        btnMute.innerHTML=`
        <i class="fa-solid fa-volume-high"></i>
        `
    }
})

volumeRange.addEventListener('input',function(){
    a.volume=volumeRange.value;

})

window.addEventListener('load',function(){
    console.log(a.duration);
    durationRange.max=a.duration;
})
a.addEventListener('durationchange',function(){
    console.log(a.duration);
})

durationRange.addEventListener('input',function(){
    a.currentTime=durationRange.value;

   
})
durationRange.addEventListener('input', ()=>{
    a.onseeking= ()=>{
        onSeeking()
    }
})

speed.addEventListener('click',function(){
    a.playbackRate=speed.value;
})
console.dir(a);

const onSeeking= ()=>{
    durationRange.value= a.currentTime
    
}
const changeAudioAndImg=(audioSrc,imgSrc)=>{
        audioSource.src=audioSrc
        cardImg=imgSrc
}

Sound1.addEventListener('click', ()=>{
    audioSource.src='./resources/1.mp3'
    cardImg.src='./img/1.jpg'
    audioSource.parentElement.load();

})
Sound2.addEventListener('click', ()=>{
   
    audioSource.src='./resources/2.mp3'
    cardImg.src='./img/2.jpg'
    audioSource.parentElement.load();

})
Sound3.addEventListener('click', ()=>{
    audioSource.src='./resources/3.mp3'
    cardImg.src='./img/3.jpg'
    audioSource.parentElement.load();
})
Sound4.addEventListener('click', ()=>{
    audioSource.src='./resources/4.mp3'
    cardImg.src='./img/4.jpg'
    audioSource.parentElement.load();
    

})