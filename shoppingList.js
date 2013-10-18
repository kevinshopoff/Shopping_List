$(document).ready(function(){
	var myList = [];
	var numItems = 0;
	
	function item(type) {
		this.type = type;
		this.complete = false;
	}
		

/*add function to add new item to list.  need to figure our if it should be an object or an array*/
/*add function to display new item on the page.*/

	function addItemToList(newItem) {
		$("#myItem").val('');
		newItem = $.trim(newItem);
		if (!newItem) {
			alert('Please enter an item.');
		} else {
			myList.push(new item(newItem));
			for (i=0; i<myList.length; i++) {
				console.log(myList[i]);
			}
			numItems++;
			$('#theList').append('<p><span class=\'toDo\' id=\'item' + numItems + '\' title=\'Added on ' + Date() + '\'>' + newItem + '</span></p>');
		}
	}
		
	$('#theList').on("click", ".toDo", function(e) {
		console.log("You did it!  " + e.target.id + " was clicked");
		var itemToComplete = "#" + e.target.id;
		$(itemToComplete).removeClass( "toDo" ).addClass( "done" );
		$(itemToComplete).prop('title', document.getElementById(e.target.id).title + ' and completed on ' + Date());
	});

		
		
/*add function to update list and line through completed items (change the item's class.  
this should be done "on click" of the item*/

/*Once this functionality is working...
add the "added on" and "completed on" date-times to title tags for each item.
sort completed items to the bottom of the list
add new items above the completed items
*/
	
	$("#btn").click(function(){
		console.log("The button was clicked.");
		var addItem = $('input[name=myItem]').val();
		console.log(addItem + " was the item you would like to add.");
		addItemToList(addItem);
    });
	
	$("#newItem").submit(function(){
		console.log("The Enter key was pressed.");
		var addItem = $('input[name=myItem]').val();
		console.log(addItem + " was the item you would like to add.");
		addItemToList(addItem);
		
		return false;
    });
	
});
	
	
	
	
	
	
