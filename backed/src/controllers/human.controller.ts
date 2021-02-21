import { Context } from "https://deno.land/x/oak/mod.ts";
import { iHuman } from '../interfaces/human.interface.ts';
import client from '../db/conection.ts';

const humanCtrll: any = {};

// get one or all humans
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

// post one human
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

// update human
humanCtrll.update = async ({ request, response }: Context) => {
    try {
        const body: iHuman = await request.body().value;
        const result = await client.execute('update Human set name=? where id=?',[
            body.name,
            body.id
        ]);
        if (result.affectedRows) response.body = {update:"true"};
        else response.body = {update:"false", message:"Posible format error"}; 
    }
    catch (error) {
        console.log(error);
        response.body = {update:"false", message:"DB_ERROR"};
    }
}

// delete one human
humanCtrll.delete = async ({ response, params }: Context|any) => {
    try {
        const result = await client.execute('delete from Human where id = ?', [params.id]);
        if (result.affectedRows) response.body = {delete:"true"};
        else response.body = {delete:"false", message:"Id not existing"};
    }
    catch (error) {
        console.log(error);
        response.body = {delete:"false", message:"DB_ERROR"};
    }
}

export default humanCtrll;