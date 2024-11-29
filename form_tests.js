const { Builder, By, Key, until } = require('selenium-webdriver');

// Chemin absolu vers votre fichier HTML
const path = require('path');
const pagePath = `file://${path.resolve('index.html')}`;

// Créer une instance de WebDriver
(async function automateForm() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Ouvrir la page HTML
    await driver.get(pagePath);

    // Remplir le champ "Nom"
    await driver.findElement(By.id('nom')).sendKeys('Jean Dupont');

    // Remplir le champ "Email"
    await driver.findElement(By.id('email')).sendKeys('jean.dupont@example.com');

    // Sélectionner une date de naissance
    await driver.findElement(By.id('dateNaissance')).sendKeys('1990-01-01');

    // Sélectionner le sexe
    await driver.findElement(By.id('homme')).click();

    // Cliquer sur le bouton "Envoyer"
    await driver.findElement(By.id('envoyer')).click();

    // Attendre quelques secondes pour voir le résultat
    await driver.sleep(3000);
  } finally {
    // Fermer le navigateur
    await driver.quit();
  }
})();
await driver.takeScreenshot().then(
  function(image, err) {
    require('fs').writeFileSync('screenshot.png', image, 'base64');
  }
);

