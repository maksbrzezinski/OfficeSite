const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/maksbrzezinski/ADream.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)