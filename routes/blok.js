const express = require("express");
const router = express.Router();

const blokModel = require("../models/Blok");

router.get("/", async (request, response) => {
  const blok = await blokModel.find();

  response.send(blok);
});

router.post("/", async (request, response) => {
  const blok = new blokModel(request.body);
  const saved = await blok.save();

  response.send(saved);
});

router.put("/:id", async (request, response) => {
  const blokId = request.params.id;
  const update = request.body;
  const blok = await blokModel.findByIdAndRemove(blokId, update, {
    new: true
  });
  if (!blok)
    response.status(404).send("Güncellemek istediğiniz Blok Bulunamadı");
  response.send(blok);
});

router.delete("/:id", async (request, response) => {
  const blokId = request.params.id;
  const blok = await blokModel.findByIdAndRemove(blokId);
  if (!blok) response.status(404).send("silmek istediğiniz blok bulunamadı");
});

module.exports = router;
