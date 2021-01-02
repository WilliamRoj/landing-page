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
let items = [createList('<a id="a" href="#">Section 1</a>'), 
createList('<a id="b" href="#">Section 2</a>'), createList('<a id="c" href="#">Section 3</a>')];

appendChildren(myList, items);


//WHen clicking on link in Nav bar, will take you to specific section with smooth transition

const sectionOne = document.getElementById('a');
const sectionTwo = document.getElementById('b');
const sectionThree = document.getElementById('c');

  sectionOne.addEventListener('click', {
    handleEvent: function (event) {
        window.scrollTo({
            top: 350,
            left: 0,
            behavior: 'smooth'
        });
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3')
        section__1.classList.add('your-active-class');
        section__2.classList.remove('your-active-class');
        section__3.classList.remove('your-active-class');
    }
  });

  sectionTwo.addEventListener('click', {
    handleEvent: function (event) {
        window.scrollTo({
            top: 1050,
            left: 0,
            behavior: 'smooth'
        });
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3')
        section__2.classList.add('your-active-class');
        section__1.classList.remove('your-active-class');
        section__3.classList.remove('your-active-class');
    }
  });

  sectionThree.addEventListener('click', {
    handleEvent: function (event) {
        window.scrollTo({
            top: 1900,
            behavior: 'smooth'
        });
        const section__1 = document.getElementById('section1');
        const section__2 = document.getElementById('section2');
        const section__3 = document.getElementById('section3')
        section__3.classList.add('your-active-class');
        section__1.classList.remove('your-active-class');
        section__2.classList.remove('your-active-class');
    }
  });

// watch youtube vide Fade and scroll
// search Toggle Class on/off
