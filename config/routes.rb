VineTime::Application.routes.draw do

  root to: 'videos#index'
  get 'video', to: 'videos#show', as: :video
  get 'about', to: 'static_pages#about', as: :about
  get 'contact', to: 'static_pages#contact', as: :contact

end
