const toggleDarkMode = () => 
{
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between 'dark' and 'light'

    // Applying the theme
    document.documentElement.setAttribute('data-theme', newTheme);

    
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIconDesktop = document.getElementById("sun-icon-desktop");
    const moonIconDesktop = document.getElementById("moon-icon-desktop");
    

    // Toggle icon visibility
    if (newTheme === 'dark') 
    {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        sunIconDesktop.style.display = 'none'
        moonIconDesktop.style.display = 'block';
    } 
    else 
    {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        sunIconDesktop.style.display = 'block';
        moonIconDesktop.style.display = 'none';
    }

    localStorage.setItem('theme', newTheme);
};
const updateIcons = (theme) =>
{
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIconDesktop = document.getElementById("sun-icon-desktop");
    const moonIconDesktop = document.getElementById("moon-icon-desktop");

    // Toggle icon visibility
    if (theme === 'dark')
    {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        sunIconDesktop.style.display = 'none'
        moonIconDesktop.style.display = 'block';
    }
    else
    {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        sunIconDesktop.style.display = 'block';
        moonIconDesktop.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => 
{
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    updateIcons(savedTheme);

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-large');

    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    if (darkModeToggleDesktop) darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
});
