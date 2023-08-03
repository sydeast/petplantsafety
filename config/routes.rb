Rails.application.routes.draw do
  namespace :api do
    resources :plants


  end
  get "/api/search", to: "api/plants#search"
  post "/api/search", to: "api/plants#search"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
