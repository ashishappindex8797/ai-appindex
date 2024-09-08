// Function to load a CSS file
function loadCSS(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

// Function to load a JS file
function loadJS(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}

// Array of CSS files to load
var cssFiles = [
    "styles1.css",
    "styles2.css",
    "styles3.css"
];

// Array of JS files to load
var jsFiles = [
    "/ai-appindex/ai-ashish-app.js",
    "/ai-appindex/ai-ashish-app-2.js",
    "/ai-appindex/ai-ashish-aap-3.js",
    "/ai-appindex/ai-ashish-app-4.js"
];

// Load all CSS files
cssFiles.forEach(function(file) {
    loadCSS(file);
});

// Load all JS files
jsFiles.forEach(function(file) {
    loadJS(file);
});
