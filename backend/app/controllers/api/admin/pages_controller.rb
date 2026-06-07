module Api
  module Admin
    class PagesController < Api::BaseController
      def index
        pages = Page.all
        render json: pages
      end

      def update
        page = Page.find(params[:id])
        if page.update(page_params)
          render json: page
        else
          render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def page_params
        params.require(:page).permit(:title, :subtitle, :content)
      end
    end
  end
end