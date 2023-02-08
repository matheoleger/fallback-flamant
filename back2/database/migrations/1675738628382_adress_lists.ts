import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AdressLists extends BaseSchema {
    protected tableName = 'adress_lists'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id')
            table.string('adress').notNullable()
            table.integer('port').notNullable()
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
