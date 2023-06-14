class AddAdditionalNamesToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :additional_names, :string
  end
end
