class AddColumnToGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :group_type, :integer, default: 0, null:false, limit: 1
    add_column :groups, :image, :string

    add_index :groups, :group_type
  end
end
