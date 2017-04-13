var popUpActive = false;
var apiUrl = localStorage.getItem('apiUrl');
var craftARcollectionToken = localStorage.getItem('craftARCollectionToken');

// Inject html into popUpDiv
$(function(){
    $("#popUpDiv").load("views/popup.html"); 
});