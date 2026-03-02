function hitPower(sprite: Sprite){
    let i = 0
    while(sprite != playerArray[i]){
        i++
    }
    return (i + 1) * 22
}
//shoot powerups
/*
function shootPowers(xpos: Number){
    for (let value of sprites.allOfKind(SpriteKind.Projectile)){
        if (value.x == xpos){
            if ((value.image != put something here ) && (value.image != )){
                
            }
        }
    }
} */