import prisma from "../db";


// GetALL
export const getProducts = async (req, res) =>{	
	const user = await prisma.user.findUnique({
		where:	{
			id : req.user.id
		},
		include:	{
			products:	true
		}
	});
	res.json({data: user.products})
};

// GetOne
export const getOneProduct = async (req, res) =>{
	const product = await prisma.product.findUnique({
		where:	{
			id_belongsToId:	{
				id:	req.params.id,
				belongsToId:	req.user.id
			}
		}
	});
	res.json({data: product})
};

export const createProduct =async (req, res) => {
	const product = await prisma.product.create({
		data:	{
			name:	req.body.name,
			belongsToId:	req.user.id
		}
	});

	res.json({data: product})
};

export const updateProduct = async (req, res) => {
	const updated = await prisma.product.update({
		where:	{
			id:	req.params.id
		},
		data:	{
			name:	req.body.name,
			belongsToId:	req.user.id
		}
	});
	res.json({data: updated})
};

export const deleteProduct = async (req, res) => {
	try	{
		const deleted = await prisma.product.delete({
			where:	{
				id_belongsToId:	{
					id:	req.params.id,
					belongsToId:	req.user.id
				}
			}
		});
		res.json({data: deleted})
	}	catch (e)	{
		res.status(404);
		res.json({message: 'Not found'})
	}
};