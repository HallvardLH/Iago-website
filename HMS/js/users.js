const users = {
    test_user: {
        name: "Asgeir Albretsen",
        email: "asgeir@iago.no",
    },
    create_user_html: function(user) {
        const list = document.createElement("DIV");
        list.setAttribute("class", "users-list");

        const select_checkbox = document.createElement("INPUT");
        select_checkbox.setAttribute("type", "checkbox");
        select_checkbox.setAttribute("class", "users-list-checkbox");
        list.appendChild(select_checkbox);

        const name = document.createElement("DIV");
        const name_text = document.createTextNode(user.name);
        name.appendChild(name_text);
        list.appendChild(name);

        const email = document.createElement("DIV");
        const email_text = document.createTextNode(user.email);
        email.appendChild(email_text);
        list.appendChild(email);

        const password = document.createElement("DIV");
        password.setAttribute("class", "user-link");
        const password_text = document.createTextNode("Send nytt passord"); // Add translation
        password.appendChild(password_text);
        list.appendChild(password);

        // If statement here to check if user is admin or not, if they are, make the checkbox checked
        const admin_checkbox = document.createElement("INPUT");
        admin_checkbox.setAttribute("type", "checkbox");
        admin_checkbox.setAttribute("class", "users-list-checkbox");
        admin_checkbox.setAttribute("style", "margin-left: 1.5vw");
        list.appendChild(admin_checkbox);

        const delete_user = document.createElement("DIV");
        delete_user.setAttribute("class", "user-link");
        const delete_user_text = document.createTextNode("Slett bruker");
        delete_user.appendChild(delete_user_text);
        list.appendChild(delete_user);

        byId("users-list-anchor").append(list);

    },
}

for (var i = 0; i < 5; i++) {
    users.create_user_html(users.test_user);
}