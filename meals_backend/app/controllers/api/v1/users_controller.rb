class Api::V1::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status:200
    else
      render json: {error: "unable to save new user"}, status: 401
    end
  end

  def update
    @user = User.find(params[:user_id])
    @meal = Meal.find(params[:meal_id])
    @user.meals << @meal
    if @user.save
      render json: {username: @user.username, id: @user.id, meals: @user.meals, meal_ids: @user.meal_ids}, status: 201
    else
      render json: {error: "The meal could not be saved"}
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end


end
