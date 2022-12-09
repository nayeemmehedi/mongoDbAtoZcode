const express = require("express");
const { getDb } = require("../utls/dbConnect");
const { ObjectId } = require("mongodb");

/**
 * @api {toolsControllerGet} /tool get all value
 *
 */

module.exports.toolsControllerGet = async (req, res, next) => {
  const db = getDb();

  try {
    const value = await db.collection("bangla").find().toArray();

    res.status(200).send({
      status: "success",
      data: value,
    });
  } catch (error) {
    next(error.message);
  }
};

/**
 * @api {toolsControllerGetById} /tool/:id get specifice value
 *
 */



//COMMENTS
/**
 * @api {toolsControllerPost} /tool post specifice value
 * @apiDescriptions specific value posted here
 * @apiPermission admin
 * @apiParams there is no params
 * @apiSuccess {200}
 * @apiError {400} if value didn't save
 *
 */

module.exports.toolsControllerPost = async (req, res, next) => {
  const db = getDb();

  try {
    const value = await db.collection("bangla").insertOne(req.body);

    if (!value.insertedId) {
      return res.status(400).send("Value didn't save,Something goes wrong..");
    }
    res.send({
      status: "Success",
      message: "Successfully Posted.",
      data: req.body,
    });
  } catch (error) {
    next(error.message);
  }
};


module.exports.toolsControllerPostMany = async (req, res, next) => {
  const db = getDb();

  try {
    const value = await db.collection("bangla").insertMany(req.body);
    console.log(value)

    if (!value.insertedCount) {
      return res.status(400).send("Value didn't save,Something goes wrong..");
    }
    res.send({
      status: "Success",
      message: "Successfully Posted.",
      data: req.body,
    });
  } catch (error) {
    next(error.message);
  }
};



module.exports.toolsControllerPatchMany = async (req, res, next) => {
  const db = getDb();

  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).send("Id havent organazation properly..");
    }
    const value = await db
      .collection("bangla")
      .updateMany({ _id: ObjectId(id) }, { $set: req.body });
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
