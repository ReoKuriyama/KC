class Member < ApplicationRecord
  #Association
  belongs_to :group
  belongs_to :user
end
