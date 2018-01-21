class ApplicationController < ActionController::API

  def user_id
    current_user.id
  end

  def current_user
    @current_user ||= User.find_by(id: token.first["id"])
  end

  def token
    begin
      JWT.decode(request.headers['Authorization'], 'secret', true, {:algorithm => 'HS256'})
    rescue JWT::DecodeError
      [{}]
    end
  end

  def issue_token(payload)
    JWT.encode(payload, 'secret', 'HS256')
  end

end
