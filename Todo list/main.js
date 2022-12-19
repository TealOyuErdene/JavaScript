let inputEl = document.getElementById('inputTask')
let inputValue = inputEl.value

let tasklistEl = document.getElementById('tasklist')

let taskEl = document.getElementById('value')


function taskInput(){
    addNewTask()
}

// function addNewTask(){
//     let newTask = document.getElementById('taskTemplate').content.cloneNode(true)
//     let taskListEl = document.getElementById('tasklist')
//     taskListEl.append(newTask)

//     let taskValue = document.getElementById('value')
//     taskValue.innerHTML = inputValue
// }

function addNewTask(){
    let now = new Date().getTime()
    let taskString = `<div class="d-flex gap-3" id="${now}">
                        <div id="value" class="h5 rounded mb-2 " style="width: 80%; height: 50px; padding: 10px; padding-left: 20px; background-color: #eeeeee; border: 1px solid #f49d1a;">${inputEl.value}</div>
                            <div class="d-flex gap-1 justify-content-end">
                            <button type="button" class="btn btn-primary" style="height: 50px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                            </button>
            
                            <button type="button" class="btn btn-success" style="height: 50px;" onclick="checkTask('${now}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                </svg>
                            </button>
            
                            <button type="button" class="btn btn-danger" style="height: 50px;" onclick = "removeTask('${now}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>     
                        </div>
                    </div>`

    tasklistEl.innerHTML = taskString + tasklistEl.innerHTML
    inputEl.value = ''
}

function removeTask(id){
    if(confirm('Устгах уу')){
        document.getElementById(id).remove()

    }
}

function checkTask(id){
    alert(id)
}
