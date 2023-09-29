import { PrismaClient } from "@prisma/client";
import express from "express";
import "dotenv/config";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());


app.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.post(`/post`, async (req, res) => {
  try {
    const post = req.body;

    if (!post.title || !post.content) {
      return res.status(400).json({ error: 'Le titre et son contenu sont obligatoire.' });
    }

    const result = await prisma.post.create({
      data: post,
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une erreur s'est produite lors de la création d'un post." });
  }
});

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.put('/post/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(post)
})


async function main() {
  
}
app.listen(`${process.env.PORT}`, () => {
  console.log(`Le serveur est démarré sur le port ${process.env.PORT}`);
});

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
