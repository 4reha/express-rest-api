import * as user from '../user';

describe('user handler', () => {
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
	it('Should fail create a new user', async () => {
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