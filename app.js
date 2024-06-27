export function isLove(petalsFlower1, petalsFlower2) {
    return (petalsFlower1 % 2 === 0 && petalsFlower2 % 2 !== 0) || 
           (petalsFlower1 % 2 !== 0 && petalsFlower2 % 2 === 0);
}
