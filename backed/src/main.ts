// modules
import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// routes import
import BookRouter from './routes/book.routes.ts';
import HumanRouter from './routes/human.routes.ts';

// middlewares
import { oakCors } from "https://deno.land/x/cors/mod.ts";


// app
const app = new Application();


// config
const env = config({export:true});
app.use(oakCors());


// routes
app.use(BookRouter.routes());
app.use(HumanRouter.routes());


// listener
await app.listen({ port:parseInt(env.PORT) });