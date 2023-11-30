// import content from "./components/content/content-template.js";
// import header from "./components/header/header-template.js";
// import footer from "./components/footer/footer-template.js";

 const ClassesComponent = {
  render: function() {
    return `
      ${header}
      <div class="container">
        <h1>Classes Page</h1>
        
        ${content}
       
      </div>
      ${footer}
    `;
  }
};

export default ClassesComponent;