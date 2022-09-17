class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/people" do
    people = Person.all
    people.to_json(include: :bets)
  end

end
