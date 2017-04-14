var popUpActive = false;
var apiUrl = localStorage.getItem('apiUrl');
var craftARcollectionToken = localStorage.getItem('craftARCollectionToken');

// Inject html into popUpDiv, this is the default popup
$(function(){
    $("#popUpDiv").load("views/defaultInterface.html"); 
});

// Get details of recognised items
function processResults(results){
    var item = results[0].item;
    itemHTML = item;
    
    // Get item info
    $("#nameResponse").html(item.name);
    $("#image_src").attr("src", results[0].matchedImage.thumbnail320Url);
    $("#idResponse").html(item.uuid);

    var ARInterface = "";

    // Set appropriate UI
    switch (item.uuid) {
        // Switch 2
        case "0239c52fe2b3455ab8513e263f5a3156":
            ARInterface = "views/switchTwoInterface.html";
            break;
        // Switch 1
        case "75fcf1ae693a499aa60207cb1af74bf1":
            ARInterface = "views/switchInterface.html";
            break;
        // Fan
        case "3a134e274a2a43069fd841df92260ed0":
            ARInterface = "views/fanInterface.html";
            break;
        default:
            break;
    }

    if(ARInterface !== ""){
        $("#popUpDiv").load(ARInterface);
        ARInterface = "";
    }

    // Show UI
    $('#popUpDiv').fadeIn("fast", function () {
        popUpActive = true;
    });

}