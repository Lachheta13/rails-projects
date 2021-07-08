class AddPartNumberToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :part_number, :string
  end
end
