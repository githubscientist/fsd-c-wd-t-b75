let favourites = ['Biryani', 'Coffee', 'Chicken Fry', 'Grill Chicken', 'Chilli Chicken'];

let heading = document.createElement('h1');
heading.textContent = 'My Favourites:';

let list = document.createElement('ul');

for (let i = 0; i < favourites.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = favourites[i];
    list.append(listItem);
}

document.body.append(heading, list);