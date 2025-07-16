// Simple interactive button example
// Interaktif tombol "Mulai Sekarang"
window.addEventListener('DOMContentLoaded', function() {
  var mulaiBtn = document.getElementById('btn-mulai');
  if (mulaiBtn) {
    mulaiBtn.addEventListener('click', function() {
      alert('Ayo mulai hidup sehat! Temukan inspirasi menu dan tips nutrisi di bawah ini.');
    });
  }
});
