lista = [
  {
    id: 1,
    upperTitle: "DAY TOUR",
    title: "WINE EXPERIENCE",
    img: "../img/wine/wine.webp",
    modalId: "wine_tour",
    modal: [
      {
        texto: "Pasaje ida y vuelta",
        icon: "fa-solid fa-ship azul pe-2"
      },
      {
        texto: "Tiempo libre en la ciudad",
        icon: "fa-solid fa-ship azul pe-2"
      },
      {
        texto: "Translados hacia y desde Finca del Sacramento",
        icon: "fa fa fa-bus azul pe-2"
      },
      {
        texto: "Copa de bienvenida en la finca",
        icon: "fa fa-glass azul pe-2"
      },
      {
        texto: " Recorrido guiado por las viñas y ata en la cava",
        icon: "fa fa-pagelines azul pe-2"
      },
      {
        texto: "Menú de 3 pasos o pic-nic entre las viñas a su elección",
        icon: "fa fa-cutlery pe-2 azul"
      },
      {
        texto: "Lunes a domingos",
        icon: "fa fa-calendar azul  pe-2"
      },
      {
        texto: "ida: 08:30 / vuelta: 18:00",
        icon: "fa fa-clock-o  azul pe-2"
      },
      {
        texto: "ida: 10:30 / vuelta: 20:30",
        icon: "fa fa-clock-o  azul pe-2"
      },
      {
        texto: "Canjeá tu regalo llamando al Call Center +54 11 5167 7700, comunicándote vía WhatsApp +54 9 11 6411-9465 o acercándote a nuestros puntos de venta",
        icon: "fa-solid fa-gift pe-2 "
      }

    ],
    modalImgs: [
      {
        imgC: "../img/wine/reel/wine1.webp"
      },
      {
        imgC: "../img/wine/reel/wine2.webp"
      },
      {
        imgC: "../img/wine/reel/wine1.webp"
      },
      {
        imgC: "../img/wine/reel/wine1.webp"
      },
    ]

  },
  {
    id: 2,
    upperTitle: "DAY TOUR",
    title: "PREMIUM",
    img: "../img/wine/wine.webp",
    modalId: "premium",
    indicatiors: 4,
    modal: [
      {
        texto: "Pasaje ida y vuelta",
        icon: "fa-solid fa-ship azul pe-2"
      },
      {
        texto: "Paseo guiado por el Barrio Histórico",
        icon: "fa fa-street-view azul pe-2"
      },
      {
        texto: "Almuerzo en Mesón de la Plaza c/bebidas",
        icon: "fa fa-cutlery azul pe-2"
      },
      {
        texto: "Tiempo Libre en la ciudad",
        icon: "fa fa-hourglass-half azul pe-2"
      },
      {
        texto: "Llevá tu bicicleta gratis",
        icon: "fa fa-bicycle azul pe-2"
      },
  
      {
        texto: "Miércoles a Lunes",
        icon: "fa fa-calendar azul  pe-2"
      },
      {
        texto: "Ida: 08:30 / Vuelta: 18:00",
        icon: "fa fa-clock-o  azul pe-2"
      },
      {
        texto: "Ida: 10:30 / Vuelta: 20:30",
        icon: "fa fa-clock-o  azul pe-2"
      },
      {
        texto: "Canjeá tu regalo llamando al Call Center +54 11 5167 7700, comunicándote vía WhatsApp +54 9 11 6411-9465 o acercándote a nuestros puntos de venta",
        icon: "fa-solid fa-gift pe-2 "
      }

    ],
    modalImgs: [
      {
        imgC: "../img/premium/reel/premium1.webp"
      },
      {
        imgC: "../img/premium/reel/premium2.webp"
      },
      {
        imgC: "../img/premium/reel/premium3.webp"
      },
      {
        imgC: "../img/premium/reel/premium4.webp"
      },
    ]

  }
]




let contenedorModalHtml = document.getElementById("contenedorModales")


