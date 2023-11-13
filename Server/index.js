import fastify from "fastify";
import mysql from "mysql2";

const app = fastify();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_blog'
  });

app.get("/", (req, res) => {
  try {
    const result =  db.query("SELECT * FROM post");
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

const start = async () => {
  try {
    await app.listen({ port: 5000 });
    console.log(`Server running on ${app.server.address().port}`);
  } catch (error) {
    console.error(error);
    /* eslint-disable no-undef */
    process.exit(1);
  }
};

start();
