export function passwordValidator(password) {
    if (!password) return "Le mot de passe ne peut être vide."
    if (password.length < 5) return 'Le mot de passe doit avoir plus de 5 carractère.'
    return ''
}