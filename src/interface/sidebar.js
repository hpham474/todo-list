import generateInbox from './inbox';

function generateProjectSidebar (todoList) {
    const projectSidebar = document.querySelector(".sidebar .projects");
    const projects = todoList.projects;

    projectSidebar.innerHTML = "";

    const title = document.createElement("h2");
    const projectList = document.createElement("ul");

    title.textContent = "Projects";
    projectList.classList.add("project-list");

    for (let i = 0; i < projects.length; i++) {
        const listElement = document.createElement("li");
        const projectButton = document.createElement("button");

        projectButton.textContent = projects[i];

        projectButton.addEventListener("click", () => {
            generateInbox(todoList.filter((value) => {
                if (value.project === projects[i]) {
                    return true;
                }
                return false;
            }));
        });

        listElement.appendChild(projectButton)
        projectList.appendChild(listElement);
    }

    projectSidebar.appendChild(title);
    projectSidebar.appendChild(projectList);
}

export default generateProjectSidebar;