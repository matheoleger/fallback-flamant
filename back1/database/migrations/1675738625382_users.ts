import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
    protected tableName = 'users'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_user')
            table.integer('role').notNullable()
            table.string('email').notNullable()
            table.string('password').notNullable()
            table.string('firstname')
            table.string('lastname')
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
