const calendar = {

    get_start_day: function(month, year) {
        let date = new Date(month + "-" + year + "-01");
        console.log(date);
    }

}