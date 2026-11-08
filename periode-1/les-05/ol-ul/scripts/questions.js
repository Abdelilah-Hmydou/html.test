// Quiz Questions Database

class Questions {
    constructor() {
        this.questions = [
            {
                id: 1,
                question: "Moet je OL of UL gebruiken voor de stappen van een recept?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) moet gebruikt worden voor receptstappen omdat de volgorde van de stappen belangrijk is - je moet ze in volgorde volgen."
            },
            // OL (Geordende Lijst) vragen
            {
                id: 2,
                question: "Moet je OL of UL gebruiken voor 'De volgorde waarin ik pizza beleg'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat de volgorde van beleg belangrijk is - je belegt pizza in een specifieke volgorde."
            },
            {
                id: 3,
                question: "Moet je OL of UL gebruiken voor 'Mijn ochtendplaylist, van rustig naar energiek'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat de volgorde van rustig naar energiek belangrijk is voor de playlist."
            },
            {
                id: 4,
                question: "Moet je OL of UL gebruiken voor 'Mijn top drie games'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top drie is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 5,
                question: "Moet je OL of UL gebruiken voor 'De vijf vervelendste klusjes'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een ranglijst is van vervelendste naar minst vervelend."
            },
            {
                id: 6,
                question: "Moet je OL of UL gebruiken voor 'De stappen die ik doorloop als mijn laptop vastloopt'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je de stappen in een specifieke volgorde moet volgen om je laptop te repareren."
            },
            {
                id: 7,
                question: "Moet je OL of UL gebruiken voor 'De stappen voor het maken van een boterham met pindakaas & jam'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je de stappen in de juiste volgorde moet volgen om een boterham te maken."
            },
            {
                id: 8,
                question: "Moet je OL of UL gebruiken voor 'De volgorde van hoe ik een taart bak'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je de stappen van het bakken in een specifieke volgorde moet volgen."
            },
            {
                id: 9,
                question: "Moet je OL of UL gebruiken voor 'De stappen die ik volg om naar school te gaan'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je de stappen in een logische volgorde volgt om naar school te gaan."
            },
            {
                id: 10,
                question: "Moet je OL of UL gebruiken voor 'De beste vakanties die ik ooit heb gehad (van beste naar minst leuk)'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een ranglijst is van beste naar minst leuke vakanties."
            },
            {
                id: 11,
                question: "Moet je OL of UL gebruiken voor 'De top 10 beste smoesjes om huiswerk niet te maken'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top 10 is - de volgorde van beste naar minst goede smoesjes is belangrijk."
            },
            {
                id: 12,
                question: "Moet je OL of UL gebruiken voor 'De top 10 meest gebruikte apps op mijn telefoon'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top 10 is - de volgorde van meest naar minst gebruikte apps is belangrijk."
            },
            {
                id: 13,
                question: "Moet je OL of UL gebruiken voor 'Top drie meest irritante geluiden'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top drie is - de volgorde van meest naar minst irritant is belangrijk."
            },
            {
                id: 14,
                question: "Moet je OL of UL gebruiken voor 'De stappen van een recept voor mijn lievelingssnack'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je de stappen van een recept in een specifieke volgorde moet volgen."
            },
            {
                id: 15,
                question: "Moet je OL of UL gebruiken voor 'Deze telefoons heb ik gehad (van oudst naar nieuwst)'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat de chronologische volgorde van oudst naar nieuwst belangrijk is."
            },
            {
                id: 16,
                question: "Moet je OL of UL gebruiken voor 'De top drie dingen die ik doe als ik me verveel'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top drie is - de volgorde van meest naar minst favoriet is belangrijk."
            },
            {
                id: 17,
                question: "Moet je OL of UL gebruiken voor 'De vijf leukste herinneringen van mijn vakantie (van recent naar ouder)'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat de chronologische volgorde van recent naar ouder belangrijk is."
            },
            {
                id: 18,
                question: "Moet je OL of UL gebruiken voor 'De ranglijst van mijn sportprestaties'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een ranglijst is - de volgorde van beste naar minst goede prestaties is belangrijk."
            },
            {
                id: 19,
                question: "Moet je OL of UL gebruiken voor 'De drie dingen die ik als eerste doe als ik opsta'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat je deze dingen in een specifieke volgorde doet als je opstaat."
            },
            // UL (Ongeordende Lijst) vragen
            {
                id: 20,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf landen die ik het liefst wil bezoeken'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 21,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete schoolvakken'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 22,
                question: "Moet je OL of UL gebruiken voor 'Boeken in mijn kamer'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van boeken is zonder specifieke volgorde - alle boeken zijn even belangrijk."
            },
            {
                id: 23,
                question: "Moet je OL of UL gebruiken voor 'Dit zit er in mijn rugtas'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van spullen in je rugtas is zonder specifieke volgorde - alle spullen zijn even belangrijk."
            },
            {
                id: 24,
                question: "Moet je OL of UL gebruiken voor 'Dit staat er op mijn bureau'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van spullen op je bureau is zonder specifieke volgorde - alle spullen zijn even belangrijk."
            },
            {
                id: 25,
                question: "Moet je OL of UL gebruiken voor 'Dingen die ik nooit meer wil eten'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van eten is zonder specifieke volgorde - alle eten is even vervelend."
            },
            {
                id: 26,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete snoepjes'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 27,
                question: "Moet je OL of UL gebruiken voor 'Mijn hobby's'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van hobby's is zonder specifieke volgorde - alle hobby's zijn even belangrijk."
            },
            {
                id: 28,
                question: "Moet je OL of UL gebruiken voor 'Dingen die ik wil leren'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van dingen is die je wilt leren zonder specifieke volgorde - alle dingen zijn even belangrijk."
            },
            {
                id: 29,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete dieren'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 30,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete muziekinstrumenten'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 31,
                question: "Moet je OL of UL gebruiken voor 'Grappige dingen die ik op school heb meegemaakt'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van grappige ervaringen is zonder specifieke volgorde - alle ervaringen zijn even grappig."
            },
            {
                id: 32,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete geurtjes'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 33,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete huisdieren'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 34,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete rare woorden'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 35,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete tv-series'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 36,
                question: "Moet je OL of UL gebruiken voor 'Boodschappen die ik vandaag moet kopen'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van boodschappen is zonder specifieke volgorde - alle boodschappen zijn even belangrijk."
            },
            {
                id: 37,
                question: "Moet je OL of UL gebruiken voor 'Dingen die ik verzamel'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van verzamelobjecten is zonder specifieke volgorde - alle objecten zijn even waardevol."
            },
            {
                id: 38,
                question: "Moet je OL of UL gebruiken voor 'Spullen die ik zou meenemen naar een onbewoond eiland'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van spullen is zonder specifieke volgorde - alle spullen zijn even belangrijk voor overleving."
            },
            {
                id: 39,
                question: "Moet je OL of UL gebruiken voor 'Voorwerpen die altijd in mijn jaszak zitten'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van voorwerpen is zonder specifieke volgorde - alle voorwerpen zijn even belangrijk."
            },
            {
                id: 40,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete vrienden'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 41,
                question: "Moet je OL of UL gebruiken voor 'Dingen die altijd verdwijnen in mijn huis (sokken, opladers, …)'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van spullen is zonder specifieke volgorde - alle spullen verdwijnen even vaak."
            },
            {
                id: 42,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete gerechten'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 43,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete plekken in de stad/dorp'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 44,
                question: "Moet je OL of UL gebruiken voor 'Dingen die ik altijd uitstel'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van dingen is zonder specifieke volgorde - alle dingen worden even vaak uitgesteld."
            },
            {
                id: 45,
                question: "Moet je OL of UL gebruiken voor 'Mijn top vijf favoriete films'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: true },
                    { text: "UL (Ongeordende Lijst)", correct: false }
                ],
                explanation: "OL (Geordende Lijst) omdat het een top vijf is - de volgorde van favoriet naar minst favoriet is belangrijk."
            },
            {
                id: 46,
                question: "Moet je OL of UL gebruiken voor 'Voorwerpen die in mijn broekzak passen'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: true }
                ],
                explanation: "UL (Ongeordende Lijst) omdat het een lijst van voorwerpen is zonder specifieke volgorde - alle voorwerpen passen even goed in je broekzak."
            },
            // "Als je twijfelt, vraag het" vragen - deze zijn ambigu en vereisen verduidelijking
            {
                id: 47,
                question: "Moet je OL of UL gebruiken voor 'Mijn favoriete gerechten'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: false },
                ],
                explanation: "Vraag om verduidelijking! 'Favoriete gerechten' kan zowel een ranglijst (OL) als een gewone lijst (UL) zijn. Vraag of de volgorde belangrijk is."
            },
            {
                id: 48,
                question: "Moet je OL of UL gebruiken voor 'Mijn favoriete films'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: false },
                ],
                explanation: "Vraag om verduidelijking! 'Favoriete films' kan zowel een ranglijst (OL) als een gewone lijst (UL) zijn. Vraag of de volgorde belangrijk is."
            },
            {
                id: 49,
                question: "Moet je OL of UL gebruiken voor 'Mijn favoriete plekken'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: false },
                ],
                explanation: "Vraag om verduidelijking! 'Favoriete plekken' kan zowel een ranglijst (OL) als een gewone lijst (UL) zijn. Vraag of de volgorde belangrijk is."
            },
            {
                id: 50,
                question: "Moet je OL of UL gebruiken voor 'Mijn favoriete muziek'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: false },
                ],
                explanation: "Vraag om verduidelijking! 'Favoriete muziek' kan zowel een ranglijst (OL) als een gewone lijst (UL) zijn. Vraag of de volgorde belangrijk is."
            },
            {
                id: 51,
                question: "Moet je OL of UL gebruiken voor 'Mijn favoriete boeken'?",
                answers: [
                    { text: "OL (Geordende Lijst)", correct: false },
                    { text: "UL (Ongeordende Lijst)", correct: false },
                ],
                explanation: "Vraag om verduidelijking! 'Favoriete boeken' kan zowel een ranglijst (OL) als een gewone lijst (UL) zijn. Vraag of de volgorde belangrijk is."
            }
        ];
    }

    // Get all available questions
    getAllQuestions() {
        return this.questions;
    }

    // Get a random question
    getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }

    // Get a question by ID
    getQuestionById(id) {
        return this.questions.find(q => q.id === id);
    }

    // Get total number of questions
    getTotalQuestions() {
        return this.questions.length;
    }
}
