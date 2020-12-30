// Creating Elements for Nav bar

//create <li>
function createList (text) {
    const li = document.createElement('li');
    li.className = 'anchor';
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
    }
  });

  sectionTwo.addEventListener('click', {
    handleEvent: function (event) {
        const sectionDos = document.querySelector('#section2');
        sectionDos.classList.toggle('sectionDos');
        window.scrollTo({
            top: 1200,
            left: 0,
            behavior: 'smooth'
        });
    }
  });

  sectionThree.addEventListener('click', {
    handleEvent: function (event) {
        window.scrollTo({
            top: 1900,
            left: 0,
            behavior: 'smooth'
        });
    }
  });