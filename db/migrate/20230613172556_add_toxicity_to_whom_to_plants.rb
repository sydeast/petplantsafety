class AddToxicityToWhomToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :toxic_cats, :boolean
    add_column :plants, :toxic_dogs, :boolean
    add_column :plants, :toxic_horses, :boolean
  end
end
