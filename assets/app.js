// functions to create --> makeButton, renderButton 

var topics = ["Silicon Valley", "Chuck Norris", "Archor", "South Park", "Game of Thrones"];

function makeButton(name) {
    return `<button class='btn btn-outline-primary'>${name}</button>`;
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
        return  `
    <div class='card shadow-sm bg-white rounded'> 
      <img class='card-image' src='${topic.images.fixed_height.url}'/>
      <h4 class='text-capitalize rating'>Rating: ${topic.rating}</h4>
    </div>
      ` 
    }

$(document).on('click', '.btn', function () {
    $(`#gifs-view`).empty();
    var topic = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=oxClL7egdUmOnYP5STHkYWt3wkn2I0yX&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        response.data.map(gif => {
            $(`#gifs-view`).append(makeGif(gif));
        })
    })
})

renderButtons();