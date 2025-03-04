// Function to toggle dark mode
const toggleDarkMode = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between 'dark' and 'light'

    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Toggle icon visibility
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (newTheme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    // Save the preference to localStorage
    localStorage.setItem('theme', newTheme);
};

// Check if there is a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Set the correct icon based on the saved theme
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (savedTheme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display =    'none';
    }
} else {
    // Default theme is light
    document.documentElement.setAttribute('data-theme', 'light');
}

// Add event listener to toggle dark mode when button is clicked
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
