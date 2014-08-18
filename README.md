## jquery.initalize 1.2.0

An basic element initializer plugin for jQuery.
This plugin makes an element initialize and attach for defined events with their names and datas into a string templates.

### usage (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
  
  $('.logo').initialize({
    events : [
      {
        name : 'click',
        fn : function () {
          console.log('clicked...');
        }
      },
      {
        name : 'dblclick',
        fn : function () {
          console.log('double-clicked...');
        }
      },
      {
        name : 'mouseover',
        fn : function () {
          console.log('mouse-hovered...');
        }
      }
    ],
    init : true
  });
  
});

</code>
</pre>