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
    create_calendar_html: function(date) {
        for (var i = 0; i < 0; i++) { // this.get_start_day(date)
            const blank = create_element("DIV");
            byId("calendar-dates").appendChild(blank);
        }

        for (var i = 0; i < this.days_in_month(date); i++) {
            const date_elem = create_element("DIV", [], i);
            byId("calendar-dates").appendChild(date_elem);
        }
    },
}

console.log(calendar.test_date)
calendar.create_calendar_html(calendar.test_date);