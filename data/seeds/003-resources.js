
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Pinterest", resource_description: "Use pinterest for design ideas"},
        {resource_name: "Roy", resource_description: "Roy has all the tools, borrow his ladder"}
      ]);
    });
};
