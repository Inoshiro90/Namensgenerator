// Eventlistener für den Button "Generieren" hinzufügen
document.getElementById('generateNamesButton').addEventListener('click', function () {
    generateNames();
});

// Eventlistener für den Button "Kopieren" hinzufügen
document.getElementById("copyNamesButton").addEventListener("click", function() {
    let container = document.getElementById("generatedNames").innerText;
    navigator.clipboard.writeText(container).then(function() {
        document.getElementById("copyNamesButton").innerText = "Kopiert!";
        setTimeout(function() {
            document.getElementById("copyNamesButton").innerText = "Kopieren";
        }, 2000); // 2 Sekunden verzögert
    }, function() {
        alert("Fehler beim Kopieren des Inhalts in die Zwischenablage.");
    });
});

// Erstellt den Zurück nach oben-Button
document.addEventListener("DOMContentLoaded", function() {
    // Erstellt den Zurück nach oben-Button
    let backToTopButton = document.createElement("button");
    backToTopButton.textContent = "^";
    backToTopButton.classList.add("btn", "btn-secondary", "back-to-top");
    backToTopButton.style.display = "none"; // Setzt den Button standardmäßig auf "versteckt"
    document.body.appendChild(backToTopButton);

    // Überprüft, ob der Zurück nach oben-Button angezeigt oder ausgeblendet werden soll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) { // Zeige den Button, wenn der Benutzer 200 Pixel nach unten gescrollt hat
            backToTopButton.style.display = "block";
        } else { // Verstecke den Button, wenn der Benutzer ganz oben ist
            backToTopButton.style.display = "none";
        }
    });

    // Scrollt nach oben, wenn der Zurück nach oben-Button geklickt wird
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Füge einen Eventlistener hinzu, der die Beschreibung aktualisiert, wenn das Volk Dropdown-Menü geändert wird
document.addEventListener("DOMContentLoaded", function() {
    // Rufe addRaceDescription() auf, um die Beschreibung für den Standardwert anzuzeigen
    addRaceDescription();
    
    // Füge den Eventlistener hinzu, der die Beschreibung aktualisiert, wenn das Dropdown-Menü geändert wird
    document.getElementById("raceDropdown").addEventListener("change", addRaceDescription);
});