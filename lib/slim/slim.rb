require 'slim'

class SlimHelpers
  def render(partial)
    Slim::Template.new("app/views/#{partial}.slim").render(self)
  end
end
