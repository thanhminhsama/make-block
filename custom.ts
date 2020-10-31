
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#f7ce6d icon="\uf07c" // thay đổi màu và icon của file block mình tạo

namespace myBlock {

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="Set Frequency|pin %pin| %Frequency Hz"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    export function setFrequency(pin: AnalogPin ,Frequency: number ): void {
        Frequency = 1000000/Frequency
        pins.analogSetPeriod(pin, Frequency)
    }

    //% block="Set Frequency|pin %pin| PWM %PWM "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //% PWM.min=0 PWM.max=100
    export function setPWM(pin: AnalogPin ,PWM: number ): void {
        pins.map(PWM, 0, 100, 0, 1023)
        pins.analogWritePin(pin, PWM)

    }
}
