// side to side movement
controller.player1.moveSprite(player1, 100, 0)
controller.player2.moveSprite(player2, 100, 0)
controller.player3.moveSprite(player3, 100, 0)
controller.player4.moveSprite(player4, 100, 0)

//forward movement
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player1.vy = speed
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player2.vy = speed
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player3.vy = speed
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player4.vy = speed
})
//stop forward movement
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player1.vy = 0
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player2.vy = 0
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player3.vy = 0
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player4.vy = 0
})

//reverse movement
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player1.vy = - speed
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player2.vy = - speed
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player3.vy = - speed
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player4.vy = - speed
})
//stop reverse movement
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player1.vy = 0
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player2.vy = 0
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player3.vy = 0
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    player4.vy = 0
})