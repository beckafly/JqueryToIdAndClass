# JqueryToIdAndClass
Created by Alex Becker byaxy@insulatejs.com.

Jquery plugin to make ids and classes from variables

Simple plugin to turn params
     $('boo').toId() is equivalent of $('#boo')
     $('boo').toCl() is equivalent of $('.boo')
Example: 
This will take class names from all a links, will turn them to ids and hide elements with these ids    
     $('li a').each(function(index, value){
     		
     		$(value.className).toId().hide()
     
     	});
     