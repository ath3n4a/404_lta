function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const stationsWithLines = {
    "Jurong East": ["ewl", "nsl"],
    "Bukit Batok": ["nsl"],
    "Bukit Gombak": ["nsl"],
    "Choa Chu Kang": ["nsl"],
    "Yew Tee": ["nsl"],
    "Kranji": ["nsl"],
    "Marsiling": ["nsl"],
    "Woodlands": ["nsl", "tel"],
    "Admiralty": ["nsl"],
    "Sembawang": ["nsl"],
    "Canberra": ["nsl"],
    "Yishun": ["nsl"],
    "Khatib": ["nsl"],
    "Yio Chu Kang": ["nsl"],
    "Ang Mo Kio": ["nsl"],
    "Bishan": ["nsl", "ccl"],
    "Braddell": ["nsl"],
    "Toa Payoh": ["nsl"],
    "Novena": ["nsl"],
    "Newton": ["nsl", "dtl"],
    "Orchard": ["nsl", "tel"],
    "Somerset": ["nsl"],
    "Dhoby Ghaut": ["nsl", "nel", "ccl"],
    "City Hall": ["nsl", "ewl"],
    "Raffles Place": ["nsl", "ewl"],
    "Marina Bay": ["nsl", "ccl", "tel"],
    "Marina South Pier": ["nsl"],
    "Pasir Ris": ["ewl"],
    "Tampines": ["ewl", "dtl"],
    "Simei": ["ewl"],
    "Tanah Merah": ["ewl"],
    "Bedok": ["ewl"],
    "Kembangan": ["ewl"],
    "Eunos": ["ewl"],
    "Paya Lebar": ["ewl", "ccl"],
    "Aljunied": ["ewl"],
    "Kallang": ["ewl"],
    "Lavender": ["ewl"],
    "Bugis": ["ewl", "dtl"],
    "Tanjong Pagar": ["ewl"],
    "Outram Park": ["ewl", "nel", "tel"],
    "Tiong Bahru": ["ewl"],
    "Redhill": ["ewl"],
    "Queenstown": ["ewl"],
    "Commonwealth": ["ewl"],
    "Buona Vista": ["ewl", "ccl"],
    "Dover": ["ewl"],
    "Clementi": ["ewl"],
    "Chinese Garden": ["ewl"],
    "Lakeside": ["ewl"],
    "Boon Lay": ["ewl"],
    "Pioneer": ["ewl"],
    "Joo Koon": ["ewl"],
    "Gul Circle": ["ewl"],
    "Tuas Crescent": ["ewl"],
    "Tuas West Road": ["ewl"],
    "Tuas Link": ["ewl"],
    "HarbourFront": ["nel", "ccl"],
    "Chinatown": ["nel", "dtl"],
    "Clarke Quay": ["nel"],
    "Little India": ["nel", "dtl"],
    "Farrer Park": ["nel"],
    "Boon Keng": ["nel"],
    "Potong Pasir": ["nel"],
    "Woodleigh": ["nel"],
    "Serangoon": ["nel", "ccl"],
    "Kovan": ["nel"],
    "Hougang": ["nel"],
    "Buangkok": ["nel"],
    "Sengkang": ["nel"],
    "Punggol": ["nel"],
    "Bras Basah": ["ccl"],
    "Esplanade": ["ccl"],
    "Promenade": ["ccl", "dtl"],
    "Nicoll Highway": ["ccl"],
    "Stadium": ["ccl"],
    "Mountbatten": ["ccl"],
    "Dakota": ["ccl"],
    "MacPherson": ["ccl", "dtl"],
    "Tai Seng": ["ccl"],
    "Bartley": ["ccl"],
    "Lorong Chuan": ["ccl"],
    "Marymount": ["ccl", "tel"],
    "Caldecott": ["ccl", "tel"],
    "Botanic Gardens": ["ccl", "dtl"],
    "Farrer Road": ["ccl"],
    "Holland Village": ["ccl"],
    "one-north": ["ccl"],
    "Kent Ridge": ["ccl"],
    "Haw Par Villa": ["ccl"],
    "Pasir Panjang": ["ccl"],
    "Labrador Park": ["ccl"],
    "Telok Blangah": ["ccl"],
    "Bukit Panjang": ["dtl"],
    "Cashew": ["dtl"],
    "Hillview": ["dtl"],
    "Beauty World": ["dtl"],
    "King Albert Park": ["dtl"],
    "Sixth Avenue": ["dtl"],
    "Tan Kah Kee": ["dtl"],
    "Stevens": ["dtl", "tel"],
    "Rochor": ["dtl"],
    "Bayfront": ["dtl", "ccl"],
    "Downtown": ["dtl"],
    "Telok Ayer": ["dtl"],
    "Fort Canning": ["dtl"],
    "Bencoolen": ["dtl"],
    "Jalan Besar": ["dtl"],
    "Bendemeer": ["dtl"],
    "Geylang Bahru": ["dtl"],
    "Mattar": ["dtl"],
    "Ubi": ["dtl"],
    "Kaki Bukit": ["dtl"],
    "Bedok North": ["dtl"],
    "Bedok Reservoir": ["dtl"],
    "Tampines West": ["dtl"],
    "Tampines East": ["dtl"],
    "Upper Changi": ["dtl"],
    "Expo": ["ewl", "dtl"],
    "Woodlands North": ["tel"],
    "Woodlands South": ["tel"],
    "Springleaf": ["tel"],
    "Lentor": ["tel"],
    "Mayflower": ["tel"],
    "Bright Hill": ["tel"],
    "Upper Thomson": ["tel"],
    "Napier": ["tel"],
    "Orchard Boulevard": ["tel"],
    "Great World": ["tel"],
    "Havelock": ["tel"],
    "Maxwell": ["tel"],
    "Shenton Way": ["tel"],
    "Marina South": ["tel"],
    "Gardens by the Bay": ["tel"],
    "Tanjong Rhu": ["tel"],
    "Katong Park": ["tel"],
    "Tanjong Katong": ["tel"],
    "Marine Parade": ["tel"],
    "Marine Terrace": ["tel"],
    "Siglap": ["tel"],
    "Bayshore": ["tel"]
};

