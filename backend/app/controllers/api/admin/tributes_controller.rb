module Api
  module Admin
    class TributesController < Api::BaseController
      def index
        tributes = Tribute.recent
        render json: tributes
      end

      def update
        tribute = Tribute.find(params[:id])
        if tribute.update(tribute_params)
          render json: tribute
        else
          render json: { errors: tribute.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        tribute = Tribute.find(params[:id])
        tribute.destroy
        head :no_content
      end

      private

      def tribute_params
        params.require(:tribute).permit(:approved)
      end
    end
  end
end