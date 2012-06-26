class Comment < ActiveRecord::Base
  belongs_to :post
  attr_accessible :comment

  validates :comment, :presence => {:message => 'cannot be blank, comment not saved'}
end
