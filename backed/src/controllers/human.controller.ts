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


export default humanCtrll;