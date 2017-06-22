// Create by Max Yi-Hsun Chou
// Facebook: https://fb.me/yihsunmaxchou
// on June 7 2017
// in San Francisco, California

let now = $.now() / 1000

let attendEndDate = 1498392000

$(function() {
  if(now >= attendEndDate) {
      let url = 'https://api.clhs.cf/api/v1/all'
      $.get(url, function(data, status){
            data.data.forEach(function(result) {
              $('#attendList').append(result.name + ' - ' + result.school + '<br />')
            })
        })
  } else {
    $("#list").css( "display", "none" )
    $("#list-btn").css( "display", "none" )
  }
})
