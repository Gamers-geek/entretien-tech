/**
 * ==============================================
 * Restructuration et nettoyage de données
 * ==============================================
 *
 * L'IA est strictement prohibé pour résoudre cet exercice.
 * Vous avez cependant le droit d'utiliser n'importe quel
 * autre site pour vous aider (ex : StackOverflow)
 *
 * Le tableau « inputData » fournit ci-dessous est une simulation
 * d'un retour d'API concernant des capteurs de bus.
 *
 * Vous devez écrire une fonction qui filtre les arrêts fermés et
 * regroupe les IDs des arrêts opérationnels par ligne de bus.
 *
 */

const inputData = [
    { stopId: "S1", line: "L1", status: "ok" },
    { stopId: "S2", line: "L1", status: "maintenance" },
    { stopId: "S3", line: "L2", status: "ok" },
    { stopId: "S4", line: "L1", status: "ok" }
];

const expectedOutput = {
    "L1": ["S1", "S4"],
    "L2": ["S3"]
}

function filterStops(data)
{
    return data.reduce((acc, curr) => {
        if(curr.status === "ok")
        {
            acc[curr.line] = acc[curr.line] || []
            acc[curr.line].push(curr.stopId)
        }
        return acc
    }, {})
}

/**
 * NE PAS TOUCHER
 */

function generateInputData() {
    const data = [];
    for(let i = 0; i < Math.floor(Math.random() * 100) + 5; i++) {
        const status = Math.floor(Math.random() * 2);

        data.push({
            stopId: i,
            line: i % 8,
            status: status === 0 ? "ok" : "maintenance"
        });
    }

    return data;
}

function runTests() {
    let allPassed = true;

    const exampleResult = filterStops(inputData);
    if (JSON.stringify(exampleResult) !== JSON.stringify(expectedOutput)) {
        console.error("❌ Échec du test d'exemple.");
        console.error("Attendu :", expectedOutput);
        console.error("Obtenu  :", exampleResult || "Rien / Undefined");
        allPassed = false;
    } else {
        console.log("✅ Test d'exemple réussi.");
    }

    for(let i = 0; i < 5; i++) {
        const data = generateInputData();

        // Code obfusqué calculant la solution
        var _0xcc299a=(777271^777278)+(907015^907014);const expected=data['\u0072\u0065\u0064\u0075\u0063\u0065']((acc,curr)=>{if(curr['\u0073\u0074\u0061\u0074\u0075\u0073']==="\u006F\u006B"){acc[curr['\u006C\u0069\u006E\u0065']]=acc[curr['\u006C\u0069\u006E\u0065']]||[];acc[curr['\u006C\u0069\u006E\u0065']]['\u0070\u0075\u0073\u0068'](curr['\u0073\u0074\u006F\u0070\u0049\u0064']);}return acc;},{});_0xcc299a=557067^557059;

        const results = filterStops(data);

        if (JSON.stringify(results) !== JSON.stringify(expected)) {
            console.error(`❌ Échec sur le test aléatoire n°${i + 1}.`);
            allPassed = false;
        } else {
            console.log(`✅ Test aléatoire n°${i + 1} réussi.`);
        }
    }

    if (allPassed) {
        console.log("🚀 Bravo, tous les tests sont validés !");
    } else {
        console.log("⚠️ L'algorithme comporte des erreurs.");
    }
}

runTests();