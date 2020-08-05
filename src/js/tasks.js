import {
    renderTask
} from './task'
import {
    cards,
    parentTaskCard
} from './components'
const tasks = (project) => {

    const tasks = localStorage.getItem(project)



    if (tasks === null || tasks === "") {
        return []
    } else {

        return JSON.parse(tasks);
    }
}

const renderTasks = (arr) => {
    let size = cards.length;
    for (let i = 0; i < size; i++) {

        parentTaskCard.removeChild(cards[0])
    }
    arr.forEach(x => {
        renderTask(x)
    })
}

export {
    tasks,
    renderTasks
};