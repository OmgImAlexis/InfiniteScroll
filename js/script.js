<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="http://isotope.metafizzy.co/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="http://static.tumblr.com/0xll37k/6QRn49wdh/infinitescroll.js"></script>
<script type="text/javascript" src="http://imagesloaded.desandro.com/imagesloaded.pkgd.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    //http://www.shambix.com/en/isotope-twitter-bootstrap-infinite-scroll-fluid-responsive-layout/
    var $container = $('#posts');
    // Fire Isotope only when images are loaded
    $container.imagesLoaded(function(){
        $container.isotope({
            itemSelector : '.post',
            masonry: {
            }
        });
    });

    // Infinite Scroll
    $('#posts').infinitescroll({
        navSelector  : '#pagination',
        nextSelector : '#pagination a',
        itemSelector : '.post',
        bufferPx     : 200,
        loading: {
            finishedMsg: 'We\'re done here.',
        }
    },

    // Infinite Scroll Callback
    function( newElements ) {
        var $newElems = jQuery( newElements ).hide();
        $newElems.imagesLoaded(function(){
            $newElems.fadeIn();
            $container.isotope( 'appended', $newElems );
        });
    });

    if ($('.post:last').position().top > 200) {
        $('#posts').infinitescroll('retrieve');
    }
});
</script>
