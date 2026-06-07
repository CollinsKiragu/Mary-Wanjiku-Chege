class CreateTributes < ActiveRecord::Migration[8.1]
  def change
    create_table :tributes do |t|
      t.string :name
      t.text :content
      t.boolean :is_anonymous
      t.string :relationship
      t.boolean :approved
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
