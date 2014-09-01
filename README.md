## jquery.initialize 1.4.0

<ul>
<li><i>Latest update done up to 1.4.0 : added sub elements data binding.</i></li>
<li><i>Latest update done up to 1.3.0 : data properties, template property and string template replacing.</i></li>
</ul>

A simple element initializer context plugin for jQuery.
This plugin makes an element initialize and attach for defined events with their names and datas into their own string templates.

### usage with id (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
        
  $('#header').initialize({
    elements : [
      {
        name : '#subElement1',
        events : [
          {
            name : 'click',
            fn : function (e) {
              console.log('clicked first sub element...');
            }
          }
        ]
      },
      {
        name : '#subElement2',
        events : [
          {
            name : 'click',
            fn : function (e) {
              console.log('clicked second sub element...');
            }
          }
        ]
      }
    ],
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
    init : true //this can be false if you expect the element not injected into DOM
  });

});

</code>
</pre>

### usage with class names (Modern Browsers)
<pre lang="javascript">
<code>
  $('.sampleElementToInitialize').initialize({
    init : false
  });
</code>
</pre>