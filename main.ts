/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""

namespace animal {

    export enum type {
        //% block="chicken"
        chicken,
        //% block="crow"
        crow,
        //% block="lion"
        lion
    }

    //% block
    let updateHandler: (animal: number) => void;

    //% block
    export function generate(): void {
        
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

    }

}
