import { Router } from "express";
const router=Router();


/**import controllers */
import * as controller from '../controllers/controller.js'

/** Questions Routes API*/

router.route('/questions')
        .get(controller.getQuestions) /**Get Eequest */
        .post(controller.insertQuestions) /**Post Request */
        .delete(controller.dropQuestions)  /**DELETE Request */

router.post('/get-questions',controller.handleGetQuestions)

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)


export default router;