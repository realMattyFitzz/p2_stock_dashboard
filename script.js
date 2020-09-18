const apiKey1 = "H1WZOIEMOXEW1Z2H"
const apiKey2 = "UVV1OIJYR1HSOP3Z";
const apiKey3 = "VOHNJ8AEVGUI9HYK"
$("#submit").on("click", function () {
  let companySearch;
  companySearch = $("#input").val();
  $.ajax({
    url: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + companySearch + "&apikey=" + apiKey1,
    method: "GET"
  }).then(function(response){
    const companies = response.bestMatches;
    companies.forEach((company) => {
     const $btn = $("<button>")
     .text(company["2. name"])
     .addClass("btn btn-dark compButton")
     .attr("data-symbol", company["1. symbol"]);
    
    $("#companyBtns").append($btn);  
    });
  }); 
});
$("#companyBtns").on("click", ".compButton", function (e){
  e.preventDefault();
  console.log($(this).attr("data-symbol"));
  
})