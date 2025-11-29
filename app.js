const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Root route: shows a simple HTML page
const html = `
  <section>
    <h1>Harts Hearth - Webhook is live!</h1>
    <p>This is the root of your Render app.</p>
  </section>
`;

app.get("/", (req, res) => {
  res.type("html").send(html);
});

// Twilio webhook route
app.post("/elevenlabs-agent-handler", (req, res) => {
  res.type("text/xml");
  res.send(`
    <Response>
      <Say>Connecting you to Hart's Hearth AI Agent...</Say>
    </Response>
  `);
});

// Start server
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// Keep-alive settings
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
  </body>
</html>
`
