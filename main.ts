function characterBoundCheck () {
    if (currentLocation.x > 4) {
        currentLocation.x = 4;
    }
    if (currentLocation.x < 0) {
        currentLocation.x = 0;
    }
}
input.onButtonPressed(Button.A, function () {
    moveCharacter("left")
})
function moveCharacter (direction: string) {
    if (direction == "right") {
        led.unplot(currentLocation.x, currentLocation.y)
        currentLocation.x += 1
characterBoundCheck()
        led.plot(currentLocation.x, currentLocation.y)
    }
    if (direction == "left") {
        led.unplot(currentLocation.x, currentLocation.y)
        currentLocation.x -= 1
characterBoundCheck()
        led.plot(currentLocation.x, currentLocation.y)
    }
}
input.onButtonPressed(Button.B, function () {
    moveCharacter("right")
})
let strip = null
let direction = {
    LEFT: "left",
    RIGHT: "right"
}
let currentLocation = {x: 2, y: 4}
led.plot(currentLocation.x, currentLocation.y)

basic.forever(function () {
	
})
