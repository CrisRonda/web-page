import theme from 'theme';
const typesApplication = [
  {
    title: 'Alcance global',
    description:
      'El comportamiento de los seres humanos se ha modificado debido a la prescencia de redes sociales y se ha convertido en un espacio donde las empresas pueden interactuar directamente con sus clientes. ',
  },
  {
    title: ' Aplicación web dinámica',
    description:
      'Esta página web se puede conectar a una base de datos para almacenar la información para ser consultada en cualquier momento. Tiene un panel de administración CMS (sistema de gestión de contenidos) para agregar o modificar contenido, así como entradas de blog, noticias, imágenes, etc.',
  },
  {
    title: 'E-commerce',
    description:
      'Página web para tiendas online. Permite recibir pagos desde tarjetas de crédito, PayPal, efectivo, etc. Sincronizado con la gestión de inventario y logística de envíos podrás controlar desde cualquier parte del mundo la información de los productos o servicios que tu empresa ofrece.',
  },
  {
    title: 'Portal web app',
    description:
      'También conocido como Landing Page, consta de una página web principal con varias secciones o apartados, en donde se muestra contenido como videos, formularios, textos, información de redes sociales, imágenes, etc.',
  },
  {
    title: 'Gestor de Contenidos',
    description:
      'Es el tipo de aplicación web pensado para tiendas online. Ofrece mayores funcionalidades, porque permite utilizar sistemas para recibir pagos desde tarjetas de crédito, PayPal, efectivo, etc. Además de sincronizarse con la gestión de inventario y logística de envíos podrás controlar desde cualquier parte del mundo la  información de los productos o servicios que tu empresa ofrece.',
  },
];

export const benefitsTypes = {
  backgroundPrimayLight: false,
  title: 'Beneficios de tener una tienda en línea',
  typesApplication: typesApplication,
  image: '/assets/images/beneficios-marketing-digital.png',
  imageSizes: {
    xs: {
      width: 414,
      height: 414,
    },
    sm: {
      width: 414,
      height: 414,
    },
    md: {
      width: 414,
      height: 414,
    },
    lg: {
      width: 504,
      height: 504,
    },
  },
};

export const bannerShopOnline = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1607008550/LandingPage/figures/bloque1.png',
  heightImage: 672,
  title: 'Crear tienda online:  vende tus productos en línea',
  description: 'Vende en cualquier lugar 24-7',
  image:
    '/assets/images/figures/tienda-online-ecommerce-vende-tus-productos-en-linea.png',
  backgroundColor: theme.palette.secondary.fade,
};

export const shopOnline24Hours = {
  backgroundImage: '/assets/images/figures/shopOnline/bloque2.png',
  heightImage: 633,
  title: 'Tu tienda abierta las 24 horas',
  description:
    'Lleva tus productos o servicios de los almacenes físicos a la red y nunca más vuelvas a cerrar, nuestras tiendas están disponibles 24 horas al día los 365 días del año para que no pierdas ninguna oportunidad de realizar una venta.',
  titlePrimaryMain: true,
  descriptionBlack: true,
  image: '/assets/images/tu-tienda-abierta-las-24-horas.png',
  imageSizes: {
    xs: {
      width: 288,
      height: 288,
    },
    sm: {
      width: 414,
      height: 414,
    },
    md: {
      width: 414,
      height: 414,
    },
    lg: {
      width: 504,
      height: 504,
    },
  },
  isImageRight: true,
};

export const increaseYourSalesInOneClick = {
  titlePart1: 'Incrementa tus ventas,',
  titlePart2: ' a un click de distancia',
  description:
    ' Diseñamos y desarrollamos tu tienda online de acuerdo a tus necesidades, no te quedes fuera del mundo digital ',
  image: '/assets/images/incrementa-tus-ventas-con-tiendas-online.png',
  backgroundImage: '/assets/images/figures/shopOnline/bloque4.png',
  heightImage: 1024,
  imageSizes: {
    xs: {
      width: 288,
      height: 286,
    },
    sm: {
      width: 552,
      height: 548,
    },
    md: {
      width: 544,
      height: 540,
    },
    lg: {
      width: 582,
      height: 624,
    },
  },
};

const optionsShopping = [
  {
    path: '/assets/images/woocommerce.svg',
    title: 'Tienda online E-commerce',
    description:
      'Es un sitio web e-commerce, dedicado a la venta de productos o servicios de forma digital, posee un sistema de administración de productos, clientes, distintos métodos de pago, inventario de productos, cupones de descuento, etc',
  },
  {
    path: '/assets/images/facebook.svg',
    title: 'Facebook shops',
    description:
      'Tienda online dentro de Facebook, ideal para comerciantes y minoristas. Puedes agregar un catálogo de productos, realizar el inventario, comunicarte con los clientes, obtener estadísticas.',
  },
  {
    path: '/assets/images/instagram.svg',
    title: 'Instagram shops',
    description:
      'Es una herramienta de Instagram que te permite promocionar tus productos en dicha plataforma, de forma rápida y segura. Puedes agregar productos, etiquetas, ver estadísticas.',
  },
  {
    path: '/assets/images/whatsapp.svg',
    title: 'WhatsApp Business',
    description:
      'Cuenta con un catálogo de productos, mensajes predefinidos, respuestas rápidas a preguntas frecuentes, etiquetas para la gestión de cliente. ',
  },
];

export const optionsShopOnline = {
  titlePart1: 'Opciones de tiendas online',
  description:
    'Te ofrecemos varias opciones para que empieces a vender de forma online, e incrementes tus ganancias',
  image: '/assets/images/opciones-de-tiendas-online.png',
  backgroundImage: '/assets/images/figures/shopOnline/bloque3.png',
  heightImage: 1304,
  imageSizes: {
    xs: {
      width: 288,
      height: 283,
    },
    sm: {
      width: 414,
      height: 386,
    },
    md: {
      width: 414,
      height: 386,
    },
    lg: {
      width: 582,
      height: 542,
    },
  },
  optionsShopping,
};

const questions = [
  {
    id: 0,
    title: '¿Puedo recibir pagos a través de mi aplicación móvil?',
    details:
      'Si, durante el desarrollo de aplicaciones móviles podemos integrar una pasarela de pagos a tu aplicación móvil para que puedas vender productos o servicios.',
  },
  {
    id: 1,
    title: '¿A qué tiendas de aplicaciones móviles se puede subir mi producto?',
    details:
      'Dependiendo del tipo de aplicación que desees,  el desarrollo de aplicaciones móviles puede ser dirigido para que se pueda desplegar la aplicación móvil en una o todas las tiendas de aplicaciones móviles como Google Play Store, App Store de Apple, entre otras, según los requerimientos que tengas.',
  },
  {
    id: 2,
    title:
      '¿Puedo agregar más funcionalidades a mi aplicación después de terminado el desarrollo?',
    details:
      'Si, creamos aplicaciones modulares, que permiten que se agreguen nuevas funcionalidades en el futuro, trabajamos con buenas prácticas de código para desarrollar las aplicaciones móviles, lo que te permitirá escalar tu producto en el futuro.',
  },
  {
    id: 3,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos.',
  },
  {
    id: 4,
    title: '¿En qué dispositivos se puede utilizar mi aplicación móvil?',
    details:
      'Desarrollamos aplicaciones móviles para todos los dispositivos móviles: tablets, celulares, computadoras.',
  },
  {
    id: 5,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos. ',
  },
];
export const FAQUxUiDesign = {
  titlePart1: 'Preguntas',
  titlePart2: 'frecuentes',
  questions,
};
