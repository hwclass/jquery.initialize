## jquery.initalize 0.1.0

An basic element initializer plugin for jQuery.

### usage (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
  
  $('.logo').initialize({
    events : [
      {
        name : 'click',
        funcBody : function () {
          console.log('clicked...');
        }
      },
      {
        name : 'dblclick',
        funcBody : function () {
          console.log('double-clicked...');
        }
      },
      {
        name : 'mouseover',
        funcBody : function () {
          console.log('mouse-hovered...');
        }
      }
    ],
    init : true
  });
  
});

</code>
</pre>