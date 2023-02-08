/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//* User endpoints
Route.group(() => {
  Route.get('/', 'UsersController.getAllUsers')
  Route.get('/:id', 'UsersController.getUser')
  Route.post('/', 'UsersController.createUser')
  Route.put('/:id', 'UsersController.updateUser')
  Route.delete('/:id', 'UsersController.deleteUser')
}).prefix('/users')

//* Cart endpoints
Route.group(() => {
  Route.get('/', 'CartsController.getAllCarts')
  Route.get('/:id', 'CartsController.getCart')
  Route.post('/', 'CartsController.createCart')
  Route.put('/:id', 'CartsController.updateCart')
  Route.delete('/:id', 'CartsController.deleteCart')
}).prefix('/carts')

//* Article endpoints
Route.group(() => {
  Route.get('/', 'ArticlesController.getAllArticles')
  Route.get('/:id', 'ArticlesController.getArticle')
  Route.post('/', 'ArticlesController.createArticle')
  Route.put('/:id', 'ArticlesController.updateArticle')
  Route.delete('/:id', 'ArticlesController.deleteArticle')
}).prefix("/articles")

//* Adress list endpoints
Route.group(() => {
  Route.get('/', 'AddressListsController.getAllAddressList')
  Route.get('/:id', 'AddressListsController.getAddressList')
  Route.post('/', 'AddressListsController.createAddressList')
  Route.put('/:id', 'AddressListsController.updateAddressList')
  Route.delete('/:id', 'AddressListsController.deleteAddressList')
}).prefix("/addresslists")

//* Authentication endpoints
Route.post('/login', 'AuthController.login') // Return a Bearer Token when user logged in
Route.get('/me', 'AuthController.me').middleware('auth') // Protected access
