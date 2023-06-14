class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :scientific_name
      t.boolean :toxicity
      t.text :toxic_principles
      t.text :clinical_signs
      t.timestamps
    end
  end
end
