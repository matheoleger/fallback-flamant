import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart';
import CreateCartValidator from 'App/Validators/CreateCartValidator';

export default class CartsController {

    async getCart({request, response}: HttpContextContract) {
        const cart = await Cart.findOrFail(request.param('id'));
        return response.json(cart);
    }

    async getAllCarts({response}: HttpContextContract) {
        const carts = await Cart.all()
        return response.json(carts)
    }

    async createCart({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateCartValidator);
        const cart = await Cart.create(payload);
        return response.json(cart);
    }

    async updateCart({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateCartValidator);
        const cart = await Cart.updateOrCreate({ idCart : request.param('id') }, payload);
        return response.json(cart);
    }

    async deleteCart({request, response}: HttpContextContract) {
        const cart = await Cart.findOrFail(request.param("id"));
        await cart.delete();
        return response.json({ data: cart });
    }
}
