function generateProjecSidebar (projects) {
    const projectSidebar = document.querySelector(".sidebar .projects");
    const title = document.createElement("h2");
    const projectList = document.createElement("ul");

    title.textContent = "Projects";
    projectList.classList.add("project-list");

    for (let i = 0; i < projects.length; i++) {
        const projectButton = document.createElement("button");

        projectButton.textContent = projects[i];
        projectList.appendChild(projectButton);
    }

    projectSidebar.appendChild(title);
    projectSidebar.appendChild(projectList);
}

export default generateProjecSidebar;