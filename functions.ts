function hitPower(sprite: Sprite){
    let i = 0
    while(sprite != playerArray[i]){
        i++
    }
    return (i + 1) * 32
}
//shoot powerups
function shootPowers(xpos: Number, player: Sprite){
    for (let value of sprites.allOfKind(SpriteKind.Projectile)){
        if (value.x == xpos){
            let projectile = sprites.createProjectileFromSprite(value.image, mySprite, 0, 50)
        }
    }
} 

