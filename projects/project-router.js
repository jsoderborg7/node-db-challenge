const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) =>{
  Projects.findProject()
  .then(project =>{
    res.json(project)
  })
  .catch(err =>{
    res.status(500).json({message: "Could not get projects"})
  })
})

router.post('/', (req, res) =>{
  const projectData = req.body;
  Projects.add(projectData)
  .then(project =>{
    res.status(201).json(project)
  })
  .catch(err =>{
    res.status(500).json({message: "Could not create project"})
  })
})

router.get('/:id', (req, res) =>{
  Projects.findProjectById(req.params.id)
  .then(project =>{
    if (project) {
      res.json(project)
    } else {
      res.status(404).json({message: "Project with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Could not get projects"})
  })
})

router.put('/:id', (req, res) =>{
  Projects.update(req.body, req.params.id)
  .then(project =>{
    if (project) {
      res.json(project)
    } else {
      res.status(404).json({message: "Project with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Could not get projects"})
  })
})

router.delete('/:id', (req, res) =>{
  Projects.remove(req.params.id)
  .then(project =>{
    if (project) {
      res.json({message: "Project removed"})
    } else {
      res.status(404).json({message: "Project with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Project could not be removed"})
  })
})

module.exports = router;