$('#firstCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // center:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    items:2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        // 1000:{
        //     items:3
        // }
    }
});


// Build the chart
// Highcharts.chart('container', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: 'Browser market shares in January, 2018'
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false
//             },
//             showInLegend: true
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Chrome',
//             y: 55,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Internet Explorer',
//             y: 11.84
//         }, {
//             name: 'Firefox',
//             y: 10.85
//         }, {
//             name: 'Edge',
//             y: 4.67
//         }, {
//             name: 'Safari',
//             y: 4.18
//         }, {
//             name: 'Other',
//             y: 7.05
//         }]
//     }]
// });

Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Total fruit consumption, grouped by gender'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
    }]
});
