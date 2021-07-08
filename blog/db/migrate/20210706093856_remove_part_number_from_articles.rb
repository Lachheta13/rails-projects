class RemovePartNumberFromArticles < ActiveRecord::Migration[6.1]
  def change
    remove_column :articles, :part_number, :string
  end
end
