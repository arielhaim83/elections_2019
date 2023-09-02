var currentRoundIndex = 1;

var teams = 
{
    "br": { id: 1, img: "reyne.gif", name: "מכבי בני ריינה"},
    "hb": { id: 2, img: "beer-sheva.gif", name: "הפועל באר-שבע"},
    "mt": { id: 3, img: "maccabi-ta.gif", name: "מכבי תל-אביב"},  
    "bs": { id: 4, img: "bney-sahnin.gif", name: "הפועל בני-סכנין"},  
    "ht": { id: 5, img: "hapoel-ta.gif", name: "הפועל תל-אביב"}, 
    "mp": { id: 6, img: "maccabi-pt.gif", name: "מכבי פתח-תקווה"}, 
    "hj": { id: 7, img: "hapoel-jerusalem.gif", name: "הפועל ירושלים"},     
    "mn": { id: 8, img: "maccabi-netanya.gif", name: "מכבי נתניה"},
    "hh": { id: 9, img: "hapoel-hadera.gif", name: "הפועל חדרה"},
    "ma": { id: 10, img: "ashdod.gif", name: "מס אשדוד"},
    "bj": { id: 11, img: "beitar-jerusalem.gif", name: "ביתר ירושלים"},
    "hha": { id: 12, img: "hapoel-haifa.gif", name: "הפועל חיפה"},
    "mh": { id: 13, img: "maccabi-haifa.gif", name: "מכבי חיפה"},
    "hp": { id: 14, img: "hapoel-pt.gif", name: "הפועל פתח-תקווה"},
}

