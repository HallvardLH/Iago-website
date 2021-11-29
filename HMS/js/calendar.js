const calendar = {

    /**
     * 
     * @param {A JavaScript Date object} date 
     * @returns Returns a number from 0 to 6, depending on how many blank spaces the calendar should have before counting days.
     */
    get_start_day: function(date) {
        date.setDate(1);
        return date.getDay() - 1;
    },

    /**
     * 
     * @param {A JavaScript Date object} date 
     * @returns The amount of days in the month the parameter date is. If the parameter date is the 25th of November,
     * it returns 30 because November has 30 days.
     */
    days_in_month: function(date) {
        return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate() + 1;
    },


    viewed_date: new Date(),
    /**
     * 
     * @param {A JavaScript Date object} date
     * Creates the calendar HTML.
     */
    create_calendar_html: function(date) {
        byId("calendar-month-display").innerHTML = `${date.toLocaleString('default', { month: 'long' })[0].toUpperCase() + date.toLocaleString('default', { month: 'long' }).slice(1)} ${date.getFullYear()}`
        byId("calendar-dates").innerHTML = "";
        for (var i = 0; i < this.get_start_day(date); i++) { //  // This did not quite work, placed 1 there instead for testing
            console.log("Test")
            const blank = create_element("DIV");
            byId("calendar-dates").appendChild(blank);
        }

        for (var i = 1; i < this.days_in_month(date); i++) {

            date.setDate(i);
            var date_elem;
            if (this.not_eligible(date)) { // If the date is in the future, gray it out
                date_elem = create_element("DIV", ["id", `date-${i}`, "class", "calendar-date-grayed"], i);
            } else {
                date_elem = create_element("DIV", ["id", `${date.toISOString().split('T')[0]}`, "onclick", `calendar.pick_date("${date.toISOString().split('T')[0]}")`, "onmouseover", `calendar.highlight_date(${i})`], i);
            }
            byId("calendar-dates").appendChild(date_elem);
        }
    },

    not_eligible: function(date) {
        let date_today = new Date();
        const diffDays = Math.round((date_today - date) / (24 * 60 * 60 * 1000));
        if (diffDays < 0) return true;
        return false;
    },

    chosen_dates: [],
    pick_date: function(date_string) {
        let date = new Date(date_string);
        if (this.chosen_dates.length == 0) this.chosen_dates.push(date);
        else if (this.chosen_dates.length == 1) this.chosen_dates.push(date);
        else {
            console.log("1 CHOSEN DATES: " + this.chosen_dates);
            this.chosen_dates[0] = date;
            this.chosen_dates.pop();
            console.log("2 CHOSEN DATES: " + this.chosen_dates);
        }

        this.color_dates()
    },

    color_dates: function() {
        for (var i = 0; i < this.days_in_month(this.viewed_date); i++) {
            try {
                byId(addDays(new Date(`${this.viewed_date.getFullYear()}-${this.viewed_date.getMonth() + 1}-1`), i).toISOString().split('T')[0]).setAttribute("class", "calendar-unpicked-date");
            } catch {

            }
        }
        if (this.chosen_dates[0] && (this.chosen_dates[0].getMonth() == this.viewed_date.getMonth())) {
            byId(this.chosen_dates[0].toISOString().split('T')[0]).setAttribute("class", "calendar-picked-date");
        }
        if (!this.chosen_dates[1]) return;
        if (this.chosen_dates[1] && (this.chosen_dates[1].getMonth() == this.viewed_date.getMonth())) {
            byId(this.chosen_dates[1].toISOString().split('T')[0]).setAttribute("class", "calendar-picked-date");
        }

        if (this.chosen_dates.length >= 2) {
            let i = 1;
            while (true) {
                let date_string = addDays(this.chosen_dates[0], i).toISOString().split('T')[0];
                if (i > 1000 || date_string == this.chosen_dates[1].toISOString().split('T')[0]) {
                    break;
                }
                if ((addDays(this.chosen_dates[0], i).getMonth() == this.viewed_date.getMonth())) {
                    byId(date_string).setAttribute("class", "calendar-picked-date");
                }
                i++;
            }
        }
    },

    highlight_date: function(i) {

    },

    scroll_month: function(dir) {
        let new_month = this.viewed_date.getMonth() + 1 + dir;
        let new_year = this.viewed_date.getFullYear();
        let prev_time = new Date(this.viewed_date);

        if (new_month >= 13) {
            new_month = 1;
            new_year = new_year + 1;
        } else if (new_month <= 0) {
            new_month = 12;
            new_year = new_year - 1;
        }

        //this.viewed_date = new Date(new_year, new_month, 1);
        this.viewed_date = new Date(`${new_year}-${new_month}-1`);
        this.viewed_date.setHours(prev_time.getHours(), prev_time.getMinutes(), prev_time.getSeconds());
        `, prev_time.getHours(), prev_time.getMinutes(), prev_time.getSeconds(), prev_time.getMilliseconds());`
        this.create_calendar_html(this.viewed_date);
    }
}

console.log(calendar.viewed_date)
calendar.create_calendar_html(calendar.viewed_date);