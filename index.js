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

        block.append(listItem);

        // append the block to the list
        todoList.append(block);
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