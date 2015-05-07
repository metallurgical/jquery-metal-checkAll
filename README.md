# Jquery metalCheckAll Plugin



Simple plugin to check or uncheck **Checkbox** using multiple selector at once. 


# Features #



- Easy to implement together with HTML markup.
- Select the checkbox with single selector.
- Select the checkbox with multiple selector.
- Any valid CSS selector are valid to select.
- Usable code with multiple options available.



# Current Stable #



-	[**V1.0.0**](https://github.com/metallurgical/jquery-metal-checkAll/archive/v1.0.0.zip "V1.0.0")



# How To Install #



Installation is so very easy. Download the current stable and see the example in Demo page. Here is the manual step to follow :

1. Put `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>` inside Head Section(using latest version).
2. Place `<script src="jquery.metalCheckAll.js"></script>` after jQuery library.
3. Done!!

# Available Options #



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


**1. Example 1 - Using checkbox and select by class name.**

         
		
``` html
		<!-- **HTML** -->
		<input type="checkbox" class="inputCheck">
		<input type="checkbox" class="inputCheck">
		<input type="checkbox" class="inputCheck">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example1
		$('#checkAll_example1').metalCheckAll({
    		target : ['.inputCheck']
 		});
```
		
		
**2.	Example 2 - Using checkbox and select by element name.**

``` html
		<!-- **HTML** -->
		<input type="checkbox" name="example2">
    	<input type="checkbox" name="example2">
    	<input type="checkbox" name="example2">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example2
		$('#checkAll_example2').metalCheckAll({
			target : ['input[name=example2]']
		});
```

**3.	Example 3 - Using checkbox and select by ID name.**

``` html
		<!-- **HTML** -->
    	<input type="checkbox" name="example3" id="example3">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example3
    	$('#checkAll_example3').metalCheckAll({
			target : ['#example3']
		});
```

**4.	Example 4 - Using Button and select by class name.**

``` html
		<!-- **HTML** -->
    	<input type="checkbox" class="example4">
    	<input type="checkbox" class="example4">
    	<input type="checkbox" class="example4">
```
``` javascript
		//**JS**
		// This selector applied for button with id name checkAll_example4
    	$('#checkAll_example4').metalCheckAll({
    		target : ['.example4'],
    		btnValueChecked : 'Click ME', // Button Text before check
    		btnValueUnChecked : 'UnCheck Me' // Button text after check
    	});
```

**5.	Example 5 - Using Button and select by input type checkbox(this will find all checkbox on page).**

``` html
		<!-- **HTML** -->
    	<input type="checkbox">
    	<input type="checkbox">
    	<input type="checkbox">	
```
``` javascript
		//**JS**
		// This selector applied for button with id name checkAll_example5
    	$('#checkAll_example5').metalCheckAll({
    		target : ['input[type=checkbox]'],
    		btnValueChecked : 'Click ME', // Button Text before check
    		btnValueUnChecked : 'UnCheck Me' // Button text after check
    	});
```

**6.	Example 6 - Using Button and select by multiple selector.**

``` html
		<!-- **HTML** -->
		<div class="container_body">
			<input type="checkbox" name="a">
			<input type="checkbox" name="a">
			<input type="checkbox" name="a">			
		</div>
		<div class="container_body">
			<input type="checkbox" class="example6">
			<input type="checkbox" class="example6">
			<input type="checkbox" class="example6">			
		</div>
		<div class="container_body">
			<input type="checkbox" id="example6">
			<input type="checkbox" data-type="example6">
			<input type="checkbox" data-type="example6">			
		</div>
```
``` javascript
		//**JS**
		// This selector applied for button with id name #checkAll_example6 
		$('#checkAll_example6').metalCheckAll({
			target : ['input[name=a]','.example6','#example6','input[data-type="example6"]'], // arrays value
			btnValueChecked : 'Click ME', // Button Text before check
			btnValueUnChecked : 'UnCheck Me' // Button text after check
		});
```
# Demo Page #
-	**[Click ME](http://metallurgical.github.io/metalCheckAll/ "Metal Clone Demo Page")**

# Dependencies #
-	Jquery Library either minified or development.
