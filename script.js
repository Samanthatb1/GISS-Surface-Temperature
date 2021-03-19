// Data from https://data.giss.nasa.gov/gistemp/
chartZone('Data/ZonAnn.Ts+dSST.csv'); 
chartNorth('Data/Northern.Ts+dSST.csv');
chartSouth('Data/SH.Ts+dSS.csv');
chartCombined('Data/ZonAnn.Ts+dSST.csv');

async function chartZone (cvs){
    // Calling the get data function to parse the CVS file, then creating the chart
    const response = await getData(cvs);
    const ctx = document.getElementById('chartZone').getContext('2d');

    // Creating the gradient from blue to red
    let gradient = ctx.createLinearGradient(0, 0, 1400, 10);
    gradient.addColorStop(0.2, '#3e8bcf');
    gradient.addColorStop(.5, '#c6d44a');
    gradient.addColorStop(1, '#e62b25');

    // Chart specifics 
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: response.xAxisLabel,
            datasets: [{
                label: 'Global Combined Land-Surface Air and Sea-Surface water temperature in C',
                data: response.yAxisLabel,
                backgroundColor: gradient,
                borderColor: 'black',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }]
        },
        options: {
            responsive: true,
            
            tooltips: {
                titleFontSize: 25,
                bodyFontSize: 20,
                titleMarginBottom: 12
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 13.4,
                        max: 15.4,
                        fontSize: 19,
                        fontColor: 'black'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: "Temperature",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 20
                    }
                }], 
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 19,
                        fontSize: 19,
                        padding: 17,
                        fontColor: 'black',
                    }, 
                    scaleLabel:{
                        display: true,
                        labelString: "Year",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 20
                    }
                }],
                gridLines :{
                    drawBorder: true
                }
            },
            legend: {
                    display: false,
                    boxWidth: 0,
                    labels: {
                       fontColor: 'black',
                        fontSize: 20,
                        boxWidth: 0
                    }
            }
        }
    });
}

async function chartNorth (cvs){
    // Calling the get data function to parse the CVS file, then creating the chart
    const response = await getData(cvs);
    const ctx = document.getElementById('chartNorth').getContext('2d');

    // Creating the gradient from blue to red
    let gradient = ctx.createLinearGradient(0, 0, 1000, 10);
    gradient.addColorStop(0.2, '#3e8bcf');
    gradient.addColorStop(.5, '#c6d44a');
    gradient.addColorStop(1, '#ad1100');

    // Chart specifics 
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: response.xAxisLabel,
            datasets: [{
                label: 'Northern Hemisphere Annual Land-Surface Air and Sea-Surface water temperature in C',
                data: response.yAxisLabel,
                backgroundColor: gradient,
                borderColor: 'black',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }]
        },
        options: {
            tooltips: {
                titleFontSize: 25,
                bodyFontSize: 20,
                titleMarginBottom: 12
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 13.4,
                        max: 15.4,
                        fontSize: 19,
                        fontColor: 'black'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: "Temperature",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }], 
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 19,
                        fontSize: 19,
                        padding: 17,
                        fontColor: 'black',
                    }, 
                    scaleLabel:{
                        display: true,
                        labelString: "Year",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }],
                gridLines :{
                    drawBorder: true
                }
            },
            legend: {
                    display: false,
                    boxWidth: 0,
                    labels: {
                       fontColor: 'black',
                        fontSize: 20,
                        boxWidth: 0
                    }
            }
        }
    });
}

async function chartSouth (cvs){
    // Calling the get data function to parse the CVS file, then creating the chart
    const response = await getData(cvs);
    const ctx = document.getElementById('chartSouth').getContext('2d');

    // Creating the gradient from blue to red
    let gradient = ctx.createLinearGradient(0, 0, 700, 10);
    gradient.addColorStop(0.2, '#c6d44a');
    gradient.addColorStop(.6, '#3e8bcf');
    gradient.addColorStop(1, '#de4e0b');

    // Chart specifics 
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: response.xAxisLabel,
            datasets: [{
                label: 'Southern Hemisphere Annual Land-Surface Air and Sea-Surface water temperature in C',
                data: response.yAxisLabel,
                backgroundColor: gradient,
                borderColor: 'black',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }]
        },
        options: {
            tooltips: {
                titleFontSize: 25,
                bodyFontSize: 20,
                titleMarginBottom: 12
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 13.4,
                        max: 15.4,
                        fontSize: 19,
                        fontColor: 'black'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: "Temperature",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }], 
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 20,
                        fontSize: 19,
                        padding: 17,
                        fontColor: 'black',
                    }, 
                    scaleLabel:{
                        display: true,
                        labelString: "Year",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }],
                gridLines :{
                    drawBorder: true
                }
            },
            legend: {
                    display: false,
                    boxWidth: 0,
                    labels: {
                       fontColor: 'black',
                        fontSize: 20,
                        boxWidth: 0
                    }
            }
        }
    });
}

