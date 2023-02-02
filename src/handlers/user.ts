import prisma from '../db';
import { createJWT, hashPassword, comparePassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
	try{
		const user = await prisma.user.create({
			data: {
				username: req.body.username,
				password: await hashPassword(req.body.password)
			},
		});
		const token = createJWT(user);
		res.json({ token });
	} catch(e) {
		e.status = 400;
		e.message = 'Username already taken';
		next(e);
		return
	};
};

export const signin = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			username: req.body.username,
		},
	});

	if (!user) {
		res.status(404);
		res.json({ message: 'User not found' });
		return
	};

	const isValid = await comparePassword(req.body.password, user.password);

	if (!isValid) {
		res.status(401);
		res.json({ message: 'Invalid password' });
		return
	};

	const token = createJWT(user);
	res.json({ token });	
};
