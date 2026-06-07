# class Photo < ApplicationRecord
#   validates :image_url, presence: true
#   scope :approved, -> { where(approved: true) }
#   scope :recent, -> { order(created_at: :desc) }
# end

class Photo < ApplicationRecord
  validates :image_url, presence: true
  
  scope :approved, -> { where(approved: true) }
  scope :pending, -> { where(approved: false) }  # <-- ADD THIS LINE
  scope :recent, -> { order(created_at: :desc) }
end