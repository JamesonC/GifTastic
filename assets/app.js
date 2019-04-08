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



renderButtons();