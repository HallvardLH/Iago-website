const UI = {
    button_names: ["kostnad", "rapporter", "ubehandlede-rapporter"],
    current_button: "kostnad",
    switch_graph(graph) {

        // Loop through and set normal classes for all elements
        for (let i = 0; i < this.button_names.length; i++) {
            byId(`${this.button_names[i]}-graph-button`).setAttribute("class", "top-button top-button-unselected");
        }

        // Add selected class
        byId(`${graph}-graph-button`).setAttribute("class", "top-button top-button-selected");
        this.current_button = graph;
        chart.update_graph_request();
    },


}