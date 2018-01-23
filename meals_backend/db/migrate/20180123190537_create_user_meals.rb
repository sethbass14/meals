class CreateUserMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :user_meals do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :meal, foreign_key: true

      t.timestamps
    end
  end
end
