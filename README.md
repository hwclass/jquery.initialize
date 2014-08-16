## jquery.initalize 0.2.0

An basic element initializer plugin for jQuery.

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