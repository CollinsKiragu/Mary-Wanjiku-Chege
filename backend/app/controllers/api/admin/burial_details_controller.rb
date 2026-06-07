module Api
  module Admin
    class BurialDetailsController < Api::BaseController
      def index
        details = BurialDetail.all
        render json: details
      end

      def create
        detail = BurialDetail.new(burial_detail_params)
        if detail.save
          render json: detail, status: :created
        else
          render json: { errors: detail.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        detail = BurialDetail.find(params[:id])
        if detail.update(burial_detail_params)
          render json: detail
        else
          render json: { errors: detail.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        detail = BurialDetail.find(params[:id])
        detail.destroy
        head :no_content
      end

      private

      def burial_detail_params
        params.require(:burial_detail).permit(
          :title, :service_date, :service_time, :venue_name, :venue_address, 
          :directions, :latitude, :longitude, :map_url, :additional_info, :is_active
        )
      end
    end
  end
end