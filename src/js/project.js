import library from "./libraries"

const project = (obj) => {

    const projects = library()
    const addProject = () => {
       const title = obj.value.trim()
        if (!projects.includes(title) && title !== "" && title !== undefined) {

            projects.push(title);
            console.log(`Adding..${projects}`);
            localStorage.setItem('projects', JSON.stringify(projects));
            alert("Project successfully added!")
        } else if (projects.includes(title)) {
            obj.setCustomValidity('Element already exists')
            obj.reportValidity();
        } else if (title === "") {
            obj.setCustomValidity('Cant be empty')
            obj.reportValidity();
        }
    }
    addProject()

}

export default project;