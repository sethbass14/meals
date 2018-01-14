class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :image_url, :youtube_url
  has_many :ingredients
end
