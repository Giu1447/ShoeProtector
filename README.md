# Shoeprotector

## Inhaltsverzeichnis
1. [Einleitung](#einleitung)
2. [Projektübersicht](#projektübersicht)
3. [Funktionen](#funktionen)
4. [Technologien](#technologien)
5. [Installation](#installation)
6. [Nutzung](#nutzung)
7. [API-Dokumentation](#api-dokumentation)
8. [Datenbank-Struktur](#datenbank-struktur)
9. [Sicherheit](#sicherheit)
10. [Tests](#tests)
11. [Bekannte Probleme](#bekannte-probleme)
12. [Zukünftige Verbesserungen](#zuk%C3%BCnftige-verbesserungen)
13. [Lizenz](#lizenz)

---

## Einleitung
**Shoeprotector** ist eine innovative Lösung zum Schutz, zur Verwaltung und zur Pflege von Schuhen. Ob du deine Sneaker vor Schmutz und Wasser schützen möchtest oder ein digitales Inventar deiner Schuhsammlung benötigst – Shoeprotector bietet die passende Lösung.

## Projektübersicht
Shoeprotector kombiniert moderne Technologien, um Nutzern eine komfortable Möglichkeit zu bieten, ihre Schuhe zu schützen und zu verwalten. Das Projekt besteht aus einer **Webanwendung** und optional einer **mobilen App**.

### Zielsetzung
- Schutz von Schuhen vor Umwelteinflüssen
- Verwaltung und Pflege von Schuhsammlungen
- Automatische Benachrichtigungen für Reinigungs- oder Pflegebedarf
- Integration mit Marktplätzen für den Schuhhandel

## Funktionen
### Basisfunktionen
- **Schutzmechanismen**: Wasserabweisende Schutzschicht, Schmutzschutz
- **Inventarverwaltung**: Katalogisierung von Schuhen mit Bildern und Notizen
- **Pflegehinweise**: Automatische Empfehlungen basierend auf Material & Nutzung
- **Benachrichtigungen**: Erinnerungen zur Schuhpflege

### Erweiterte Funktionen
- **Künstliche Intelligenz** zur Materialerkennung
- **AR-Vorschau**, um Schutzoptionen in Echtzeit zu simulieren
- **Cloud-Synchronisation** für mehrere Geräte
- **Community-Features**, um sich mit anderen Sneaker-Fans auszutauschen

## Technologien
Shoeprotector basiert auf einem modernen Tech-Stack:
- **Frontend**: React (Web) & React Native (Mobile)
- **Backend**: Node.js mit Express oder Spring Boot
- **Datenbank**: PostgreSQL oder MongoDB
- **Cloud-Speicher**: AWS S3 für Bilder
- **Authentifizierung**: OAuth 2.0 / Firebase Auth
- **Künstliche Intelligenz**: TensorFlow für Materialerkennung

## Installation
### Voraussetzungen
- Node.js / npm
- Docker (optional für Entwicklung)
- PostgreSQL oder MongoDB

### Schritte
1. Repository klonen:
   ```sh
   git clone https://github.com/dein-username/shoeprotector.git
   ```
2. Ins Verzeichnis wechseln:
   ```sh
   cd shoeprotector
   ```
3. Abhängigkeiten installieren:
   ```sh
   npm install
   ```
4. Entwicklungsserver starten:
   ```sh
   npm run dev
   ```

## Nutzung
Nach der Installation kannst du die Web-App unter `http://localhost:3000` aufrufen. Falls du die mobile App nutzt, verwende `expo start`, um sie in der Expo-App zu testen.

## API-Dokumentation
### Endpunkte
#### Schuhe hinzufügen
- **Methode:** POST
- **Endpoint:** `/api/shoes`
- **Body:**
  ```json
  {
    "name": "Nike Air Max",
    "material": "Leder",
    "status": "Sauber"
  }
  ```
- **Antwort:** 201 Created

#### Alle Schuhe abrufen
- **Methode:** GET
- **Endpoint:** `/api/shoes`
- **Antwort:**
  ```json
  [
    { "id": 1, "name": "Nike Air Max", "material": "Leder" }
  ]
  ```

## Datenbank-Struktur
### Tabellen
- `shoes (id, name, material, status, created_at)`
- `users (id, name, email, password_hash)`
- `maintenance_logs (id, shoe_id, action, timestamp)`

## Sicherheit
- **Passwörter** werden mit bcrypt gehasht
- **JWT-Token** für Authentifizierung
- **Ratenbegrenzung** für API-Calls
- **Verschlüsselung** sensibler Daten in der Datenbank

## Tests
Das Projekt enthält Unit- und Integrationstests:
- **Jest** für Backend-Tests
- **Cypress** für End-to-End-Tests

### Tests ausführen
```sh
npm test
```

## Bekannte Probleme
- KI-Modelle zur Materialerkennung brauchen Optimierung
- AR-Funktionalität noch experimentell

## Zukünftige Verbesserungen
- **Mehrsprachige Unterstützung**
- **Integration mit Online-Shops**
- **Erweiterte KI-Analyse für Materialpflege**

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der `LICENSE`-Datei.

