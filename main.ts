/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""

namespace animal {

    export enum type {
        //% block="Fish"
        Fish,
        //% block="Pigeon"
        Pigeon,
        //% block="Kangaroo"
        Kangaroo,
        //% block="Zebra"
        Zebra,
        //% block="Tiger"
        Tiger,
        //% block="Dog"
        Dog,
    }

    let spriteImage = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `]

    //% block
    let updateHandler: (animal: number) => void;

    //% block
    export function generate(): void {
        game.onUpdateInterval(5000, function () {
            let anim = sprites.create(spriteImage[Math.randomRange(0, spriteImage.length - 1)], SpriteKind.Player)
            anim.x = 80
            anim.y = 0
            anim.vy = 20
        })
    }
    //% block
    export function onClassifyUpdate(handler: (animal: number) => void) {
        updateHandler = handler;
    }

    //% block
    export function classify(value: number): number {
        init();
        updateHandler(value);
        return value;
   }

    function init() {
        generate();
    }

}
