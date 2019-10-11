
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "Buy cookie ingredients", task_notes: "Check whether or not you have them at home already", completed: true},
        {task_description: "Make soccer ball stencil", task_notes: "Look in stencil stash, you might have one", completed: false},
        {task_description: "Get the good apple picking bag", task_notes: "It's probably in your closet in the bag of bags", completed: false},
        {task_description: "Get ladder", task_notes: "Don't buy one, just borrow from the neighbors", completed: true}
      ]);
    });
};
