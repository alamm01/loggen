# SVG Logo Generator

## Description
SVG Logo Generator is a Node.js command-line application that enables users to create simple SVG logos. It's designed for freelancers and developers who need quick, customizable logos for their projects. Users can select a shape (circle, triangle, or square), set colors for both the shape and text, and input up to three characters of text to be included in the logo. The application then generates an SVG file based on these inputs.

## Video Demonstration
[Click here for a video demonstration of the SVG Logo Generator](#your-video-link)

## Setup Instructions

### Prerequisites
- Node.js (v12 or later)
- npm (usually comes with Node.js)

### Installation
1. Clone the repository:
`git clone https://github.com/your-repository/your-project.git``
2. Navigate to the project directory:
`cd your-project``
3. Install the dependencies:
`npm install``

## Usage Instructions
To run the application, use the following command in the terminal:
node index.js

You will be prompted to:
1. Enter up to three characters for the logo's text.
2. Choose a color for the text (you can use color names like 'red' or hexadecimal codes).
3. Select a shape for your logo (circle, triangle, or square).
4. Choose a color for the shape.

After completing these prompts, the application will generate an SVG file named `logo.svg` in the `examples` directory. You can view this file in any web browser to see your custom logo.

## Testing
To run tests, use the following command:
`npm test``

This will execute the Jest tests defined in the project to ensure the shape classes are working as expected.

---

For any additional information or support, please refer to the repository's issues section or contact the maintainers.
