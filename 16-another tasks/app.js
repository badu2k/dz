const toDoList = {
  tasks: [ 
  { title: 'Помыть посуду', id: 1, priority: 1,}
  ],

  addTask: function(title, id, priority) {
    this.tasks.push({title, id, priority});
  },

  deleteTaskById: function(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  },

  updateTaskById: function(id, newTitle, newPriority) {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      if (newTitle !== undefined) {
        task.title = newTitle;
      }

      if (newPriority !== undefined) {
        task.priority = newPriority;
      }
    }
  },

  sortByPriority: function() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }

}

const newTask = {
    tasks: [{ 
      id: 1, 
      name: "тест", 
      description: "описание",
      order: 0
      }]
}

toDoList.addTask.call(newTask, 'Новая задача', 2, 5);
toDoList.deleteTaskById.call(newTask, 1);
toDoList.updateTaskById.call(newTask, 2, 'Обновлённая задача', 10);
toDoList.sortByPriority.call(newTask);
console.log(newTask.tasks);