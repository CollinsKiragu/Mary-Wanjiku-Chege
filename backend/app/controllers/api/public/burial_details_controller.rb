module Api
  module Public
    class BurialDetailsController < ApplicationController
      def index
        details = BurialDetail.active.upcoming
        render json: details
      end

      def show
        detail = BurialDetail.active.find(params[:id])
        render json: detail
      end
    end
  end
end