function hideWhenClicked(e){

  $("#hide_this").click(function(){
    $(e).hide();
  });

}


  $("#hide_this").click(hideWhenClicked);
