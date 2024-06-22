radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueenPlusV2.setIndexColor(maqueenPlusV2.ledRange(1, 4), maqueenPlusV2.NeoPixelColors.Blue)
    } else if (receivedNumber == 2) {
        maqueenPlusV2.ledBlank()
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        if (angle > 0) {
            angle += -1
            pins.servoWritePin(AnalogPin.P2, angle)
        }
    } else if (receivedString == "Close") {
        if (angle < 180) {
            angle += 1
            pins.servoWritePin(AnalogPin.P2, angle)
        }
    } else if (receivedString == "LEDL") {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
    } else if (receivedString == "LEDR") {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
    } else if (receivedString == "F") {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    } else if (receivedString == "B") {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    } else if (receivedString == "L") {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 20)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    } else if (receivedString == "R") {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 20)
    } else {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    }
})
let angle = 0
maqueenPlusV2.I2CInit()
radio.setGroup(1)
angle = 90
pins.servoWritePin(AnalogPin.P2, 90)
