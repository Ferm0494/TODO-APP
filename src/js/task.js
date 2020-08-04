import tasks from './tasks';

const task = (newTask) =>{ 
  
  const taskList = tasks(newTask.project);
  console.log(`TASKLIST ${taskList}`);
  const addTask = () => {
   
    taskList.push(newTask);
    console.log(`all tasks for ${newTask.project} are : ${JSON.stringify(taskList)}`);
    localStorage.setItem(newTask.project, JSON.stringify(taskList));
  }
  
  addTask()
}

export default task;