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
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) { // hit blue strips
    sprite.vy = -150
    pause(1000)
    sprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) { // hit blue strips
    sprite.vy = 150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finishline1`, function (sprite, location) { // hit finishline1

})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finishline2`, function (sprite, location) { // hit finishline2

})
