module Api
  class BaseController < ApplicationController
    before_action :authenticate_user!
    before_action :require_admin

    private

    def require_admin
      unless current_user&.is_admin
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
end