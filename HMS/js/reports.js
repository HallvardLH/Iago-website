const reports = {

    update_request: function() {
        networking.HTTPToDB({
            "query": {
                "title": { $regex: "(?i)" + byId("searchBar").value + "(?-i)" }
            }
        }, "reports", chart.clean_data, "get", "albretsenconsulting");
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

}