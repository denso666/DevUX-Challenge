import { Router } from "https://deno.land/x/oak/mod.ts";
import humanCtrll from '../controllers/human.controller.ts';

const HumanRouter: Router = new Router();

HumanRouter
    .get('/humans', humanCtrll.get)
    .get('/humans/:id', humanCtrll.get)
    .post('/humans', humanCtrll.post)
    .put('/humans', humanCtrll.update)
    .delete('/humans/:id', humanCtrll.delete);

export default HumanRouter;