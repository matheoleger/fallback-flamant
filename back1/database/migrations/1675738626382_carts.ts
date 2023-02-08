import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Carts extends BaseSchema {
    protected tableName = 'carts'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_cart')
            table.bigInteger('user').notNullable().references('id_user').inTable('users').onDelete('CASCADE')
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
