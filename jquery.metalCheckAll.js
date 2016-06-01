/*===================================================================
 | jQuery Metal CheckAll Plugins 
 |===================================================================
 | http://thunderwide.com 
 |
 | @category   Plugins
 | @author     Norlihazmey <norlihazmey89@thunderwide.com>
 | @license    Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 |             and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 | @copyright  (c) 2015 Norlihazmey(metallurgical)
 | @version    1.0.0
 | @Github 	   https://github.com/metallurgical/jquery-metal-checkAll
 |===================================================================*/
(function($){

	$.fn.metalCheckAll = function(options){

		var opt = $.extend({}, $.fn.metalCheckAll.defaults, options);

		return this.each(function(e){			
			// Get type of selector 
			// Either button, or type checkbox
			var typeSelector = this.type,
				mainSelector = $(this),
				nodeName = this.nodeName;
			    
			
			// If type button || submit, then set
			// the default value of button
			// to opt.btnValueChecked
			if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "BUTTON") 
				mainSelector.text(opt.btnValueChecked);
			else if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "INPUT") 
				mainSelector.val(opt.btnValueChecked); 

				
			/*========================================
			| Add event listener(click) to selector
			|=========================================*/
			mainSelector.on('click',function(e){

				
				var elem           = $(this),				// Current element					 
					elementToCheck = opt.target.join(',');	// Option value defined by user
					
					
				// If the selector is a checbox
				if (
					typeSelector == "checkbox"
					&& typeSelector != "button"
					&& typeSelector != "submit"
					){					
					
					// check either is checked 
					// or not checked
					if (elem.is(':checked')) {						
						checkAll(elementToCheck);
					}
					else {						
						unCheckAll(elementToCheck);
					}
				} 
				// If the selector is a button || submit
				else if(typeSelector == "button" || 
					    typeSelector == "submit"){
					

					// check the button 
					// has this attribute or not
					if (elem.attr('data-metal-check')){
						unCheckAll(elementToCheck);
						if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "BUTTON") 
							elem.removeAttr('data-metal-check').text(opt.btnValueChecked); // type button
						else if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "INPUT") 
							elem.removeAttr('data-metal-check').val(opt.btnValueChecked);	// type submit 

						
					}
					else {
						checkAll(elementToCheck);
						if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "BUTTON") 
							elem.attr('data-metal-check', 'true').text(opt.btnValueUnChecked); // type button
						else if ((typeSelector == "button" || typeSelector == "submit") && nodeName == "INPUT") 
							elem.attr('data-metal-check', 'true').val(opt.btnValueUnChecked); // type submit
						
					}
				}
				

				return;
			});
			
		});

		// checked all element matched
		function checkAll(targetElement){
			
			$(targetElement).each(function(i,e){
				if (!$(this).is(':checked')){
					$(this).prop('checked', true);
				}
			});
		}

		// uncheck all element matched
		function unCheckAll(targetElement){
			$(targetElement).each(function(i,e){
				if ($(this).is(':checked')){
					$(this).prop('checked', false);
				}
			});
		}
		
	};


	// available options for user
	$.fn.metalCheckAll.defaults = {
		// Any type of selector
		// Any valid css selector
		// accept value as an array
		// eg : ['.className','#idSelector','input[type=checkbox]']
		// eg : ['input[name=myCheckbox]']
		target : ['input[type=checkbox]'],
		btnValueChecked : 'CheckAll',
		btnValueUnChecked : 'UnCheck All'
	};


})(jQuery);