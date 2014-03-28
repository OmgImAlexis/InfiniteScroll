(function(){
  function load(){
    var url = window.location.pathname;
    var page = url.split('/')[1];
    var nextPage = String($('#nextPage').attr('href'));
    $.get(nextPage, function(data){ 
      $(data).find("#posts .entry").appendTo("#posts");
      if (page == 'tagged'){
        var tag = url.split('/')[2];
        $('#nextPage').attr('href', "/tagged/" + tag + "/page/" + (parseInt($("#nextPage").attr("href").match(/\d+/))+1));
      } else {
        $('#nextPage').attr('href', "/page/" + (parseInt($("#nextPage").attr("href").match(/\d+/))+1));
      }
      var msnry = new Masonry( container, {
        itemSelector: entry
      });
    });
  }
  $(window).on("load resize",function(e){
    load();
  });
  $(window).on("scroll",function(e){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      load();
    }
  });
})();