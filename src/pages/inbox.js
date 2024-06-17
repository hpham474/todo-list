function generateInbox(todoList) {
    const content = document.querySelector(".content");

    content.innerHTML = "";

    const title = document.createElement("h1");
    const taskList = document.createElement("ul");

    title.textContent = "Inbox";

    for(let i = 0; i < todoList.length; i++) {
        const listElement = document.createElement("li");
        const taskDiv = document.createElement("div");
        const checkBoxButton = document.createElement("button");
        const taskButton = document.createElement("button");
        const editButton = document.createElement("button");

        checkBoxButton.classList.add("checkbox");
        taskButton.classList.add("task");
        editButton.classList.add("edit");

        checkBoxButton.innerHTML = 
            `<svg 
                class="checkBoxSVG" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"> 
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>`
        taskButton.textContent = todoList.getItem(i).title;
        editButton.innerHTML = 
            `<svg 
                class="editSVG" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"> 
                    <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /> 
            </svg>`

        checkBoxButton.ariaLabel = "complete";
        taskButton.ariaLabel = "edit"

        taskDiv.appendChild(checkBoxButton);
        taskDiv.appendChild(taskButton);
        taskDiv.appendChild(editButton);

        listElement.appendChild(taskDiv);
        taskList.appendChild(listElement);
    }

    content.appendChild(title);
    content.appendChild(taskList);
}

export default generateInbox;