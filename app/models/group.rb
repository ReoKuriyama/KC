class Group < ApplicationRecord
  #Association
  has_many :members
  has_many :users, through: :members
end
