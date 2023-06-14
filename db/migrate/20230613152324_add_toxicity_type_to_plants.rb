class AddToxicityTypeToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :toxic_to, :string
  end
end
