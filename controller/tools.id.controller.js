const { getDb } = require("../utls/dbConnect");
const { ObjectId } = require("mongodb");


module.exports.toolsControllerGetById = async (req, res, next) => {
    const db = getDb();
  
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        res.status(400).send("Id havent organazation properly..");
      }
      const value = await db.collection("bangla").findOne({ _id: ObjectId(id) });
      // .toArray();
  
      if (!value) {
        res.status(400).send(`This id ${id} have no value.`);
      }
  
      res.status(200).send({
        status: "success",
        data: value,
      });
    } catch (error) {
      next(error.message);
    }
  };


  module.exports.toolsControllerPatchId = async (req, res, next) => {
    const db = getDb();
  
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        res.status(400).send("Id havent organazation properly..");
      }
      const value = await db
        .collection("bangla")
        .updateOne({ _id: ObjectId(id) }, { $set: req.body });
      // .toArray();
  
      if (!value) {
        res.status(400).send(`This id ${id} have no value.`);
      }
  
      res.status(200).send({
        status: "success",
        data: value,
      });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.toolsControllerDeleteId = async (req, res, next) => {
  
    const db = getDb();
  
    try {
      const { id } = req.params;
      console.log(id);
  
      if (!ObjectId.isValid(id)) {
        res.status(400).send("Id havent organazation properly..");
      }
  
      const result = await db.collection("bangla").deleteOne({ _id: ObjectId(id) })
  
      if (!result.deletedCount) {
        return res.status(400).send(`Cant delete anything in this id ${id}`);
      }
  
      res.status(200).send({
        status: "success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
  