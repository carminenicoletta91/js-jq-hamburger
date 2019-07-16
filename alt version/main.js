$( document ).ready(function() {
  // prima funzione per mostrare menu al click sul bottone
  $(".open").click(function(){
    $(".menu-hamburger").show();
  }
  )
  $(".close").click(function(){
    $(".menu-hamburger").hide()
  }
  )
});
