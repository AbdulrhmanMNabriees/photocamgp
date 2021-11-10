// Box Chart 1 in dashboard
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        title: {
            text: 'mai'
        },
        datasets: [{
            data: [5, 7, 15, 3],
            backgroundColor: [
                '#85C5E1',
                '#FEC633',
                '#5050B2',
                '#f06c71'
            ],
            borderColor: [
                '#85C5E1',
                '#FEC633',
                '#5050B2',
                '#f06c71'
            ],
            borderWidth: 1,
        }]
    }
});
// Box Chart 2 in dashboard
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['To Do', 'In Progress', 'Compleated', 'ISSue'],
        datasets: [{
            label: 'User to IN PROGRESS',
            data: [10, 4, 12, 2],
            backgroundColor: [
                '#85C5E1',
                '#FEC633',
                '#5050B2',
                '#f06c71'
            ],
            borderColor: [
                '#85C5E1',
                '#FEC633',
                '#5050B2',
                '#f06c71'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: false
            }
        },
        legend: {
            display: true
        },
        title: {
            text: "Do You finish?",
            display: true
        }
    }
});
