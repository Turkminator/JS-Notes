const buttons = [...document.querySelectorAll(".btn")];
      buttons.forEach((btn) => {
        btn.addEventListener("click", function () {
          btn.classList.toggle("activated");
        });
      });