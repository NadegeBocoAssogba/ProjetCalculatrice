const touches = [...document.querySelectorAll(".btn")]
const listkeycode = touches.map (touche=>touche.dataset.key)
const ecran = document.querySelector(".ecran")

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})
document.addEventListener("click", (e)=>{
    const valeur=e.target.dataset.key
    calculer(valeur)
})
const calculer = (valeur) => {
    if (listkeycode.includes (valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent=""
                break;
            case "13":
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul
                break;
            default:
                const indexKeycode = listkeycode.indexOf(valeur)
                const touche = touches[indexKeycode]
                ecran.textContent += touche.innerHTML
                break;
        }        
    }
}
window.addEventListener("error", (e) => [
    alert("Une erreur est survenue dans votre calcul: " + e.message)
])