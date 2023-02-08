import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import User from 'App/Models/User';
// import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
    async login({ request, response, auth }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        try {
            const token = auth.use('api').attempt(email, password, { expiresIn: '45 mins'});
            console.log(token)
            // // Lookup user manually
            // const user = await User
            //     .query()
            //     .where('email', email)
            //     .whereNull('is_deleted')
            //     .firstOrFail()

            // // Verify password
            // if (!(await Hash.verify(user.password, password))) {
            //     return response.unauthorized('Invalid credentials')
            // }
            
            // // Generate token
            // const token = await auth.use('api').generate(user);
            return token;
        } catch {
            return response.unauthorized('Invalid credentials');
        }
    }

    async me({auth, response}: HttpContextContract) {
        return response.json(auth.user);
    }
}
