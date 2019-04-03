const express = require("express");

const verifyJWT = require("./api/auth-middleware");
const authRoutes = require("./api/auth/routes");
const userRoutes = require("./api/users/routes");

const app = express();

app.use(express.json());

app.use(verifyJWT);

app.use(authRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`)); //eslint-disable-line