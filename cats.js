$(document).ready(function() {


$('.summon-cats').click(function() {
  console.log("click response works");
  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method:'GET',
  }).done(function(data) {
    for (var i = 0; i < data.cats.length; i++)
    {
      $('<img>').attr('src', data.cats[i]['photo']).attr('alt', 'Photo of : ' + data.cats[i]['name']+'')
      .appendTo('#cat' + (i + 1) )

    }

  })
})





});
