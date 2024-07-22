const addbutton=document.getElementById('addtask');
const taskinput=document.getElementById('taskinput');
const tasklist=document.getElementById('tasklist');
loadtasks();
function addTask(){
    const task=taskinput.value.trim();
    if(task)
        {
        createTaskElement(task);
        taskinput.value='';
        savetask()
    }else{
        alert('please enter a task')
    }

}
addbutton.addEventListener('click',addTask);
function createTaskElement(task){
    const listitem=document.createElement('li');
    listitem.textContent=task;
    const deleteButton=document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.className='deletetask';
    listitem.appendChild(deleteButton);
    tasklist.appendChild(listitem);
    deleteButton.addEventListener('click',function(){
        tasklist.removeChild(listitem);
        savetask();
    });
}
function savetask(){
    let tasks=[];
    tasklist.querySelectorAll('li').forEach(function(item){
        tasks.push (item.textContent.replace('Delete','').trim());
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
} 
function loadtasks(){
    const tasks=JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.forEach(createTaskElement);
}