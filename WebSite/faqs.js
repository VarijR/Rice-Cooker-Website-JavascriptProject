"use strict";
// The $ Function
var $ = function(id) {
	 return document.getElementById(id); 
};

// The event handler of each h2 element for the click event 
var toggle = function() {
    var h2 = this;                    // The clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling Div tag

	// Validation
    // Toggle minus and plus image in h2 elements by removing or adding a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }

    // Toggle div visibility by removing or adding a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    }
};

//This function runs on page load 
window.onload = function() {
    // getting the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};