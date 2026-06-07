class CreatePhotos < ActiveRecord::Migration[8.1]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :image_url
      t.string :cloudinary_id
      t.string :uploaded_by
      t.string :category
      t.boolean :approved

      t.timestamps
    end
  end
end
