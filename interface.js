document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    });

})

function handleClick(event) {
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquare();
}

function updateSquare(){

    let square = document.querySelectorAll('.square');

    square.forEach((square) => {
        let position = square.id;
        let symbol = board[position]

        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}