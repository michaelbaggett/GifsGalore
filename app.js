//create a test button
newButton = $("<button>");
newButton.attr("data-thing=cat");
newButton.text("Click me!");
$("#buttons-go-here").prepend(newButton);

$("button").on("click", function () {
    //var something = $(this).attr("data-thing")

    //store random GIF as queryurl
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=dJ6s1LUnfDDadiYcJgd2ojjZQp3fzfTB&limit=10"
    //makr our AJAX call
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        //after data comes back from ajax request
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            //store results
            var results = response.data;
            //through results array
            for (i = 0; i < results.length; i++) {
                var catDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var catImg = $("<img>");

                catImg.attr("src", results[i].images.fixed_height.url);
                catDiv.append(catImg);
                catDiv.append(p);

                $("#gifs-go-here").prepend(catDiv);

            }
        })

});