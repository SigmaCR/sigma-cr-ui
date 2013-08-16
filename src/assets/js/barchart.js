$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Feature scores summary for the product'
        },

        xAxis: {
            categories: ['Picture Quality', 'Sound', 'Camera', 'Screen', 'Price','Size'],
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

            valueSuffix: ' '
        },
        plotOptions: {


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
            x: 0,
            y: 0,
            floating: true,
            borderWidth: 1,
            backgroundColor: 'transparent',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            showInLegend:false,
            name: ' ',
            data: [{y:7,color:'green'}, 6.5, 4.6, {y:9,color:'green'},{y:2,color:'red'}, 5.5] ,
            pointWidth: 20

        }]
    });
});
