let inputBox = document.querySelector('#inputBox');

inputBox.addEventListener('keydown', keyboardFun);

function keyboardFun(event) {
    if (event.ctrlKey && event.key == 's') {
        console.log('file saved!');
    }
}