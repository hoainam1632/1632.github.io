var listSearch = document.getElementById("list-search")
$(document).ready(function(){
    $("#txt-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#list-search li").filter(function() {
          
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         if (value === "") {
            listSearch.style.display = "none"
         }else listSearch.style.display = "Block"
      });
    });
  });
  function hideListSearch(){
    listSearch.style.display = "none"
  }
  var darkMode = document.getElementById("master");
