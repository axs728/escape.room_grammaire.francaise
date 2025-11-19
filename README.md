🔐 French Grammar Escape Room (Niveau B1)

This project is a single-file, interactive web application designed as an escape room game to help students practice and review French grammar concepts at the B1 level.

The goal of the game is to solve 30 grammar activities hidden within 5 themed rooms to find a 6-digit secret code and "escape" the room.

🇫🇷 Game Overview

Objective: Find the 6-digit secret code to unlock the exit door.

Structure: The game consists of 5 rooms:

Les Temps (Tenses)

Les Pronoms (Pronouns)

Le Subjonctif (Subjunctive Mood)

Les Prépositions (Prepositions)

Les Connecteurs (Connectors)

Gameplay: Each room contains 6 clickable objects (30 total objects in the game). Each object presents a grammar activity (multiple choice, drag-and-drop, or clickable elements).

Code Clues: Every successfully solved activity reveals a digit of the final 6-digit secret code.

Scoring: Players are scored based on the number of correct answers and the time taken to complete the entire game. A leaderboard tracks the best scores.

🛠️ Technical Structure

This application follows a single-file architecture to simplify hosting and deployment, particularly for platforms like GitHub Pages.

File: escape.txt (or rename to index.html for direct hosting)

Core Technologies (Embedded):

HTML: Provides the structural layout for the welcome screen, game scene, modals, and completion screen.

CSS: All styling is embedded within a <style> block, providing a dark, immersive theme and ensuring responsive design.

JavaScript: All game logic, including the question database (questions), game state management (gameState), timer, interactive handlers (drag-and-drop, clicks), and score submission, is embedded within a <script> block.

External Libraries:

The game uses Tailwind CSS utility classes (via CDN) for responsive and modern styling foundation.

The code includes placeholder scripts for the Canvas SDKs (data_sdk.js, element_sdk.js) for persistent data storage and customization.

🚀 Deployment (GitHub Pages)

To quickly deploy this game using GitHub Pages:

Rename the File: Rename the escape.txt file to index.html.

Upload to Repository: Place the index.html file in the root directory (or the /docs directory) of your chosen GitHub repository.

Configure Pages: Go to your repository Settings $\rightarrow$ Pages and set your publishing source (e.g., main branch, /root folder).

Wait: Wait a few minutes for the site to build and deploy. The game will be available at your GitHub Pages URL.

Contribution & Customization

The game is entirely self-contained within the index.html file, making it easy to fork and modify:

Questions: Edit the questions array in the JavaScript section to change grammar topics, difficulty, or correct answers.

Styling: Customize the CSS within the <style> tags to change the theme, colors, or layout.

Rooms: Modify the roomObjects array to change the number of rooms, object icons, and their placement.
