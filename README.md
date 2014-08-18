## jquery.initalize 1.2.0

An basic element initializer plugin for jQuery.
This plugin makes an element initialize and attach for defined events with their names and datas into their own string templates.

### usage (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
        
  $('#header').initialize({
    data : ['header','this is a header container.'],
    template : '<span>{0} - {1}</span>',
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
    init : true
  });

  $('#main_content').initialize({
    data : ['main','this is a main container.'],
    template : '<span>{0} - {1}</span>',
    events : [
      {
        name : 'click',
        fn : function () {
          console.log('clicked main...');
        }
      },
      {
        name : 'dblclick',
        fn : function () {
          console.log('double-clicked main...');
        }
      },
      {
        name : 'mouseover',
        fn : function () {
          console.log('mouse-hovered main...');
        }
      }
    ],
    init : true
  });

  $('#footer').initialize({
    data : ['footer','footer container'],
    template : '<span>{0} - {1}</span>',
    events : [
      {
        name : 'click',
        fn : function () {
          console.log('clicked footer...');
        }
      },
      {
        name : 'dblclick',
        fn : function () {
          console.log('double-clicked footer...');
        }
      },
      {
        name : 'mouseover',
        fn : function () {
          console.log('mouse-hovered footer...');
        }
      }
    ],
    init : true
  });
  
});

</code>
</pre>