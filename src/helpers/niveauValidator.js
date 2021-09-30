export function niveauValidator(niveau) {
    if (!niveau) return "Le niveau ne peut être vide";
    if (niveau.length != 2) return "Entrez L1, L2, L3, M1 ou M2"
    return ''
}