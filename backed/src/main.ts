// modules
import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// routes import
import BookRouter from './routes/book.routes.ts';
import HumanRouter from './routes/human.routes.ts';


// app
const app = new Application();


// config enviroment variables
const env = config({export:true});


// routes
app.use(BookRouter.routes());
app.use(HumanRouter.routes());


// listener
await app.listen({ port:parseInt(env.PORT) });