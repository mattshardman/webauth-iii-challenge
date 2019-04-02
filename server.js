const express = require("express");

const authRoutes = require("./api/auth/routes");

const app = express();

app.use(express.json());

app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`)); //eslint-disable-line