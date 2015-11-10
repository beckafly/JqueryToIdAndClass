# JqueryToIdAndClass
Created by Alex Becker byaxy@insulatejs.com.

Jquery plugin to make ids and classes from variables
Simple chanable plugin to turn paramitrs to Ids or Classes   
     $('boo').toId() is eauvivalent of $('#boo')
     $('boo').toCl() is eauvivalent of $('.boo')
Example: 
This will take class names from all a links, will turn them to ids and hide elements with these ids    
     $('li a').each(function(index, value){
     		
     		$(value.className).toId().hide()
     
     	});
     
