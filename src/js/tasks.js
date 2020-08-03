const tasks = (project) =>{
  const tasks = JSON.parse(localStorage.getItem(project)) || [];
  return tasks;
}

export default tasks;