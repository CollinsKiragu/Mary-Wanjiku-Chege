module Api
  module Auth
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      private

      def respond_with(resource, _opts = {})
        render json: {
          message: 'User registered successfully.',
          user: {
            id: resource.id,
            email: resource.email,
            name: resource.name
          }
        }, status: :created
      end

      def respond_to_on_destroy
        render json: { message: 'Logged out successfully.' }, status: :ok
      end
    end
  end
end