let input = prompt("What would you like to do?");

const todos = ["Test"];


while(input.toLowerCase() !== 'quit' && input !== 'q') {
  if(input.toLowerCase() === "list"){
    for(let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (input.toLowerCase() === "new"){
    const newTodo = prompt("Okay, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete"));
    if(!Number.isNaN(index)){
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown Index");
    }

  }
  input = prompt("What would you like to do?");
}

console.log("Ok, you quit the app");
