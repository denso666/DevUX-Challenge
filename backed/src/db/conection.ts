import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config({export:true});

const client = await new Client().connect({
    hostname: env.DB_HOSTNAME,
    username: env.DB_USER,
    db: env.DB_NAME,
    password: env.DB_PASSWORD
});

export default client;