async function chartCombined (cvs){
    // Calling the get data function to parse the CVS file, then creating the chart
    const response = await getMultipleData (cvs);
    const ctx = document.getElementById('chartCombined').getContext('2d');

    // Chart specifics 
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: response.xAxisLabel,
            datasets: [{
                label: 'Global Temperature in C',
                data: response.yGlobalAxisLabel,
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }, {
                label: 'Northern Hemisphere Temperature in C',
                data: response.yNorthAxisLabel,
                backgroundColor: 'rgba(6, 194, 204, 1)',
                borderColor: 'rgba(6, 194, 204, 0.5)',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }, 
            {
                label: 'Southern Hemisphere in C',
                data: response.ySouthAxisLabel,
                backgroundColor: 'rgba(70, 199, 66, 1)',
                borderColor: 'rgba(70, 199, 66, .5)',
                borderWidth: 1,
                fill: false,
                pointRadius: 4.5
            }]
        },
        options: {
            tooltips: {
                titleFontSize: 25,
                bodyFontSize: 20,
                titleMarginBottom: 12
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 13.4,
                        max: 15.4,
                        fontSize: 19,
                        fontColor: 'black'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: "Temperature",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }], 
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 19,
                        fontSize: 19,
                        padding: 17,
                        fontColor: 'black',
                    }, 
                    scaleLabel:{
                        display: true,
                        labelString: "Year",
                        fontSize: 24,
                        fontColor: 'black',
                        padding: 8
                    }
                }],
                gridLines :{
                    drawBorder: true
                }
            },
            legend: {
                    display: true,
                    labels: {
                       fontColor: 'black',
                        fontSize: 20,
                        boxWidth: 40
                    }
            }
        }
    });
}

async function getData (cvs){
    // Fetches the CVS file, then converts it to a text file, splits it up into rows and then individual items
    const response = await fetch(cvs);
    const rawText = await response.text();
    const table = rawText.split('\n').slice(1);
    const xAxisLabel = [] ;
    const yAxisLabel = [] ;

    table.forEach(row => {
        const eachData = row.split(',');
        // Takes the first and second value in the array, and passes it to the x and y axis array
        const xData = eachData[0];
        if ( cvs == 'ZonAnn.Ts+dSST.csv'){
            const yData = eachData[1];
            yAxisLabel.push(parseFloat(yData) + 14);
        } else {
            const yData = eachData[13];
            yAxisLabel.push(parseFloat(yData) + 14);
        }
        xAxisLabel.push(xData);
    });
    return {xAxisLabel, yAxisLabel} ; // Returning an object with the x and y axis array
}

async function getMultipleData (cvs){
    // Fetches the CVS file, then converts it to a text file, splits it up into rows and then individual items
    const response = await fetch(cvs);
    const rawText = await response.text();
    const table = rawText.split('\n').slice(1);
    const xAxisLabel = [] ;
    const yGlobalAxisLabel = [] ;
    const yNorthAxisLabel = [] ;
    const ySouthAxisLabel = [] ;

    table.forEach(row => {
        const eachData = row.split(',');
        // Takes the first and second value in the array, and passes it to the x and y axis array
        const xData = eachData[0];
        const yGlobalData = eachData[1];
        const yNorthData = eachData[2];
        const ySouthData = eachData[3];
        xAxisLabel.push(xData);
        yGlobalAxisLabel.push(parseFloat(yGlobalData) + 14);
        yNorthAxisLabel.push(parseFloat(yNorthData) + 14);
        ySouthAxisLabel.push(parseFloat(ySouthData) + 14);
    });
    return {xAxisLabel, yGlobalAxisLabel, yNorthAxisLabel, ySouthAxisLabel} ; // Returning an object with the x and y axis array
}
