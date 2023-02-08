import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InCarts extends BaseSchema {
    protected tableName = 'in_carts'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_in_cart')
            table.bigInteger('cart').notNullable().references('id_cart').inTable('carts').onDelete('CASCADE')
            table.bigInteger('article').notNullable().references('id_article').inTable('articles').onDelete('CASCADE')
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
