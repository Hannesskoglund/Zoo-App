(function () {
  const container = document.getElementById('ghost-container');
  const navLinks = document.querySelectorAll('nav a');
  var today = new Date().toISOString().split('T')[0];
document.getElementsByName("birthdate")[0].setAttribute('max', today);



  function spawnGhost(x, y) {
    const img = document.createElement('img');
    img.src = 'Images/Spooky.png'; // or 'Images/poltergeist.png'
    img.className = 'ghost';
    // position in px; center horizontally on the spawn point
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    // random horizontal drift and destination height

    // const drift = (Math.random() * 60 - 30) + 'px';
    const drift = (Math.random() * 100) + 'vw';
    const dest = -(120 + Math.round(Math.random() * 60)) + 'vh';
    img.style.setProperty('--drift', drift);
    img.style.setProperty('--destY', dest);
    // randomize duration a bit
    img.style.animationDuration = (2500 + Math.round(Math.random() * 300)) + 'ms';

    container.appendChild(img);
    // remove when animation ends
    img.addEventListener('animationend', () => img.remove());
  }

  navLinks.forEach(a => {
    a.addEventListener('click', function (e) {
      // compute the spawn point at the center-bottom of the clicked link
      const rect = this.getBoundingClientRect();
    //   const spawnX = rect.left + rect.width / 2;
    const spawnX = Math.random() * rect.width; // random horizontal spawn across the viewport
      const spawnY = rect.bottom +rect.height *15; // starts at link bottom

      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);

      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      spawnGhost(spawnX, spawnY);
      
      
      

      // If link is external (navigates away) and you want to show animation before navigation:
      const href = this.getAttribute('href') || '';
      const isHash = href.startsWith('#') || href === '' || href === '#';
      if (!isHash) {
        // delay actual navigation so user can see the animation
        e.preventDefault();
        setTimeout(() => { window.location.href = href; }, 300);
      }
      // for hash links we don't prevent default because navigation is on-page
    });
  });
})();