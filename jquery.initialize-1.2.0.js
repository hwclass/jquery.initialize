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
 * Version : 1.2.0
 * Released: July 29th, 2014
 *
 *
 * makes an element initialize and attach for defined events with their names and datas into their own string templates.
 */
(function ($) {
  
  $.fn.initialize = function (options) {

    var self = this;

    var currentElement = $(self),
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
        $(self).on(opts.events[countForEventsObj].name, opts.events[countForEventsObj].fn)
      }
    }

    var addTemplates = function() {
      self.innerHTML = injectStringWithValues(opts.template, opts.data);
      $(self).html(self.innerHTML);
    }

    function injectStringWithValues(source, values) {
      var count = 0;
      if (values && values.length) {
        return source.replace(/\{\d+\}/g, function(substr) {
          var currentValue = values[count]; 
          if (currentValue) {
              count += 1;
              return currentValue;
          } else {
            return substr;
          }
        });
      }
      return source;
    };
    
    if (opts.init) {
      setEvents();
      addTemplates();
    }
    
    return self;
    
  }
})(jQuery);