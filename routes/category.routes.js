module.exports = app => {
  const categorries = require("../controllers/category.controller");

  app.get("/categories", categorries.findAll);

  app.post("/categories", categorries.create);

  app.put("/categories/:id", categorries.update);

  app.delete("/categories/:id", categorries.delete);
};
