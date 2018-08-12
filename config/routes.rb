Rails.application.routes.draw do
	root 'pages#welcome'
	get 'project' => 'pages#project'
	get 'about' => 'pages#about'
	get 'books' => 'pages#books'
	get 'contact' => 'pages#contact'
	get 'leadership' => 'pages#leadership'
	get 'family' => 'pages#family'
	get 'familyMom' => 'pages#familyMom'
	get 'familyProtected' => 'pages#familyProtected'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
