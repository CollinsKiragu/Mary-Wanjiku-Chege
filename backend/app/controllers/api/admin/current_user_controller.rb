module Api
  module Admin
    class CurrentUserController < Api::BaseController
      def show
        render json: {
          user: {
            id: current_user.id,
            email: current_user.email,
            name: current_user.name,
            is_admin: current_user.is_admin
          }
        }
      end
    end
  end
end