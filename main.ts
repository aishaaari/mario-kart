//movement speed select
function setCC() {
    let cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    while ((cc != 50) && (cc != 100) && (cc != 150)) {
        game.splash("nuh uh!")
        cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    }
    speed = cc
}
function selectMap() {
    let chosenMap = game.askForString("Which map? A or B", 1)
    if (chosenMap === "A") {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
}

let player4: Sprite = null
let player3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
let cpu: Sprite = null
let speed = 0
let firstplace = 0
setCC()
selectMap()
let powerArray = [
    assets.image`greenShell`,
    assets.image`redShell`,
    assets.image`blueShell`,
]

//find first place
game.onUpdate(function() {
    for(let i = 0; i < playerArray.length; i++){
        for(let i2 = 0; i2 < playerArray.length; i2++){
            if (playerArray[i].y > playerArray[i2].y){
                firstplace = i
            }else{
                i++
                i2 = 0
            }
        }
    }
})