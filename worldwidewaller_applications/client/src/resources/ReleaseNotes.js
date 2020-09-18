export const ReleaseNotes = [
  {
    releaseDate: '2020-09-10',
    details: [
      'Initial application launch',
      `Fully responsive (caveat: focus has only been on mobile
      and desktop sizes, medium/tablet may not look fantastic)`,
      '\'Resume\', \'Settings\' (skeleton only) and \'Contact me\' (skeleton only) pages',
      'Theme picker (4 initial themes)',
      'Redux state management for themes, header toggle, resume search & resume collapse',
      'Real-time search on resume page',
      'PDF export on resume page',
      'Welcome modal',
    ],
  },
];

export const UpcomingFeatures = [
  'Adding cookie support for selected themes',
  'Add a nodejs backend - first API will be to replace the required import of the resume PDF file',
  'Nodejs backend will connect to an AWS postgres database',
  'Initial login system connecting through nodejs to postgres',
];
