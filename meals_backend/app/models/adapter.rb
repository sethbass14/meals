class Adapter

  attr_reader :meals, :ingredients

  def initialize
    meal_request = RestClient.get('http://www.themealdb.com/api/json/v1/1/random.php', headers={'Accept' => 'application/json', 'Content-Type': 'application/json'})

    data = JSON.parse(meal_request)

    meal = Meal.create(name: data["meals"][0]['strMeal'], instructions: data["meals"][0]['strInstructions'], image_url: data["meals"][0]['strMealThumb'], youtube_url: data["meals"][0]['strYoutube'])

    num = 1
    until num > 20
      if data["meals"][0]["strIngredient#{num.to_s}"] != ''
        ingredient = Ingredient.find_or_create_by(name: data["meals"][0]["strIngredient#{num}"])
        meal.ingredients << ingredient
      end
      num += 1
    end

  end

end
