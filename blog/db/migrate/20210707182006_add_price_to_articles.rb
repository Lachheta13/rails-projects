class AddPriceToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :price, :string
  end
end
