class ApplicationController < ActionController::API

  def user_id
    # byebug
    current_user.id
  end

  def current_user
    # byebug
    puts 'hitting current user'
    @current_user ||= User.find_by(id: token.first["id"])
    if @current_user
      puts "current user is #{@current_user.username}"
    else
      puts 'no current user'
    end
    return @current_user
  end

  def token
    begin
      JWT.decode(request.headers['Authorization'], 'secret', true, {:algorithm => 'HS256'})
    rescue JWT::DecodeError
      [{}]
    end
  end

  def issue_token(payload)
    # byebug
    JWT.encode(payload, 'secret', 'HS256')
  end

end
