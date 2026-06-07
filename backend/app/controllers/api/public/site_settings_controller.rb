module Api
  module Public
    class SiteSettingsController < ApplicationController
      def index
        settings = SiteSetting.all.map { |s| [s.key, s.value] }.to_h
        render json: settings
      end
    end
  end
end