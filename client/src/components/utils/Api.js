import axios from "axios";

export default {

    getAllProjects: function () {
        return axios.get("api/projects");
    },
    
    addProject: function(addProject) {
        console.log(addProject, 'addProject')
        return axios.post("/api/projects", addProject)
        
    },
    getProject: function(id) {
        return axios.get("/api/projects" + id);
    },

    saveProject: function(saveProject) {
        return axios.post("/api/projects", saveProject);
    },

    deleteProject: function(id) {
        return axios.delete("/api/projects/" + id);
    },

    updateProject: function(id) {
        return axios.put("/api/projects/" + id);
    }



}