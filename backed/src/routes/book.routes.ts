import { Router } from "https://deno.land/x/oak/mod.ts";
import bookCtrll from '../controllers/book.controller.ts';

//  instance
const bookRouter: Router = new Router();

bookRouter
    .get('/books', bookCtrll.get)
    .get('/books/:id', bookCtrll.get)
    .post('/books', bookCtrll.post)
    .put('/books', bookCtrll.update)
    .delete('/books/:id', bookCtrll.delete);

export default bookRouter;