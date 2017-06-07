// Create by Max Yi-Hsun Chou
// on June 7 2017
// in San Francisco, California

let now = $.now() / 1000
console.log(now)

let attendEndDate = 1497830399

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
