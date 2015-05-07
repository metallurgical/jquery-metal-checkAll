# Jquery metalCheckAll Plugin

----------

Simple plugin to check or uncheck **Checkbox** using multiple selector at once. 


# Features #

----------

- Easy to implement together with HTML markup.
- Select the checkbox with single selector.
- Select the checkbox with multiple selector.
- Any valid CSS selector are valid to select.
- Usable code with multiple options available.



# Current Stable #

----------

ad



# How To Install #

----------

Installation is so very easy. Download the current stable and see the example in Demo page. Here is the manual step to follow :

1. Put `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>` inside Head Section(using latest version).
2. Place `<script src="jquery.metalCheckAll.js"></script>` after jQuery library.
3. Done!!

# Available Options #

----------

Configurations available for this plugin :

1. **target :** CSS selector target checkbox to check or uncheck. Any CSS selector is valid, see listing below.
   - Class name example : `.checkMe, input.checkMe`
   - ID name example : `#checkMe, input.checkMe`
   - Element name example : `input[name=checkMe]`
   - Element type example : `input[type=checkbox]`
   - Element value example: `input[value="checkMe"]`
   - Any HTML attribute example: `data-type="checkMe"`
   - Any valid CSS selector.

2. **btnValueChecked** : Specified the text value on Button for CheckAll, if not specified, default value will used(For button only either `<button>` or `<input type="button">` or `<input type="submit">`).
3. **btnValueUnChecked** : Specified the text value on Button for UnCheckAll, if not specified, default value will used(For button only either `<button>` or `<input type="button">` or `<input type="submit">`).

# Basic Usage #

----------
1. Example 1

        ```javascript 
		**HTML**		
		<input type="checkbox" class="inputCheck">
    	<input type="checkbox" class="inputCheck">
    	<input type="checkbox" class="inputCheck">
    	
		**JS**
		$(function(){
    		$('#checkAll_example1').metalCheckAll({
    			target : ['.inputCheck']
    		});
		});
		```
