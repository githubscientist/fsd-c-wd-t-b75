let heading = document.createElement('h1');
heading.textContent = 'My Favourites:';

let list = document.createElement('ul');

let listItem1 = document.createElement('li');
listItem1.textContent = 'Biryani';

let listItem2 = document.createElement('li');
listItem2.textContent = 'Coffee';

let listItem3 = document.createElement('li');
listItem3.textContent = 'Chicken Fry';

// list.appendChild(listItem1);
// list.appendChild(listItem2);
// list.appendChild(listItem3);

list.append(listItem1, listItem2, listItem3);

document.body.append(heading, list);