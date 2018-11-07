var gifs = ["Terry Crews", "Oh Yeah!", "Dancing"];

//have a function that will display our GIFS
function showGifs() {
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dJ6s1LUnfDDadiYcJgd2ojjZQp3fzfTB&limit=10"
    //make ajax call
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        //after data comes back from ajax request
        .then(function(response) {
            console.log(queryURL);
            console.log(response);


            //store results
            var results = response.data;
            //through results array
            for (i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var gifHolder = $("<img>");

                gifHolder.attr("src", results[i].images.fixed_height_still.url);
                gifDiv.append(gifHolder);
                gifDiv.append(p);

                $("#gifs-go-here").prepend(gifDiv);
            }
        })
};

//creat buttons
function displayButtons() {
    //empty div so we don't get repeat buttons
    $("#buttons-go-here").empty();
    //create a loop for our gif array
    for (var i = 0; i < gifs.length; i++) {
        var b = $("<button>");
        b.addClass("gif-btn");
        b.attr("data-name", gifs[i]);
        b.text(gifs[i]);
        $("#buttons-go-here").append(b);
    }
};
//grab the user input and put it into gif array
$("#add-gif").on("click", function(){
    event.preventdefault();

    var gif = $("#gif-input").val().trim();
    gifs.push(gif);

    displayButtons();
});

//on-click function for any button that has the gif-btn class
$(document).on("click", ".gif-btn", showGifs);

//display buttons when page loads
displayButtons();
