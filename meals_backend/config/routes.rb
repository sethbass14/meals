Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :meals
      resources :ingredients
      resources :users
      resources :user_meals
      delete '/delete_user_meal', to: 'user_meals#destroy'
      post '/auth', to: 'auth#create'
      get '/current_user', to: 'auth#show'
    end
  end

end
