class CreateMealIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_ingredients do |t|
      t.belongs_to :meal, foreign_key: true
      t.belongs_to :ingredient, foreign_key: true

      t.timestamps
    end
  end
end
