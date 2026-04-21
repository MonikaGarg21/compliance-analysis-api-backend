import express from 'express';

import protect from '../middlewares/auth.middleware.js';
import { createOrganisation } from '../controllers/organisation.controller.js';



const router = express.Router();
router.post("/create",protect,createOrganisation);
// router.post("/create",protect,createOrganisation);

export default router;
