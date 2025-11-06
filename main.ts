input.onButtonPressed(Button.A, function () {
    strip.show()
    strip.showRainbow(0, 0)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
	
})
