import { TypeSkill, UserPortfolio } from "../interfaces/userPortfolio";

export const useGlobalState = () =>
  useState("data", (): UserPortfolio => {

    return {
      id: 1,
      name: "Juan",
      surname: "Sarmiento",
      age: 27,
      city: "Tandil, Buenos Aires, Argentina",
      email: "juansarmientog96@gmail.com",
      title: "Desarrollador FullStack Java & Vue",
      profile:
        "Soy un apasionado desarrollador enfocado en la exploración de microservicios en la nube y en formarme como Product Owner. Mi objetivo es crear soluciones innovadoras y escalables que impulsen el éxito de los proyectos. Actualmente me estoy introduciendo en tecnologías de la nube, asimismo poseo amplia experiencia en desarrollo de software, me interesa encontrar las mejores formas de optimizar la entrega de productos y servicios.",
      imageURL:
        "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1687475573/1681270328482_brilho.jpg",
      skills: [
        {
          id: 35,
          title: "Disciplinado",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 31,
          title: "Participativo",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 9,
          title: "REACT",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 28,
          title: "Responsable",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 1,
          title: "Java",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 8,
          title: "JAVASCRIPT",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 20,
          title: "MOCKITO",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 32,
          title: "Autodidacta",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 13,
          title: "Vuex / Pinia",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 30,
          title: "Comunicativo",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 12,
          title: "Vue Query",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 3,
          title: "CSS",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 2,
          title: "HTML",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 18,
          title: "Spring Security",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 34,
          title: "Compañero",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 21,
          title: "POSTGRESQL",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 19,
          title: "JUNIT",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 25,
          title: "Determinado",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 15,
          title: "Gradle / Maven",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 7,
          title: "AXIOS",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 6,
          title: "VITE",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 10,
          title: "TYPESCRIPT",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 22,
          title: "MYSQL",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 23,
          title: "GIT & GITHUB",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 26,
          title: "Curioso",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 14,
          title: "JEST",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 36,
          title: "Autosuficiente",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 24,
          title: "Postman",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 33,
          title: "Empático",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 4,
          title: "BOOTSTRAP 5",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 29,
          title: "Detallista",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 27,
          title: "Analítico",
          typeSkill: TypeSkill.Soft,
        },
        {
          id: 16,
          title: "Spring Framework",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 17,
          title: "Spring Data",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 11,
          title: "VUE 2 y 3",
          typeSkill: TypeSkill.Hard,
        },
        {
          id: 5,
          title: "NPM / YARN",
          typeSkill: TypeSkill.Hard,
        },
      ],
      formations: [
        {
          id: 2,
          title: "Desarrollador Web FullStack Java & Vue",
          educationEntity: "Mindhub",
          inProgress: false,
          startDate: "10/09/2022",
          endDate: "13/02/2022",
          certificateURL:
            "https://res.cloudinary.com/dhcurgqlc/image/upload/v1683863309/insignia_JAVA_cxpb1z.png",
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
          id: 3,
          title: "Programación FullStack Java & React",
          educationEntity: "Egg Coperation",
          inProgress: false,
          startDate: "01/05/2022",
          endDate: "12/03/2023",
          certificateURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689032735/Certificado_Curso_Programacin_FullStack_deywn3_kkp2qu.png",
        },
      ],
      projects: [
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
          deployURL: "https://oldowlbank.up.railway.app/web/login.html",
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
            "Este proyecto fue realizado con mucho trabajo y paciencia en el marco de uno de los cursos de Vue de Fernando Herrera, fue desarrollado utilizando Vue 3 Composition API con Typescript, Vuex y MapBox.",
          imageURL:
            "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689176612/image_2023-07-12_124328248_boofrd.png",
          repositoryURL: "https://github.com/JuansARG/maps-apps-CursoVue",
          deployURL: "https://juan-sarmiento-maps-app.netlify.app/#/",
        },
        {
          id: 4,
          title: "Four Legs",
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
