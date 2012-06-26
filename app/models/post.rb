class Post < ActiveRecord::Base
  attr_accessible :description, :title

  validates :title, :presence => {:message => 'cannot be blank, Post not saved'}
  validates :description, :presence => {:message => 'cannot be blank, Post not saved'}

end
