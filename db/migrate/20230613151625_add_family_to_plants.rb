class AddFamilyToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :family, :string
  end
end
