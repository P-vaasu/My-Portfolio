// \\\\\\\\\\\\\\\\\\\\  header toggle   ///////////////////////

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('movile-nav-active');
    this.classList.toggle('bx-x')
});



// ================ TEXT CHANGE ===========================



let typed = new Typed('#auto-input', {
    strings: ['Front-End Developer!', 'Web Designer!', 'Web Developer!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})

// ============== ACTIVE NAVIGATION ==============================


let menuLi = document.querySelectorAll('header nav ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY - 10 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);