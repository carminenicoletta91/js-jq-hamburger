$( document ).ready(function() {
  // prima funzione per mostrare menu al click sul bottone
  $(".header-right .open").click(function(){
    $("div.hamburger-menu").show()
  }
  );
  // seconda funzione per nascondere menu al click sul bottone x
  $(".hamburger-menu .close").click(function(){
    $("div.hamburger-menu").hide()
  }
  );

});
