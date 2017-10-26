class Group < ApplicationRecord
  #Association
  has_many :messages
  has_many :members
  has_many :users, through: :members

  def talk_title
    if users.count >= 3 #トークに所属しているユーザーが３人以上だった場合はグループ名を表示、２人の場合は相手のユーザー名
      return self.name
    else
      self.users.each do |user|
        return user.name
      end
    end
  end
end
