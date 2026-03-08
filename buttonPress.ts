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


