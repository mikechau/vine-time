#
# To parse the date the input text should include the zimezone so when the
# browser parses the string it will be converted to the local time.
#
# In ruby we can use the following:
#    date.strftime('%Y-%m-%dT%H:%M:%S%z')
#
 
(($) ->
  $.fn.localtime = ->
    # Makes a string with only two characters, adding a leading zero
    fmtZero = (str) ->
      ('0' + str).slice(-2)
 
    # This is the function to change if you want to customize the format of the date
    fmtDate= (d) ->
      # format the date
      hour = d.getHours()
      if hour < 12
        meridiem = "AM"
      else
        meridiem = "PM"
      hour = 12  if hour is 0
      hour = hour - 12  if hour > 12
      hour + ":" + fmtZero(d.getMinutes()) + " " + meridiem + " " + (d.getMonth()+1)+ "/" + d.getDate() + "/" + d.getFullYear()
 
    @each ->
      tagText = $(this).html()
      $(this).html fmtDate(new Date(tagText))
      $(this).attr "title", tagText
 
) jQuery