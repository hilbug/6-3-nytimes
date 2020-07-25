$(document).ready(function(){
    // Search Variables
    const searchTerm = $.trim($("#searchInput").val());
    const numRecord = $.trim($("#numRecordsInput").val());
    const startYear = $.trim($("#startYearInput").val());
    const endYear = $.trim($("#endYearInput").val());
    const searchBtn = $("#searchBtn");
    const clearBtn = $("#clearBtn");
    
    // construct query URL
    const queryUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
    const apiKey = "WFDrEXAvwlYsmHSYDpM9CazUe3KFYeR9";

    function buildQuery() {
        
    }

    // code for AJAX
    

    // Dynamically display results

    
    
    // searchBtn.click(search function here);
    // clearBtn.click(clear function here);
});