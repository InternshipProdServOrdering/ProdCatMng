const fs = require('fs');
const yaml = require('js-yaml');

// Function to convert YAML to JavaScript object
const convertYamlToJs = (yamlFilePath) => {
  try {
    // Read the YAML file
    const fileContents = fs.readFileSync(yamlFilePath, 'utf8');
    // Parse the YAML file
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// Function to generate JavaScript code from the object
const generateJsCode = (data, outputFilePath) => {
  const jsCode = `const data = ${JSON.stringify(data, null, 2)};\n\nmodule.exports = data;`;
  fs.writeFileSync(outputFilePath, jsCode, 'utf8');
  console.log(`JavaScript code generated at ${outputFilePath}`);
};

// Convert YAML to JS and generate code
const yamlFilePath = 'example.yaml'; // Path to your YAML file
const outputFilePath = 'output.js';  // Path to the output JavaScript file

const data = convertYamlToJs(yamlFilePath);
if (data) {
  generateJsCode(data, outputFilePath);
}
