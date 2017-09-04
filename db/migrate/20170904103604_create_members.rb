class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.integer :group_id, null:false, foreign_key: true
      t.integer :user_id,  null:false, foreign_key: true

      t.timestamps
    end
  end
end