const crearModal = (list) => {
  try {
    list.forEach((element) => {
      let contenedorModalPadre = document.createElement("div");
      contenedorModalPadre.classList.add("modal", "fade");
      contenedorModalPadre.id = element.modalId;
      contenedorModalPadre.tabIndex = -1;
      contenedorModalPadre.setAttribute("aria-hidden", "true");

      contenedorModalHtml.appendChild(contenedorModalPadre);

      const modalDialog = document.createElement("div");
      modalDialog.classList.add("modal-dialog");
      contenedorModalPadre.appendChild(modalDialog);

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalDialog.appendChild(modalContent);

      const modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header", "d-none");
      modalContent.appendChild(modalHeader);

      const modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");
      modalContent.appendChild(modalBody);

      // CARRUSEL
      const divCarrusel = document.createElement("div");
      divCarrusel.id = `carouselExampleIndicators${element.id}`;
      divCarrusel.classList.add("carousel", "slide", "position-relative");
      modalBody.appendChild(divCarrusel);

      const buttonClose = document.createElement("button");
      buttonClose.type = "button";
      buttonClose.classList.add("btn-close", "position-absolute");
      buttonClose.setAttribute("data-bs-dismiss", "modal");
      buttonClose.setAttribute("aria-label", "Close");
      divCarrusel.appendChild(buttonClose);

      const divCarouselIndicators = document.createElement("div");
      divCarouselIndicators.classList.add("carousel-indicators");
      divCarrusel.appendChild(divCarouselIndicators);

      const divCarouselInner = document.createElement("div");
      divCarouselInner.classList.add("carousel-inner");
      divCarrusel.appendChild(divCarouselInner);

      // INDICADORES
      element.modalImgs.forEach((imagen, i) => {
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute("data-bs-target", `#${divCarrusel.id}`);
        indicator.setAttribute("data-bs-slide-to", `${i}`);
        indicator.setAttribute("aria-label", `Slide ${i + 1}`);
        if (i === 0) {
          indicator.classList.add("active");
          indicator.setAttribute("aria-current", "true");
        }
        divCarouselIndicators.appendChild(indicator);

        // Imágenes del carrusel
        const divImg = document.createElement("div");
        divImg.classList.add("carousel-item", "carrusel_contenedor_imagenes");
        if (i === 0) divImg.classList.add("active");

        const img = document.createElement("img");
        img.src = imagen.imgC;
        img.classList.add("d-block", "img_carrito_modal");
        img.alt = `${element.title} en Colonia Express`;

        divImg.appendChild(img);
        divCarouselInner.appendChild(divImg);
      });

      // CONTROLES PREV/NEXT
      const prevBtn = document.createElement("button");
      prevBtn.classList.add("carousel-control-prev");
      prevBtn.type = "button";
      prevBtn.setAttribute("data-bs-target", `#${divCarrusel.id}`);
      prevBtn.setAttribute("data-bs-slide", "prev");
      prevBtn.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      `;
      divCarrusel.appendChild(prevBtn);

      const nextBtn = document.createElement("button");
      nextBtn.classList.add("carousel-control-next");
      nextBtn.type = "button";
      nextBtn.setAttribute("data-bs-target", `#${divCarrusel.id}`);
      nextBtn.setAttribute("data-bs-slide", "next");
      nextBtn.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      `;
      divCarrusel.appendChild(nextBtn);

      // TEXTO DE LA EXPERIENCIA
      const sectionTexto = document.createElement("section");
      sectionTexto.classList.add("mt-3", "seccion_texto_modal");
      modalBody.appendChild(sectionTexto);

      const divTextoMain = document.createElement("div");
      divTextoMain.classList.add("contenedor_modal_texto", "container", "wine_experience_contendor");
      sectionTexto.appendChild(divTextoMain);

      const titulo = document.createElement("h2");
      titulo.classList.add("poppins-extrabold", "azul");
      titulo.textContent = element.title.toUpperCase();
      divTextoMain.appendChild(titulo);

      element.modal.forEach(item => {
        const p = document.createElement("p");
        p.classList.add("poppins-regular");
        p.innerHTML = `<i class="${item.icon}"></i>${item.texto}`;
        divTextoMain.appendChild(p);
      });

      // SECCIÓN ADICIONAL (si querés manejar horarios, días, etc.)
      if (element.footer) {
        const divFooter = document.createElement("div");
        divFooter.classList.add("container", "contenedor_modal_texto");
        element.footer.forEach(linea => {
          const p = document.createElement("p");
          p.classList.add("poppins-regular", "bordo");
          p.innerHTML = `<i class="${linea.icon}"></i>${linea.texto}`;
          divFooter.appendChild(p);
        });
        sectionTexto.appendChild(divFooter);
      }

    });
  } catch (error) {
    console.error("[crearModal(list) main.js]", error);
  }
}



//MODALES
{/* <section>
      <div class="modal fade" id="premium" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-none">



            </div>
            <div class="modal-body">

              <!--CARRUSEL-->
              <section>

                <div id="carouselExampleIndicators2" class="carousel slide position-relative">
                  <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                      class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3"
                      aria-label="Slide 4"></button>
                  </div>
                  <div class="carousel-inner">

                    <div class="carousel-item active carrusel_contenedor_imagenes">
                      <img src="img/premium/reel/premium1.webp" class="d-block img_carrito_modal"
                        alt="Day Tour - Premium en Colonia Express">
                    </div>
                    <div class="carousel-item carrusel_contenedor_imagenes">
                      <img src="img/premium/reel/premium2.webp" class="d-block img_carrito_modal"
                        alt="Day Tour - Premium en Colonia Express">
                    </div>
                    <div class="carousel-item carrusel_contenedor_imagenes">
                      <img src="img/premium/reel/premium3.webp" class="d-block img_carrito_modal"
                        alt="Day Tour - Premium en Colonia Express">
                    </div>
                    <div class="carousel-item carrusel_contenedor_imagenes">
                      <img src="img/premium/reel/premium4.webp" class="d-block img_carrito_modal"
                        alt="Day Tour - Premium en Colonia Express">
                    </div>


                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
              <!--TEXTO-->
              <section class="mt-3 seccion_texto_modal">

                <div class="contenedor_modal_texto container wine_experience_contendor">
                  <h2 class="poppins-extrabold azul ">PREMIUM</h2>

                  <p class="poppins-regular"><i class="fa-solid fa-ship azul pe-2"></i>Pasaje ida y vuelta</p>
                  <p class="poppins-regular"><i class="fa fa-street-view azul pe-2"></i>Paseo guiado por el Barrio
                    Histórico</p>
                  <p class="poppins-regular"><i class="fa fa-cutlery azul pe-2"></i>Almuerzo en Mesón de la Plaza
                    c/bebidas</p>
                  <p class="poppins-regular"><i class="fa fa-hourglass-half azul pe-2"></i>Tiempo Libre en la ciudad</p>
                  <p class="poppins-regular"><i class="fa fa-bicycle azul pe-2"></i>Llevá tu bicicleta gratis</p>
                </div>

                <div class="container contenedor_modal_texto">
                  <p class="poppins-regular bordo"><i class="fa fa-calendar azul pe-2"></i>Miércoles a Lunes.</p>
                  <p class="poppins-regular bordo"><i class="fa fa-clock-o azul pe-2"></i>Ida: 08:30 / Vuelta: 18:00
                  </p>
                  <p class="poppins-regular bordo"><i class="fa fa-clock-o azul pe-2"></i>Ida: 10:30 / Vuelta: 20:30
                  </p>

                  <p class="poppins-regular p_footer_modal"><i class="fa-solid fa-gift pe-2 "></i>Canjeá tu regalo
                    llamando al Call Center +54 11 5167 7700, comunicándote vía WhatsApp <a target="_blank"
                      href="https://wa.link/ujxlug">+54 9 11 6411-9465</a> o acercándote a nuestros puntos de
                    venta
                </div>


              </section>

            </div>

          </div>
        </div>
      </div>
    </section> */}




const contenedorPadre = document.getElementById("contenedorPadre");

const crearCards = (list) => {

  try {


    console.log(contenedorPadre)

    list.forEach(element => {

      const divContendorCard = document.createElement("div")
      divContendorCard.classList.add("card_tamaños", "col-12", "col-md-6", "col-md-3", "mb-5");
      contenedorPadre.appendChild(divContendorCard)



      const card = document.createElement("div");
      card.classList.add("card", "contenedor_card");
      divContendorCard.appendChild(card)

      let cardImg = document.createElement("div");
      cardImg.classList.add("contenedor_card_img", "img-fluid", "contenedor_imagen");
      card.appendChild(cardImg);

      let img = document.createElement("img");
      img.classList.add("card-img-top")
      img.src = element.img;
      img.alt = `${element.title} - Colonia Express`
      cardImg.appendChild(img);

      const divMoño = document.createElement("div");
      divMoño.classList.add("div_moño");
      cardImg.appendChild(divMoño);

      const imgMoño = document.createElement("img");
      imgMoño.src = "../img/sticker.png"
      divMoño.appendChild(imgMoño);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "card_text");
      card.appendChild(cardBody)

      const cardBodyTitles = document.createElement("div");
      cardBodyTitles.classList.add("d-flex", "flex-column");
      cardBody.appendChild(cardBodyTitles);

      const upperTitle = document.createElement("h3");
      upperTitle.innerText = `${element.upperTitle}`;
      upperTitle.classList.add("card-title", "poppins-extrabold", "azul", "text-center", "order-2");
      cardBodyTitles.appendChild(upperTitle);

      const title = document.createElement("h4");
      title.classList.add("card-title", "poppins-extrabold", "azul", "text-center", "h4_card", "order-1");
      title.innerText = `${element.title}`;
      cardBody.appendChild(title);

      /* 
                     <button type="button" class="btn btn-primary btn_card poppins-semibold celeste" data-bs-toggle="modal"
                       data-bs-target="#wine_tour">
                       Ver más
                     </button> */

      const button = document.createElement("button");
      button.type = "button"
      button.classList.add("btn", "btn-primary", "btn_card", "poppins-semibold", "celeste")
      button.setAttribute("data-bs-toggle", "modal")
      button.setAttribute("data-bs-target", `#${element.modalId}`);
      button.innerText = "Ver más"
      cardBody.appendChild(button);


    });





  } catch (error) {
    console.error("[CrearCards(list) main.js]", error);
    throw error;
  }
}

crearCards(lista)
crearModal(lista)