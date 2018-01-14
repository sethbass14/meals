class Api::V1::MealsController < ApplicationController
  before_action :set_meal, only: [:destroy]


  def index
    @meals = Meal.all
    render json: @meals, status: 200
  end

  def create
    @meal = Meal.new(meal_params)
    if @meal.save
      render json: @meal, status: 200
    else
      render json: {message: 'unable to save data!', status: 400}
    end
  end

  def destroy
    @meal.destroy
    render json:{message: 'Meal destroyed!', status: 200}
  end

  private

  def meal_params
    params.permit(:name, :instructions, :youtube_url, :image_url)
  end

  def set_meal
    @meal = Meal.find(params[:id])
  end
end
