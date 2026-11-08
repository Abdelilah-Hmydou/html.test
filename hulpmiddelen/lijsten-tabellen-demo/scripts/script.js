// Default code templates
const DEFAULT_HTML = 
`<h2>Boodschappenlijstje</h2>
<ul style="list-style-type: square;">
  <li>Spaghetti</li>
  <li>Knoflook</li>
  <li>Olijfolie</li>
  <li>Pepervlokken</li>
  <li>Parmezaanse kaas</li>
</ul>

<h2>Recept: Speghetti aglio e olio</h2>
<ol style="list-style-type: decimal;">
  <li>Kook de spaghetti volgens de aanwijzingen op de verpakking.</li>
  <li>Verhit de olijfolie in een pan en fruit de fijngehakte knoflook</li>
  <li>Voeg de pepervlokken toe en bak kort mee</li>
  <li>Voeg de gekookte spaghetti toe en meng goed door</li>
  <li>Serveeer met geraspte parmezaanse kaas</li>
</ol>`;

const DEFAULT_CSS = 
`body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h2 {
  margin-top: 20px;
  color: #333;
}

ul, ol {
  margin: 10px 0 20px 25px;
  padding: 0;
}

li {
  margin: 5px 0;
}
`;

const DEFAULT_JAVASCRIPT = `
`;

// DOM elements
let htmlTextarea, cssTextarea, jsTextarea, previewBtn, loadDefaultBtn;
let htmlContainer, cssContainer, jsContainer;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    htmlTextarea = document.querySelector('textarea[name="html_code"]');
    cssTextarea = document.querySelector('textarea[name="css_code"]');
    jsTextarea = document.querySelector('textarea[name="javascript_code"]');
    previewBtn = document.querySelector('button');
    loadDefaultBtn = document.querySelectorAll('button')[1];
    
    htmlContainer = document.querySelector('.html_container');
    cssContainer = document.querySelector('.css_container');
    jsContainer = document.querySelector('.javascript_container');
    
    // Clear textareas on page load
    clearTextareas();
    
    // Load from localStorage if available, otherwise load defaults
    loadFromStorage();
    
    // Add event listeners
    previewBtn.addEventListener('click', saveToStorage);
    loadDefaultBtn.addEventListener('click', loadDefaults);
    
    // Add collapse functionality to headers
    addCollapseFunctionality();
});

// Clear all textareas
function clearTextareas() {
    htmlTextarea.value = '';
    cssTextarea.value = '';
    jsTextarea.value = '';
}

// Save current code to localStorage and update preview
function saveToStorage() {
    const codeData = {
        html: htmlTextarea.value,
        css: cssTextarea.value,
        javascript: jsTextarea.value
    };
    
    localStorage.setItem('wysiwyg_code', JSON.stringify(codeData));
    console.log('Code saved to localStorage');
    
    // Update preview
    updatePreview();
}

// Update the preview on the right side
function updatePreview() {
    const rightSide = document.querySelector('.right');
    
    // Clear existing content
    rightSide.innerHTML = '';
    
    // Get the code from textareas
    const htmlCode = htmlTextarea.value;
    const cssCode = cssTextarea.value;
    const jsCode = jsTextarea.value;
    
    // Create style element for CSS
    if (cssCode.trim()) {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssCode;
        rightSide.appendChild(styleElement);
    }
    
    // Add HTML content
    rightSide.innerHTML += htmlCode;
    
    // Create and add script element for JavaScript
    if (jsCode.trim()) {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = jsCode;
        rightSide.appendChild(scriptElement);
    }
}

// Load code from localStorage or defaults
function loadFromStorage() {
    const savedCode = localStorage.getItem('wysiwyg_code');
    
    if (savedCode) {
        try {
            const codeData = JSON.parse(savedCode);
            htmlTextarea.value = codeData.html || '';
            cssTextarea.value = codeData.css || '';
            jsTextarea.value = codeData.javascript || '';
            console.log('Code loaded from localStorage');
        } catch (error) {
            console.error('Error parsing saved code:', error);
            loadDefaults();
        }
    } else {
        loadDefaults();
    }
}

// Load default code
function loadDefaults() {
    const confirmed = confirm("Hierdoor gaat je huidige code verloren. Wil je doorgaan?");
    if (confirmed) {
        htmlTextarea.value = DEFAULT_HTML;
        cssTextarea.value = DEFAULT_CSS;
        jsTextarea.value = DEFAULT_JAVASCRIPT;
        console.log('Default code loaded');
    }
}

// Add collapse functionality to container headers
function addCollapseFunctionality() {
    const containers = [htmlContainer, cssContainer, jsContainer];
    
    containers.forEach(container => {
        const header = container.querySelector('h2');
        const textarea = container.querySelector('textarea');
        
        // Add click event to header
        header.addEventListener('click', function() {
            if (textarea.style.display === 'none') {
                textarea.style.display = 'block';
                header.textContent = header.textContent.replace(' ▼', '').replace(' ▶', '') + ' ▼';
            } else {
                textarea.style.display = 'none';
                header.textContent = header.textContent.replace(' ▼', '').replace(' ▶', '') + ' ▶';
            }
        });
        
        // Add initial collapse indicator
        header.textContent += ' ▼';
        header.style.cursor = 'pointer';
        header.style.userSelect = 'none';
    });
}
