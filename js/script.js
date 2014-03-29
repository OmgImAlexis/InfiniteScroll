(function(){
  function load(){
    var url = window.location.pathname;
    var page = url.split('/')[1];
    var container = $(entry).parent();
    if (page != 'post'){
      if (page == 'tagged'){
        var tag = url.split('/')[2];
        if ($('#nextPage').length != 0){
          $('#nextPage').attr('href', "/tagged/" + tag + "/page/" + (parseInt($("#nextPage").attr("href").match(/\d+/))+1));
        } else {
          $(container).parent().append('<div id="pagination"><a id="nextPage" href="tagged/' + tag  + '/page/2"></a></div>');
        }
      } else {
        if ($('#nextPage').length != 0){
          $('#nextPage').attr('href', "/page/" + (parseInt($("#nextPage").attr("href").match(/\d+/))+1));
        } else {
          $('#nextPage').attr('href', "/page/2");
        }
      }
      var nextPage = String($('#nextPage').attr('href'));
      $.get(nextPage, function(data){
        $(data).find(entry).appendTo(container);
        var msnry_container = document.querySelector('#' + container.attr("id"));
        var msnry = new Masonry(msnry_container, {
          itemSelector: entry
        });
      });
    }
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