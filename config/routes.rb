Rails.application.routes.draw do
  root 'home#index'

  devise_for :users
  resources :groups, only: %i(edit, update) do
    resources :messages, only: %i(index create)
  end
  resources :users, only: %i(edit update)

   get 'search' => 'users#search'
end
