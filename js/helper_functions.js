/*=====================================================================================
									 HELPER FUNCTIONS
=======================================================================================*/
const byId = function(id) {
    return document.getElementById(id);
}

function newText(id, text) {
    byId(id).innerHTML = text;
}

function display(id) {
    byId(id).style.display = 'block';
}

function hide(id) {
    byId(id).style.display = 'none';
}

function convertToJson(s) {
    s = s.split("\n");

    var array = [];

    s.forEach(element => {
        array.push([element, ""])
    });

    var obj = {}

    obj["categories"] = array;
}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    var s = ""
    var hasEntered = false;

    if (interval > 1 && !hasEntered) {
        s += Math.floor(interval) + " " + i18n.get("år_flertal");
        hasEntered = true;
    }
    interval = seconds / 2592000;
    if (interval > 1 && !hasEntered) {
        s += Math.floor(interval) + " " + i18n.get("måneder_flertal");
        hasEntered = true;
    }
    interval = seconds / 86400;
    if (interval > 1 && !hasEntered) {
        s += Math.floor(interval) + " " + i18n.get("dager_flertal");
        hasEntered = true;
    }
    interval = seconds / 3600;
    if (interval > 1 && !hasEntered) {
        s += Math.floor(interval) + " " + i18n.get("timer_flertal");
        hasEntered = true;
    }
    interval = seconds / 60;
    if (interval > 1 && !hasEntered) {
        s += Math.floor(interval) + " " + i18n.get("minutter_flertal");
        hasEntered = true;
    }
    if (!s) {
        s += Math.floor(seconds) + " " + i18n.get("sekunder_flertal");
        hasEntered = true;
    }
    s += " " + i18n.get("siden");
    return s;
}

/**
 * 
 * @param {JavaScript sting} type, {JavaScript array} attributes, {JavaScript sting"} text.
 * type is the kind of element.
 * the attributes are the element's attributes, first the attribute name, then the attribute value, the come in pair of two.
 * text contains a string of text that goes inside the element
 * @returns Returns an element node with all attributes and text added.
 */
function create_element(type, attributes, text) {
    const elem = document.createElement(type);
    if (attributes) {
        for (var i = 0; i < attributes.length; i += 2) {
            elem.setAttribute(attributes[i], attributes[i + 1]);
        }
    }

    if (text) {
        const text_node = document.createTextNode(text);
        elem.appendChild(text_node);
    }

    return elem
}