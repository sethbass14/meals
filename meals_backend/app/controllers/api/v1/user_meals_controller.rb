class Api::V1::UserMealsController < ApplicationController

  def create
    @meal = Meal.find(params[:meal_id])
    current_user.meals << @meal
    if current_user.save
      render json: {username: current_user.username, id: current_user.id, meals: current_user.meals, meal_ids: current_user.meal_ids}, status: 201
    else
      render json: {error: "The meal could not be saved", username: current_user.username, id: current_user.id, meals: current_user.meals, meal_ids: current_user.meal_ids }
    end
  end
end
