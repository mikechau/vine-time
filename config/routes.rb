VineTime::Application.routes.draw do

  root to: 'videos#index'
  get 'video', to: 'videos#show', as: :video
  get 'about', to: 'static_pages#about', as: :about
  get 'contact', to: 'static_pages#contact', as: :contact

  get 'api/v1/videos', to: 'videos#api_list_all', defaults: {format: :json}
  get 'api/v1/video/:id', to: 'videos#api_get_one', defaults: {format: :json}
end
