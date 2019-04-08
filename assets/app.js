// functions to create --> makeButton, renderButton 

var topics = ["Silicon Valley", "Topic 2", "Topic 3", "Topic 4", "Topic 5"];

function makeButton(name) {
    return `<button class='gif'>${name}</button>`;
}

// Function for displaying gif data
function renderButtons() {
    $(`#buttons-view`).html(topics.map(makeButton));
}

// This function handles events where one button is clicked
$("#add-gif-topic").on("click", function (event) {
    event.preventDefault();
    var text = $(`#gif-topic-input`).val();
    topics.push(text);
    renderButtons();
});

function makeGif(topic) {
    for (var i = 0; i <= 10; i++){
        return  `
    <div> 
      <h4>Rating: ${topic.data[i].rating}</h4>
      <img src='${topic.data[i].images.original_still.url}'/>
    </div>
      ` 
    }
}

$(document).on('click', '.gif', function () {
    var topic = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=oxClL7egdUmOnYP5STHkYWt3wkn2I0yX&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $(`#gifs-view`).append(makeGif(response));
    })
})


renderButtons();