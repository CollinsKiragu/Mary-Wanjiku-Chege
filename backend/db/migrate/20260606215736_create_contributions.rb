class CreateContributions < ActiveRecord::Migration[8.1]
  def change
    create_table :contributions do |t|
      t.string :title
      t.string :payment_type
      t.string :account_name
      t.string :account_number
      t.string :bank_name
      t.string :branch
      t.string :mpesa_paybill
      t.string :mpesa_account
      t.text :instructions

      t.timestamps
    end
  end
end
