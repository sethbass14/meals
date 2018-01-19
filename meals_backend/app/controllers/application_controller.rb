class ApplicationController < ActionController::API

  def user_id
    current_user.id
  end

  def current_user
    @current_user ||= User.find_by(id: token)
  end

  def token
    request.headers['Authorization']
  end
end
