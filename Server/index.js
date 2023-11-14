import fastify from "fastify";
import mysql from "mysql2";
import cors from '@fastify/cors'


const app = fastify();
await app.register(cors, {})


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_blog",
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


app.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          post: { type: 'array' }
        }
      }
    }
  },
  handler: async function (request, reply) {
    const posts = await getPosts(); 
    reply.send({ post: posts });
  }
});




// const addPost = (title, content) => {
//   return new Promise((resolve, reject) => {
//     // Notez que ceci est un exemple simple. En pratique, vous devriez valider et échapper les données utilisateur avant de les utiliser dans une requête SQL.
//     db.query("INSERT INTO `post` (title, content) VALUES (?, ?)", [title, content], function (err, result) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// app.post("/post", async (req, res) => {
//   const { title, content } = req.body;

//   try {
//     const result = await addPost(title, content);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Erreur interne du serveur");
//   }
// });



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
