(function ($) {
  
  $.fn.initialize = function (options) {
    
    var currentElement = $(this),
        opts = options; 
    
    var getSize = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    
    var setEvents = function () {
      for (var countForEventsObj = 0, len = getSize(opts.events); countForEventsObj < len; countForEventsObj++) {
        $(this).on(opts.events[countForEventsObj].name, opts.events[countForEventsObj].funcBody)
      }
    }
    
    if (opts.init) {
      setEvents();
    }
    
    return this;
    
  }
})(jQuery);