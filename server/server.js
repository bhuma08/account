
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const cheeseRoutes = require('./routes/cheese');
server.use('/cheese', cheeseRoutes);

const userRoutes = require('./routes/user')
server.use('/user', userRoutes)

const loginRoutes = require('./routes/login')
server.use('/login', loginRoutes)

const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send('1, 2, 3 Say Cheese!'))

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))