exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // redirect these links to the current year
  createRedirect({
    fromPath: '/',
    toPath: '/2021/',
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/live/',
    toPath: '/2021/live/',
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/mechanics/',
    toPath: '/2021/mechanics/',
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/problems/',
    toPath: '/2021/problems/',
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/faq/',
    toPath: '/2021/faq/',
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/contact/',
    toPath: '/2021/contact/',
    redirectInBrowser: true,
    isPermanent: true,
  })
}
