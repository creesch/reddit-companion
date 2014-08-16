function updateTarget() {
  var target =
    'http://www.reddit.com/submit/?resubmit=true'+
    '&url='+window.location.hash.substr(1)+
    '&title='+encodeURIComponent($('#title-input').val())
  $('#submit').attr('href', target)
  return target
}

function randomMsg() {
  $('#title-input').attr('placeholder', function(i, val) {
    var adjs = ['a fitting', 'an engaging', 'a concise'],
        ends = ['Be nice!', 'Have fun!', 'Good luck!']
    return 'Enter '+randomChoice(adjs)+' title to share this page with reddit. '+randomChoice(ends)
  })
}

$(document).ready(function() {
  $(window).resize(fitHeight)

  $('#title-input').keypress(function(e) {
    updateTarget()
    if (e.which == 13) {
      window.top.location = $('#submit').attr('href')
    }
  })
  
  $('#close').click(function() {
    msgJSON({action:'close'})
  })

  randomMsg()
  fitHeight()
})
