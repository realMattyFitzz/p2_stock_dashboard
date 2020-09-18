$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});


console.log("Connected!")

const apiKey1 = "UVV1OIJYR1HSOP3Z";
const apiKey2= "VOHNJ8AEVGUI9HYK"
let monthArray = [];

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
  const companySymbol = ($(this).attr("data-symbol"))
  console.log(companySymbol);
  $.ajax({
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + companySymbol + "&apikey=" +apiKey2,
    method: "GET"
  }).then(function(response){
    const date = response["Time Series (Daily)"]
    
    for (const key in date) {
        let month = parseInt(key.slice(5, 7))
        //set wont allow duplicate valuse
        if(month === 1){
          month = "January"
        } else if(month === 2){
          month = "February"
        } else if (month === 3){
          month = "March"
        } else if (month === 4){
          month = "April"
        } else if (month === 5){
          month = "May"
        } else if (month === 6){
          month = "June"
        } else if (month === 7){
          month = "July"
        } else if (month === 8){
          month = "August"
        } else if (month === 9){
          month = "September"
        } else if (month === 10){
          month = "October"
        } else if (month === 11){
          month = "November"
        } else if (month === 12){
          month = "December"
        }
        console.log(month)
        
      }
      monthArray.push(month)
      console.log(monthArray)
      
    })

  })