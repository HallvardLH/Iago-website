const calendar = {

    /**
     * 
     * @param {A JavaScript Date object} date 
     * @returns Returns a number from 0 to 6, depending on how many blank spaces the calendar should have before counting days.
     */
    get_start_day: function(date) {
        return date.setDate(1).getDay() - 1;
    },

    /**
     * 
     * @param {A JavaScript Date object} date 
     * @returns The amount of days in the month the parameter date is. If the parameter date is the 25th of November,
     * it returns 30 because November has 30 days.
     */
    days_in_month: function(date) {
        return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
    },


    test_date: new Date(),
    /**
     * 
     * @param {A JavaScript Date object} date 
     * Creates the calendar HTML.
     */
    create_calendar_html: function(date) {
        for (var i = 0; i < 1; i++) { // this.get_start_day(date) // This did not quite work, placed 1 there instead for testing
            console.log("Test")
            const blank = create_element("DIV");
            byId("calendar-dates").appendChild(blank);
        }

        for (var i = 1; i < this.days_in_month(date); i++) {
            const date_elem = create_element("DIV", ["id", `date-${i}`, "onclick", `calendar.pick_date(${i})`, "onmouseover", `calendar.highlight_date(${i})`], i);
            byId("calendar-dates").appendChild(date_elem);
        }
    },

    start_date: false,
    end_date: false,
    pick_date: function(i) {
        if (!this.start_date) {

        }
    },

    highlight_date: function(i) {

    },
}

console.log(calendar.test_date)
calendar.create_calendar_html(calendar.test_date);