var league = 
{
    rounds: [
        {
            id: 1,
            matches: [
                {
                    id: 1,
                    home: "bs",
                    away: "ht"
                },
                {
                    id: 2,
                    home: "mp",
                    away: "hj"
                },
                {
                    id: 3,
                    home: "mn",
                    away: "br"
                },
                {
                    id: 4,
                    home: "hb",
                    away: "hh"
                },
                {
                    id: 5,
                    home: "mt",
                    away: "ma"
                },
                {
                    id: 6,
                    home: "bj",
                    away: "hha"
                },
                {
                    id: 7,
                    home: "mh",
                    away: "hp"
                }
            ],
            results: [
                {
                    id: 1,
                    home: 1,
                    away: 1                                
                },
                {
                    id: 2,
                    home: 1,
                    away: 1                                
                },
                {
                    id: 3,
                    home: 1,
                    away: 1                                
                },
                {
                    id: 4,
                    home: 3,
                    away: 0                                
                },
                {
                    id: 5,
                    home: 4,
                    away: 1                                
                },
                {
                    id: 6,
                    home: 1,
                    away: 2                                
                },
                {
                    id: 7,
                    home: "",
                    away: ""                                
                },
            ],
            guesses: [
                {
                    "גיא": [
                        {
                            id: 1,
                            home: 1,
                            away: 2
                        },
                        {
                            id: 2,
                            home: 0,
                            away: 2
                        },
                        {
                            id: 3,
                            home: 4,
                            away: 0
                        },
                        {
                            id: 4,
                            home: 0,
                            away: 0
                        },
                        {
                            id: 5,
                            home: 3,
                            away: 0
                        },
                        {
                            id: 6,
                            home: 3,
                            away: 1
                        },
                        {
                            id: 7,
                            home: 2,
                            away: 0
                        },
                    ],
                    "אריאל": [
                        {
                            id: 1,
                            home: 1,
                            away: 1
                        },
                        {
                            id: 2,
                            home: 2,
                            away: 1
                        },
                        {
                            id: 3,
                            home: 0,
                            away: 0
                        },
                        {
                            id: 4,
                            home: 3,
                            away: 0
                        },
                        {
                            id: 5,
                            home: 3,
                            away: 0
                        },
                        {
                            id: 6,
                            home: 2,
                            away: 1
                        },
                        {
                            id: 7,
                            home: 4,
                            away: 0
                        },
                    ],
                    "יעקב": [
                        {
                            id: 1,
                            home: 1,
                            away: 0
                        },
                        {
                            id: 2,
                            home: 1,
                            away: 1
                        },
                        {
                            id: 3,
                            home: 2,
                            away: 0
                        },
                        {
                            id: 4,
                            home: 3,
                            away: 1
                        },
                        {
                            id: 5,
                            home: 2,
                            away: 0
                        },
                        {
                            id: 6,
                            home: 0,
                            away: 1
                        },
                        {
                            id: 7,
                            home: 3,
                            away: 0
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            matches: [
                {
                    id: 1,
                    home: "br",
                    away: "hb"
                },
                {
                    id: 2,
                    home: "hp",
                    away: "bs"
                },
                {
                    id: 3,
                    home: "hha",
                    away: "mp"
                },
                {
                    id: 4,
                    home: "ht",
                    away: "mn"
                },
                {
                    id: 5,
                    home: "hj",
                    away: "mh"
                },
                {
                    id: 6,
                    home: "hh",
                    away: "mt"
                },
                {
                    id: 7,
                    home: "ma",
                    away: "bj"
                }
            ],
            results: [
                {
                    id: 1,
                    home: 1,
                    away: 1                                
                },
                {
                    id: 2,
                    home: 1,
                    away: 1                                
                },
                {
                    id: 3,
                    home: 2,
                    away: 2                                
                },
                {
                    id: 4,
                    home: 2,
                    away: 0                                
                },
                {
                    id: 5,
                    home: "",
                    away: ""                                
                },
                {
                    id: 6,
                    home: "",
                    away: ""                                
                },
                {
                    id: 7,
                    home: "",
                    away: ""                                
                },
            ],
            guesses: [
                {
                    "גיא": [
                        {
                            id: 1,
                            home: 1,
                            away: 2
                        },
                        {
                            id: 2,
                            home: 0,
                            away: 1
                        },
                        {
                            id: 3,
                            home: 0,
                            away: 0
                        },
                        {
                            id: 4,
                            home: 2,
                            away: 3
                        },
                        {
                            id: 5,
                            home: 0,
                            away: 3
                        },
                        {
                            id: 6,
                            home: "",
                            away: ""
                        },
                        {
                            id: 7,
                            home: 1,
                            away: 1
                        },
                    ],
                    "אריאל": [
                        {
                            id: 1,
                            home: 0,
                            away: 0
                        },
                        {
                            id: 2,
                            home: 1,
                            away: 0
                        },
                        {
                            id: 3,
                            home: 2,
                            away: 0
                        },
                        {
                            id: 4,
                            home: 0,
                            away: 0
                        },
                        {
                            id: 5,
                            home: 1,
                            away: 2
                        },
                        {
                            id: 6,
                            home: 0,
                            away: 3
                        },
                        {
                            id: 7,
                            home: 2,
                            away: 1
                        },
                    ],
                    "יעקב": [
                        {
                            id: 1,
                            home: 1,
                            away: 1
                        },
                        {
                            id: 2,
                            home: 0,
                            away: 1
                        },
                        {
                            id: 3,
                            home: 1,
                            away: 1
                        },
                        {
                            id: 4,
                            home: 1,
                            away: 0
                        },
                        {
                            id: 5,
                            home: 2,
                            away: 1
                        },
                        {
                            id: 6,
                            home: 0,
                            away: 2
                        },
                        {
                            id: 7,
                            home: 2,
                            away: 0
                        },
                    ]
                }
            ]
        }
    ]
}

function calculateScore(guess, result) {
    let score = 0;

    if (result.home === "")
        return 0;

    if (guess.home === result.home && guess.away === result.away) {
        score = 2; // Exact score, 2 points
    } else if ((guess.home > guess.away && result.home > result.away) ||
               (guess.home < guess.away && result.home < result.away) ||
               (guess.home === guess.away && result.home === result.away)) {
        score = 1; // Correct winner, 1 point
    }

    return score;
}

function updateTotalScoresDisplay(totalScores) {
    const totalScoresContainer = document.getElementById("total-scores");
    totalScoresContainer.innerHTML = ""; // Clear the container

    const totalScoresRow = document.createElement("div");
    totalScoresRow.classList.add("total-scores-row");

    for (const player in totalScores) {
        const playerScore = document.createElement("div");
        playerScore.classList.add("player-score");
        playerScore.textContent = `${player}: ${totalScores[player]} נקודות`;
        totalScoresRow.appendChild(playerScore);
    }

    totalScoresContainer.appendChild(totalScoresRow);
}

// Function to calculate total scores for each player
function calculateTotalScores(league) {
    const totalScores = {};

    league.rounds.forEach((round) => {
        round.guesses.forEach((guessesForRound) => {
            for (const player in guessesForRound) {
                if (!totalScores[player]) {
                    totalScores[player] = 0;
                }

                const roundGuesses = guessesForRound[player];
                const roundResults = round.results;

                for (let i = 0; i < roundGuesses.length; i++) {
                    const guess = roundGuesses[i];
                    const result = roundResults[i];
                    totalScores[player] += calculateScore(guess, result);
                }
            }
        });
    });

    return totalScores;
}

// Function to generate the table with guesses and scores
function generateTable(round, guesses, results) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Create table header
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    const headerCell2 = document.createElement("th");
    const headerCell3 = document.createElement("th");
    const headerCell4 = document.createElement("th");
    headerCell1.textContent = "חוץ";
    headerCell2.textContent = "תוצאה";
    headerCell3.textContent = "בית";
    headerCell4.textContent = "ניחושים";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    headerRow.appendChild(headerCell4);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    round.matches.forEach((match, index) => {
        const row = document.createElement("tr");
        const homeTeamCell = document.createElement("td");
        const resultCell = document.createElement("td");
        const awayTeamCell = document.createElement("td");
        const guessesAndScoresCell = document.createElement("td");

        const homeTeam = teams[match.home];
        const awayTeam = teams[match.away];
        homeTeamCell.innerHTML = `<img src="./content/${homeTeam.img}" alt="${homeTeam.name}" /><br>${homeTeam.name}`;
        awayTeamCell.innerHTML = `<img src="./content/${awayTeam.img}" alt="${awayTeam.name}" /><br>${awayTeam.name}`;

        const result = results[index];
        resultCell.textContent = `${result.away}-${result.home}`;
        const guessesForMatch = [];

        for (const player in guesses) {
            const guess = guesses[player][index];
            const score = calculateScore(guess, result);
            guessesForMatch.push(`${player}: ${guess.away}-${guess.home} (נקודות: ${score})`);
        }

        guessesAndScoresCell.innerHTML = guessesForMatch.join("<br>");
        
        row.appendChild(awayTeamCell);
        row.appendChild(resultCell);
        row.appendChild(homeTeamCell);
        row.appendChild(guessesAndScoresCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

function updateTableForCurrentRound() {
    const tableContainer = document.getElementById("games");
    tableContainer.innerHTML = "";

    const currentRound = league.rounds[currentRoundIndex];
    const generatedTable = generateTable(currentRound, currentRound.guesses[0], currentRound.results);
    tableContainer.appendChild(generatedTable);

    // Update the round header
    const roundHeader = document.getElementById("round-header");
    roundHeader.textContent = `מחזור ${currentRound.id}`;
}

function nextRound() {
    if (currentRoundIndex < league.rounds.length - 1) {
        currentRoundIndex++;
        updateTableForCurrentRound();
    }
}

// Function to handle moving to the previous round
function prevRound() {
    if (currentRoundIndex > 0) {
        currentRoundIndex--;
        updateTableForCurrentRound();
    }
}

// Append the generated table to a container in your HTML (replace 'table-container' with your container's ID)
const tableContainer = document.getElementById("games");
const roundToDisplay = league.rounds[currentRoundIndex]; // Change this to display a specific round
//const generatedTable = generateTable(roundToDisplay, league.rounds[currentRoundIndex].guesses[0], league.rounds[currentRoundIndex].results);
updateTableForCurrentRound();
//tableContainer.appendChild(generatedTable);

const totalScores = calculateTotalScores(league);
updateTotalScoresDisplay(totalScores);