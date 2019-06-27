export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1484c21aa5bb41e92709e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j2vedqq6',
                  apiId: '11bcb2b8-e712-41e1-b538-62514111e765'
                },
                {
                  buildHookId: '5d1484c2bde32baec105d782',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p8y5ov5r',
                  apiId: '3c5c1330-437c-4c61-bca2-ca70e73f83dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcCoet/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p8y5ov5r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
