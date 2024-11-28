import { Priority } from "./Priority";
import { Status } from "./Status";
import { User } from "./User";

const person: User = new User('John', Status.ACTIVE);
person.name;
person.changeStatus(Status.ACTIVE);
person.addTodo('Take delivery', Priority.HIGH);
person.addTodo('StockTaking', Priority.HIGH);
person.addTodo('Collect the order');
person.addTodo('Throw out the trash', Priority.LOW);

person.displayTodos();