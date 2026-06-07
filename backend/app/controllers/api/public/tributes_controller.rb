# module Api
#   module Public
#     class TributesController < ApplicationController
#       def index
#         tributes = Tribute.approved.recent
#         render json: tributes
#       end

#       def create
#         tribute = Tribute.new(tribute_params)
#         if tribute.save
#           render json: { message: 'Tribute submitted successfully and is pending approval.' }, status: :created
#         else
#           render json: { errors: tribute.errors.full_messages }, status: :unprocessable_entity
#         end
#       end

#       private

#       def tribute_params
#         params.require(:tribute).permit(:name, :content, :is_anonymous, :relationship)
#       end
#     end
#   end
# end

module Api
  module Public
    class TributesController < ApplicationController
      def index
        tributes = Tribute.approved.recent
        render json: tributes
      end

      # def create
      #   tribute = Tribute.new(tribute_params)
        
      #   # Force approval to false for public submissions
      #   tribute.approved = false
        
      #   if tribute.save
      #     render json: { 
      #       message: 'Tribute submitted successfully and is pending approval.',
      #       tribute: tribute 
      #     }, status: :created
      #   else
      #     # Return the exact validation errors so we know what failed
      #     render json: { 
      #       error: 'Failed to submit tribute',
      #       details: tribute.errors.full_messages 
      #     }, status: :unprocessable_entity
      #   end
      # end

        def create
          tribute = Tribute.new(tribute_params)
          
          # Force approval to true so it shows up immediately
          tribute.approved = true
          
          # Explicitly set user_id to nil for public submissions
          tribute.user_id = nil 

          if tribute.save
            render json: { 
              message: 'Tribute submitted successfully.',
              tribute: tribute 
            }, status: :created
          else
            # Log the exact error to your Rails terminal
            Rails.logger.error "Tribute Validation Failed: #{tribute.errors.full_messages}"
            
            render json: { 
              error: 'Failed to submit tribute',
              details: tribute.errors.full_messages 
            }, status: :unprocessable_entity
          end
        end

      private

      def tribute_params
        params.require(:tribute).permit(:name, :content, :relationship, :is_anonymous)
      end
    end
  end
end