const jsonServer = require("json-server");
// const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// app.use(auth);
app.use(router);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log("Json server is Run!!!!!");
});
