module.exports = app => {
  const categorries = require("../controllers/category.controller");

  app.get("/categorries", categorries.findAll);

  app.post("/categorries", categorries.create);

  app.put("/categorries/:id", categorries.update);

  app.delete("/categorries/:id", categorries.delete);
};