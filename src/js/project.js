const project = (title) =>{
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  
  const addProject = () =>{
    console.log(title);
/*     projects.push(title);
    localStorage.setItem('projects',JSON.stringify(projects));
    return projects; */
  }
}



export default project;