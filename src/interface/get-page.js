function getFilter () {
    const title = document.querySelector(".content h1");

    if (title.textContent === "Inbox") {
        return "none";
    } else if (title.textContent === "Today") {
        return "today";
    } else if (title.textContent === "Urgent") {
        return "urgent";
    } else {
        return title.textContent;
    }
}

export default getFilter;