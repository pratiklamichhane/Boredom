let activity = document.getElementById('activity');
let type = document.getElementById('type');
let participants = document.getElementById('participants');
let button = document.getElementById('button');

let dataLoader = () => {
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            activity.textContent = data.activity;
            type.textContent = data.type;
            participants.textContent = data.participants;
        });
}
dataLoader();
button.addEventListener('click', dataLoader);