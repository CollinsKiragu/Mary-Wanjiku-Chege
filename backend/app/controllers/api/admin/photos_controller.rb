# module Api
#   module Admin
#     class PhotosController < Api::BaseController
#       def index
#         photos = Photo.recent
#         render json: photos
#       end

#       def create
#         photo = Photo.new(photo_params)
#         if photo.save
#           render json: photo, status: :created
#         else
#           render json: { errors: photo.errors.full_messages }, status: :unprocessable_entity
#         end
#       end

#       def update
#         photo = Photo.find(params[:id])
#         if photo.update(photo_params)
#           render json: photo
#         else
#           render json: { errors: photo.errors.full_messages }, status: :unprocessable_entity
#         end
#       end

#       def destroy
#         photo = Photo.find(params[:id])
#         photo.destroy
#         head :no_content
#       end

#       private

#       def photo_params
#         params.require(:photo).permit(:title, :image_url, :cloudinary_id, :category, :approved)
#       end
#     end
#   end
# end

module Api
  module Admin
    class PhotosController < Api::BaseController
      def index
        photos = Photo.recent
        render json: photos
      end

      def create
        photo = Photo.new(photo_params)
        
        # Validate that it's a Cloudinary URL
        unless photo.image_url&.include?('cloudinary.com')
          render json: { errors: ['Invalid image URL'] }, status: :unprocessable_entity
          return
        end
        
        if photo.save
          render json: photo, status: :created
        else
          render json: { errors: photo.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        photo = Photo.find(params[:id])
        if photo.update(photo_params)
          render json: photo
        else
          render json: { errors: photo.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        photo = Photo.find(params[:id])
        
        # Optionally delete from Cloudinary
        # Cloudinary::Uploader.destroy(photo.cloudinary_id) if photo.cloudinary_id.present?
        
        photo.destroy
        head :no_content
      end

      private

      def photo_params
        params.require(:photo).permit(:title, :image_url, :cloudinary_id, :category, :approved)
      end
    end
  end
end