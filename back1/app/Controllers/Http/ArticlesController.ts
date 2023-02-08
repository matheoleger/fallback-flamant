import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article';
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'

export default class ArticleController {

    async getAllArticles({response}: HttpContextContract) {
        const articles = await Article.all()
        return response.json(articles);
    }

    async getArticle({request, response}: HttpContextContract) {
        const article = await Article.findOrFail(request.param('id'));
        return response.json(article);
    }

    async createArticle({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateArticleValidator);
        const user = await Article.create(payload);
        return response.json(user);
    }

    async updateArticle({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateArticleValidator);
        const article = await Article.updateOrCreate({ idArticle: request.param('id') }, payload);
        return response.json(article);
    }

    async deleteArticle({request, response}: HttpContextContract) {
        const article = await Article.findOrFail(request.param("id"));
        await article.delete();
        return response.json({ data: article });
    }
}
