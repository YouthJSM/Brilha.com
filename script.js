// Brilha paper-marking quote calculator
(function(){
  var PRICE = 150, n = 1;
  var grade = document.getElementById('grade');

  for (var g = 1; g <= 12; g++) {
    var o = document.createElement('option');
    o.value = 'Grade ' + g;
    o.textContent = 'Grade ' + g;
    grade.appendChild(o);
  }
  var other = document.createElement('option');
  other.value = 'Mixed grades';
  other.textContent = 'Mixed grades';
  grade.appendChild(other);

  var count = document.getElementById('count');
  var total = document.getElementById('total');

  function render(){
    count.textContent = n;
    total.textContent = 'From R' + (PRICE * n).toLocaleString('en-ZA').replace(/\s/g, ' ');
  }

  document.getElementById('minus').onclick = function(){ if (n > 1)  { n--; render(); } };
  document.getElementById('plus').onclick  = function(){ if (n < 30) { n++; render(); } };

  document.getElementById('send').onclick = function(){
    var subject = document.getElementById('subject').value.trim() || 'Any';
    var due = document.getElementById('due').value;
    var msg = "Hi Jesca, I'd like Brilha to mark papers.\n" +
      "Subject: " + subject + "\n" +
      "Grade: " + grade.value + "\n" +
      "Classes: " + n + " (from R" + (PRICE * n) + ")\n" +
      (due ? "Needed back by: " + due + "\n" : "") +
      "Please confirm the price and how to send the papers.";
    window.open('https://wa.me/27717200850?text=' + encodeURIComponent(msg), '_blank');
  };

  render();
})();
