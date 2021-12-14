// Chart Colors - Full Opacity (22 Colors)
const chartColorsFull = {
    morningBlue: 'rgb(138, 163, 153)', // #1
    rhythm: 'rgb(125, 132, 178)', // #2
    wildBlueYonder: 'rgb(143, 166, 203)', // #3
    yellowGreenCrayola: 'rgb(219, 244, 167)', // #4
    aeroBlue: 'rgb(213, 249, 222)', // #5

    silverPink: 'rgb(197, 175, 164)', // #6
    oldRose: 'rgb(204, 126, 133)', // #7
    ruber: 'rgb(207, 77, 111)', // #8
    pearlyPurple: 'rgb(163, 109, 144)', // #9
    slateGray: 'rgb(118, 129, 142)', // #10

    rust: 'rgb(175, 56, 0)', // #11
    orangeRed: 'rgb(254, 98, 29)', // #12
    midnightBlue: 'rgb(24, 32, 111)', // #13
    mediumTurquoise: 'rgb(0, 207, 193)', // #14
    carnelian: 'rgb(189, 30, 30)', // #15

    blackOlive: 'rgb(61, 64, 58)', // #16
    mountbattenPink: 'rgb(162, 126, 142)', // #17
    blastOffBronze: 'rgb(167, 116, 100)', // #18
    antiqueRuby: 'rgb(136, 41, 47)', // #19
    bistre: 'rgb(46, 30, 15)', // #20

    cafeAuLait: 'rgb(165, 117, 72)', // #21
    glossyGrape: 'rgb(156, 137, 184)' // #22
};

// Chart Colors - Half Opacity (22 Colors)
const chartColorsHalf = {
    morningBlue: 'rgba(138, 163, 153, 0.5)', // #1
    rhythm: 'rgba(125, 132, 178, 0.5)', // #2
    wildBlueYonder: 'rgba(143, 166, 203, 0.5)', // #3
    yellowGreenCrayola: 'rgba(219, 244, 167, 0.5)', // #4
    aeroBlue: 'rgba(213, 249, 222, 0.5)', // #5

    silverPink: 'rgba(197, 175, 164, 0.5)', // #6
    oldRose: 'rgba(204, 126, 133, 0.5)', // #7
    ruber: 'rgba(207, 77, 111, 0.5)', // #8
    pearlyPurple: 'rgba(163, 109, 144, 0.5)', // #9
    slateGray: 'rgba(118, 129, 142, 0.5)', // #10

    rust: 'rgba(175, 56, 0, 0.5)', // #11
    orangeRed: 'rgba(254, 98, 29, 0.5)', // #12
    midnightBlue: 'rgba(24, 32, 111, 0.5)', // #13
    mediumTurquoise: 'rgba(0, 207, 193, 0.5)', // #14
    carnelian: 'rgba(189, 30, 30, 0.5)', // #15

    blackOlive: 'rgba(61, 64, 58, 0.5)', // #16
    mountbattenPink: 'rgba(162, 126, 142, 0.5)', // #17
    blastOffBronze: 'rgba(167, 116, 100, 0.5)', // #18
    antiqueRuby: 'rgba(136, 41, 47, 0.5)', // #19
    bistre: 'rgba(46, 30, 15, 0.5)', // #20

    cafeAuLait: 'rgba(165, 117, 72, 0.5)', // #21
    glossyGrape: 'rgba(156, 137, 184, 0.5)' // #22
};

// Creating Chart Labels
const labels = [
    "Date 1", 
    "Date 2", 
    "Date 3", 
    "Date 4", 
    "Date 5"
];

// Getting Chart Data
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Supersector 1',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.morningBlue, 
            backgroundColor: chartColorsHalf.morningBlue,
            hidden: false
        },
        {
            label: 'Supersector 2',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.rhythm, 
            backgroundColor: chartColorsHalf.rhythm,
            hidden: false
        },
        {
            label: 'Supersector 3',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.wildBlueYonder, 
            backgroundColor: chartColorsHalf.wildBlueYonder,
            hidden: false
        },
        {
            label: 'Supersector 4',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.yellowGreenCrayola, 
            backgroundColor: chartColorsHalf.yellowGreenCrayola,
            hidden: false
        },
        {
            label: 'Supersector 5',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.aeroBlue, 
            backgroundColor: chartColorsHalf.aeroBlue,
            hidden: false
        },
        {
            label: 'Supersector 6',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.silverPink, 
            backgroundColor: chartColorsHalf.silverPink,
            hidden: true
        },
        {
            label: 'Supersector 7',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.oldRose, 
            backgroundColor: chartColorsHalf.oldRose,
            hidden: true
        },
        {
            label: 'Supersector 8',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.ruber, 
            backgroundColor: chartColorsHalf.ruber,
            hidden: true
        },
        {
            label: 'Supersector 9',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.pearlyPurple, 
            backgroundColor: chartColorsHalf.pearlyPurple,
            hidden: true
        },
        {
            label: 'Supersector 10',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.slateGray, 
            backgroundColor: chartColorsHalf.slateGray,
            hidden: true
        },
        {
            label: 'Supersector 11',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.rust, 
            backgroundColor: chartColorsHalf.rust,
            hidden: true
        },
        {
            label: 'Supersector 12',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.orangeRed, 
            backgroundColor: chartColorsHalf.orangeRed,
            hidden: true
        },
        {
            label: 'Supersector 13',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.midnightBlue, 
            backgroundColor: chartColorsHalf.midnightBlue,
            hidden: true
        },
        {
            label: 'Supersector 14',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.mediumTurquoise, 
            backgroundColor: chartColorsHalf.mediumTurquoise,
            hidden: true
        },
        {
            label: 'Supersector 15',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.carnelian, 
            backgroundColor: chartColorsHalf.carnelian,
            hidden: true
        },
        {
            label: 'Supersector 16',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.blackOlive, 
            backgroundColor: chartColorsHalf.blackOlive,
            hidden: true
        },
        {
            label: 'Supersector 17',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.mountbattenPink, 
            backgroundColor: chartColorsHalf.mountbattenPink,
            hidden: true
        },
        {
            label: 'Supersector 18',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.blastOffBronze, 
            backgroundColor: chartColorsHalf.blastOffBronze,
            hidden: true
        },
        {
            label: 'Supersector 19',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.antiqueRuby, 
            backgroundColor: chartColorsHalf.antiqueRuby,
            hidden: true
        },
        {
            label: 'Supersector 20',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.bistre, 
            backgroundColor: chartColorsHalf.bistre,
            hidden: true
        },        
        {
            label: 'Supersector 21',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.cafeAuLait, 
            backgroundColor: chartColorsHalf.cafeAuLait,
            hidden: true
        },        
        {
            label: 'Supersector 22',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.glossyGrape, 
            backgroundColor: chartColorsHalf.glossyGrape,
            hidden: true
        },     
    ]
};

// Configuring the Chart
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'US Employment Statistics From The US Bureau of Labor Statistics'
            }
        }
    }
};

// Getting the Chart Element
const blsChart = new Chart(
    document.getElementById('chart'),
    config
);