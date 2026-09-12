const process=require('process');
const command=process.argv[2];
const title=process.argv[3];

const todo=[]

if(command==="add"){
    task={
        id: todo.length() + 1,
        name:title,
        complete: false
    }
    todo.push(task)}
    else if
        (command==="sad"){
      task={
        name:'not' +title
      }
      
       todo.push(task)  
        }
        else if
          (command==="dad"){
            task={
                name:'papa'+title+'papa'
            }
            todo.push(task)
          }
          else(
            console.log("not correct command")
          )
        console.log(todo)