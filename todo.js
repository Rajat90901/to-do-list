const process=require('process');
const command=process.argv[2];
const title=process.argv[3];

const todos = []

function add(title){
  task={
    Id:todos.length()+1,
    Name:(title),
    complete:false
  }
 todos.push(task);
}
  
function del(Id){
  let index=todos.findIndex(function(task){
    return task.Id==Id;
  })
  if(index!==1){
    todos.splice(index,1)
  }
}

function list(){
  for(i=0;i<todos.length;i++){
    console.log(todos(i))
  }
}
function done(Id){
  const index=todos.findIndex(function(task){
    return task.Id===Id
  })
  if (!index){
    console.log("not found")
  }
  todos[index].compelete=true;
    

  }


if(command==="add"){
    add(title);
    }
    else if(command==="del"){
      delete(title);
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

