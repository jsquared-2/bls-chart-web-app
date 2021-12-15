// Initalizing Function Variables
var seriesID = "";

// Generate Series ID - Fixed Data Type
function getSeriesID () {
    let seriesStart = "CE";
    let seriesSeasonality = "U"
    let seriesSupersectorCodes = ["00", "05", "06", "07", "08", "10", "20", "30", "31", "32", "40", "41", "42", "43", "44", "50", "55", "60", "65", "70", "80", "90"]; // converted to strings because ints starting with zero turned into single digits
    let seriesIndustryCode = "000000";
    let seriesDataType = "01";
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
var apiKey = "0";

// Accessing the API Key
function getAPIKey() {
    let message = "If you have an API Key from the BLS, enter it here.";
    apiKey = prompt(message);
    // alert(apiKey);
    return apiKey;
}

// Calling the Function
getAPIKey();

// Initializing Global Variables
var requestURL = "";

// Generate URL For Request
function getURL(seriesID = seriesIDArray[0], apiKey = "0") {
    let baseURL = "https://api.bls.gov/publicAPI/v2/timeseries/data/";
    let seriesURL = seriesID
    let apiURL = apiKey;

    if (apiKey == "0") {
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
            //console.log(dataArray);
            for (let l = 0; l < dataArray.length; l++) {
                dataValues = dataArray[l].value;
                //console.log(dataValues);
                dataValuesArray.push(dataValues);
                //console.log(dataValuesArray);
            }
            dataValuesArray.reverse();
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
            dataDatesArray.reverse();
        } else {
            console.log("A response could not be received.");
        }
        //console.log(dataDatesArray);
    };
    return dataDatesArray;
};

// –––––––––––––––––––––––––

// Test Functions
function printSERIES(){
    console.log(`${seriesIDArray[0]} ${seriesIDArray[0].length} ${getSuperSectorValues(0)}`);
    console.log(`${seriesIDArray[1]} ${seriesIDArray[1].length} ${getSuperSectorValues(1)}`);
    console.log(`${seriesIDArray[2]} ${seriesIDArray[2].length} ${getSuperSectorValues(2)}`);
    console.log(`${seriesIDArray[3]} ${seriesIDArray[3].length} ${getSuperSectorValues(3)}`);
    console.log(`${seriesIDArray[4]} ${seriesIDArray[4].length} ${getSuperSectorValues(4)}`);
    console.log(`${seriesIDArray[5]} ${seriesIDArray[5].length} ${getSuperSectorValues(5)}`);
    console.log(`${seriesIDArray[6]} ${seriesIDArray[6].length} ${getSuperSectorValues(6)}`);
    console.log(`${seriesIDArray[7]} ${seriesIDArray[7].length} ${getSuperSectorValues(7)}`);
    console.log(`${seriesIDArray[8]} ${seriesIDArray[8].length} ${getSuperSectorValues(8)}`);
    console.log(`${seriesIDArray[9]} ${seriesIDArray[9].length} ${getSuperSectorValues(9)}`);
    console.log(`${seriesIDArray[10]} ${seriesIDArray[10].length} ${getSuperSectorValues(10)}`);
    console.log(`${seriesIDArray[11]} ${seriesIDArray[11].length} ${getSuperSectorValues(11)}`);
    console.log(`${seriesIDArray[12]} ${seriesIDArray[12].length} ${getSuperSectorValues(12)}`);
    console.log(`${seriesIDArray[13]} ${seriesIDArray[13].length} ${getSuperSectorValues(13)}`);
    console.log(`${seriesIDArray[14]} ${seriesIDArray[14].length} ${getSuperSectorValues(14)}`);
    console.log(`${seriesIDArray[15]} ${seriesIDArray[15].length} ${getSuperSectorValues(15)}`);
    console.log(`${seriesIDArray[16]} ${seriesIDArray[16].length} ${getSuperSectorValues(16)}`);
    console.log(`${seriesIDArray[17]} ${seriesIDArray[17].length} ${getSuperSectorValues(17)}`);
    console.log(`${seriesIDArray[18]} ${seriesIDArray[18].length} ${getSuperSectorValues(18)}`);
    console.log(`${seriesIDArray[19]} ${seriesIDArray[19].length} ${getSuperSectorValues(19)}`);
    console.log(`${seriesIDArray[20]} ${seriesIDArray[20].length} ${getSuperSectorValues(20)}`);
    console.log(`${seriesIDArray[21]} ${seriesIDArray[21].length} ${getSuperSectorValues(21)}`);
}

// –––––––––––––––––––––––––

