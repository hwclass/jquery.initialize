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
      for (var countForEventsObj = 0, len = getSize(options.events); countForEventsObj < len; countForEventsObj++) {
        $(this).on(options.events[countForEventsObj].name, options.events[countForEventsObj].funcBody)
      }
    }
    
    if (options.init) {
      setEvents();
    }
    
    return this;
    
  }
})(jQuery);