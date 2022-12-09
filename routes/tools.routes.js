const express = require("express")
const toolsController = require("../controller/tools.controller")
const toolsControllerid = require("../controller/tools.id.controller")


const tools = express.Router()

tools.route("/")
            .get(toolsController.toolsControllerGet)
            .post(toolsController.toolsControllerPost)
           


tools.route("/many")
            .post(toolsController.toolsControllerPostMany)
            
tools.route("/:id")
             .get(toolsControllerid.toolsControllerGetById)
             .patch(toolsControllerid.toolsControllerPatchId)
             .delete(toolsControllerid.toolsControllerDeleteId)





module.exports = tools