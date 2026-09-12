const process=require('process');
const command=process.argv[2];
const title=process.argv[3];


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