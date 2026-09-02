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