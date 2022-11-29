const express = require("express");
const Agent = require("../models/agent");

const router = express.Router();

//Router to create Agent
router.post("/agent", async (req, res) => {
  const { os, lastKeepAlive, dateAdd, ip, name, id, version, status } =
    req.body;

  const agent = new Agent({
    os,
    lastKeepAlive,
    dateAdd,
    ip,
    name,
    id,
    version,
    status,
  });
  try {
    await agent.save();
    res.status(201).send(agent);
  } catch (e) {
    const errorMsg = [];
    if (e.errors) {
      Object.values(e.errors).forEach((error) => errorMsg.push(error.message));
      res.status(400).send(errorMsg);
    } else {
      res.status(400).send([e.message]);
    }
  }
});

//Router to get all Agents
router.get("/agents", async (req, res) => {
  try {
    await Agent.find({}).then((agents) => {
      res.json({ results: agents });
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Something Went Wrong!");
  }
});

//Router to update Agent by name
router.put("/:name", async (req, res) => {
  let name = req.params.name;
  try {
    let agent = await Agent.findOne({ name });
    Object.assign(agent, req.body);
    agent.save();
    if (agent) {
      res.send({ message: "udated successfully", agent });
    } else {
      res.status(404).send({ error: "Agent not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

//Router to delete Agent by id
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await Agent.deleteOne({ id }).then(() => {
      res.send("deleted successfully");
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Something Went Wrong!");
  }
});

module.exports = router;
