class API::PlantsController < ApplicationController
  before_action :set_plant, only: %i[ show update destroy ]

  # GET /plants
  def index
    @plants = Plant.all

    render json: @plants
  end

  # GET /plants/1
  def show
    render json: @plant
  end

  # POST /plants
  def create
    @plant = Plant.new(plant_params)

    if @plant.save
      render json: @plant, status: :created, location: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plants/1
  def update
    if @plant.update(plant_params)
      render json: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  def search
    key = "%" + params[:q] + "%"
    # key = "%" + params[:q]
    @plants = Plant.where("name LIKE ? or additional_names LIKE ? or scientific_name LIKE ?", key, key, key)
    render json: @plants
  end

  # DELETE /plants/1
  def destroy
    @plant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant
      @plant = Plant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_params
      params.require(:plant.permit(id, name, additional_names, family, scientific_name, toxic_principles, clinical_signs, toxicity, toxic_cats, toxic_dogs, toxic_horses, toxic_to))
    end
end
