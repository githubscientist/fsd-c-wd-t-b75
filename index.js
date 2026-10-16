function render(todos) {
    // populate the list
    // get the reference of the list
    let todoList = document.getElementById('todoList');

    todos.forEach((todo) => {
        // create a wrapper block
        const block = document.createElement('span');

        block.setAttribute('class', 'block');

        // create a checkbox
        const checkBox = document.createElement('input');

        checkBox.setAttribute('type', 'checkbox');

        block.append(checkBox);

        // create a list item
        const listItem = document.createElement('li');

        // set the content of the list
        listItem.textContent = todo.title;

        // add a delete icon or font
        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = 'X';
        deleteIcon.style.fontWeight = 'bold';

        block.append(listItem);
        block.append(deleteIcon);

        // append the block to the list
        todoList.append(block);

        // set an event listener for deleteIcon
        deleteIcon.addEventListener('click', () => {
            // get a confirmation from the user
            let confirmation = confirm('Are you sure, you want to delete this?');
            if (confirmation) {
                // delete logic goes here
                // perform api call to delete the todo item
                fetch(`https://6ad21f9966cd28aed82da8b7.mockapi.io/todos/${todo.id}`, {
                    method: 'delete'
                })
                    .then(() => {
                        alert('todo deleted');
                        console.log('todo deleted');

                        window.location.href = '/'
                    })
            }
        })
    })

    console.log(todos);
}

async function loadTodos() {
    // make the api call
    let response = await fetch('https://6ad21f9966cd28aed82da8b7.mockapi.io/todos');

    // parse the response -> json
    let todos = await response.json();

    // render todos
    render(todos);
}

loadTodos();