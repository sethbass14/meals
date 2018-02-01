class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {username: user.username, id: user.id, token: issue_token({id: user.id}), meal_ids: user.meal_ids, meals: user.meals}
    else
      render json: {error: 'User is invalid'}, status: 401
    end
  end

  def show
    user = User.find(user_id)
    if user
      render json: {username: user.username, id: user.id, meals: user.meals, meal_ids: user.meal_ids}
    else
      render json: {error: 'invalid token'}, status: 401
    end
  end

  def destroy
    @current_user = nil
    byebug
    render json: {message: "current auth deleted"}, status: 201
  end


end
