import {renderTask} from './task'
import {cards,parentTaskCard} from './components'
const tasks = (project) =>{
 
  const tasks = localStorage.getItem(project)

  if (tasks === null){
    return []
  }else{
  return JSON.parse(tasks);
  }
}

const renderTasks= (arr)=>{
  let copyCards = cards;
  console.log(`SIZE OF CARDS ${copyCards.length}`);
  for(let i = 0; i < copyCards.length ; i++){
    console.log(i);
    console.log(`Deleting  ${cards[i]}`);
    parentTaskCard.removeChild(cards[i])
  }
 arr.forEach(x=>{
    renderTask(x)
 }) 
}

export {
  tasks,
  renderTasks
};