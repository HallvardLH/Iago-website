const users = {
    test_user: {
        name: "Asgeir Albretsen",
        email: "asgeir@iago.no",
    },
    create_user_html: function(user) {
        const list = create_element("DIV", ["class", "users-list"]);

        if (i % 2 == 1) { // Adds a slightly darker background to every other element
            list.setAttribute("class", "users-list users-darker-background");
        }

        const select_checkbox = create_element("INPUT", ["type", "checkbox", "class", "users-list-checkbox"]);
        list.appendChild(select_checkbox);

        const name = create_element("DIV", [], user.name);
        list.appendChild(name);

        const email = create_element("DIV", [], user.email);
        list.appendChild(email);

        const password = create_element("DIV", ["class", "user-link"], "Send nytt passord"); // Remember to add translation
        list.appendChild(password);

        // If statement here to check if user is admin or not, if they are, make the checkbox checked
        const admin_checkbox = create_element("INPUT", ["type", "checkbox", "class", "users-list-checkbox", "style", "margin-left: 1.5vw"]);
        list.appendChild(admin_checkbox);

        const delete_user = create_element("DIV", ["class", "user-link"], "Slett bruker"); // Remember to add translation
        list.appendChild(delete_user);

        byId("users-list-anchor").append(list);

    },
}

for (var i = 0; i < 10; i++) {
    users.create_user_html(users.test_user);
}