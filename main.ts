music.play(music.stringPlayable("E D E F G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
basic.showLeds(`
    . . # . .
    # # # # #
    # # # # #
    . # . # .
    . # . # .
    `)
led.unplot(4, 4)
