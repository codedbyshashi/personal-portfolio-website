/**
 * =======================================
 * PROJECT DATA
 * =======================================
 * This is the single source of truth for the project data.
 * It is an array of objects, where each object represents a project.
 */
// We declare 'projects' as a constant because the array itself will not be reassigned.
// We will, however, modify its contents in the next step by adding objects to it.
const projects = [
    
  // This is a single project object.
  // Each key (e.g., 'title') is a string, followed by a colon,
  // and then its value. Commas separate each key-value pair.
  {
    // The title of the project. This will be displayed as the main heading of the card.
    title: "Portfolio Project (This Website!)",

    // A brief description of the project. Explain the technologies used and its purpose.
    description: "A responsive personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamic theme switcher and is populated by a JavaScript data structure.",

    // The path to the project's image. The path is relative to the index.html file.
    imageUrl: "./images/portfolio-project-preview.jpg",

    // The URL to the live, deployed version of the project.
    liveUrl: "https://your-live-site.com", // Replace with your actual deployed URL when ready

    // The URL to the project's source code on a platform like GitHub.
    codeUrl: "https://github.com/codedbyshashi/your-repo-name" // Replace with your actual GitHub repo

    
  },
  
  // --- NEW PROJECT OBJECT 1 ---
  // Copy the structure above and fill it with your second project's details.
  {
    title: "Simple Blog Platform With Comments",
    description: "A concept design and front-end implementation for an e-commerce platform. Focused on a clean UI, responsive product grids, and a streamlined checkout process using modern CSS techniques.",
    imageUrl: "./images/ecommerce-project-preview.jpg", // Make sure to add this image to your 'images' folder!
    liveUrl: "#", // Use "#" if there's no live link yet
    codeUrl: "https://github.com/codedbyshashi/simple-blog-platform.git" // Replace with your repo link
  },
  // Another comma to separate this object from the next one.

  // --- NEW PROJECT OBJECT 2 ---
  // Add as many projects as you like by following this pattern.
  {
    title: "Task Management App",
    description: "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
    imageUrl: "./images/task-app-preview.jpg", // Add this image to your 'images' folder
    liveUrl: "#",
    codeUrl: "https://github.com/your-username/task-app-repo" // Replace with your repo link
  }
  // A "trailing comma" after the last object is valid in modern JavaScript
  // and is a good practice as it makes version control diffs cleaner.

];

// =======================================
// THEME SWITCHER LOGIC
// =======================================
// (Your existing theme switcher code follows...)

// This is your existing code.
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;


// ... after your DOM element selections ...
const projectsContainer = document.querySelector('.projects-container');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

// Find your renderProjects function in js/main.js and update it.

/**
 * =======================================
 * RENDER PROJECTS FUNCTION
 * =======================================
 * This function is responsible for rendering the project cards to the DOM.
 */
const renderProjects = () => {
  // --- NEW CODE STARTS HERE ---

  // 1. Create an empty string to hold all the generated HTML.
  let allProjectsHTML = '';

  // --- MODIFIED LOGIC ---

  // 2. We iterate over the 'projects' array.
  projects.forEach(project => {
    // We create the HTML for a single card.
    const projectCardHTML = `
      <div class="project-card">
        <div class="project-image-container">
            <img 
              src="${project.imageUrl}" 
              alt="Screenshot of the ${project.title} project" 
              class="project-image"
            >
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a 
              href="${project.liveUrl}" 
              class="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a 
              href="${project.codeUrl}" 
              class="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    `;
    
    // 3. Instead of logging, we append the card's HTML to our 'allProjectsHTML' string.
    allProjectsHTML += projectCardHTML;
  });

  // 4. After the loop has finished, we perform ONE update to the DOM.
  // This is far more efficient than updating the DOM in every loop iteration.
  projectsContainer.innerHTML = allProjectsHTML;

  // --- NEW CODE ENDS HERE ---
};


themeToggle.addEventListener('click', () => {
  const newTheme = themeToggle.checked ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// --- ADD THE NEW CODE BLOCK BELOW ---

/**
 * This is an Immediately Invoked Function Expression (IIFE).
 * It's a function that runs as soon as it is defined. We use it here to
 * check for a saved theme in localStorage and apply it when the page loads.
 */
(() => {
  // 1. Check for a saved theme in localStorage.
  //    localStorage.getItem('theme') will return 'dark', 'light', or null.
  const savedTheme = localStorage.getItem('theme');

  // 2. If a saved theme exists, apply it. The `if` statement checks if savedTheme is not null.
  if (savedTheme) {
    // a. Apply the theme to the <html> element by setting the 'data-theme' attribute.
    htmlElement.setAttribute('data-theme', savedTheme);

    // b. Crucially, update the toggle switch's visual state to match the saved theme.
    //    If the saved theme is 'dark', we must programmatically set the checkbox to be 'checked'.
    if (savedTheme === 'dark') {
      themeToggle.checked = true;
    }
    // No 'else' block is needed because if the saved theme is 'light',
    // the checkbox's default unchecked state is already correct.
  }
})();
/**
 * =======================================
 * INITIALIZATION
 * =======================================
 * This code runs after the entire page structure (DOM) is loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Render the projects when the DOM is ready.
  renderProjects();

  // --- NEW CODE STARTS HERE: ASYNCHRONOUS FORM SUBMISSION ---

  // Check if the contact form exists on the page before adding the listener.
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // 1. Prevent the default form submission behavior (the page redirect).
      event.preventDefault();

      // 2. Collect the form data using the FormData API.
      // This is a modern way to get all form fields.
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');

      // Provide immediate user feedback: show a "sending" state.
      formStatus.innerHTML = 'Sending...';
      formStatus.className = 'info'; // You could add an .info style for this
      formStatus.style.display = 'block';
      submitButton.disabled = true;

      // 3. Use the fetch API to send the data.
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        // We tell Formspree we want to receive a JSON response.
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        // 4. Handle the response from the server.
        if (response.ok) {
          // Success! Show the success message.
          formStatus.innerHTML = "Thank you! Your message has been sent.";
          formStatus.className = 'success';
          // Clear the form fields after a successful submission.
          contactForm.reset();
        } else {
          // The server responded with an error. Try to parse the error message.
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              // This is a validation error from Formspree.
              formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              // This is a generic server error.
              formStatus.innerHTML = "Oops! Something went wrong. Please try again later.";
            }
            formStatus.className = 'error';
          })
        }
      }).catch(error => {
        // 5. Handle network errors (e.g., user is offline).
        formStatus.innerHTML = "Oops! A network error occurred. Please check your connection and try again.";
        formStatus.className = 'error';
      }).finally(() => {
        // Re-enable the submit button regardless of success or failure.
        submitButton.disabled = false;
      });
    });
  }
});
