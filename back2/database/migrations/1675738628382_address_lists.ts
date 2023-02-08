import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddressLists extends BaseSchema {
    protected tableName = 'address_lists'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id')
            table.string('address').notNullable()
            table.integer('port').notNullable()
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