// Supersector Data Assignments
var totalNonfarm = getSuperSectorValues(0); // Supersector 00
var totalPrivate = getSuperSectorValues(1); // Supersector 05
var goodsProducing = getSuperSectorValues(2); // Supersector 06
var serviceProviding = getSuperSectorValues(3); // Supersector 07
var privateServiceProviding = getSuperSectorValues(4); // Supersector 08
var miningAndLogging = getSuperSectorValues(5); // Supersector 10
var construction = getSuperSectorValues(6); // Supersector 20
var manufacturing = getSuperSectorValues(7); // Supersector 30
var durableGoods = getSuperSectorValues(8); // Supersector 31
var nondurableGoods = getSuperSectorValues(9); // Supersector 32
var tradeTransportationAndUtilities = getSuperSectorValues(10); // Supersector 40
var wholesaleTrade = getSuperSectorValues(11); // Supersector 41
var retailTrade = getSuperSectorValues(12); // Supersector 42
var transportationAndWarehousing = getSuperSectorValues(13); // Supersector 43
var utilities = getSuperSectorValues(14); // Supersector 44
var information = getSuperSectorValues(15); // Supersector 50
var financialActivities = getSuperSectorValues(16); // Supersector 55
var professionalAndBusinessServices = getSuperSectorValues(17); // Supersector 60
var educationAndHealthServices = getSuperSectorValues(18); // Supersector 65
var leisureAndHospitality = getSuperSectorValues(19); // Supersector 70
var otherServices = getSuperSectorValues(20); // Supersector 80
var government = getSuperSectorValues(21); // Supersector 90

// –––––––––––––––––––––––––

// Chart Colors - Full Opacity (22 Colors)
const chartColorsFull = {
    morningBlue: "rgb(138, 163, 153)", // #1
    rhythm: "rgb(125, 132, 178)", // #2
    wildBlueYonder: "rgb(143, 166, 203)", // #3
    yellowGreenCrayola: "rgb(219, 244, 167)", // #4
    aeroBlue: "rgb(213, 249, 222)", // #5

    silverPink: "rgb(197, 175, 164)", // #6
    oldRose: "rgb(204, 126, 133)", // #7
    ruber: "rgb(207, 77, 111)", // #8
    pearlyPurple: "rgb(163, 109, 144)", // #9
    slateGray: "rgb(118, 129, 142)", // #10

    rust: "rgb(175, 56, 0)", // #11
    orangeRed: "rgb(254, 98, 29)", // #12
    midnightBlue: "rgb(24, 32, 111)", // #13
    mediumTurquoise: "rgb(0, 207, 193)", // #14
    carnelian: "rgb(189, 30, 30)", // #15

    blackOlive: "rgb(61, 64, 58)", // #16
    mountbattenPink: "rgb(162, 126, 142)", // #17
    blastOffBronze: "rgb(167, 116, 100)", // #18
    antiqueRuby: "rgb(136, 41, 47)", // #19
    bistre: "rgb(46, 30, 15)", // #20

    cafeAuLait: "rgb(165, 117, 72)", // #21
    glossyGrape: "rgb(156, 137, 184)" // #22
};

// Chart Colors - Half Opacity (22 Colors)
const chartColorsHalf = {
    morningBlue: "rgba(138, 163, 153, 0.5)", // #1
    rhythm: "rgba(125, 132, 178, 0.5)", // #2
    wildBlueYonder: "rgba(143, 166, 203, 0.5)", // #3
    yellowGreenCrayola: "rgba(219, 244, 167, 0.5)", // #4
    aeroBlue: "rgba(213, 249, 222, 0.5)", // #5

    silverPink: "rgba(197, 175, 164, 0.5)", // #6
    oldRose: "rgba(204, 126, 133, 0.5)", // #7
    ruber: "rgba(207, 77, 111, 0.5)", // #8
    pearlyPurple: "rgba(163, 109, 144, 0.5)", // #9
    slateGray: "rgba(118, 129, 142, 0.5)", // #10

    rust: "rgba(175, 56, 0, 0.5)", // #11
    orangeRed: "rgba(254, 98, 29, 0.5)", // #12
    midnightBlue: "rgba(24, 32, 111, 0.5)", // #13
    mediumTurquoise: "rgba(0, 207, 193, 0.5)", // #14
    carnelian: "rgba(189, 30, 30, 0.5)", // #15

    blackOlive: "rgba(61, 64, 58, 0.5)", // #16
    mountbattenPink: "rgba(162, 126, 142, 0.5)", // #17
    blastOffBronze: "rgba(167, 116, 100, 0.5)", // #18
    antiqueRuby: "rgba(136, 41, 47, 0.5)", // #19
    bistre: "rgba(46, 30, 15, 0.5)", // #20

    cafeAuLait: "rgba(165, 117, 72, 0.5)", // #21
    glossyGrape: "rgba(156, 137, 184, 0.5)" // #22
};

// Creating Chart Labels
const xlabels = getSuperSectorDates(0);

