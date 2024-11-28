import { Status } from "./Status";
import { Priority } from "./Priority";

export class User {
    name: string;
    status: Status;
    todos: {todo:string; priority: Priority}[];

    constructor(name: string, status: Status) {
        this.name = name,
        this.status = status,
        this.todos = [];
    }

   changeStatus(newStatus:Status):string {
     this.status = newStatus;
     return `User status changed to ${newStatus}`;
   }

   addTodo(todo: string, priority: Priority = Priority.MEDIUM):string {
     this.todos.push({ todo, priority });
     return `Todo added: ${todo} (Priority: ${priority})`;
   }

   displayTodos():void  {
     console.log(`Todos for ${this.name}:`);
     this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
   }

   displayActiveTodos():void {
     console.log(`Active Todos for ${this.name}:`);
     this.todos
       .filter(todo => todo.priority !== Priority.HIGH)
       .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
   }
}