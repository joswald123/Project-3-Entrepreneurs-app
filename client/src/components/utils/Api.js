import axios from "axios";

export default {

    getAllProjects: function () {
        return axios.get("api/projects");
    },
    
    addProject: function(addProject) {
        console.log(addProject, 'addProject')
        return axios.post("/api/projects", addProject)
        
    },

}