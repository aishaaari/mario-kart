// side to side movement
controller.player1.moveSprite(player1, speed, speed)
controller.player2.moveSprite(player2, speed, speed)
controller.player3.moveSprite(player3, speed, speed)
controller.player4.moveSprite(player4, speed, speed)

//shoot

controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    shootPowers(32, player1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    shootPowers(64,player2)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    shootPowers(96,player3)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    shootPowers(128, player4)
})


