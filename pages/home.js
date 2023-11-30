import header from "../components/header/header-template.js";
import footer from "../components/footer/footer-template.js";

const HomeComponent = {
  render: function() {
    return `
      ${header()}
      <div class="container">
        <h1>Welcome to My School Management System</h1>
        <p>This system helps you manage classes, students, and teachers efficiently.</p>
        <p>Click on the navigation links to explore different sections.</p>
      </div>
      ${footer()}
    `;
  }
};

export default HomeComponent;