import Snap from 'snapsvg';

// it's OK to wrap the event with a promise in this special case
// cause it's a one-off event
const loadedPr = new Promise(resolve => {
  window.addEventListener('load', resolve);
});

const minimumWaitPr = new Promise(resolve => setTimeout(resolve, 1650));

// wait for 2500ms regardless of page load duration
Promise.all([loadedPr, minimumWaitPr]).then(revealContent);

function revealContent() {
  const mask = document.getElementById('mask');
  const maskContent = document.getElementById('mask-content');
  const unRevealedPath = Snap.select('#revealed');
  const revealedPath = Snap.select('#un-revealed');
  const revealedPathPoints = revealedPath.node.getAttribute('d');
  const reveal = () => {
    unRevealedPath.animate({ d: revealedPathPoints }, 4300, mina.backout);
  };
  reveal();

  maskContent.classList.add('slide-up');
  maskContent.addEventListener('transitionend', () => {
    mask.remove();
  });
}

(function setupAccordions() {
  const toggles = Array.from(
    document.querySelectorAll('[data-toggle="accordion"]')
  );
  toggles.forEach(toggle =>
    toggle.addEventListener('click', e => {
      document.querySelector(e.target.dataset.opens).classList.toggle('hidden');
    })
  );
})();
