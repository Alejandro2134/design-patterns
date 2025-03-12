import { Command } from "./interface/Command";
import { Task } from "./Task";

export class DeleteCommand implements Command {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  execute(): void {
    this.task.updateState("deleted");
  }
}
