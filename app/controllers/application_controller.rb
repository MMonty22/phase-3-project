require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/people' do
    people = Person.all
    people.to_json(include: :bets)
  end

  post '/people' do  
    new_person = Person.create(name: params[:name])
    new_person.to_json
  end

  post '/people/:id/bets' do
    person = Person.find(params[:id])
    new_bet = person.bets.create(description: params[:description], odds: params[:odds], league: params[:league], result: params[:result], units_change: params[:units_change], bet_type: params[:bet_type], segment: params[:segment])
    new_bet.to_json
  end

  patch '/people/:id/:bet_id' do
    person = Person.find(params[:id])
    edit_bet = person.bets.find_by(id: params[:bet_id])
    edit_bet.update(description: params[:description], odds: params[:odds], league: params[:league], result: params[:result], units_change: params[:units_change], bet_type: params[:bet_type], segment: params[:segment])
    edit_bet.to_json
  end

  delete '/bet/:id' do
    bet = Bet.find(params[:id])
    bet.destroy
    bet.to_json
  end

end