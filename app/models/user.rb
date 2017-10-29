class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #Association
  has_many :members
  has_many :groups, through: :members, dependent:   :destroy

  has_many :friends_to_user, class_name: :Friend, foreign_key: :to_user_id, dependent: :destroy
  has_many :friends_from_user, class_name: :Friend, foreign_key: :from_user_id, dependent: :destroy

  has_many :to_user, through: :friends_from_user, source: :to_user
  has_many :from_user, through: :friends_to_user, source: :from_user

  def friends
      from_user + to_user
  end

  mount_uploader :profile_image, ImageUploader
end
