const sql = require("./db");

const Category = function (category) {
  this.cat_name = category.cat_name;
  this.is_deleted = category.is_deleted;
};

// Get all categories
Category.getAll = (result) => {
  sql.query("SELECT * FROM category", (error, response) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }
    result(null, response);
  });
};

// Create category
Category.create = (newCategory, result) => {
  sql.query("INSERT INTO category SET ?", newCategory, (error, response) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }
    result(null, { id: response.insertId, ...newCategory });
  });
};

// Update category by id
Category.updateById = (id, updatedCategory, result) => {
  sql.query(
    "UPDATE category SET ? WHERE id = ?",
    [updatedCategory, id],
    (error, response) => {
      if (error) {
        console.error(error);
        result(error, null);
        return;
      }

      if (response.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...updatedCategory });
    }
  );
};

// Delete category
Category.remove = (id, result) => {
  sql.query("DELETE FROM category WHERE id = ?", id, (error, response) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }

    if (response.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, response);
  });
};

module.exports = Category;
