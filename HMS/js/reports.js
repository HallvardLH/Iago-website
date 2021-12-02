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

    build_html: function() {
        var icon_style = "reportUnread";
        var icon_name = "schedule"
        const container = create_element("DIV", ["class", "reportSection", "onclick", ""]);
        const text_container = create_element("DIV", ["class", "report-display-text"]);

        const author = create_element("DIV", ["class", "report-author-display"], "NAVN HER - 1.12.2021");
        text_container.appendChild(author);

        const title = create_element("DIV", ["class, reportTitle"], "Tittle her");
        text_container.appendChild(title);

        const description = create_element("DIV", ["class, report-preview"], "Beskrivelse her");
        text_container.appendChild(description);

        container.appendChild(text_container);

        const icon_container = create_element("DIV", ["class", "report-display-icon"]);
        const icon = create_element("I", ["class", `material-icons icon reportIcon ${icon_style}`], icon_name);
        icon_container.appendChild(icon);

        container.appendChild(icon_container);

        byId("reportAnchor").appendChild(container);
    }

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