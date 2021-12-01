const chart = {

    initialize: function() {
        let start_date = new Date(new Date().getFullYear() + "-" + (new Date().getMonth()) + "-" + new Date().getDate());
        let end_date = new Date();
        byId("start_date").value = start_date.toISOString().split('T')[0];
        byId("end_date").value = end_date.toISOString().split('T')[0];

        this.update_graph_request();
    },

    update_graph_request: function() {
        networking.HTTPToDB({
            "query": {
                "date_sent": {
                    "$gte": new Date(byId("start_date").value).getTime().toString(), // First of November: 1635771600000
                    "$lt": (addDays(new Date(byId("end_date").value), 1)).getTime().toString() // 30th of November: 1638277200000
                }
            }
        }, "reports", chart.clean_data, "data", "albretsenconsulting");
    },

    handle_date_change: function() {
        let start_date = new Date(byId("start_date").value);
        let end_date = new Date(byId("end_date").value);

        if (isValidDate(start_date) && isValidDate(end_date)) {
            console.log("START DATE: " + start_date.getTime() + " END DATE: " + end_date.getTime())
            if (start_date.getTime() < end_date.getTime()) {
                this.update_graph_request();
            } else {
                console.log("START DATE NEED TO BE BEFORE END DATE");
            }
        } else {
            console.log("ERROR WITH 1 OR MORE DATE");
        }
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

        labels.pop();
        data.pop();
        chart.update_graph(chart.line_graph_instance, labels, data, label);
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
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0
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

chart.initialize();