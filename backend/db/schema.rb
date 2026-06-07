# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_06_06_215856) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "burial_details", force: :cascade do |t|
    t.text "additional_info"
    t.datetime "created_at", null: false
    t.text "directions"
    t.boolean "is_active"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "map_url"
    t.date "service_date"
    t.time "service_time"
    t.string "title"
    t.datetime "updated_at", null: false
    t.text "venue_address"
    t.string "venue_name"
  end

  create_table "contributions", force: :cascade do |t|
    t.string "account_name"
    t.string "account_number"
    t.string "bank_name"
    t.string "branch"
    t.datetime "created_at", null: false
    t.text "instructions"
    t.string "mpesa_account"
    t.string "mpesa_paybill"
    t.string "payment_type"
    t.string "title"
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.text "description"
    t.datetime "event_date"
    t.boolean "featured"
    t.boolean "is_live"
    t.string "platform"
    t.string "title"
    t.datetime "updated_at", null: false
    t.string "video_url"
  end

  create_table "pages", force: :cascade do |t|
    t.text "content"
    t.datetime "created_at", null: false
    t.string "slug"
    t.string "subtitle"
    t.string "title"
    t.datetime "updated_at", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.boolean "approved"
    t.string "category"
    t.string "cloudinary_id"
    t.datetime "created_at", null: false
    t.string "image_url"
    t.string "title"
    t.datetime "updated_at", null: false
    t.string "uploaded_by"
  end

  create_table "site_settings", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "key"
    t.datetime "updated_at", null: false
    t.text "value"
  end

  create_table "tributes", force: :cascade do |t|
    t.boolean "approved"
    t.text "content"
    t.datetime "created_at", null: false
    t.boolean "is_anonymous"
    t.string "name"
    t.string "relationship"
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_tributes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.boolean "is_admin"
    t.string "name"
    t.datetime "remember_created_at"
    t.datetime "reset_password_sent_at"
    t.string "reset_password_token"
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "tributes", "users"
end
