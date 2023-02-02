import * as user from '../user';


describe('/user handler', () => {
	it('Should create a new user', async () => {
		const req = {body	:{username: '4reha', password: 'passcode'}};
		const res = {json({token})	{
			expect(token).toBeTruthy();
		},
		status(status) {
			expect(status).toBe(200);
		}
	};
		await user.createNewUser(req, res, () => {});
	});
	it('Should fail in creating a new user', async () => {
		const req = {body	:{username: '4reha', password: 'passcode'}};
		const res = {json({token, message})	{
			expect(token).toBeFalsy();
			expect(message).toBe('Username already taken');
		},
		status(status) {
			expect(status).toBe(400);
		}
	};
		await user.createNewUser(req, res, () => {});
	});
});

// describe('/signin handler', () => {
// 	it('Should succuss in signing user', async () => {
// 		const req = {body	:{username: '4reha', password: 'passcode'}};
// 		const res = {json({token})	{
// 			expect(token).toBeTruthy();
// 		},
// 		status(status) {
// 			expect(status).toBe(200);
// 		}
// 	};
// 		await user.signin(req, res, () => {});
// 	});
// 	it('Should fail in creating a new user', async () => {
// 		const req = {body	:{username: 'areha', password: 'passcode'}};
// 		const res = {json({token, message})	{
// 			expect(token).toBeFalsy();
// 			expect(message).toBe('User not found');
// 		},
// 		status(status) {
// 			expect(status).toBe(404);
// 		}
// 	};
// 		await user.signin(req, res, () => {});
// 	});
// 	it('Should fail in creating a new user', async () => {
// 		const req = {body	:{username: 'areha', password: 'passcode'}};
// 		const res = {json({token, message})	{
// 			expect(token).toBeFalsy();
// 			expect(message).toBe('Invalid password');
// 		},
// 		status(status) {
// 			expect(status).toBe(401);
// 		}
// 	};
// 		await user.createNewUser(req, res, () => {});
// 	});
// });