const reports = {

    update_request: function() {
        networking.HTTPToDB({
            "query": {
                "title": { $regex: "(?i)" + byId("searchBar").value + "(?-i)" }
            }
        }, "reports", chart.clean_data, "get", "albretsenconsulting");
    },

    build_html: function() {
        
    }

}