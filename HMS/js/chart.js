const chart = {

    create_line_graph: function() {
        const ctx = document.getElementById('line-graph');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["65", "59", "80", "81", "56", "55", "40"],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.5
                }]
            },
            options: {
                responsive: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
}

chart.create_line_graph();