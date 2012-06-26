class Post < ActiveRecord::Base
  attr_accessible :description, :title

  has_many :comments,  :dependent => :destroy

  validates :title, :presence => {:message => 'cannot be blank, Post not saved'}
  validates :description, :presence => {:message => 'cannot be blank, Post not saved'}

end
