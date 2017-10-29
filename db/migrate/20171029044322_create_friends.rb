class CreateFriends < ActiveRecord::Migration[5.0]
  def change
    create_table :friends do |t|
      t.integer :to_user_id, null:false, foreign_key: true
      t.integer :from_user_id,  null:false, foreign_key: true

      t.timestamps
    end
    add_index :friends, :to_user_id
    add_index :friends, :from_user_id
    add_index :friends, [:to_user_id, :from_user_id], unique: true
  end
end
