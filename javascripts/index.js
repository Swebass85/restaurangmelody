console.log("Opening hours script loaded");
function checkOpeningHours() {
  const statusElement = document.getElementById("open-status");

  if (!statusElement) return;

  const now = new Date();
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const openTime = 11 * 60;
  let closeTime;

  if (day >= 1 && day <= 4) {
    closeTime = 22 * 60;
  } else if (day === 5 || day === 6) {
    closeTime = 23 * 60;
  } else {
    closeTime = 22 * 60;
  }

  const isOpen = currentMinutes >= openTime && currentMinutes < closeTime;

  if (isOpen) {
    statusElement.textContent = "Vi har öppet";
    statusElement.className = "open-status open";
  } else {
    statusElement.textContent = "Vi har stängt";
    statusElement.className = "open-status closed";
  }
}

checkOpeningHours();
setInterval(checkOpeningHours, 60000);