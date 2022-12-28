// Tetris movement
// function goLeft() {
//     for(let i = 0; i < positions.length; i++){
//         if(positions[i].x == 0){
//             positions[i].x = 9
//         }else{
//             positions[i].x = positions[i].x - 1
//         }
//     }
// }

let area = document.getElementById('area')
area.style.width = `${areaWidth * scale}px`;
area.style.height = `${areaHeight * scale}px`;
let direction = 'right'

let food;
generateFood();

let positions = [
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 3, y: 1},
]
 
document.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'ArrowDown':
            changeDirection('down')
            break
        case 'ArrowUp':
            changeDirection('up')
            break
        case 'ArrowLeft':
            changeDirection('left')
            break
        case 'ArrowRight':
            changeDirection('right')
            break
    }
})

function changeDirection(value){
    if(direction === 'up' || direction === 'down'){
        if(value === 'right' || value === 'left'){
            direction = value
        }
    }else if(direction === 'right' || direction === 'left'){
        if(value === 'up' || value === 'down'){
            direction = value
        }
    }  
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * areaWidth),
        y: Math.floor(Math.random() * areaHeight),
    }
};

function goLeft(){
    const newPositions = []
    newPositions.push({
        y: positions[0].y,
        x: positions[0].x === 0 ? areaWidth - 1 : positions[0].x - 1,
    })

    for(let i = 0; i < positions.length - 1; i++){
        newPositions.push(positions[i])
    }

    positions = newPositions
}

function goRight(){
    const newPositions = []
    newPositions.push({
        y: positions[0].y,
        x: positions[0].x === areaWidth - 1 ? 0 : positions[0].x + 1,
    })

    for(let i = 0; i < positions.length - 1; i++){
        newPositions.push(positions[i])
    }

    positions = newPositions
}


function goUp(){
    const newPositions = []
    newPositions.push({
        x: positions[0].x,
        y: positions[0].y === 0 ? areaHeight - 1 : positions[0].y - 1,
    })

    for(let i = 0; i < positions.length - 1; i++){
        newPositions.push(positions[i])
    }

    positions = newPositions
}

function goDown(){
    const newPositions = []
    newPositions.push({
        x: positions[0].x,
        y: positions[0].y === areaHeight - 1 ? 0 : positions[0].y + 1,
    })

    for(let i = 0; i < positions.length - 1; i++){
        newPositions.push(positions[i])
    }

    positions = newPositions
}


setInterval(() => {
    switch(direction){
        case 'right':
            goRight();
            break;
        case 'left':
            goLeft();
            break; 
        case 'down':
            goDown();
            break;
        case 'up':
            goUp();
            break;
    }
    let snakeBody = positions.map((location) => `<div class="body" style="top: ${location.y * scale}px; left: ${location.x * scale}px; width: ${scale}px; height: ${scale}px;"></div>`).join('')
    
    let foodHtml = `<div class="food" style="width: ${scale}px; height: ${scale}px; top: ${food.y * scale}px; left: ${food.x * scale}px;"></div>`
    area.innerHTML = foodHtml + snakeBody

    let head = positions[0]
    if(food.x === head.x && food.y === head.y){
        positions.push({})
        generateFood()
    }
}, speed)

