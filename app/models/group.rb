class Group < ApplicationRecord

  # enum defenition
  enum group_type: { dm: 0, multi: 1 }

  # association
  has_many :messages
  has_many :members
  has_many :users, through: :members

  def last_message
    if messages.last
      if messages.last.image?
        "Image was uploaded"
      else
        messages.last.body
      end
    else
      "トークを始めよう"
    end
  end
end
