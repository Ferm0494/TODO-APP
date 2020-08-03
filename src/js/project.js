import library from "./libraries"

const project = (title) => {

    const projects = library()
    const addProject = () => {
        title = title.trim()
        if (!projects.includes(title) && title !== "" && title !== undefined) {

            projects.push(title);
            console.log(`Adding..${projects}`);
            localStorage.setItem('projects', JSON.stringify(projects));
            alert("Project successfully added!")
        } else if (projects.includes(title)) {

            alert("Element already exists!")
        } else if (title === "") {
            alert("Project cant be empty!")
        }
    }
    addProject()

}

export default project;