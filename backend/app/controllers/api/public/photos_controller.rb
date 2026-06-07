# module Api
#   module Public
#     class PhotosController < ApplicationController
#       # GET /api/public/photos - Fetch approved photos for gallery
#       def index
#         photos = Photo.approved.recent
#         render json: photos
#       end

#       # POST /api/public/photos - Public photo upload (no auth required)
#       def create
#         photo = Photo.new(photo_params)
        
#         # Force approval to false for public uploads
#         photo.approved = false
        
#         if photo.save
#           render json: { 
#             message: 'Photo uploaded successfully and is pending approval.',
#             photo: photo 
#           }, status: :created
#         else
#           render json: { 
#             error: 'Failed to upload photo',
#             details: photo.errors.full_messages 
#           }, status: :unprocessable_entity
#         end
#       end

#       private

#       def photo_params
#         params.require(:photo).permit(:title, :image_url, :cloudinary_id, :category)
#       end
#     end
#   end
# end


module Api
  module Public
    class PhotosController < ApplicationController
      # GET /api/public/photos - Fetch approved photos for gallery
      def index
        photos = Photo.approved.recent
        render json: photos
      end

      # POST /api/public/photos - Public photo upload (auto-approved)
      def create
        photo = Photo.new(photo_params)
        
        # AUTO-APPROVE: Set to true so photos appear immediately
        photo.approved = true
        
        if photo.save
          render json: { 
            message: 'Photo uploaded successfully.',
            photo: photo 
          }, status: :created
        else
          render json: { 
            error: 'Failed to upload photo',
            details: photo.errors.full_messages 
          }, status: :unprocessable_entity
        end
      end

      private

      def photo_params
        params.require(:photo).permit(:title, :image_url, :cloudinary_id, :category)
      end
    end
  end
end