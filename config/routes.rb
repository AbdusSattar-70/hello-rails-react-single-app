Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    resources :greetings
  end
end
