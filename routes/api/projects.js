const router = require('express').Router();
const projectController = require("../../controllers/projectController")
const Project = require('../../models/projects')



router.route("/")
    .get(projectController.findAll)
    .post(projectController.create)


// router.get("/", async (req, res) => {
//     const projects = await Project.find();
//     res.json(projects)
// })

// router.get('/:id', async (req, res) => {
//     const Project = await Project.findById(req.params.id);
//     res.json(Project);
// })

// router.post('/', async (req, res) => {
//     const { index, picture, projectName, ideatorName, description, Cost } = req.body;
//     const project = new Project({index, picture, projectName, ideatorName, description, Cost})
//     await project.save();
//     res.json({status: 'Project Saved'});
// });

// router.put('/:id', async (req, res) => {
//     const { index, picture, projectName, ideatorName, description, Cost } = req.body;
//     const newProject = { index, picture, projectName, ideatorName, description, Cost };
//     await Project.findByIdAndUpdate(req.params.id, newProject);
//     res.json({status: 'Project Updated'});
// })

// router.delete('/:id', async (req, res) => {
//     await Project.findByIdAndRemove(req.params.id);
//     res.json({status: 'Project Deleted'});
// })



module.exports = router;   

   
