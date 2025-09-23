onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    // Función para crear estrellas fugaces
    function createShootingStar() {
      const shootingStarsContainer = document.querySelector('.shooting-stars');
      if (shootingStarsContainer) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 60 + '%';
        star.style.animationDelay = '0s';
        star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
        
        shootingStarsContainer.appendChild(star);
        
        setTimeout(() => {
          star.remove();
        }, 4000);
      }
    }
    
    // Crear estrellas fugaces periódicamente
    setInterval(() => {
      if (Math.random() > 0.3) { 
        createShootingStar();
      }
    }, Math.random() * 5000 + 3000);
    
    clearTimeout(c);
  }, 1000);
};

// 🔊 Control de audio mejorado
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  
  if (audio) {
    // Configurar volumen
    audio.volume = 0.7;
    
    // Intentar reproducir automáticamente
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log("🎵 Audio reproduciéndose automáticamente");
      }).catch((error) => {
        console.log("⚠️ Autoplay bloqueado:", error);
        
        // Si falla, reproducir al primer clic/toque
        const startAudio = () => {
          audio.play().then(() => {
            console.log("🎵 Audio iniciado por interacción del usuario");
          }).catch((e) => {
            console.error("❌ Error al reproducir audio:", e);
          });
        };
        
        // Escuchar múltiples eventos de interacción
        document.addEventListener("click", startAudio, { once: true });
        document.addEventListener("touchstart", startAudio, { once: true });
        document.addEventListener("keydown", startAudio, { once: true });
      });
    }
  } else {
    console.log("❌ No se encontró elemento de audio");
  }
});

// Código para estrellas en la imagen del index.html
const starsContainer = document.querySelector(".stars-random");

if (starsContainer) {
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star-random");
    star.innerHTML = "✨";

    const top = Math.random() * 100 + "%";
    const left = Math.random() * 100 + "%";

    star.style.top = top;
    star.style.left = left;

    starsContainer.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 3000);
  }

  setInterval(createStar, 500);
}
