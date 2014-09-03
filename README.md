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

### events list in javascript api to use with jquery.initialize
<ul>
  <li>abort</li>
  <li>activate</li>
  <li>afterprint</li>
  <li>beforeactivate</li>
  <li>beforecopy</li>
  <li>beforecut</li>
  <li>beforedeactivate</li>
  <li>beforepaste</li>
  <li>beforeunload</li>
  <li>blur</li>
  <li>beforeupdate</li>
  <li>bounce</li>
  <li>challange</li>
  <li>change</li>
  <li>copy</li>
  <li>cut</li>
  <li>dblclick</li>
  <li>drag</li>
  <li>dragdop</li>
  <li>dragend</li>
  <li>dragenter</li>
  <li>dragexit</li>
  <li>draggesture</li>
  <li>dragleave</li>
  <li>dragover</li>
  <li>dragstart</li>
  <li>drop</li>
  <li>error</li>
  <li>finish</li>
  <li>focus</li>
  <li>focusin</li>
  <li>focusout</li>
  <li>hashchange</li>
  <li>help</li>
  <li>input</li>
  <li>keydown</li>
  <li>keypress</li>
  <li>keyup</li>
  <li>load</li>
  <li>message</li>
  <li>mousedown</li>
  <li>mouseenter</li>
  <li>mouseleave</li>
  <li>mousemove</li>
  <li>mouseout</li>
  <li>mouseover</li>
  <li>mouseup</li>
  <li>mousewheel</li>
  <li>offline</li>
  <li>online</li>
  <li>overflowchanged</li>
  <li>paste</li>
  <li>RadioStateChange</li>
  <li>readystatechange</li>
  <li>reset</li>
  <li>resize</li>
  <li>scroll</li>
  <li>search</li>
  <li>select</li>
  <li>selectionchange</li>
  <li>selectstart</li>
  <li>start</li>
  <li>stop</li>
  <li>submit</li>
  <li>textInput</li>
  <li>underflow</li>
  <li>unload</li>
</ul>