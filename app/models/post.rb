class Post < ActiveRecord::Base
  attr_accessible :description, :title

  validates :title, :presence => {:message => 'Title cannot be blank, Post not saved'}
  validates :description, :presence => {:message => 'Description cannot be blank, Post not saved'}

end
