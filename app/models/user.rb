class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #Association
  has_many :members
  has_many :users, through: :members

  mount_uploader :profile_image, ImageUploader
end
