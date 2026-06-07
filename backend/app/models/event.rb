class Event < ApplicationRecord
  validates :title, presence: true
  scope :upcoming, -> { where('event_date >= ?', Time.current).order(event_date: :asc) }
  scope :featured, -> { where(featured: true) }
end