document.addEventListener('DOMContentLoaded', () => {
  // Delay to show the spinner even if page loads quick
  for (let i = 0; i < 2000000000; i++) {}

  // Get the spinner and page content
  loader = document.getElementById('loader');
  content = document.getElementById('content');

  // Switch from spinner to content when page loads
  loader.style.display = 'none';
  content.style.display = 'block';

  // Light/Dark Mode toggle
  var checkbox = document.querySelector('input[name=mode]');
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});
