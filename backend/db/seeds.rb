# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


puts "🌱 Seeding database..."

# Create admin user
admin = User.find_or_create_by!(email: 'admin@marywanjiku.co.ke') do |user|
  user.password = 'SecurePassword123!'
  user.password_confirmation = 'SecurePassword123!'
  user.name = 'Family Admin'
  user.is_admin = true
end
puts "✅ Admin user created: #{admin.email}"

# Create default pages
pages_data = [
  {
    title: 'Biography',
    slug: 'biography',
    subtitle: 'A Life Well Lived',
    content: 'Mary Wanjiku Chege was a woman of unwavering faith, remarkable strength, and deep compassion whose life was defined by service to God, family, and community.Her legacy of resilience, humility, and unconditional love will continue to inspire generations to come.'
  },
  {
    title: 'Our Mother',
    slug: 'our-mother',
    subtitle: 'In Loving Memory',
    content: 'She was the heart of our family, a woman of unwavering faith and boundless love. Her warmth, wisdom, and kindness will forever be cherished.'
  }
]

# pages_data.each do |page_data|
#   Page.find_or_create_by!(slug: page_data[:slug]) do |page|
#     page.title = page_data[:title]
#     page.subtitle = page_data[:subtitle]
#     page.content = page_data[:content]
#   end
# end
# puts "✅ Default pages created"

pages_data.each do |page_data|
  # find_or_initialize_by finds it if it exists, or creates a new blank one if it doesn't
  page = Page.find_or_initialize_by(slug: page_data[:slug])
  
  # assign_attributes applies the new data
  page.assign_attributes(
    title: page_data[:title],
    subtitle: page_data[:subtitle],
    content: page_data[:content]
  )
  
  # save! writes the changes to the database (whether it was new or existing)
  page.save!
end
puts "✅ Pages updated successfully"

# Create site settings
settings_data = [
  { key: 'deceased_name', value: 'Mary Wanjiku Chege' },
  { key: 'birth_date', value: '1958-03-23' },
  { key: 'death_date', value: '2026-06-01' },
  { key: 'hero_subtitle', value: 'Beloved Mother, Grandmother, and Friend' },
  { key: 'contact_email', value: 'miriamkiragu00@gmail.com' },
  { key: 'contact_phone', value: '+254 720 442178' },
  { key: 'hero_image', value: '/images/hero-placeholder.jpg' }
]

# ✅ UPDATED: Uses find_or_initialize_by so it ALWAYS updates existing records
settings_data.each do |setting_data|
  setting = SiteSetting.find_or_initialize_by(key: setting_data[:key])
  setting.assign_attributes(value: setting_data[:value])
  setting.save!
end
puts "✅ Site settings created/updated"

# Create sample burial detail
# burial = BurialDetail.find_or_create_by!(title: 'Final Funeral Service') do |b|
#   b.service_date = Date.new(2026, 6, 9)
#   b.service_time = '7:00AM'
#   b.venue_name = 'Montezuma Monalisa Funeral Home'
#   b.venue_address = 'Raila Odinga Way (formerly Mbagathi Way), Nairobi'
#   b.latitude = -1.286389
#   b.longitude = 36.817223
#   b.directions = 'Situated opposite the Forces Memorial Hospital and right next to Umash Funeral Home.'
#   b.additional_info = 'Cortège leaves Montezuma Funeral Home for Lang\'ata Cemetery, where the church service and burial will take place.'
#   b.is_active = true
# end
# puts "✅ Burial detail created"

# latitude: -1.3302858, 
# longitude: 36.7773018,


# Find the record if it exists, or create a blank new one if it doesn't
burial = BurialDetail.find_or_initialize_by(title: 'Final Funeral Service')

# Assign the attributes (this overwrites whatever is currently in the database)
burial.assign_attributes(
  service_date: Date.new(2026, 6, 9),
  service_time: '7:00AM',
  venue_name: 'Montezuma Monalisa Funeral Home', # <-- Updated venue name
  venue_address: 'Raila Odinga Way (formerly Mbagathi Way), Nairobi',
  latitude: -1.3110257, # <-- Updated coordinates
  longitude: 36.8059996, # <-- Updated coordinates
  directions: 'Situated opposite the Forces Memorial Hospital and right next to Umash Funeral Home.',
  additional_info: 'Cortège leaves Montezuma Funeral Home for Lang\'ata Cemetery, where the church service and burial will take place.',
  is_active: true
)

# Save the changes to the database
burial.save!
puts "✅ Burial detail created/updated successfully"

# Create sample contribution info
contribution = Contribution.find_or_create_by!(title: 'Funeral Expenses') do |c|
  c.payment_type = 'mpesa'
  c.mpesa_paybill = '123456'
  c.mpesa_account = 'MaryWanjiku'
  c.instructions = 'Please use the Paybill number above. Your contribution will help cover funeral costs.'
end
puts "✅ Contribution info created"

# Create sample tribute
tribute = Tribute.find_or_create_by!(name: 'The Family', content: 'We will forever cherish the memories of our beloved Mary. Her love, wisdom, and kindness have shaped who we are today. Rest in peace, dear mother.') do |t|
  t.relationship = 'Family'
  t.approved = true
  t.user = admin  # <--- THIS FIXES THE ERROR
end
puts "✅ Sample tribute created"

puts "🎉 Seeding complete!"