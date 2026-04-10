import express from 'express';
import { createOrganization } from '../controllers/orgainisation.controller.js';
import protect from '../middlewares/auth.middleware.js';


const router = express.Router();
router.post("/create",protect,createOrganization);

export default router;
