class Api::GreetingsController < ApplicationController
  def index
    max = Greeting.count
    random = rand(1..max)
    @greeting = Greeting.find(random)

    render json: @greeting
  end
end
