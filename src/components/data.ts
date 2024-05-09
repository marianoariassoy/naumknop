import { Instagram, Facebook } from './icons'

export const menu = [
  {
    title: 'Naum Knop',
    url: '/naum/biografia',
    submenu: [
      {
        title: 'Biografía',
        url: '/naum/biografia',
        filters: []
      },
      {
        title: 'Obras',
        url: '/naum/obras',
        filters: [
          {
            title: 'dibujos',
            url: '/naum/obras/dibujos'
          },
          {
            title: 'esculturas',
            url: '/naum/obras/esculturas'
          },
          {
            title: 'décadas',
            url: '/naum/obras/decadas'
          }
        ]
      },
      {
        title: 'Exposiciones',
        url: '/naum/exposiciones'
      },
      {
        title: 'Premios',
        url: '/naum/premios'
      },
      {
        title: 'Bibliografía',
        url: '/naum/bibliografia'
      }
    ]
  },
  {
    title: 'Fundación Naum Knop',
    url: '/fundacion/historia',
    submenu: [
      {
        title: 'Historia',
        url: '/fundacion/historia',
        filters: []
      },
      {
        title: 'Muestras',
        url: '/fundacion/muestras'
        // filters: [
        //   {
        //     title: '2023',
        //     url: '/fundacion/muestras/2023'
        //   },
        //   {
        //     title: '2022',
        //     url: '/fundacion/muestras/2022'
        //   },
        //   {
        //     title: '2019',
        //     url: '/fundacion/muestras/2019'
        //   }
        // ]
      },
      {
        title: 'Nosotros',
        url: '/fundacion/nosotros'
      }
    ]
  },
  {
    title: 'Prensa',
    url: '/prensa'
  },
  {
    title: 'Eventos',
    url: '/eventos'
  },
  {
    title: 'Contacto',
    url: '/contacto'
  }
]

export const social = [
  {
    title: 'Knopfundacion',
    name: 'Facebook',
    url: 'https://www.facebook.com/Knopfundacion',
    icon: Facebook
  },
  {
    title: '@knopfundacion',
    name: 'Instagram',
    url: 'https://www.instagram.com/knopfundacion',
    icon: Instagram
  }
]
