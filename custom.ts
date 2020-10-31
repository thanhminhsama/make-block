
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
        let period = 0
        period = 1000000/Frequency
        pins.analogSetPeriod(pin, period)
    }

    //% block="Set PWM|Pin %pin| PWM %PWM "
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //% PWM.min=0 PWM.max=1023
    export function setPWM(pin: AnalogPin ,PWM: number ): void {
        
        pins.analogWritePin(pin, PWM)

    }
    //% block="Khởi tạo"

    export function ConfigurationCar(): void {

        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogSetPeriod(AnalogPin.P0, 1000)
        pins.analogSetPeriod(AnalogPin.P1, 1000)

    }
}
