


//movement speed select
function setCC() {
    let cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    while ((cc != 50) && (cc != 100) && (cc != 150)) {
        game.splash("nuh uh!")
        cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    }
  //  speed = cc
}