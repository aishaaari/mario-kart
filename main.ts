tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
let myTile3 = tilemap`myTile3`
let list = [1, 2, 3]
let itemBlock = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
let speed = mySprite.vy


scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) { // hit blue strips
     sprite.vy = -150
     pause(2500)
    sprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) { // hit blue strips

})
/*
forever(function() { // item animation
    animation.runImageAnimation(mySprite, [img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
        1 9 9 9 9 9 1 1 1 1 1 9 9 9 9 1
        1 9 9 9 9 1 1 9 9 9 1 1 9 9 9 1
        1 9 9 9 1 1 9 9 9 9 9 1 9 9 9 1
        1 9 9 9 1 9 9 9 9 9 1 1 9 9 9 1
        1 9 9 9 9 9 9 9 9 9 1 9 9 9 9 1
        1 9 9 9 9 9 9 9 1 1 1 9 9 9 9 1
        1 9 9 9 9 9 9 1 1 9 9 9 9 9 9 1
        1 9 9 9 9 9 9 1 9 9 9 9 9 9 9 1
        1 9 9 9 9 9 9 1 9 9 9 9 9 9 9 1
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
        1 9 9 9 9 9 1 1 1 9 9 9 9 9 9 1
        1 9 9 9 9 9 1 1 1 9 9 9 9 9 9 1
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `,
    ], 500, true)
})*/
controller.moveSprite(mySprite, 100, 100)
//movement speed select
function setCC() {
    let cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    while ((cc != 50) && (cc != 100) && (cc != 150)) {
        game.splash("nuh uh!")
        cc = game.askForNumber("50 cc, 100, cc, or 150 cc", 3)
    }
    speed = cc
}