let positions = [
    {
        x: 1,
        y: 1,
    },

    {
        x: 2,
        y: 1,
    },

    {
        x: 3,
        y: 1,
    }
]

function goLeft() {
    for(let i = 0; i < positions.length; i++){
        if(positions[i].x == 0){
            positions[i].x = 9
        }else{
            positions[i].x = positions[i].x - 1
        }
    }
}

setInterval(() => {
    goLeft()

    let area = document.getElementsByClassName('area')[0]
    area.innerHTML = positions
    .map((location) => `<div class="snake" style="top: ${location.y * 40}px; left: ${location.x * 40}px;"></div>`)
    .join('')
}, 500)

