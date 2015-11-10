# Jquery To Id And Class
Created by Alex Becker byaxy@insulatejs.com.

Jquery plugin to dynamicly make ids and classes from variables    


     var myClass = 'foo';
     var myId = 'bar';
     $(myClass).toId() is equivalent of $('#foo');
     $(myId).toCl() is equivalent of $('.bar');

Example: 
This will take class names from all a links, will turn them to ids and hide elements with these ids    
   
     $('li a').each(function(index, value){    		
     		$(value.className).toId().hide();   
     	});
