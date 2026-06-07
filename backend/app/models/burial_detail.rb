class BurialDetail < ApplicationRecord
  validates :title, presence: true
  validates :service_date, presence: true
  validates :venue_name, presence: true
  scope :active, -> { where(is_active: true) }
  scope :upcoming, -> { where('service_date >= ?', Date.current).order(service_date: :asc) }
  
  def coordinates
    [latitude, longitude] if latitude.present? && longitude.present?
  end
end