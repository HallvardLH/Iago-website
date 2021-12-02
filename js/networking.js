const networking = {

    //server_url: "https://3.135.49.222/hms",
    server_url: "https://iago.no/hms",
    //server_url: "http://localhost:3001/hms",

    database: "",

    Http: [],
    HttpReports: new XMLHttpRequest(),

    reportsAreLoading: false,

    HTTPToDB: function(body, collection, callback, action, database) {

        body["database"] = database;
        body["collection"] = collection;

        let http = networking.Http[collection + action];

        http = new XMLHttpRequest();
        let url = this.server_url + "/" + action;
        http.open("POST", url);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.setRequestHeader('Access-Control-Allow-Origin', 'http://iago.no/hms');
        http.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        http.send(JSON.stringify(body));

        console.log("SENDT: " + JSON.stringify(body));

        http.onreadystatechange = (_e) => {
            if (http.readyState == 4 && http.status == 200) {
                callback(http.responseText);
            }
        }
    }

}