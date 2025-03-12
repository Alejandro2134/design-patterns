import { DeleteCommand } from "./DeleteCommand";
import { CommandInvoker } from "./CommandInvoker";
import { CompleteCommand } from "./CompleteCommand";
import { Task } from "./Task";
import { TaskManager } from "./TaskManager";

const main = () => {
  const taskManager = new TaskManager();
  const commandInvoker = new CommandInvoker();

  const task = new Task("Make dinner");

  console.log(`Task ${task.getName()} has state: ${task.getState()}`);

  taskManager.saveTaskState(task);
  commandInvoker.setCommand(new CompleteCommand(task));
  commandInvoker.executeCommand();

  console.log(`Task ${task.getName()} has state: ${task.getState()}`);

  taskManager.saveTaskState(task);
  commandInvoker.setCommand(new DeleteCommand(task));
  commandInvoker.executeCommand();

  console.log(`Task ${task.getName()} has state: ${task.getState()}`);

  taskManager.undoTask(task);

  console.log(`Task ${task.getName()} has state: ${task.getState()}`);
};

main();
