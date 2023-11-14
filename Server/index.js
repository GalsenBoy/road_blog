import fastify from "fastify";
import mysql from "mysql2";
import cors from '@fastify/cors'


const app = fastify();
await app.register(cors, { 
  // put your options here
})


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_blog",
});

app.register(import("@fastify/routes"));

app.get("/", async (req, res) => {
  try {
    const queryResults = await getPosts(); // Attend que la fonction getPosts soit terminée
    res.send(queryResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur interne du serveur");
  }
});

const getPosts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `post`", function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const start = async () => {
  try {
    await app.listen({ port: 5000 });
    console.log(`Serveur démarré sur le port ${app.server.address().port}`);
  } catch (error) {
    console.error(error);
    /* eslint-disable no-undef */
    process.exit(1);
  }
};

start();
