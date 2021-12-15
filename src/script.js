// Initalizing Function Variables
var seriesID = "";

// Generate Series ID - Fixed Data Type
function getSeriesID () {
    let seriesStart = 'CE';
    let seriesSeasonality = 'U'
    let seriesSupersectorCodes = [00, 05, 06, 07, 08, 10, 20, 30, 31, 32, 40, 41, 42, 43, 44, 50, 55, 60, 65, 70, 80, 90];
    let seriesIndustryCode = '0000000';
    let seriesDataType = '01';
    var seriesIDInternalArray = []; 

    for (let i = 0; i < seriesSupersectorCodes.length; i++) {
        for (let j = 0; j < seriesSupersectorCodes.length - 1; j++) {
            seriesID = `${seriesStart}${seriesSeasonality}${seriesSupersectorCodes[i]}${seriesIndustryCode}${seriesDataType}`;
        }
        seriesIDInternalArray.push(seriesID);
    }
    return seriesIDInternalArray;
};

// Calling the Function
getSeriesID();

// Initializing SeriesIDArray 
var seriesIDArray = getSeriesID();

// Initializing Function Variables
var apiKey = '0';

// Accessing the API Key
function getAPIKey() {
    let message = "If you have an API Key from the BLS, enter it here.";
    apiKey = prompt(message);
    // alert(apiKey);
    return apiKey;
}

// Calling the Function
//getAPIKey();

// Initializing Global Variables
var requestURL = "";

// Generate URL For Request
function getURL(seriesID = seriesIDArray[0], apiKey = '0') {
    let baseURL = "https://api.bls.gov/publicAPI/v2/timeseries/data/";
    let seriesURL = seriesID
    let apiURL = apiKey;

    if (apiKey == '0') {
        requestURL = `${baseURL}${seriesURL}`;
        //console.log(requestURL);
    } else if (apiKey != 0) {
        requestURL = `${baseURL}${seriesURL}?registrationkey=${apiURL}`;
        //console.log(requestURL);
    } else {
        console.log("A Request URL could not be generated");
    }
    return requestURL;   
};

// Calling the Function
//getURL(seriesIDArray[0], apiKey);


// Getting the Data Values For Each Super Sector
function getSuperSectorValues(arrayValue = 0) { // The Array Value comes from the index value of the seriesIDArray
    
    // Making the XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandlerValues);
    xhr.responseType = "json";
    xhr.open("GET", `${getURL(seriesIDArray[arrayValue], apiKey)}`)
    xhr.send();

    // Initializing Data Array For Chart
    var dataValues;
    var dataValuesArray = [];

    // Handling the Response
    function responseReceivedHandlerValues() {
        if (this.status == 200) {
            var dataArray = this.response.Results.series[0].data;
            console.log(dataArray);
            for (let l = 0; l < dataArray.length; l++) {
                dataValues = dataArray[l].value;
                //console.log(dataValues);
                dataValuesArray.push(dataValues);
                //console.log(dataValuesArray);
            }
        } else {
            console.log("A response could not be received.");
        }
        //console.log(dataValuesArray);
    };
    return dataValuesArray;
};

// Getting the Dates for the Labels
function getSuperSectorDates(arrayValue = 0) { // The Array Value comes from the index value of the seriesIDArray
    // Making the XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandlerDates);
    xhr.responseType = "json";
    xhr.open("GET", `${getURL(seriesIDArray[arrayValue], apiKey)}`)
    xhr.send();
    
    // Initializing Dates Array For Chart
    var monthValues;
    var yearValues;
    var dataDatesArray = [];

    // Handling the Response
    function responseReceivedHandlerDates() {
        if (this.status == 200) {
            var datesArray = this.response.Results.series[0].data;
            for (let m = 0; m < datesArray.length; m++) {
                monthValues = datesArray[m].periodName;
                yearValues = datesArray[m].year;
                dateString = `${monthValues} ${yearValues}`;
                //console.log(dateString);
                dataDatesArray.push(dateString);
            }
        } else {
            console.log("A response could not be received.");
        }
        //console.log(dataDatesArray);
    };
    return dataDatesArray;
};

