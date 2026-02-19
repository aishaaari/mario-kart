


//movement speed select
function setCC() {
    let cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    while ((cc != 50) && (cc != 100) && (cc != 150)) {
        game.splash("nuh uh!")
        cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    }
   let speed = cc
}

let player4: Sprite = null
let player3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
let cpu = null
let speed = 0