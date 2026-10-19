# Hunter Systeem – installeren op Android (zonder computer)

Deze map is de complete app. Hij werkt offline en bewaart al je gegevens alleen op je telefoon.

## 1. Bestanden klaarzetten
Open de app **Bestanden** (of Files by Google), tik op `hunter-android-app.zip` en kies **Uitpakken**.

## 2. Online zetten via GitHub (in Chrome op je telefoon)
1. Ga naar **github.com** en maak een gratis account.
2. Tik op **+** → **New repository**. Noem hem `hunter`, kies **Public**, vink **Add a README** aan en tik op **Create repository**.
3. Tik op **Add file** → **Upload files**. Kies alle bestanden uit de uitgepakte map: `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png` en `icon-512.png`. Tik op **Commit changes**.
4. Ga naar **Settings** → **Pages**. Kies bij Branch **main** en **/(root)**, en tik op **Save**.
5. Wacht 1 à 2 minuten. Je app staat dan op `https://jouwgebruikersnaam.github.io/hunter/`.

Zie je Settings of Upload niet? Tik in Chrome op **⋮** en zet **Desktopsite** aan.

## 3. Installeren
1. Open het adres in **Chrome**.
2. Tik op **⋮** → **App installeren**. Staat dat er niet, kies dan **Toevoegen aan startscherm**.
3. Open Hunter Systeem vanaf je startscherm. Hij opent als losse app, zonder browserbalken.
4. Open hem één keer terwijl je online bent. Daarna werkt hij ook zonder internet.

## 4. Voortgang meenemen
Open de oude versie en kies **Logboek → Kopieer back-up**. Plak de code in de geïnstalleerde app bij **Logboek → Herstel**.

## Goed om te weten
- Je voortgang staat alleen op je telefoon. Verwijder je de app of wis je de gegevens van Chrome, dan is hij weg. Maak dus af en toe een back-up.
- De code van de app is in een openbare repository zichtbaar voor anderen. Je gegevens niet.
- **Updates:** vervang de bestanden op GitHub en verhoog `VERSION` in `sw.js`.
