class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :instructions
      t.string :image_url
      t.string :youtube_url

      t.timestamps
    end
  end
end
