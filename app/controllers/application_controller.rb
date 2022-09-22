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
    new_person.to_json(include: {bets: {description: params[:description],
      odds: params[:odds],
      league: params[:league],
      bet_type: params[:bet_type],
      result: params[:result],
      units_change: params[:units_change],
      segment: params[:segment]
    }})
  end

  delete '/people/:id' do
    person_bet = Person.find(params[:id])
    person_bet.destroy
    person_bet.to_json
  end

  patch '/people/:id' do
    person_bet = Person.find(params[:id])
    person_bet.update(name:params[:name])
    person_bet.to_json(include: {bets: {description:params[:description], odds:params[:odds], league:params[:league], bet_type:params[:bet_type], result:params[:result], units_change:params[:units_change], segment:params[:segment]}})
  end

end