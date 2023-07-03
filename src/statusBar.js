const content = document.querySelector(".content");

function statusBar() {
    const statusBar = document.createElement("div");
    statusBar.className = "statusBar";
    content.appendChild(statusBar);

    const projectsLink = document.createElement("div");
    projectsLink.className = "projectsLink";
    projectsLink.innerText = "Projects";
    statusBar.appendChild(projectsLink);

    const eduLink = document.createElement("div");
    eduLink.className = "eduLink";
    eduLink.innerText = "Education";
    statusBar.appendChild(eduLink);

    const contactsLink = document.createElement("div");
    contactsLink.className = "contactsLink";
    contactsLink.innerText = "Contacts";
    statusBar.appendChild(contactsLink);
}

statusBar();
export {statusBar};