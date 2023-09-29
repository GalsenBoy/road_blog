import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "I like turtles" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
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
