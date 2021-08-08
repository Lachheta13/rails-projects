class MyValidater < ActiveModel::Validator
  def validate(record)
    unless record.name.start_with? 'A'
      record.errors.add :name, 'need a name start with A'
    end
  end
end

class Customer < ApplicationRecord
  has_many :orders, dependent: :destroy
  validates :name, :mob_num, presence: true
  validates :mob_num, length: { is: 10 }
  validates :name, length: { in: 2..20 }
  include ActiveModel::Validations
  validates_with MyValidater

  after_initialize do |user|
    p 'you initialize object'
  end
  after_find do |user|
    p 'you find a object'
  end
  after_destroy :deleting_an_object

  def deleting_an_object
    p 'object destroyed'
  end
   
  after_create do |user|
    p 'you created a object'
  end

end
