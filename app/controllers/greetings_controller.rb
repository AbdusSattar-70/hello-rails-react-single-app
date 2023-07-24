class GreetingsController < ApplicationController
  def index; end

  def greeting
    @greetings = Greeting.all.sample
    render json: @greetings
  end
end