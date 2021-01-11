// Creating Elements for Nav bar

//create <li>
function createList (text) {
    const li = document.createElement('li');
    li.className = 'menu__link';
    li.innerHTML = text;
    
    return li;
}

//create 3 <li>
function appendChildren (parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

const myList = document.getElementById('navbar__list');

//add text to lis and also a tag to make links
let items = [
    createList('<a id="a" class="navbar__link" href="#section1">Section 1</a>'), 
    createList('<a id="b" class="navbar__link" href="#section2">Section 2</a>'), 
    createList('<a id="c" class="navbar__link" href="#section3">Section 3</a>'), 
    createList('<a id="d" class="navbar__link" href="#section4">Section 4</a>')
];

appendChildren(myList, items);


//WHen clicking on link in Nav bar links, will take you to specific section with smooth transition

const makeNavLinksSmooth = () => {
    const navLinks = document.querySelectorAll('.navbar__link');
    for(let n in navLinks){
        if(navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener('click', e =>{
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                .scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }
}


//  Call for MakeNavLinskSmooth
makeNavLinksSmooth();


// // when scrolling to specific section, class change to have know which section you are in

window.addEventListener('scroll', function(event){
    let scroll = this.scrollY;
    if(scroll > 1050 && scroll < 1700) {
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3');
        const section__4 = document.getElementById('section4');
        const a = document.getElementById('a');
        const b = document.getElementById('b');
        const c = document.getElementById('c');
        const d = document.getElementById('d');

        section__2.classList.add('your-active-class');
        section__1.classList.remove('your-active-class');
        section__3.classList.remove('your-active-class');
        section__4.classList.remove('your-active-class');
        b.classList.add('active');
        a.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
    } 
    
    else if(scroll > 1700 && scroll < 2400) {
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3');
        const section__4 = document.getElementById('section4');
        const a = document.getElementById('a');
        const b = document.getElementById('b');
        const c = document.getElementById('c');
        const d = document.getElementById('d');
        section__3.classList.add('your-active-class');
        section__1.classList.remove('your-active-class');
        section__2.classList.remove('your-active-class');
        section__4.classList.remove('your-active-class');
        c.classList.add('active');
        a.classList.remove('active');
        b.classList.remove('active');
        d.classList.remove('active');
    }
    else if(scroll > 2400) {
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3');
        const section__4 = document.getElementById('section4');
        const a = document.getElementById('a');
        const b = document.getElementById('b');
        const c = document.getElementById('c');
        const d = document.getElementById('d');
        section__4.classList.add('your-active-class');
        section__1.classList.remove('your-active-class');
        section__2.classList.remove('your-active-class');
        section__3.classList.remove('your-active-class');
        d.classList.add('active');
        a.classList.remove('active');
        c.classList.remove('active');
        b.classList.remove('active');
    }
    else {
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3');
        const section__4 = document.getElementById('section4');
        const a = document.getElementById('a');
        const b = document.getElementById('b');
        const c = document.getElementById('c');
        const d = document.getElementById('d');
        section__1.classList.add('your-active-class');
        section__2.classList.remove('your-active-class');
        section__3.classList.remove('your-active-class');
        section__4.classList.remove('your-active-class');
        a.classList.add('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
    }
});

