module Api
  module Public
    class PagesController < ApplicationController
      def show
        page = Page.find_by(slug: params[:slug])
        if page
          render json: page
        else
          render json: { error: 'Page not found' }, status: :not_found
        end
      end
    end
  end
end