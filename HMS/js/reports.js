const reports = {

    /**
     * Requests a list of reports from the database, with a callback to reports.build_html.
     */
    update_request: function() {
        networking.HTTPToDB({
            "query": {
                "title": { $regex: "(?i)" + "" + "(?-i)" }
            }
        }, "reports", reports.build_html, "get", "albretsenconsulting");
    },

    /**
     * 
     * @param {A string, which is a list of report objects} reports 
     * Goes through each report, then calls reports.build_report_row to generate each row of reports.
     */
    build_html: function(reports) {
        reports = JSON.parse(reports);

        reports.forEach(report => {
            reports.build_report_row(report)
        });
    },

    /**
     * 
     * @param {A report object} report 
     * Takes a report, and adds it to the list of reports.
     */
    build_report_row: function(report) {
        
    }

}

reports.update_request();