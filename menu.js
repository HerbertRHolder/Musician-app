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
function popMenu(element) {
    element.remove()
    const nav = document.getElementById('menu-nav')
    const menu = document.getElementById('menu-active')
    menu.style.display = "none"
    nav.innerHTML = "<ion-icon size='large' name='menu-sharp' id='menu-ion' onclick='dropMenu(this)'></ion-icon>"

}


function dropMenu(element) {
    element.remove()
    const nav = document.getElementById('menu-nav')
    const menu = document.getElementById('menu-active')
    nav.innerHTML = "<ion-icon id='cls' size='large' onclick='popMenu(this)' name='close'></ion-icon>"
    menu.style.display = 'flex';
}