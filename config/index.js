module.exports = {
  author: '@nicolemamay',
  siteTitle: 'Nicole Mamay Portfolio',
  siteShortTitle: 'nm.', // Used as logo text in header, footer, and splash screen
  siteDescription:
    'Nicole Mamay is a software engineer, specialized in front end web development.',
  siteUrl: 'https://nicolemamay.com',
  siteLanguage: 'en_US',
  // TODO: Update with personal icon.
  siteIcon: `src/images/gatsby-icon.png`, // Relative to gatsby-config file.
  seoTitleSuffix: 'Nicole Mamay', // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  splashScreen: true, // Set this to true if you want to use the splash screen

  // mediumRssFeed: "",
  // shownArticles: 3,

  socialMedia: [
    {
      name: 'Linkedin',
      url: '',
    },
    {
      name: 'Github',
      url: '',
    },
    // {
    //   name: "Medium",
    //   url: ""
    // },
  ],

  navLinks: {
    menu: [
      // {
      //     name: "Articles",
      //     url: "/#articles",
      // },
      {
        name: 'About Me',
        url: '/#about',
      },
      // {
      //     name: "Projects",
      //     url: "/#projects",
      // },
    ],
    button: {
      name: 'Contact',
      url: '/#contact',
    },
  },
};
