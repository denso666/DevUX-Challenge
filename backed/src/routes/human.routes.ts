import { Router } from "https://deno.land/x/oak/mod.ts";
import HumanCtrll from '../controllers/human.controller.ts';

const HumanRouter: Router = new Router();

HumanRouter
    .get('/humans', HumanCtrll.get)
    .get('/humans/:id', HumanCtrll.get);

export default HumanRouter;