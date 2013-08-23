/**
 * Created with IntelliJ IDEA.
 * User: DELL
 * Date: 8/14/13
 * Time: 4:04 PM
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    $('#containerarea').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Product usage distribution over time'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function() {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Neutral',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Negative',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Positive',
            data: [163, 203, 276, 408, 547, 729, 628]
        }]
    });
});