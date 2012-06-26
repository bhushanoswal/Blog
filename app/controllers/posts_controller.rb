class PostsController < ApplicationController

  def post_index
    @posts = Post.all
  end

  def post_show
     @post = Post.find(params[:id])
     @comments = @post.comments
     @comment = @post.comments.new
  end

  def post_new
    @post = Post.new
  end

  def post_create
    @post = Post.new(params[:post])
    @post.save
  end

  def post_edit
    @post = Post.find(params[:id])
  end

  def post_update
    @post = Post.find(params[:id])
    @post.update_attributes(params[:post])
  end

  def post_delete
    @post = Post.find(params[:id])
    @post.destroy
  end

  def post_add_comment
    @post = Post.find(params[:id])
    @comment = @post.comments.new(params[:comment])
    @comment.save
    @comments = @post.comments
  end

  def post_delete_comment

  end

end
