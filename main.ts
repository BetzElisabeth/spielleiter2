let geschwindigkeit = 0
radio.setGroup(3)
radio.sendString("spielen")
basic.forever(function () {
    geschwindigkeit += 1
})
