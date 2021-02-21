import { Context } from "https://deno.land/x/oak/mod.ts";
import { iHuman } from '../interfaces/human.interface.ts';
import client from '../db/conection.ts';

const humanCtrll: any = {};

humanCtrll.get = async ({ response, params }: Context|any ) => {
    try {
        let result:any;
        if (params.id) {
            result = await client.query('select * from Human where id=?',[params.id]);
        } else {
            result = await client.query('select * from Human');
        }
        response.body = result;
    }
    catch (error) {
        console.log(error);
        response.body = [];
    }
}

// post one admin
humanCtrll.post = async ({ request, response }: Context) => {
    try {
        const body: iHuman = await request.body().value;
        await client.execute('insert into Human(id,name,email) values(?,?,?)', [
            0,
            body.name,
            body.email
        ]).catch(e => {
            if ( e ) response.body = {post:"false", message:"Duplicated email"};
            else response.body = {post:"true"};
        });
    }
    catch (error) {
        console.log(error);
        response.body = {post:"false", message:"DB_ERROR"};
    }
}


export default humanCtrll;