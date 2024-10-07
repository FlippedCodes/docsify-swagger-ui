# Better Embed

A docsify.js plugin to embed Swagger-UI to view OpenAPI docs.

## Screenshots

### Overview

![overview-dark](/_media/overview_dark.png#gh-dark-mode-only)
![overview-light](/_media/overview_light.png#gh-light-mode-only)

### Models

![models-dark](/_media/models_dark.png#gh-dark-mode-only)
![models-light](/_media/models_light.png#gh-light-mode-only)

> [!Note]
> If you look for a more Markdown-like approach, feel free to have a look at [coolerfall's docsify-swagger plugin](https://github.com/coolerfall/docsify-swagger).

## Prerequisites

This plugin is build with [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/#/) in mind. Make sure you have it installed, otherwise the CSS fixes might not get applied.

## Installation

You can install the plugin by using the link below in your `index.html`.

### Production

For production, please use the numbered version to prevent breaking changes in production.

``` html
<script src="https://unpkg.com/docsify-swagger-ui@2.0.0/dist/index.min.js"></script>
```

### Development

If you are developing on a doc, you can use the latest. Make sure you switch it to production later, or the production one right away.

``` html
<script src="https://unpkg.com/docsify-swagger-ui@latest/dist/index.min.js"></script>
```

## Usage

> [!NOTE]
> Sorry for not providing a demo, but I thought this is a very self explanatory setup.

### Basic instructions

1. Create a markdown file

2. Add a link to some OpenAPI and name it "swagger"

   ``` markdown
   [swagger](https://petstore.swagger.io/v2/swagger.json)
   ```

--> The link will then be replaced with the content. Multiple swagger-links are not supported.

### Tips

- The link can be also a local file or an api endpoint (as long as it returns JSON).

  ```markdown
  [swagger](/_media/swagger.json)
  ```

## Contributing

I'm always happy, if someone has improvements to this little plugin. If you want to help, anything goes, but preferred is what is on the roadmap below or maybe discuss it as a GitHub issue first. ^^

### Roadmap

Nothing much here, but I'm planning to add the following features at some point:

- [ ] Cleanup the CSS and combine rules better
- [ ] Remove the dependency for [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/#/)

## License

This repo is using the [MIT license](LICENSE).

## Credit

Thanks to the [docsify.js](https://docsify.js.org/#/) team to make writing plugins so simple. I usually don't front end, but this was a breeze to get working.
