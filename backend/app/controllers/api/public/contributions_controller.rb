module Api
  module Public
    class ContributionsController < ApplicationController
      def index
        contributions = Contribution.all
        render json: contributions
      end
    end
  end
end