import { Context } from "https://deno.land/x/oak/mod.ts";
import { iBook } from '../interfaces/book.interface.ts';
import client from '../db/conection.ts';

//  object
const bookCtrll:any = {};

// get one or all admins
bookCtrll.get = async ({ response, params }: Context|any ) => {
    try {
        let result:any;
        if (params.id) {
            result = await client.query('select * from Book where id=?',[params.id]);
        } else {
            result = await client.query('select * from Book');
        }
        response.body = result;
    }
    catch (error) {
        console.log(error);
        response.body = [];
    }
}

// post one admin
bookCtrll.post = async ({ request, response }: Context) => {
    try {
        const body: iBook = await request.body().value;
        console.log(body);

        const date = new Date();
        const result = await client.execute('insert into Book(id,name,author,publication_date) values(?,?,?,?)', [
            0,
            body.name,
            body.author,
            `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        ]);

        if (result.affectedRows) {
            response.body = {"post":"true"};
        } else {
            response.body = {"post":"false"};
        }
    }
    catch (error) {
        console.log(error);
        response.body = {"post":"false"};
    }
}

// update admin
bookCtrll.update = async ({ request, response }: Context) => {
    try {
        const body: iBook = await request.body().value;
        const result = await client.execute('update Book set name=?, author=?, publication_date=? where id=?',[
            body.name,
            body.author,
            body.publication_date,
            body.id
        ]);
        if (result.affectedRows) {
            response.body = {"update":"true"};
        } else {
            response.body = {"update":"false"};
        }
    }
    catch (error) {
        console.log(error);
        response.body = {"update":"false"};
    }
}

// delete one admin
bookCtrll.delete = async ({ response, params }: Context|any) => {
    try {
        let result = await client.execute('delete from Book where id = ?', [params.id]);

        if (result.affectedRows) {
            response.body = {"delete":"true"};
        } else {
            response.body = {"delete":"false"};
        }
    }
    catch (error) {
        console.log(error);
        response.body = {"delete":"false"};
    }
}

export default bookCtrll;