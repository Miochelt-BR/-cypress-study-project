const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    specPattern: "**/*.spec.js", // Define o padrão de arquivos de teste (ajuste conforme necessário)
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos do Node aqui
    },
  },
});
