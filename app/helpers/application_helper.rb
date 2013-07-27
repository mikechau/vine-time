module ApplicationHelper

  def localtime_tag(time)
    time = Time.parse(time) unless time.respond_to? :utc
    formatted_str = time.utc.iso8601
    content_tag :span, formatted_str, class: 'localtime'
  end

end
