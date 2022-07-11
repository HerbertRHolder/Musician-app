const musicContainer = document.querySelector('#music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')



const songs = ['Chasin' + ' ' + 'Daisys', 'Drifter', 'Sofa' + ' ' + 'Stories']

// Keep track of songs 
let songIndex = 2
let songArry = 2

// initially load song info DOM
loadSong(songs[songIndex]);

function loadSong(song) {
    // title.innerText = song;
    audio.src = `music/${song}.mp3`

    // cover.src = `images/${song}.png`
}


function playSong(element) {
    audio.play();
//    element.remove();
   const parent = document.getElementById('play-parent')
   const p = document.getElementById('prnt')
  
    
        parent.innerHTML = " <div class='play-container' id='pause-btn'  onclick='pauseSong(this)'><ion-icon class='pause-icon' name='pause-sharp'></ion-icon> </div></div>"
        p.innerHTML = " <div class='play-container' id='pause-btn'  onclick='pauseSong(this)'><ion-icon class='pause-icon' name='pause-sharp'></ion-icon> </div></div>"
        
  


//    audio.play();
   
}

function pauseSong(element) {

    // const pause = document.getElementById('pause-btn')
    // console.log("pause:" + pause)

    // pause.remove();
    const parent = document.getElementById('play-parent')
    const p = document.getElementById('prnt')
    parent.innerHTML = " <div class='play-container' id='play-btn'  onclick='playSong(this)'><ion-icon  class='play-icon' name='play-sharp'></ion-icon> </div></div>"
    p.innerHTML = " <div class='play-container' id='play-btn'  onclick='playSong(this)'><ion-icon  class='play-icon' name='play-sharp'></ion-icon> </div></div>"

   
    audio.pause()
  
}

function prevSong() {
    songIndex--;

    if(songIndex < 0)
    {
        songIndex = songs.length - 1;
    }
    
    loadSong(songs[songIndex])

    playSong()
}
function nextSong() {
    songIndex++;

    if(songIndex > songArry)
    {
        songIndex = 0;
    }
    
    loadSong(songs[songIndex])

    playSong()
}
function closeMenu(element) {
    console.log("close" + element);
    const close = document.getElementById('close-nav');
    const menuActive = document.getElementById('menu-active');
    const nav = document.getElementById('menu-nav');
    element.remove();
    menuActive.style.display = 'none';
    nav.innerHTML = " <ion-icon size='large' name='menu-sharp' id='menu-ion' onclick='dropDown(this)'></ion-icon>"
    console.log("nav :" +nav)
    const main = document.getElementById('main');
    const player = document.getElementById('music-container-phone');
    main.classList.remove('overlay')
    player.classList.remove('overlay')

}

function removeOverlay(element) {

    element.classList.remove("overlay");
    const player = document.getElementById('music-container-phone');
    const main = document.getElementById('main');
   player.classList.remove("overlay");
   main.classList.remove("overlay");
    const nav = document.getElementById('menu-nav');
    const close = document.getElementById('close-nav');
    const menuActive = document.getElementById('menu-active');
    close.remove();
    nav.innerHTML = "<ion-icon size='large' name='menu-sharp' id='menu-ion' onclick='dropDown(this)'></ion-icon>"
    menuActive.style.display = 'none';


  
}


function dropDown(element) {
    console.log("dropdown" + element)
    const main = document.getElementById('main');
    const player = document.getElementById('music-container-phone');
    main.classList.add('overlay')
    player.classList.add('overlay')

    element.remove();
    const nav = document.getElementById('menu-nav');
    const menuActive = document.getElementById('menu-active');
    menuActive.style.display = 'flex'
    nav.innerHTML = "<ion-icon id='close-nav' size='large' onclick='closeMenu(this)' name='close-sharp'></ion-icon>"
}

