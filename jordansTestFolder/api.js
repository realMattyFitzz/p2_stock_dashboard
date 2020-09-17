
$("#submit").on("click", function () {
    const term = $("#srch").val().toString();
    stockSearch(term);
    // console.log(term);
})

function stockSearch(symbol) {
    const apiKey = null;

    $.ajax({
        url: "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + symbol + "&apikey=" + apiKey,
        method: "GET"
    }).then(function (response) {
        const r = response;
        console.log("Name: ", r.Name);
        console.log("Symbol: ",r.Symbol);
        console.log("Sector: ", r.Sector);
        console.log("Price*: ", r.AnalystTargetPrice);
    })
}