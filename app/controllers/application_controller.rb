require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  #create and read actions for both models
  #full CRUD capability for one of the models
  #have read for both and delete for bets
  get '/people' do
    people = Person.all
    people.to_json(include: :bets)
  end

  post '/people' do  
    new_person = Person.create(name: params[:name])
    new_person.to_json
  end

  post '/people/:person_id/bets' do
    person = Person.find_by(id: params[:person_id])
    new_bet = person.bets.create(description: params[:description], odds: params[:odds], league: params[:league], result: params[:result], units_change: params[:units_change], bet_type: params[:bet_type], segment: params[:segment])
    new_bet.to_json
  end

  patch '/people/:person_id/:bet_id' do
    person = Person.find_by(id: params[:person_id])
    edit_bet = person.bets.find_by(id: params[:bet_id])
    edit_bet.update(description: params[:description], odds: params[:odds], league: params[:league], result: params[:result], units_change: params[:units_change], bet_type: params[:bet_type], segment: params[:segment])
    edit_bet.to_json
  end

  delete '/people/:bet_id' do
    bet = Bet.find_by(id: params[:bet_id])
    bet.destroy
    bet.to_json
  end

end