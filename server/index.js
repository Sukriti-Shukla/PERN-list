const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
//middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

//create item

app.post("/list", async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const chemical_formula = req.body.chemical_formula;
    const supplier = req.body.supplier;
    const newItem = await pool.query(
      "INSERT INTO chemical (name, description, chemical_formula, supplier) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, chemical_formula, supplier]
    );

    res.json(newItem.rows[0]);
    //console.log(res);
  } catch (err) {
    console.log(err.message);
  }
});

//get all items

app.get("/list", async (req, res) => {
  try {
    const items = await pool.query("SELECT * FROM chemical");
    res.json(items.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a item
app.get("/list/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await pool.query("SELECT * FROM chemical WHERE id = $1", [id]);
    res.json(item.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
//update a item
app.put("/list/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const chemical_formula = req.body.chemical_formula;
    const supplier = req.body.supplier;
    const updatedItem = await pool.query(
      "UPDATE chemical SET name = $1, description = $2, chemical_formula = $3, supplier = $4 WHERE id = $5 RETURNING *",
      [name, description, chemical_formula, supplier, id]
    );
    res.json(updatedItem.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//delete a item
app.use("/list/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await pool.query("DELETE FROM chemical WHERE id = $1", [
      id,
    ]);
    res.json("Item deleted");
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
