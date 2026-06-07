class CreateEvents < ActiveRecord::Migration[8.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.datetime :event_date
      t.string :video_url
      t.string :platform
      t.boolean :is_live
      t.boolean :featured

      t.timestamps
    end
  end
end
