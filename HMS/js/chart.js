const chart = {

<<<<<<< HEAD
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
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
=======
    update_graph_request: function() {
        networking.HTTPToDB({"query": {
            "date_sent": { 
                "$gte":"1636929574072","$lt":"9637678645752"
                }
            }
        }, "reports", chart.clean_data, "data", "albretsenconsulting");
    },

    clean_data: function(string_data) {
        let data = [], labels = [], label = "";

        JSON_data = JSON.parse(string_data);

        for (const key in JSON_data) {
            switch (UI.current_button) {
                case "kostnad":
                    data.push(JSON_data[key].cost);
                    label = "Kostnad";
                    break;
                case "rapporter":
                    data.push(JSON_data[key].amount_of_reports);
                    label = "Antal rapporter";
                    break;
            }
            labels.push(key);
        }

        chart.update_graph(chart.line_graph_instance, labels, data, label);
    },
    
    line_graph_instance: new Chart(document.getElementById('line-graph'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Kostnad',
                data: [],
                fill: false,
                borderColor: 'rgb(103, 80, 164)',
                cubicInterpolationMode: 'monotone',
                tension: 0.5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
>>>>>>> 1bf9577289feade698d8286e0b7aad6a5caff4bc
                }
            }
        }
    }),

    update_graph: function(graph, labels, data, label) {
        graph.data.labels = labels;
        graph.data.datasets[0].label = label;
        graph.data.datasets[0].data = data;

        graph.update();
    }
}

chart.update_graph_request();