function hitPower(sprite: Sprite){
    let i = 0
    while(sprite != playerArray[i]){
        i++
    }
    return (i + 1) * 22
}