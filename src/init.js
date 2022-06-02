import logo from './logo.png'

const contentElem = document.createElement('div');
contentElem.id = 'content';
document.body.appendChild(contentElem);
const content = document.querySelector('#content');

export function addSelectedClass(event) {
    const currentSelection = document.querySelectorAll('.selected');
    if (currentSelection.length > 0) {
        currentSelection.forEach(elem => {
            elem.classList.remove('selected');
        });
    }

    event.target.classList.add('selected');
}

export function initHeader() {
const header = document.createElement('header');
    const nav = document.createElement('nav');
    const image = document.createElement('img');
    image.id = 'logo';
    image.src = logo;
    image.addEventListener('click', initHome);
    image.addEventListener('click', addSelectedClass);

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = 'Menu'
    menu.addEventListener('click', initMenu);
    menu.addEventListener('click', addSelectedClass);

    const about = document.createElement('div');
    about.id = 'about';
    about.innerHTML = 'About'
    about.addEventListener('click', initAbout);
    about.addEventListener('click', addSelectedClass);

    const gifts = document.createElement('div');
    gifts.id = 'gifts';
    gifts.innerHTML = 'Gifts'
    gifts.addEventListener('click', initGifts);
    gifts.addEventListener('click', addSelectedClass);

    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.innerHTML = 'Contact'
    contact.addEventListener('click', initContact);
    contact.addEventListener('click', addSelectedClass);

    const reservations = document.createElement('div');
    reservations.id = 'reservations';
    reservations.innerHTML = 'Reservations'
    reservations.addEventListener('click', initReservations);
    reservations.addEventListener('click', addSelectedClass);

    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(gifts);
    nav.appendChild(contact);
    nav.appendChild(reservations);
    header.appendChild(image);
    header.appendChild(nav);

    content.appendChild(header);
}

function newMain() {
    const mains = document.querySelectorAll('main');

    if (mains.length > 0) {
        content.removeChild(mains[0]);
    }

    return document.createElement('main');
}

export function initHome() {
    const main = newMain();
    const h2 = document.createElement('h2');
    h2.innerText = 'Welcome';

    const p = document.createElement('p');
    p.innerText = 'We\'ve been fattening kids for generations. You know us, you love us, you hate us, you need us.';

    main.appendChild(h2);
    main.appendChild(p);
    content.appendChild(main);
}

export function initAbout() {
    const main = newMain();

    const p = document.createElement('p');
    p.innerText = 'Come on, we\'re freaking mcdonalds';
    
    main.appendChild(p);
    content.appendChild(main);
}

export function initGifts() {
    const main = newMain();

    const p = document.createElement('p');
    p.innerText = 'Money pwease';
    
    main.appendChild(p);
    content.appendChild(main);
}

export function initMenu() {
    const main = newMain();

    const p = document.createElement('p');
    p.innerText = 'Royale with cheese';
    
    main.appendChild(p);
    content.appendChild(main);
}

export function initContact() {
    const main = newMain();

    const p = document.createElement('p');
    p.innerText = 'No contact';
    
    main.appendChild(p);
    content.appendChild(main);
}

export function initReservations() {
    const main = newMain();

    const p = document.createElement('p');
    p.innerText = 'Reserve a table';
    
    main.appendChild(p);
    content.appendChild(main);
}