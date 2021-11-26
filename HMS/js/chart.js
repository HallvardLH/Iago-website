const chart = {

    update_graph_request: function() {
        networking.HTTPToDB({
            "query": {
                "date_sent": {
                    "$gte": "1636929574072",
                    "$lt": "9637678645752"
                }
            }
        }, "reports", chart.clean_data, "data", "albretsenconsulting");
    },

    clean_data: function(string_data) {
        let data = [],
            labels = [],
            label = "";

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

        chart.update_graph(chart.line_graph_instance, labels.reverse(), data.reverse(), label);
        chart.update_buttons(JSON_data);
    },

    update_buttons: function(JSON_data) {
        let cost = [],
            amount_of_reports = [];
        for (const key in JSON_data) {
            cost.push(JSON_data[key].cost);
            amount_of_reports.push(JSON_data[key].amount_of_reports);
        }
        byId("total-cost").innerHTML = cost.reduce((a, b) => a + b, 0).toLocaleString() + " NOK";
        byId("total-reports").innerHTML = amount_of_reports.reduce((a, b) => a + b, 0).toLocaleString();
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
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
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