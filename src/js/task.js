import tasks from './tasks';

const task = (title, desc, due, priority, notes, project ) =>{
  const newTask = {title,desc,due,priority,notes}; 
  console.log()
  const tasks_list = tasks(project);
  const addTask = () => {
    tasks_list.push(newTask);
    localStorage.setItem(project, JSON.stringify(tasks));
    console.log(tasks_list)
  }
  addTask()
}

export default task;