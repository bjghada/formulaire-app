const backgroundEffect = document.querySelector('.background-effect');

document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  backgroundEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent)`;
});
let confirmationMessage = await driver.findElement(By.id('confirmation')).getText();
if (confirmationMessage === "Formulaire soumis avec succès !") {
  console.log("Test réussi !");
} else {
  console.log("Test échoué.");
}