// Getting Chart Data
const data = {
    labels: xlabels,
    datasets: [
        {
            label: "Total Nonfarm",
            data: totalNonfarm,
            borderColor: chartColorsFull.morningBlue, 
            backgroundColor: chartColorsHalf.morningBlue,
            hidden: false
        },
        {
            label: "Total Private",
            data: totalPrivate,
            borderColor: chartColorsFull.rhythm, 
            backgroundColor: chartColorsHalf.rhythm,
            hidden: false
        },
        {
            label: "Goods-Producing",
            data: goodsProducing,
            borderColor: chartColorsFull.wildBlueYonder, 
            backgroundColor: chartColorsHalf.wildBlueYonder,
            hidden: false
        },
        {
            label: "Service-Providing",
            data: serviceProviding,
            borderColor: chartColorsFull.yellowGreenCrayola, 
            backgroundColor: chartColorsHalf.yellowGreenCrayola,
            hidden: false
        },
        {
            label: "Private Service-Providing",
            data: privateServiceProviding,
            borderColor: chartColorsFull.aeroBlue, 
            backgroundColor: chartColorsHalf.aeroBlue,
            hidden: false
        },
        {
            label: "Mining and Logging",
            data: miningAndLogging,
            borderColor: chartColorsFull.silverPink, 
            backgroundColor: chartColorsHalf.silverPink,
            hidden: true
        },
        {
            label: "Construction",
            data: construction,
            borderColor: chartColorsFull.oldRose, 
            backgroundColor: chartColorsHalf.oldRose,
            hidden: true
        },
        {
            label: "Manufacturing",
            data: manufacturing,
            borderColor: chartColorsFull.ruber, 
            backgroundColor: chartColorsHalf.ruber,
            hidden: true
        },
        {
            label: "Durable Goods",
            data: durableGoods,
            borderColor: chartColorsFull.pearlyPurple, 
            backgroundColor: chartColorsHalf.pearlyPurple,
            hidden: true
        },
        {
            label: "Nondurable Goods",
            data: nondurableGoods,
            borderColor: chartColorsFull.slateGray, 
            backgroundColor: chartColorsHalf.slateGray,
            hidden: true
        },
        {
            label: "Trade, Transportation, and Utilities",
            data: tradeTransportationAndUtilities,
            borderColor: chartColorsFull.rust, 
            backgroundColor: chartColorsHalf.rust,
            hidden: true
        },
        {
            label: "Wholesale Trade",
            data: wholesaleTrade,
            borderColor: chartColorsFull.orangeRed, 
            backgroundColor: chartColorsHalf.orangeRed,
            hidden: true
        },
        {
            label: "Retail Trade",
            data: retailTrade,
            borderColor: chartColorsFull.midnightBlue, 
            backgroundColor: chartColorsHalf.midnightBlue,
            hidden: true
        },
        {
            label: "Transportation and Warehousing",
            data: transportationAndWarehousing,
            borderColor: chartColorsFull.mediumTurquoise, 
            backgroundColor: chartColorsHalf.mediumTurquoise,
            hidden: true
        },
        {
            label: "Utilities",
            data: utilities,
            borderColor: chartColorsFull.carnelian, 
            backgroundColor: chartColorsHalf.carnelian,
            hidden: true
        },
        {
            label: "Information",
            data: information,
            borderColor: chartColorsFull.blackOlive, 
            backgroundColor: chartColorsHalf.blackOlive,
            hidden: true
        },
        {
            label: "Financial Activities",
            data: financialActivities,
            borderColor: chartColorsFull.mountbattenPink, 
            backgroundColor: chartColorsHalf.mountbattenPink,
            hidden: true
        },
        {
            label: "Professional and Business Services",
            data: professionalAndBusinessServices,
            borderColor: chartColorsFull.blastOffBronze, 
            backgroundColor: chartColorsHalf.blastOffBronze,
            hidden: true
        },
        {
            label: "Education and Health Services",
            data: educationAndHealthServices,
            borderColor: chartColorsFull.antiqueRuby, 
            backgroundColor: chartColorsHalf.antiqueRuby,
            hidden: true
        },
        {
            label: "Leisure and Hospitality",
            data: leisureAndHospitality,
            borderColor: chartColorsFull.bistre, 
            backgroundColor: chartColorsHalf.bistre,
            hidden: true
        },        
        {
            label: "Other Services",
            data: otherServices,
            borderColor: chartColorsFull.cafeAuLait, 
            backgroundColor: chartColorsHalf.cafeAuLait,
            hidden: true
        },        
        {
            label: "Government",
            data: government,
            borderColor: chartColorsFull.glossyGrape, 
            backgroundColor: chartColorsHalf.glossyGrape,
            hidden: true
        },     
    ]
};

// Configuring the Chart
const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "US Employment Statistics (Number of Employees in Thousands)"
            }
        }
    }
};

// Getting the Chart Element
const blsChart = new Chart(
    document.getElementById("chart"),
    config
);