// –––––––––––––––––––––––––

// Supersector Data Assignments
//var totalNonfarm = getSuperSectorValues(18);

// –––––––––––––––––––––––––

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
const xlabels = [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5"
]

// Getting Chart Data
const data = {
    labels: xlabels,
    datasets: [
        {
            label: 'Total Nonfarm',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.morningBlue, 
            backgroundColor: chartColorsHalf.morningBlue,
            hidden: false
        },
        {
            label: 'Total Private',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.rhythm, 
            backgroundColor: chartColorsHalf.rhythm,
            hidden: false
        },
        {
            label: 'Goods-Producing',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.wildBlueYonder, 
            backgroundColor: chartColorsHalf.wildBlueYonder,
            hidden: false
        },
        {
            label: 'Service-Providing',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.yellowGreenCrayola, 
            backgroundColor: chartColorsHalf.yellowGreenCrayola,
            hidden: false
        },
        {
            label: 'Private Service-Providing',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.aeroBlue, 
            backgroundColor: chartColorsHalf.aeroBlue,
            hidden: false
        },
        {
            label: 'Mining and Logging',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.silverPink, 
            backgroundColor: chartColorsHalf.silverPink,
            hidden: true
        },
        {
            label: 'Construction',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.oldRose, 
            backgroundColor: chartColorsHalf.oldRose,
            hidden: true
        },
        {
            label: 'Manufacturing',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.ruber, 
            backgroundColor: chartColorsHalf.ruber,
            hidden: true
        },
        {
            label: 'Durable Goods',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.pearlyPurple, 
            backgroundColor: chartColorsHalf.pearlyPurple,
            hidden: true
        },
        {
            label: 'Nondurable Goods',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.slateGray, 
            backgroundColor: chartColorsHalf.slateGray,
            hidden: true
        },
        {
            label: 'Trade, Transportation, and Utilities',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.rust, 
            backgroundColor: chartColorsHalf.rust,
            hidden: true
        },
        {
            label: 'Wholesale Trade',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.orangeRed, 
            backgroundColor: chartColorsHalf.orangeRed,
            hidden: true
        },
        {
            label: 'Retail Trade',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.midnightBlue, 
            backgroundColor: chartColorsHalf.midnightBlue,
            hidden: true
        },
        {
            label: 'Transportation and Warehousing',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.mediumTurquoise, 
            backgroundColor: chartColorsHalf.mediumTurquoise,
            hidden: true
        },
        {
            label: 'Utilities',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.carnelian, 
            backgroundColor: chartColorsHalf.carnelian,
            hidden: true
        },
        {
            label: 'Information',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.blackOlive, 
            backgroundColor: chartColorsHalf.blackOlive,
            hidden: true
        },
        {
            label: 'Financial Activities',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.mountbattenPink, 
            backgroundColor: chartColorsHalf.mountbattenPink,
            hidden: true
        },
        {
            label: 'Professional and Business Services',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.blastOffBronze, 
            backgroundColor: chartColorsHalf.blastOffBronze,
            hidden: true
        },
        {
            label: 'Education and Healtht Services',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.antiqueRuby, 
            backgroundColor: chartColorsHalf.antiqueRuby,
            hidden: true
        },
        {
            label: 'Leisure and Hospitality',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.bistre, 
            backgroundColor: chartColorsHalf.bistre,
            hidden: true
        },        
        {
            label: 'Other Services',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)],
            borderColor: chartColorsFull.cafeAuLait, 
            backgroundColor: chartColorsHalf.cafeAuLait,
            hidden: true
        },        
        {
            label: 'Government',
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
                text: 'US Employment Statistics (Number of Employees in Thousands)'
            }
        }
    }
};

// Getting the Chart Element
const blsChart = new Chart(
    document.getElementById('chart'),
    config
);