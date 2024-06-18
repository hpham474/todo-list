import { format } from "date-fns";
import editTask from "../todo-list/edit-task";

function generateEditTaskDialog (todoItem, todoList) {
    let index = -1;
    // item index 
    for (let i = 0; i < todoList.length; i++) {
        if (todoItem.equals(todoList.getItem(i))) {
            index = i;
        }
    }

    if (index === -1) {
        return;
    }

    const dialog = document.querySelector("dialog");

    dialog.innerHTML = "";

    const form = document.createElement("form");
    const h1 = document.createElement("h1");

    form.setAttribute("action", "");
    form.setAttribute("method", "post");

    dialog.appendChild(form);

    const dialogForm = document.querySelector("dialog form");

    const titleDiv = generateTitleInput(index, todoList);
    const projectDiv = generateProjectInput(index, todoList, todoList.projects);
    const dateDiv = generateDateInput(index, todoList);
    const descriptionDiv = generateDescriptionInput(index, todoList);
    const notesDiv = generateNotesInput(index, todoList);
    const urgencyDiv = generateUrgencyInput(index, todoList);
    const buttonsDiv = generateButtons(index,todoList);

    h1.textContent = "Edit Task";

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

function generateTitleInput(itemIndex, todoList) {
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

    titleInput.value = `${todoList.getItem(itemIndex).title}`
    titleInput.disabled = true;

    titleDiv.classList.add("form-input-row");

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    return titleDiv;
}

function generateProjectInput(itemIndex, todoList, projects) {
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

    projectInput.value = `${todoList.getItem(itemIndex).project}`;

    projectDiv.classList.add("form-input-row");

    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(projectInput);
    projectDiv.appendChild(projectList);

    return projectDiv;
}

function generateDateInput(itemIndex, todoList) {
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

    dateInput.value = `${todoList.getItem(itemIndex).dueDate}`;

    dateDiv.classList.add("form-input-row");

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    return dateDiv;
}

function generateDescriptionInput(itemIndex, todoList) {
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

    descriptionInput.value = `${todoList.getItem(itemIndex).description}`;

    descriptionDiv.classList.add("form-input-row");

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    return descriptionDiv;
}

function generateNotesInput(itemIndex, todoList) {
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

    notesInput.value = `${todoList.getItem(itemIndex).notes}`;

    notesDiv.classList.add("form-input-row");

    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesInput);

    return notesDiv;
}

function generateUrgencyInput(itemIndex, todoList) {
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

    if (todoList.getItem(itemIndex).priority === 0) {
        noUrgencyOption.selected = "selected";
    } else if (todoList.getItem(itemIndex).priority === 1){
        urgentOption.selected = "selected";
    } else if (todoList.getItem(itemIndex).priority === 2) {
        extremelyUrgentOption.selected = "selected";
    }

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

function generateButtons(index, todoList) {
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

        editTask(index,todoList);

        dialog.close();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    buttonsDiv.appendChild(closeButton);
    buttonsDiv.appendChild(submitButton);
    
    return buttonsDiv;
}

export default generateEditTaskDialog;