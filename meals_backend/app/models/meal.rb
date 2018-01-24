class Meal < ApplicationRecord
  has_many :meal_ingredients, :dependent => :destroy
  has_many :ingredients, through: :meal_ingredients
  has_many :user_meals
  has_many :users, through: :user_meals
end
