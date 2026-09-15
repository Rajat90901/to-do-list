const process=require('process');
const fs= require('fs')
const command=process.argv[2];
const title=process.argv[3];

function loadtask(){
  const data =fs.readFileSync('storage.json','utf-8')
  return JSON.parse(data)
}

function save (todos){
  fs.writeFileSync('storage.json',JSON.stringify(todos))
}

let todos = loadtask()

function add(title){
  task={
    Id:todos.length+1,
    Name:(title),
    complete:false
  }
 todos.push(task);
 save(todos)
}

  
function del(Id) {
    let index = todos.findIndex(function(task) {
        return task.Id === Number(Id);
    });

    if (index === -1) {
        console.log("not found");
        return;
    }

    todos.splice(index, 1);
    save(todos);
}

function list(){
  for(i=0;i<todos.length;i++){
    console.log(todos[i])
  }
}
function done(Id) {
    const index = todos.findIndex(function(task) {
        return task.Id === Number(Id);
    });

    if (index === -1) {
        console.log("not found");
        return;
    }

    todos[index].complete = true;
    save(todos);
}
  

if(command==="add"){
    add(title);
    }
    else if(command==="del"){
      del(title);
    }
    else if(command==="list"){
       list();
    }
    else if(command==="done"){
     done(title);
    }
    else{
      console.log("Not a valid command")
    }

