function showReview(title, review, screenshot) {
    document.getElementById('game-title').textContent = title;
    document.getElementById('game-review').textContent = review;

    screenshotImage = document.getElementById('game-screenshot');

    // Dynamically update or create the screenshot
    if (screenshotImage) {
        screenshotImage.src = screenshot;
        screenshotImage.alt = 'Screenshot of ${title}';
    } else {
        const img = document.createElement('img');
        img.id = 'game-screenshot';
        img.src = screenshot;
        img.alt = 'Screenshot of ${title}';
        img.style.width = '100%';
        img.style.margin = '10px 0';
        titleElement.after(img);
    }
}
