import tasks from './tasks';

const task = (inputs, project) =>{ 

  let newTask = {
    project,
    title: inputs[0].value,
    description: inputs[1].value,
    dueDate: inputs[2].value,
    priority: inputs[3].value,
    notes: inputs[4].value,
  }
  
  const taskList = tasks(project);

  const validate = () => {
    const title = inputs[0].value.trim;
    let flag = true; 
    taskList.forEach(element => {
      if (element.title === newTask.title){
        inputs[0].setCustomValidity('Task already exists')
        inputs[0].reportValidity();
        flag = false;
      }
    });
    if (title === ""){
      inputs[0].setCustomValidity('Can\'t be empty');
      inputs[0].reportValidity();
      flag = false
    }
    return flag;
  }

  const addTask = () => {
    if (validate()){
      taskList.push(newTask);
      console.log(`all tasks for ${newTask.project} are : ${JSON.stringify(taskList)}`);
      localStorage.setItem(newTask.project, JSON.stringify(taskList));
    }
  }
  
  addTask()
}

export default task;