# Gefyra.dev Website Based on Jekyll

These instructions will get you a copy of the Gefyra.dev website up and running on your local machine for development and testing purposes.
This website uses GitHub Pages special `remote_theme` [which is not locally installed](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

### Installation

[Jekyll static site generator docs](https://jekyllrb.com/docs/).  
**For more regarding the use of Jekyll, please refer to the [Jekyll Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/).**

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/). If you use `rvm`, run: `rvm use 2.7.1`.
2. Install [bundler](https://jekyllrb.com/docs/ruby-101/#bundler)  [gems](https://jekyllrb.com/docs/ruby-101/#gems)
  
`gem install bundler`

3. Fork the [project repository](https://github.com/gefyrahq/gefyrahq.github.io), then clone your fork.
4. Change into the project directory:
  
`cd gefyrahq.github.io`

5. Use bundler to fetch all required gems in their respective versions

`bundle install`

6. Build the site and make it available on a local server

In `_config.yml` comment in the `theme` key which is required for local development. 
**Important:** Please be sure to comment it out before you push or PR to main, otherwise GitHub Pages will not be able to 
deploy.

```yaml
theme: "just-the-docs"

# this is used by GitHub
remote_theme: "just-the-docs/just-the-docs"
```
then

`bundle exec jekyll serve`

7. Now browse to http://127.0.0.1:4000



### Deploying to GitHub Pages

The main branch gets automatically deployed to GitHub Pages.

## Terminal Recordings:

1. asciinema rec demo.cast
2. Record terminal session
3. Edit demo.cast: remove start and end
4. agg demo.cast ./minikube2.gif --theme dracula --font-size 30 --speed 2 --rows 20



## License

This website is not yet licenced.