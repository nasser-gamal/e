const { createTodo, getTodo } = require("../controllers/todo");

const router = require("express").Router();
const isAuth = require("../middleware/is-auth");


router.post("/create", isAuth, createTodo);
router.get("/getAll/:id", isAuth, getTodo);

module.exports = router;
