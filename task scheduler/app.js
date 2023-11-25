function scheduleTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');

    const task = taskInput.value;
    const date = taskDate.value;

    if (task && date) {
        const tasksList = document.getElementById('tasks');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} - ${date}`;
        tasksList.appendChild(listItem); 
        setupNotification(task, date);
    } else if(!task){
        alert('Please enter the Task');
    } else if(!date){
        alert('Please enter the Date and Time');
    }

    const ip = document.querySelectorAll('#taskInput,#taskDate');
    ip.forEach(input=>{
        input.value='';
    })
}

function setupNotification(task, date) {
    console.log(`Scheduled notification for task "${task}" at ${date}`);
}