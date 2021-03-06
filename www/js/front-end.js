//////////////////////////////////////////////////
// Silex, live web creation
// http://projects.silexlabs.org/?/silex/
//
// Copyright (c) 2012 Silex Labs
// http://www.silexlabs.org/
//
// Silex is available under the GPL license
// http://www.silexlabs.org/silex/silex-licensing/
//////////////////////////////////////////////////

$(function() {
  /**
   * list all pages from the head section
   * and open the 1st one by default
   */
  var firstPageName = null;
  var pages = $('a[data-silex-type="page"]');
  if (pages && pages.length>0){
    var firstPage = pages[0];
    firstPageName = firstPage.getAttribute('id');
  }
  /**
   * init page system
   */
  $( 'body' ).pageable({
    currentPage: firstPageName,
    useDeeplink:true,
    pageClass: 'paged-element'
  });
  /**
   * silex links
   */
  $('[data-silex-href]').click(function () {
    //window.location.href = this.getAttribute('data-silex-href');
    window.open(this.getAttribute('data-silex-href'), '_blank');
  });
  /**
   * resize body to the size of its content
   */
  function onResize(event){
    var width = 0;
    var height = 0;
    $(".background").each(function (index) {
      var position = $(this).position();
      var right = position.left + $(this).width();
      var bottom = position.top + $(this).height();
      if (width < right) width = right;
      if (height < bottom) height = bottom;
    });
    $("body").css({
      "min-width": width + "px",
      "min-height": height + "px"
    });
  }
  // call it at start
  onResize();
})
