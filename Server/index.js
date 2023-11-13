import fastify from "fastify";
const app = fastify()

app.register(import('@fastify/mysql'),{
    connectionString:'mysql://root@localhost/my_blog'
})

const start = async () => {
    try {
        await app.listen({port:3000})
    } catch (error) {
        console.error(error)
        // eslint-disable-next-line no-undef
        process.exit(1)
    }
}

start()