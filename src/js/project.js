const project = (title = true) => {

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const addProject = () => {
        title = title.trim()
        if (!projects.includes(title) && title !== "" && title !== undefined && title !== true) {

            projects.push(title);
            console.log(`Adding..${projects}`);
            localStorage.setItem('projects', JSON.stringify(projects));
            alert("Project successfully added!")
        } else if (projects.includes(title)) {

            alert("Element already exists!")
        } else if (!title || title === "") {
            alert("Project cant be empty!")
        }
    }
    addProject()
    return {
        projects
    }
}

export default project;