class CreateBurialDetails < ActiveRecord::Migration[8.1]
  def change
    create_table :burial_details do |t|
      t.string :title
      t.date :service_date
      t.time :service_time
      t.string :venue_name
      t.text :venue_address
      t.text :directions
      t.decimal :latitude
      t.decimal :longitude
      t.string :map_url
      t.text :additional_info
      t.boolean :is_active

      t.timestamps
    end
  end
end
