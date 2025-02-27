document.addEventListener('DOMContentLoaded', (event) => {
    const tableCells = document.querySelectorAll('.tableelement');
  
    tableCells.forEach(cell => {
      cell.addEventListener('click', function() {
        this.classList.toggle('clicked');
      });
    });
  });