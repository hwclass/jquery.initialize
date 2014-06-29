/*!
 * jquery.initialize. An basic element initializer plugin for jQuery.
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : July 2014
 * Version : 0.1.0
 * Released: July 29th, 2014
 *
 *
 * makes an element initialize for defined events with their names
 */
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