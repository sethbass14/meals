class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      render json: {username: user.username, id: user.id}
    else
      render json: {error: 'User is invalid'}, status: 401
    end
  end

  def show
    token = request.headers['Authorization']
    user = User.find(token)
    if user
      render json: {username: user.username, id:user.id}
    else
      render json: {error: 'invalid token'}, status: 401
    end
  end


end
