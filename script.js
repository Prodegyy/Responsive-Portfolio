let menu = document.querySelector('#box-icon')
let navigation = document.querySelector('.navigation')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});


sr.reveal('.personal-text',{delay:100, origin: 'top'});
sr.reveal('.personal-img',{delay:300, origin: 'top'});
sr.reveal('.icons',{delay:200, origin: 'left'});
sr.reveal('.navigation',{delay:300, origin: 'right'});
sr.reveal('#box-icon',{delay:50, origin: 'right'});
