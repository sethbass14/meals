class Api::V1::IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
    render json: @ingredients, status: 201
  end

end
