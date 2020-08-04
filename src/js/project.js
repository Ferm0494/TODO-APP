import library from "./libraries"

const project = (obj) => {
  const projects = library()
  const validate = () =>{
    const title = obj.value.trim()

    if (projects.includes(title)) {
      obj.setCustomValidity('Element already exists')
      obj.reportValidity();
      return false
    } else if (title === "") {
      obj.setCustomValidity('Can\'t be empty')
      obj.reportValidity();
      return false;
    }
    return true;
}

    const addProject = () => {
       const title = obj.value.trim()
        if (validate()){
          projects.push(title);
          console.log(`Adding..${projects}`);
          localStorage.setItem('projects', JSON.stringify(projects));
          alert("Project successfully added!")
        }
    }

    addProject()

}

export default project;