import { Context } from "https://deno.land/x/oak/mod.ts";
import { iBook } from '../interfaces/book.interface.ts';
import client from '../db/conection.ts';

//  object
const bookCtrll: any = {};

// get one or all books in db
bookCtrll.get = async ({ response, params }: Context|any ) => {
    try {
        let result: any;
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

// post one book
bookCtrll.post = async ({ request, response }: Context) => {
    try {
        const body: iBook = await request.body().value;
        const date = new Date();

        await client.execute('insert into Book(id,name,author,publication_date) values(?,?,?,?)', [
            0,
            body.name,
            body.author,
            `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        ])
        .catch(e => {
            if ( e ) response.body = {post:"false", message:"Posible format error"}; 
            else response.body = {post:"true"};
        });
    }
    catch (error) {
        console.log(error);
        response.body = {post:"false", message:"DB_ERROR"};
    }
}

// update book
bookCtrll.update = async ({ request, response }: Context) => {
    try {
        const body: iBook = await request.body().value;
        const result = await client.execute('update Book set name=?, author=?, publication_date=? where id=?',[
            body.name,
            body.author,
            body.publication_date,
            body.id
        ]);
        if (result.affectedRows) response.body = {update:"true"};
        else response.body = {update:"false", message:"Posible query format"};
    }
    catch (error) {
        console.log(error);
        response.body = {update:"false"};
    }
}

// delete one book
bookCtrll.delete = async ({ response, params }: Context|any) => {
    try {
        const result = await client.execute('delete from Book where id = ?', [params.id]);
        if (result.affectedRows) response.body = {delete:"true"};
        else response.body = {delete:"false", message:"Id not existing"};
    }
    catch (error) {
        console.log(error);
        response.body = {delete:"false", message:"DB_ERROR"};
    }
}

export default bookCtrll;