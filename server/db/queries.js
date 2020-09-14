// Select recipes relevant to a certain user that are favourited, $1 will be the user id 
// const index = `SELECT * FROM cheese_instace JOIN cheese_overview ON cheese_instance.cheese_id = cheese_overview.cheese_id WHERE cheese_overview.userid = $1`;
const index = `SELECT * from cheese_overview WHERE cheese_overview.userid = $1`;
const show = `SELECT * FROM cheese_overview WHERE cheese_id = $1 AND userid = $2`;
const createCheese = `INSERT INTO cheese_overview (recipe, userid) VALUES ($1, $2) RETURNING *`;
const createCheeseInstances = `INSERT INTO cheese_instance (cheese_id, status) VALUES ($1, false)`;
const userIndex = `SELECT * FROM users`;
const insertUser = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;
const userEmail = `SELECT * FROM users WHERE email = $1`


module.exports = {index, show, createCheese, createCheeseInstances, userIndex, insertUser, userEmail}