import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import CreateUserValidator from 'App/Validators/CreateUserValidator';

export default class UsersController {

    async getUser({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param('id'));
        return response.json(user);
    }

    async getAllUsers({response}: HttpContextContract) {
        const users = await User.all()
        return response.json(users)
    }

    async createUser({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateUserValidator);
        const user = await User.create(payload);
        return response.json(user);
    }

    async updateUser({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateUserValidator);
        const user = await User.updateOrCreate({ idUser: request.param('id') }, payload);
        return response.json(user);
    }

    async deleteUser({request, response}: HttpContextContract) {
        const user = await User.findOrFail(request.param("id"));
        await user.delete();
        return response.json({ data: user });
    }
}
