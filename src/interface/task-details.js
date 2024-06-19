import { format } from "date-fns";

function generateDetails(task) {
    const dialog = document.querySelector("dialog");

    dialog.innerHTML = "";

    const title = document.createElement("h2");
    const description = document.createElement("p");
    const notes = document.createElement("p");

    const project = document.createElement("p");
    const date = document.createElement("p");
    const urgency = document.createElement("p");

    const projectHeading = document.createElement("h3");
    const dateHeading = document.createElement("h3");
    const urgencyHeading = document.createElement("h3");

    const container = document.createElement("div");
    const taskContent = document.createElement("div");
    const sidebar = document.createElement("div");

    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");

    container.classList.add("details-container")
    taskContent.classList.add("details-contents");
    sidebar.classList.add("details-sidebar");
    buttonDiv.classList.add("details-button");
    button.classList.add("details-close");
    projectHeading.classList.add("details-heading");
    dateHeading.classList.add("details-heading");
    urgencyHeading.classList.add("details-heading");

    title.textContent = task.title;
    project.textContent = task.project;
    date.textContent = format(task.dueDate, "MMM dd");
    description.textContent = task.description;
    notes.textContent = task.notes;
    if (task.priority === "0") {
        urgency.textContent = "Not Urgent";
    } else if (task.priority === "1") {
        urgency.textContent = "Urgent";
    } else {
        urgency.textContent = "Extremely Urgent";
    }

    projectHeading.textContent = "Project";
    dateHeading.textContent = "Due Date";
    urgencyHeading.textContent = "Priority";

    button.textContent = "Close";

    button.addEventListener("click", () => {
        dialog.close();
    });


    taskContent.appendChild(title);
    taskContent.appendChild(description);
    taskContent.appendChild(notes)

    sidebar.appendChild(projectHeading);
    sidebar.appendChild(project);
    sidebar.appendChild(dateHeading);
    sidebar.appendChild(date);
    sidebar.appendChild(urgencyHeading);
    sidebar.appendChild(urgency);
    
    container.appendChild(taskContent);
    container.appendChild(sidebar);
    buttonDiv.appendChild(button);

    dialog.appendChild(container);
    dialog.appendChild(buttonDiv);

    dialog.showModal();
}

export default generateDetails;