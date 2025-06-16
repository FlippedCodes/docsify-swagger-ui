/**
 * Docsify plugin that replaces a Markdown link whose text is exactly "swagger"
 * with an isolated Swagger-UI instance loaded in an iframe.
 */
function swaggerUiPlugin(hook) {
  let iframeRef;

  hook.doneEach(() => {
    const markdownSection = document.querySelector(".markdown-section");
    if (!markdownSection) return;

    const linkElement = Array.from(markdownSection.querySelectorAll("a")).find(
      (a) => a.textContent.trim().toLowerCase() === "swagger"
    );

    // Cleanup when leaving a page containing Swagger-UI
    if (!linkElement) {
      if (iframeRef) {
        iframeRef.remove();
        iframeRef = null;
      }
      return;
    }

    iframeRef?.remove();

    const specUrl = linkElement.href;
    const parent = linkElement.parentElement;
    linkElement.remove();
    if (parent?.tagName === "P" && parent.childElementCount === 0)
      parent.remove();

    iframeRef = document.createElement("iframe");
    Object.assign(iframeRef.style, {
      width: "100%",
      border: "none",
      minHeight: "90vh", // let the user scroll inside Docsify
    });
    iframeRef.loading = "lazy";

    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const swaggerVersion = "latest";

    iframeRef.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Swagger UI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@${swaggerVersion}/swagger-ui.css" />
  <style>html,body{margin:0;padding:0;height:100%;}#swagger-ui{height:100%}</style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@${swaggerVersion}/swagger-ui-bundle.js"><\/script>
  <script>window.onload = function(){SwaggerUIBundle({url:'${escapeHtml(
    specUrl
  )}',dom_id:'#swagger-ui',presets:[SwaggerUIBundle.presets.apis],layout:'BaseLayout'});}<\/script>
</body>
</html>`;

    markdownSection.appendChild(iframeRef);
  });
}

window.$docsify = window.$docsify || {};
$docsify.plugins = [swaggerUiPlugin, ...($docsify.plugins || [])];
