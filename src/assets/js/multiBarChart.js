$(function () {
    $('#containerMuliBar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Feature scores comparisons'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Picture Quality', 'Sound', 'Screen', 'Camera', 'Video'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'Sigma Score',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            series: {
                pointWidth: 15
            },
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [ {
            name: 'Samsung GALAXY S4 i9500/i9505',
            data: [7, 6.5, 3.42, 5.65, 3],


        }, {
            name: 'Samsung GALAXY S4 mini I9195',
            data: [9, 5, 4.6, 8, 7]

        }]
    });
});
