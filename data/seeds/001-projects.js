
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Make soccer cookies", project_description: "This is an order of cookies for a girls soccer team", completed: false},
        {project_name: "Harvest apples", project_description: "The apple trees are ready to be harvested", completed: false}
      ]);
    });
};
