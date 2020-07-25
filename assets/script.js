$(document).ready(function(){
    // Search Variables
    const searchTerm = $.trim($("#searchInput").val());
    const numRecord = $.trim($("#numRecordsInput").val());
    const startYear = $.trim($("#startYearInput").val());
    const endYear = $.trim($("#endYearInput").val());
    const searchBtn = $("#searchBtn");
    const clearBtn = $("#clearBtn");
    const apiKey = "WFDrEXAvwlYsmHSYDpM9CazUe3KFYeR9"

    // construct query URL
    var queryUrlBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?" + "api-key=" + apiKey


    // code for AJAX
    

    // Dynamically display results

    
    
    // searchBtn.click(search function here);
    // clearBtn.click(clear function here);
});