const stations = Object.keys(stationsWithLines);

let timer;
let score;
let currentQuestion;
let highscore = parseInt(localStorage.getItem('highscore')) || 0;
let jumbledStations = [];

document.getElementById('page-1').classList.remove('hidden');

function initializeGame() {
    timer = 60;
    score = 0;
    currentQuestion = 0;
    document.getElementById('timer').innerText = timer;
    document.getElementById('score').innerText = "Score: " + score;
    shuffleStations();
}

function shuffleStations() {
    shuffleArray(stations);
    jumbledStations = stations.map(station => 
        station.split('').sort(() => Math.random() - 0.5).join('')
    );
}

function startGame() {
    document.getElementById('page-1').classList.add('hidden');
    document.getElementById('page-2').classList.remove('hidden');
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('outro').classList.add('hidden');
    initializeGame();
    showQuestion();
    startTimer();
    document.getElementById('answer').focus();
}

function startTimer() {
    const countdown = setInterval(() => {
        timer--;
        document.getElementById('timer').innerText = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestion < jumbledStations.length) {
        document.getElementById('question').innerText = jumbledStations[currentQuestion];
        showStationLines(stations[currentQuestion]);
    } else {
        endGame();
    }
}


function showStationLines(station) {
    const lines = stationsWithLines[station];
    const lineImagesContainer = document.getElementById('line-images');
    lineImagesContainer.innerHTML = '';

    lines.forEach(line => {
        const img = document.createElement('img');
        img.src = `images/${line}.png`;
        img.alt = line;
        img.className = line;
        lineImagesContainer.appendChild(img);
    });
}


function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer === stations[currentQuestion].toLowerCase()) {
        submitAnswer();
    }
}

function playCorrectAnswerSound() {
    const correctAnswerSound = new Audio('correct-answer.mp3');
    correctAnswerSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });
    let audio = document.getElementById("correct-answer-sound");
    audio.volume = 0.2;
}

function submitAnswer() {
    score++;
    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('answer').value = '';
    playCorrectAnswerSound();
    currentQuestion++;
    showQuestion();
}

function skipQuestion() {
    document.getElementById('answer').value = '';
    currentQuestion++;
    showQuestion();
}

function endGame() {
    document.getElementById('page-2').classList.add('hidden');
    document.getElementById('page-3').classList.remove('hidden');
    document.getElementById('game').classList.add('hidden');
    document.getElementById('outro').classList.remove('hidden');
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
    document.getElementById('highscore').innerText = "Highscore: " + highscore;
}

function retryGame() {
    document.getElementById('page-1').classList.add('hidden');
    document.getElementById('page-2').classList.remove('hidden');
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('outro').classList.add('hidden');
    document.getElementById('page-3').classList.add('hidden');
    initializeGame();
    showQuestion();
    startTimer();
    document.getElementById('answer').focus();
}

function goBack() {
    document.getElementById('page-1').classList.remove('hidden');
    document.getElementById('page-3').classList.add('hidden');
    document.getElementById('outro').classList.add('hidden');
    document.getElementById('welcome').classList.remove('hidden');
    document.getElementById('answer').value = '';
}

document.getElementById('answer').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

console.log();