<script>
    // --- Configuration and Data (Constants) ---
    const defaultConfig = { /* ... configuration details ... */ };
    const roomObjects = [ /* ... array of room object definitions ... */ ];
    const questions = [ /* ... array of all 30 grammar questions ... */ ];
    let gameState = { /* ... initial game state ... */ };
    let timerInterval;
    let allCompletions = [];
    
    // --- SDK and Initialization ---
    const dataHandler = { /* ... handles data changes from SDK ... */ };
    async function initializeApp() { /* ... initializes data and element SDKs, handles config/styling ... */ }

    // --- Screen and UI Functions ---
    function showScreen(screenId) { /* ... shows a specific game screen ... */ }
    function showToast(message) { /* ... displays a temporary notification ... */ }
    
    // --- Game Flow Functions ---
    function startGame() { /* ... validates name, initializes state, starts timer, renders room ... */ }
    function startTimer() { /* ... updates the timer display every second ... */ }
    function renderRoom() { /* ... updates room title/description, dynamically creates clickable objects ... */ }
    function updateCodeDisplay() { /* ... updates the secret code display and clue count ... */ }
    function attemptEscape() { /* ... checks score, calls endGame if ready ... */ }
    async function endGame() { /* ... stops timer, displays final score, submits score to SDK ... */ }
    function renderLeaderboard() { /* ... sorts and displays top scores ... */ }
    function resetGame() { /* ... resets gameState and returns to welcome screen ... */ }
    
    // --- Activity/Modal Functions ---
    function openObject(objectIndex) { /* ... checks completion, finds question, loads activity, opens modal ... */ }
    function closeModal() { /* ... closes the activity modal ... */ }
    function loadActivity(q) { /* ... generates HTML for multiple choice, drag-drop, or clickable activity ... */ }
    
    // --- Interaction Handlers ---
    function setupDragAndDrop() { /* ... adds event listeners for dragstart, dragend, dragover, drop ... */ }
    function selectOption(index) { /* ... handles selection for multiple-choice/hidden activities ... */ }
    function toggleClickable(index) { /* ... handles selection for clickable activities ... */ }
    function revealClue() { /* ... reveals hidden clue text ... */ }
    function submitAnswer() { /* ... checks the current answer against the correct one, gives feedback, updates score/code ... */ }

    // --- Call to start application ---
    initializeApp();
</script>