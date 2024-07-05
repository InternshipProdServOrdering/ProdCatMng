const fs = require('fs');
const path = require('path');
const axios = require('axios');
//const openapi = require('./api/openapi.yaml'); // Adjust the path to your OpenAPI spec file if necessary

// Function to read and parse the OpenAPI file
function parseOpenApiSpec() {
  // Assuming the OpenAPI file is in YAML format and using 'yaml' package to parse it
  const yaml = require('yaml');
  const file = fs.readFileSync(path.join(__dirname, 'openapi.yaml'), 'utf8');
  return yaml.parse(file);
}

async function testEndpoints() {
  const openApiSpec = parseOpenApiSpec();
  const baseUrl = 'http://localhost:8260'; // Adjust the base URL if necessary

  for (const path in openApiSpec.paths) {
    for (const method in openApiSpec.paths[path]) {
      const url = `${baseUrl}${path}`;
      try {
        const response = await axios({
          method: method,
          url: url,
        });
        console.log(`Tested ${method.toUpperCase()} ${url}: ${response.status}`);
      } catch (error) {
        console.error(`Error testing ${method.toUpperCase()} ${url}:`, error.message);
      }
    }
  }
}

testEndpoints();
