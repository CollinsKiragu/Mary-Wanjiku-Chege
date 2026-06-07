class Contribution < ApplicationRecord
  validates :title, presence: true
  validates :payment_type, presence: true
end