import { format } from "date-fns";
import generateProjectSidebar from "./sidebar";
import addTask from "../todo-list/add-task";

function generateAddTaskDialog (todoList) {
    const dialog = document.querySelector("dialog");

    dialog.innerHTML = "";

    const form = document.createElement("form");
    const h1 = document.createElement("h1");

    form.setAttribute("action", "");
    form.setAttribute("method", "post");

    dialog.appendChild(form);

    const dialogForm = document.querySelector("dialog form");

    const titleDiv = generateTitleInput();
    const projectDiv = generateProjectInput(todoList.projects);
    const dateDiv = generateDateInput();
    const descriptionDiv = generateDescriptionInput();
    const notesDiv = generateNotesInput();
    const urgencyDiv = generateUrgencyInput();
    const buttonsDiv = generateButtons(todoList);

    h1.textContent = "Add Task";

    dialogForm.appendChild(h1);
    dialogForm.appendChild(titleDiv);
    dialogForm.appendChild(projectDiv);
    dialogForm.appendChild(dateDiv);
    dialogForm.appendChild(descriptionDiv);
    dialogForm.appendChild(notesDiv);
    dialogForm.appendChild(urgencyDiv);
    dialogForm.appendChild(buttonsDiv);

    dialog.showModal();
}

function generateTitleInput() {
    const titleDiv = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");

    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = 
        `<span>Title:</span>
        <strong><span aria-label="required">*</span></strong>`;

    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("maxlength", "30");
    titleInput.setAttribute("required", "");

    titleDiv.classList.add("form-input-row");

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    return titleDiv;
}

function generateProjectInput(projects) {
    const projectDiv = document.createElement("div");
    const projectLabel = document.createElement("label");
    const projectInput = document.createElement("input");
    const projectList = document.createElement("datalist");

    projectList.setAttribute("id", "projects");
    for (let i = 0; i < projects.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", projects[i]);
        option.textContent = projects[i];

        projectList.appendChild(option);
    }

    projectLabel.setAttribute("for", "project");
    projectLabel.innerHTML = 
        `<span>Project:</span>
        <strong><span aria-label="required">*</span></strong>`;

    projectInput.setAttribute("id", "project");
    projectInput.setAttribute("name", "project");
    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("maxlength", "30");
    projectInput.setAttribute("list", "projects");
    projectInput.setAttribute("required", "");

    projectDiv.classList.add("form-input-row");

    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(projectInput);
    projectDiv.appendChild(projectList);

    return projectDiv;
}

function generateDateInput() {
    const dateDiv = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const today = format(new Date(), "yyyy-MM-dd");

    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = 
        `<span>Date:</span>
        <strong><span aria-label="required">*</span></strong>`;

    dateInput.setAttribute("id", "date");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("value", today);
    dateInput.setAttribute("min", today);
    dateInput.setAttribute("required", "");

    dateDiv.classList.add("form-input-row");

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    return dateDiv;
}

function generateDescriptionInput() {
    const descriptionDiv = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");

    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerHTML = `<span>Description:</span>`;

    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("cols", "35");
    descriptionInput.setAttribute("rows", "10");
    descriptionInput.setAttribute("maxlength", "150");

    descriptionDiv.classList.add("form-input-row");

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    return descriptionDiv;
}

function generateNotesInput() {
    const notesDiv = document.createElement("div");
    const notesLabel = document.createElement("label");
    const notesInput = document.createElement("textarea");

    notesLabel.setAttribute("for", "notes");
    notesLabel.innerHTML = `<span>Notes:</span>`;

    notesInput.setAttribute("id", "notes");
    notesInput.setAttribute("name", "notes");
    notesInput.setAttribute("cols", "35");
    notesInput.setAttribute("rows", "10");
    notesInput.setAttribute("maxlength", "150");

    notesDiv.classList.add("form-input-row");

    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesInput);

    return notesDiv;
}

function generateUrgencyInput() {
    const urgencyDiv = document.createElement("div");
    const urgencyLabel = document.createElement("label");
    const urgencyInput = document.createElement("select");

    const noUrgencyOption = new Option();
    const urgentOption = new Option();
    const extremelyUrgentOption = new Option();

    noUrgencyOption.value = 0;
    noUrgencyOption.text = "Not Urgent";
    urgentOption.value = 1;
    urgentOption.text = "Urgent";
    extremelyUrgentOption.value = 2;
    extremelyUrgentOption.text = "Extremely Urgent";

    urgencyLabel.setAttribute("for", "urgency");
    urgencyLabel.innerHTML = `<span>Urgency:</span>`;

    urgencyInput.setAttribute("id", "urgency");
    urgencyInput.setAttribute("name", "urgency");
    urgencyInput.options.add(noUrgencyOption);
    urgencyInput.options.add(urgentOption);
    urgencyInput.options.add(extremelyUrgentOption);

    urgencyDiv.classList.add("form-input-row");

    urgencyDiv.appendChild(urgencyLabel);
    urgencyDiv.appendChild(urgencyInput);

    return urgencyDiv;
}

function generateButtons(todoList) {
    const dialog = document.querySelector("dialog");
    const dialogForm = document.querySelector("dialog form");
    const buttonsDiv = document.createElement("div");
    const submitButton = document.createElement("button");
    const closeButton = document.createElement("button");

    buttonsDiv.classList.add("buttons-row");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("submit-form");
    submitButton.textContent = "Submit";
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("close-form");
    closeButton.textContent = "Close";

    dialogForm.addEventListener("submit", (event) => {
        event.preventDefault();

        addTask(todoList);

        dialog.close();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    buttonsDiv.appendChild(closeButton);
    buttonsDiv.appendChild(submitButton);
    
    return buttonsDiv;
}

export default generateAddTaskDialog;