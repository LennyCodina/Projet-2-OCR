export const NotFound = () => {
    return(
        <div>
            <button onClick={() => window.location.href = '/'} className="p-2 sm:p-3 rounded-lg shadow-lg mb-4 text-sm sm:text-base">Retour à l'accueil</button>
            <h2 className="display-1 text-center">Erreur 404 — Page introuvable</h2>
        </div>
    )
}