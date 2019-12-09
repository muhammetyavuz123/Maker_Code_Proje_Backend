const express = require("express");
const router = express.Router();

const CardsModel = require("../models/Cards");
const checkToken = require("../middleware/checkToken");

router.get("/", async (request, response) => {
  const cards = await CardsModel.find();
  response.send(cards);
});

router.get("/:id", async (request, response) => {
  const cardId = request.params.id;
  const cards = await CardsModel.findById(cardId);

  if (!cards)
    return response.status(404).send(`Böyle bir User bulanamadı${cardId}`);
  response.send(cards);
});

router.post("/", checkToken, async (request, response) => {
  const card = new CardsModel(request.body);
  const saved = await card.save();

  response.send(saved);
});

router.put("/:id", async (request, response) => {
  const cardId = request.params.id;
  const update = request.body;
  const card = await CardsModel.findByIdAndUpdate(cardId, update, {
    new: true
  });
  if (!card)
    response
      .status(404)
      .send(`Güncellenmek istenen kullanıcı bulunamadı ${cardId}`);
  response.send(card);
});

router.delete("/:id", checkToken, async (request, response) => {
  const cardId = request.params.id;
  const card = await CardsModel.findByIdAndDelete(cardId);
  if (!card)
    response.status(404).send(`Silinmek istenen Kullanıcı Bulunamadı${cardId}`);

  response.send(card);
});
module.exports = router;
