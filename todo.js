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
 todos.push(task)
}
  
function delete(Id){
  let index=todos.findIndex(function(task){
    return task.Id==Id;
  });
  if(index!==1){
    todos.splice(index,1)
  }
}


if(command==="add"){
    add(title);
    }
    else if(command==="delete"){
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

