export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622cbad5522945187f41dbc2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-47833syp',
                  apiId: '40e48a77-7828-4430-ae70-038794f11857'
                },
                {
                  buildHookId: '622cbad514612946020bf500',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-oqmnuy4o',
                  apiId: 'a90290b9-7ea4-4cc5-880a-2198e29e894f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sagaarthapa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-oqmnuy4o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
