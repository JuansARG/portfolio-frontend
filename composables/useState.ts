import { UserPortfolio } from "../interfaces/userPortfolio";

export const useGlobalState = () =>
  useState<UserPortfolio>("data", ():UserPortfolio => {

    return {
      id: 1,
      name: "Juan",
      surname: "Sarmiento",
      age: 27,
      city: "Tandil, Buenos Aires, Argentina",
      email: "juansarmientog96@gmail.com",
      title: "Desarrollador Web Full Stack Java & Vue",
      profile:
        "Soy un apasionado desarrollador enfocado en la exploración de microservicios en la nube y en formarme como Product Owner. Mi objetivo es crear soluciones innovadoras y escalables que impulsen el éxito de los proyectos. Actualmente estoy introduciendo en tecnologías de la nube, asimismo poseeo amplia experiencia en desarrollo de software, me interesa encontrar las mejores formas de optimizar la entrega de productos y servicios.",
      imageURL:
        "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1687475573/1681270328482_brilho.jpg",
      skills: [
        {
          id: 36,
          title: "Autosuficiente",
          typeSkill: "SOFT",
        },
        {
          id: 6,
          title: "Vite",
          typeSkill: "HARD",
        },
        {
          id: 17,
          title: "Spring Data",
          typeSkill: "HARD",
        },
        {
          id: 18,
          title: "Spring Security && JWT",
          typeSkill: "HARD",
        },
        {
          id: 31,
          title: "Participativo",
          typeSkill: "SOFT",
        },
        {
          id: 35,
          title: "Disciplinado",
          typeSkill: "SOFT",
        },
        {
          id: 29,
          title: "Detallista",
          typeSkill: "SOFT",
        },
        {
          id: 4,
          title: "Bootstrap 5",
          typeSkill: "HARD",
        },
        {
          id: 12,
          title: "Vue Query",
          typeSkill: "HARD",
        },
        {
          id: 16,
          title: "Spring Framework w/ Spring Boot",
          typeSkill: "HARD",
        },
        {
          id: 28,
          title: "Responsable",
          typeSkill: "SOFT",
        },
        {
          id: 23,
          title: "Git & Github",
          typeSkill: "HARD",
        },
        {
          id: 26,
          title: "Curioso",
          typeSkill: "SOFT",
        },
        {
          id: 34,
          title: "Compañero",
          typeSkill: "SOFT",
        },
        {
          id: 7,
          title: "Axios",
          typeSkill: "HARD",
        },
        {
          id: 24,
          title: "Postman",
          typeSkill: "HARD",
        },
        {
          id: 9,
          title: "React",
          typeSkill: "HARD",
        },
        {
          id: 20,
          title: "Mockito",
          typeSkill: "HARD",
        },
        {
          id: 8,
          title: "Javascript",
          typeSkill: "HARD",
        },
        {
          id: 27,
          title: "Analítico",
          typeSkill: "SOFT",
        },
        {
          id: 10,
          title: "Typescript",
          typeSkill: "HARD",
        },
        {
          id: 11,
          title: "Vue Options API & Composition API",
          typeSkill: "HARD",
        },
        {
          id: 25,
          title: "Determinado",
          typeSkill: "SOFT",
        },
        {
          id: 14,
          title: "Jest",
          typeSkill: "HARD",
        },
        {
          id: 30,
          title: "Comunicativo",
          typeSkill: "SOFT",
        },
        {
          id: 33,
          title: "Empático",
          typeSkill: "SOFT",
        },
        {
          id: 3,
          title: "CSS",
          typeSkill: "HARD",
        },
        {
          id: 32,
          title: "Autodidacta",
          typeSkill: "SOFT",
        },
        {
          id: 5,
          title: "NPM",
          typeSkill: "HARD",
        },
        {
          id: 13,
          title: "Vuex / Pinia",
          typeSkill: "HARD",
        },
        {
          id: 2,
          title: "HTML",
          typeSkill: "HARD",
        },
        {
          id: 1,
          title: "Java",
          typeSkill: "HARD",
        },
        {
          id: 19,
          title: "Junit",
          typeSkill: "HARD",
        },
        {
          id: 21,
          title: "PostgreSQL",
          typeSkill: "HARD",
        },
        {
          id: 22,
          title: "MySQL",
          typeSkill: "HARD",
        },
        {
          id: 15,
          title: "Gradle / Maven",
          typeSkill: "HARD",
        },
      ],
      formations: [
        {
          id: 6,
          title: "TypeScript: Tu completa guía y manual de mano",
          educationEntity: "Udemy",
          inProgress: false,
          startDate: "01/05/2023",
          endDate: "11/05/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-ts_rzekqx.jpg",
        },
        {
          id: 5,
          title: "Principios SOLID y Clean Code",
          educationEntity: "Udemy",
          inProgress: false,
          startDate: "01/03/2023",
          endDate: "24/03/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-solid_rcgfe5.jpg",
        },
        {
          id: 3,
          title: "Programación FullStack Java & React",
          educationEntity: "Egg Coperation",
          inProgress: false,
          startDate: "01/05/2022",
          endDate: "12/03/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689032735/Certificado_Curso_Programacin_FullStack_deywn3_kkp2qu.png",
        },
        {
          id: 2,
          title: "Desarrollador Web FullStack Java & Vue",
          educationEntity: "Mindhub",
          inProgress: false,
          startDate: "10/09/2022",
          endDate: "13/02/2023",
          certificateURL:
            "https://res.cloudinary.com/dhcurgqlc/image/upload/v1683863309/insignia_JAVA_cxpb1z.png",
        },
        {
          id: 7,
          title: "Vue.js - Intermedio: Lleva tus bases al siguiente nivel",
          educationEntity: "Udemy",
          inProgress: false,
          startDate: "01/06/2023",
          endDate: "19/06/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-vue-intermedio_d1qebb.jpg",
        },
        {
          id: 4,
          title: "Vue.js: De cero a experto",
          educationEntity: "Udemy",
          inProgress: false,
          startDate: "01/04/2023",
          endDate: "25/05/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-vue_b690kq.jpg",
        },
      ],
      projects: [
        {
          id: 4,
          title: "Four Legs",
          description:
            "Este proyecto fue desarrollado de manera grupal en el marco del bootcamp de Mindhub, Desarrollador Web Full Stack Java. Fue desarrollado con HTML, CSS, Bootstrap y VueJs; se trata de un Ecommerce basado en una pet shop. Durante este proyecto y con el fin de darle dinámica al carrito de compras aprendimos a manipular el localStorage.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/pet-shop_umth1d.jpg",
          repositoryURL:
            "https://github.com/JuansARG/FourLegs-Html-Css-VueJs",
          deployURL:
            "https://juan-sarmiento-pet-shop-four-legs.netlify.app/index.html",
        },
        {
          id: 5,
          title: "The Camp",
          description:
            "Por elección de mis compañeros fui Team Leader del proyecto el cual consta de un E-commerce orientado a la venta de cervezas artesanales; desarrollamos el backend que consta de una API REST escrita en Java utilizando a su vez Spring Framework y otros proyectos fundamentales como Spring Boot, Spring JPA y Spring Security. Respecto al front, fue desarrollado utilizando las tecnologías Html, Css, Bootstrap, Axios y VueJS además de distintas otras librerías.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175931/image_2023-07-12_123208925_xhfobh.png",
          repositoryURL: "https://github.com/JuansARG/TheCamp-App",
          deployURL: "https://www.youtube.com/watch?v=nt7T_Q6Jn1Y&t=183s",
        },
        {
          id: 6,
          title: "Maps App",
          description:
            "Este proyecto fue realizado con mucho trabajo y paciencia en el marco de uno de los cursos de Vue de Fernando Herrera, fue desarrollado utilizando Vue 3 Composition API con Typescript, Vuex y MapBox API.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689176612/image_2023-07-12_124328248_boofrd.png",
          repositoryURL: "https://github.com/JuansARG/maps-apps-CursoVue",
          deployURL: "https://juan-sarmiento-maps-app.netlify.app/#/",
        },
        {
          id: 1,
          title: "Amazing Events Javascript Vanilla",
          description:
            "Este proyecto fue desarrollado de manera individual en el marco del bootcamp de Mindhub, Desarrollador Web Full Stack Java. Fue desarrollado con HTML, CSS, Bootstrap y Javascript Vanilla, se trata de una web con varias páginas donde se pueden visualizar gran cantidad de eventos, filtrar por categorias y buscar a travez del input, asi mismo posee un apartado de estadísticas donde desarrollamos bastante lógica para mostrar dichos valores; cabe destacar que es completamente responsiva.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/amazing-events-vanilla_t5hxda.jpg",
          repositoryURL:
            "https://github.com/JuansARG/AmazingEvents-Html-Css-JS-Vanilla",
          deployURL:
            "https://juan-sarmiento-amazing-events-v1.netlify.app/index.html",
        },
        {
          id: 3,
          title: "Old Owl Bank",
          description:
            "OldOwlBank fue el proyecto resultante de todo de lo aprendido durante el bootcamp de MindHub, Desarrollador Web Full Stack JAVA. Aquí se ha desarrollado una API REST en Java utilizando Spring Framework y proyectos de terceros como Spring Boot, Spring JPA, Spring Security. Dicha API fue es consumida por el front el cual fue desarrollado con Html, Css, Bootstrap y VueJS, utilizando este último como motor framework de manera progresiva.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/old-owl-homebanking_rqb7mb.jpg",
          repositoryURL: "https://github.com/JuansARG/OldOwlBank-App",
          deployURL: "https://homebanking-old-owl.onrender.com/web/login.html",
        },
      ],
    };
  });
