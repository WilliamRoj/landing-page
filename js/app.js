// Creating Elements for Nav bar

function createList (text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}

function appendChildren (parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

const myList = document.getElementById('navbar__list');
let items = [createList('Section 1'), createList('Section 2'), createList('Section 3')];

appendChildren(myList, items);