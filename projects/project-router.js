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

module.exports = router;