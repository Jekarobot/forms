document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    app.innerHTML = '';
  
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Click to toggle popover';
  
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.style.display = 'none';
  
    const popoverTitle = document.createElement('h3');
    popoverTitle.textContent = 'Popover title';
  
    const popoverContent = document.createElement('p');
    popoverContent.textContent = "And here's some amazing content. It's very engaging. Right?";
  
    popover.appendChild(popoverTitle);
    popover.appendChild(popoverContent);
  
    button.addEventListener('click', () => {
      if (popover.style.display === 'none') {
        popover.style.display = 'block';
        const { left, top, width } = button.getBoundingClientRect();
        popover.style.left = `${left + width / 2 - popover.offsetWidth / 2}px`;
        popover.style.top = `${top - popover.offsetHeight - 5}px`;
      } else {
        popover.style.display = 'none';
      }
    });
  
    app.appendChild(button);
    app.appendChild(popover);
  });
  