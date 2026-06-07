class Tribute < ApplicationRecord
  belongs_to :user, optional: true
  validates :name, presence: true
  validates :content, presence: true, length: { maximum: 5000 }
  scope :approved, -> { where(approved: true) }
  scope :recent, -> { order(created_at: :desc) }
end