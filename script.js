// Fetch JSON data and dynamically create game cards
fetch('games.json')
    .then((response) => response.json())
    .then((games) => {
        // Filter games by category
        const completedGames = games.filter((game) => game.category === "Completed");
        const inProgressGames = games.filter((game) => game.category === "In Progress");
        const backlogGames = games.filter((game) => game.category === "Backlog");

        // Dynamically add cards to respective sections
        populateSection('completed-games', completedGames);
        populateSection('in-progress-games', inProgressGames);
        populateSection('backlog-games', backlogGames);
    })
    .catch((error) => console.error('Error loading game data:', error));

// Helper function to populate game cards into a section
function populateSection(sectionId, games) {
    const section = document.getElementById(sectionId);

    games.forEach((game) => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.onclick = () => showReview(game.name, game.review, game.image);

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;

        const name = document.createElement('p');
        name.textContent = game.name;

        card.appendChild(img);
        card.appendChild(name);
        section.appendChild(card);
    });
}

// Function to display review (same as before)
function showReview(title, review, screenshot) {
    const titleElement = document.getElementById('game-title');
    const reviewElement = document.getElementById('game-review');
    const screenshotElement = document.getElementById('game-screenshot');

    titleElement.textContent = title;
    reviewElement.textContent = review;

    if (screenshotElement) {
        screenshotElement.src = screenshot;
        screenshotElement.alt = `Screenshot of ${title}`;
    }
}
