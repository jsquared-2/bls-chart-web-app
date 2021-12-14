// Chart Colors (22 Colors)
const chartColors = {
    morningBlue: rgb(138, 163, 153), // #1
    rhythm: rgb(125, 132, 178), // #2
    wildBlueYonder: rgb(143, 166, 203), // #3
    yellowGreenCrayola: rgb(219, 244, 167), // #4
    aeroBlue: rgb(213, 249, 222), // #5

    silverPink: rgb(197, 175, 164), // #6
    oldRose: rgb(204, 126, 133), // #7
    ruber: rgb(207, 77, 111), // #8
    pearlyPurple: rgb(163, 109, 144), // #9
    slateGray: rgb(118, 129, 142), // #10

    rust: rgb(175, 56, 0), // #11
    orangeRed: rgb(254, 98, 29), // #12
    midnightBlue: rgb(24, 32, 111), // #13
    mediumTurquoise: rgb(0, 207, 193), // #14
    carnelian: rgb(189, 30, 30), // #15

    blackOlive: rgb(61, 64, 58), // #16
    mountbattenPink: rgb(162, 126, 142), // #17
    blastOffBronze: rgb(167, 116, 100), // #18
    antiqueRuby: rgb(136, 41, 47), // #19
    bistre: rgb(46, 30, 15), // #20

    cafeAuLait: rgb(165, 117, 72), // #21
    glossyGrape: rgb(156, 137, 184) // #22
};

// Getting the Chart Element
const blsChart = new Chart(
    document.getElementById('chart'),
    config
);