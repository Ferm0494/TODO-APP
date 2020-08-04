const tasks = (project) =>{
 
  const tasks = localStorage.getItem(project)

  if (tasks === null){
    return []
  }else{
  return JSON.parse(tasks);
  }
}

export default tasks;