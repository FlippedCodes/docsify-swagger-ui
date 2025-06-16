# docsify-swagger-ui

Embed [Swagger-UI](https://swagger.io/tools/swagger-ui/) inside your Docsify documentation with a single link.

## Highlights

- **Isolated styling** — Swagger-UI is loaded in a sandboxed `iframe`, so its CSS never leaks into your Docsify theme (and vice-versa).
- **Theme-agnostic** — Works with any official or custom Docsify theme, with or without [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/).
- **Zero configuration** — Replace a Markdown link whose text is exactly `swagger` and the plugin does the rest.

## Quick start

1. Include the script in `index.html`:

   ```html
   <script src="https://unpkg.com/docsify-swagger-ui@2.0.4/dist/index.min.js"></script>
   ```

2. Add a Markdown link to your OpenAPI definition:

   ```markdown
   [swagger](https://petstore.swagger.io/v2/swagger.json)
   ```

   At run-time the link is replaced by a fully-featured Swagger-UI instance.

### Tips

- Local files work as well: `[swagger](/_media/openapi.json)`
- Only one Swagger-UI instance is supported per page.

## Installation options

| Environment | Snippet                                                                                 |
| ----------- | --------------------------------------------------------------------------------------- |
| Production  | `<script src="https://unpkg.com/docsify-swagger-ui@2.0.4/dist/index.min.js"></script>`  |
| Development | `<script src="https://unpkg.com/docsify-swagger-ui@latest/dist/index.min.js"></script>` |

## Screenshots

![overview](/_media/overview.png#gh-mode-only)

![models](/_media/models.png#gh-mode-only)

## Contributing

Found a bug or have an idea? Feel free to open an issue or submit a pull request.

## License

[MIT](LICENSE)
## Credit

Thanks to the [docsify.js](https://docsify.js.org/#/) team to make writing plugins so simple. I usually don't front end, but this was a breeze to get working.