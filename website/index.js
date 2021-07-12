// fetch('http://localhost:5000')
//     .then(function (response) {
//         if (response.status === 200) console.log('%cConnected to backend!', 'color: green');
//         return response.json();
//     })
//     .then(function (json) {
//         console.log(json);
//     })
//     .catch(function (error) {
//         console.error('Failed to connect to backend! Error: ', error);
//     });

// inside index.js
// Wait for the DOM to be loaded.
window.addEventListener('DOMContentLoaded', function () {
    document
        // Get a reference to the button
        .getElementById('submit-button')
        // then add a event listener to this button,
        // specifically, the click event.
        .addEventListener('click', function () {
            // when the button is clicked, I simply alert
            alert('You have clicked the button');
            // extract the input value
            const inputValue = document.getElementById('guess-input').value;
            // Send HTTP request
            fetch('http://localhost:8000/guess/' + inputValue, { method: 'POST' })
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    alert(json.message);
                });
        });
});
