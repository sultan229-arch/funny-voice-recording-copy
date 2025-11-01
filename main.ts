input.onLogoEvent(TouchButtonEvent.Touched, function () {
    record.setSampleRate(10000, record.AudioSampleRateScope.Recording)
    basic.showIcon(IconNames.SmallSquare)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
    record.setSampleRate(20000, record.AudioSampleRateScope.Playback)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})

