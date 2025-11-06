function characterBoundCheck () {
    if (currentLocation.x > 4) {
        currentLocation.x = 4;
    }
    if (currentLocation.x < 0) {
        currentLocation.x = 0;
    }
}

function isCharacterLed(x: number, y: number) {
    if (x == currentLocation.x && y == currentLocation.y) {
        return true;
    }

    return false;
}

function collision() {
    basic.clearScreen();
    basic.showNumber(points);
    done = true;
}

input.onButtonPressed(Button.A, function () {
    if (!done) {
        moveCharacter(Direction.Left)
    }
})
input.onButtonPressed(Button.B, function () {
    if (!done) {
        moveCharacter(Direction.Right)
    }
})
let strip = null
function moveCharacter (direction: Direction) {
    if (direction == Direction.Right) {
        led.unplot(currentLocation.x, currentLocation.y)
        currentLocation.x += 1;
characterBoundCheck();
        led.plot(currentLocation.x, currentLocation.y)
    }
    if (direction == Direction.Left) {
        led.unplot(currentLocation.x, currentLocation.y)
        currentLocation.x -= 1;
characterBoundCheck();
        led.plot(currentLocation.x, currentLocation.y)
    }
}
let direction = {
    LEFT: "left",
    RIGHT: "right"
}
let points = 0
let done = false
const spawnWall = (x: number) => {
    let y = 0
    let bricks: number[] = [0, 1, 2, 3, 4]

    bricks.removeAt(x)

    bricks.forEach(brick => {
        led.plot(brick, y);
    })
    while (y <= 4) {
        if (!done) {
            basic.pause(speed)
            bricks.forEach(brick => {
                if (!isCharacterLed(brick, y)) {
                    led.unplot(brick, y);
                } else {
                    collision()
                }
            })
            
            y += 1
            bricks.forEach(brick => {
                led.plot(brick, y);
            })
        }
    }
    points += 1
}
let speed = 500;
let speedLevels = [1000, 850, 700, 550, 500, 450, 430, 400, 350, 300, 250]
let wallNumber = 0;
let once = true;
let currentLocation = { x: 2, y: 4 };
while (once) {
    led.plot(currentLocation.x, currentLocation.y)
    once = false
}


basic.forever(function () {
    if (!done) {
        if (wallNumber != 10 && wallNumber % 2 == 0) {
            speed = speedLevels[wallNumber];
        }
        let i = Math.floor(Math.random() * (5));
        spawnWall(i)
        wallNumber += 1
    }
})