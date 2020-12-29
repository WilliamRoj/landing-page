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
let items = [createList('<a href="#">Section 1</a>'), 
createList('<a href="#">Section 2</a>'), createList('<a href="#">Section 3</a>')];

appendChildren(myList, items);
