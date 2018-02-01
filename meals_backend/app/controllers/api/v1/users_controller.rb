class Api::V1::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      # @current_user = @user
      render json: {username: @user.username, id: @user.id, meals: @user.meals, meal_ids: @user.meal_ids}, status:200
    else
      render json: {error: "unable to save new user"}, status: 401
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end


end
