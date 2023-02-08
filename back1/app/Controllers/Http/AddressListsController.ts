import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AddressList from 'App/Models/AddressList';
import AddressListValidator from 'App/Validators/AddressListValidator';

export default class AddressListsController {

    async getAllAddressList({response}: HttpContextContract) {
        const addressLists = await AddressList.all()
        return response.json(addressLists);
    }

    async getAddressList({request, response}: HttpContextContract) {
        const addressList = await AddressList.findOrFail(request.param('id'));
        return response.json(addressList);
    }

    async createAddressList({request, response}: HttpContextContract) {
        const payload = await request.validate(AddressListValidator);
        const user = await AddressList.create(payload);
        return response.json(user);
    }

    async updateAddressList({request, response}: HttpContextContract) {
        const payload = await request.validate(AddressListValidator);
        const addressList = await AddressList.updateOrCreate({id : request.param('id') }, payload);
        return response.json(addressList);
    }

    async deleteAddressList({request, response}: HttpContextContract) {
        const addressList = await AddressList.findOrFail(request.param("id"));
        await addressList.delete();
        return response.json({ data: addressList });
    }
}
