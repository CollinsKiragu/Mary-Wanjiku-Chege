# Rails.application.routes.draw do
#   devise_for :users
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
#   # Can be used by load balancers and uptime monitors to verify that the app is live.
#   get "up" => "rails/health#show", as: :rails_health_check

#   # Defines the root path route ("/")
#   # root "posts#index"
# end

Rails.application.routes.draw do
  # Devise Authentication Routes
  devise_for :users, path: 'api/auth', path_names: {
    sign_in: 'sign_in',
    sign_out: 'sign_out',
    registration: 'sign_up'
  }, controllers: {
    sessions: 'api/auth/sessions',
    registrations: 'api/auth/registrations'
  }, defaults: { format: :json }

  # API Routes
  namespace :api do
    
    # PUBLIC ROUTES (No authentication required)
    namespace :public do
      resources :tributes, only: [:index, :create]
      resources :photos, only: [:index, :create]  # <-- ADD :create here
      resources :pages, only: [:show], param: :slug
      resources :events, only: [:index, :show]
      resources :burial_details, only: [:index, :show]
      resources :contributions, only: [:index]
      
      # This is the specific route for Site Settings
      get 'site_settings', to: 'site_settings#index'
    end

    # ADMIN ROUTES (Requires JWT authentication)
    namespace :admin do
      get 'current_user', to: 'current_user#show'
      
      resources :tributes, only: [:index, :update, :destroy]
      resources :photos, only: [:index, :create, :update, :destroy]
      resources :pages, only: [:index, :update]
      resources :events, only: [:index, :create, :update, :destroy]
      resources :burial_details, only: [:index, :create, :update, :destroy]
      resources :contributions, only: [:index, :create, :update, :destroy]
      resources :site_settings, only: [:index, :update]
    end
  end

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check
end