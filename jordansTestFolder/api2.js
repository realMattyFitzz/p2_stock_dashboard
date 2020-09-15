const apiKey = "H1WZOIEMOXEW1Z2H";
$("#submit").on("click", function () {
    let companySearch;
    companySearch = $("#input").val();
    $.ajax({
        url: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + companySearch + "&apikey=" + apiKey,
        method: "GET"
    }).then(function (response) {
        let r = response.bestMatches
        let search = [];
        for (let i = 0; i < r.length; i++) {
            search.push(r[i]["1. symbol"]);
        }
        $("#list").empty();
        search.forEach(element => {
            $("#list").append($("<li>").text(element))
        });

    })
})

function stockSearch(symbol) {

    $.ajax({
        url: "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + symbol + "&apikey=" + apiKey,
        method: "GET"
    }).then(function (response) {
        const r = response;
        console.log(r);
        // console.log("Name: ", r.Name);
        // console.log("Symbol: ",r.Symbol);
        // console.log("Sector: ", r.Sector);
        // console.log("Price: ", r.AnalystTargetPrice);
    })
}