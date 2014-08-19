## jquery.initialize 1.2.0

<i>Latest update done up to 1.2.0 : data properties, template property and string template replacing.</i>

A simple element initializer context plugin for jQuery.
This plugin makes an element initialize and attach for defined events with their names and datas into their own string templates.

### usage (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
        
  $('#header').initialize({
    data : ['header','this is a header container.', (function() { return 'this is the third parameter for header.'})()],
    template : '<span>{0} - {1} - {2}</span>',
    events : [
      {
        name : 'click',
        fn : function () {
          console.log('clicked header...');
        }
      },
      {
        name : 'dblclick',
        fn : function () {
          console.log('double-clicked header...');
        }
      },
      {
        name : 'mouseover',
        fn : function () {
          console.log('mouse-hovered header...');
        }
      }
    ],
    methods : {
      log : function(message) {
        console.log(message);
      }
    },
    init : true
  });

});

</code>
</pre>