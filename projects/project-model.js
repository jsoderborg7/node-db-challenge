const db = require('../data/db-config');

module.exports = {
  findProject,
  add,
  findProjectById,
  update,
  remove,
  findProjectTasks,
  findProjectResources
}

function findProject() {
  return db('projects')
}

function add(project) {
  return db('projects')
  .insert(project)
}

function findProjectById(id) {
  return db('projects')
  .where({id}).first()
}

function update(changes, id) {
  return db('projects')
  .where({id})
  .update(changes)
}

function remove(id) {
  return db('projects')
  .where({id})
  .del()
}
