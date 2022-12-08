$('.collapsible').hide();

$('.top-tier').click(function(e){
  $(this).next('.collapsible').slideToggle();
  return false;
});



$(document).ready(function(){
  $('#mobile_icon_bars').click(function(){  
      $('.mobile_menu').slideToggle();
  })
})
 