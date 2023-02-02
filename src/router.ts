import  {Router}  from  'express';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createProduct, getOneProduct, getProducts, updateProduct, deleteProduct} from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const  router = Router();

/**
 * Product routes
 */
router.get('/product', getProducts);
router.post("/product/", body("name").isString(), handleInputErrors, createProduct);
router.get('/product/:id', getOneProduct);
router.post('/product/:id', async (req, res) => {
	return res.status(405).json({ message: 'Method not allowed' });
});
router.put("/product/:id", body("name").isString(), handleInputErrors, updateProduct);
router.delete('/product/:id', deleteProduct);

/**
 * Update routes
 */
router.get('/update', getUpdates);
router.post('/update/',
	body('title').isString(),
	body('body').isString(), 
	body('productId').isString() , handleInputErrors, createUpdate);
router.get('/update/:id', getOneUpdate);
router.put('/update/:id',
	body('title').optional(),
	body('body').optional(),
	body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
	body('version').optional(), handleInputErrors, updateUpdate);
router.delete('/update/:id', deleteUpdate);
	

/**
 * UpdatePoint routes
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id',
	body('name').optional().isString(),
	body('description').optional().isString(), () => {});
router.post('/updatepoint/',
	body('name').optional().isString(),
	body('description').optional().isString(),
	body('updateId').exists().isString(), () => {});
router.delete('/updatepoint/:id', () => {});


export default router;