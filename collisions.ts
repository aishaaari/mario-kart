let itemBlock = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 3 3 3 3 3 3 3 3 9 9 9 9 9 9 1
    1 3 3 3 3 1 1 1 1 1 1 1 8 9 9 1
    1 3 3 3 1 1 1 8 8 8 8 1 8 9 9 1
    1 3 3 1 1 8 8 3 9 9 9 1 1 8 9 1
    1 3 3 1 8 3 3 9 9 9 9 9 1 8 9 1
    1 3 3 1 8 3 9 9 9 9 9 1 1 8 9 1
    1 3 3 8 3 9 9 1 1 1 1 1 8 9 9 1
    1 3 3 3 9 9 9 1 1 1 8 8 9 9 9 1
    1 3 3 9 9 9 1 1 8 8 9 9 9 9 9 1
    1 9 9 9 9 9 1 1 8 9 9 9 9 9 9 1
    1 9 9 9 9 9 9 1 8 9 9 9 9 9 9 1
    1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
    1 9 9 9 9 9 9 1 8 9 9 9 9 9 9 1
    1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, SpriteKind.Food)
tiles.placeOnRandomTile(itemBlock, assets.tile`myTile2`)

let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. a . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) { // hit blue strips
    controller.moveSprite(mySprite, 200, 200)
    game.onUpdateInterval(500, function () { // every 500 ms check if it is going faster, if it is stop it
        if (mySprite.vy === 200) {
            controller.moveSprite(mySprite, 100, 100)
        }
    })
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) { // hit blue strips
    sprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finishline1`, function (sprite, location) { // hit finishline1
    game.splash
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finishline2`, function (sprite, location) { // hit finishline2

})

//spawn powerup on on overlap 
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    let power = sprites.create(powerArray[randint(0, powerArray.length)], SpriteKind.Player)
    if (sprite == player1) {

    } else if (sprite == player2) {

    } else if (sprite == player3) {

    } else if (sprite == player4) {

    } else {

    }
})