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

function findProjectTasks(id) {
  return db('tasks')
  .join('projects', 'project.id', 'tasks.project_id')
  .where({project_id: id})
}

function findProjectResources(id) {
  return db('resources')
  .join('projects', 'projects.id', 'resources.project_id')
  .where({project_id: id})
}