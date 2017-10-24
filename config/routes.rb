Rails.application.routes.draw do
  root 'home#index'

  devise_for :users
  resources :messages, only: %i(index)
  resources :users, only: %i(edit update)

   get 'search' => 'users#search'
end
