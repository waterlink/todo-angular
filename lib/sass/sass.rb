require 'sass'

FONT_PATH='/assets/fonts'

module Sass::Script::Functions
  def font_url(name)
    assert_type name, :String
    Sass::Script::Value::String.new "url(#{FONT_PATH}/#{name.value})"
  end

  declare :font_url, [:string]
end

