class Api::V1::StreamsController < ApplicationController
  before_action :set_stream, only: [ :update, :destroy]

  def index
    @streams = Stream.all
    render json: @streams
  end

  def create
    stream = Stream.create(stream_params)
    render json: stream, status: 201
  end

  def update
    @stream = Stream.find(params[:id])

    @stream.update(stream_params)
    if @stream.save
      render json: @stream
    else
      render json: {errors: @stream.errors.full_messages}, status: 422
    end
  end

  def destroy
    streamId = @stream.id
    @stream.destroy
    render json: {message:"Zap! Stream deleted", streamId:streamId}
  end

  private
  def stream_params
    params.permit(:title, :user, :stream_url, :description, :time)
  end

  def set_stream
    @stream = Stream.find(params[:id])
  end
end
