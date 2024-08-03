document.addEventListener('DOMContentLoaded', () => {
    const tipForm = document.getElementById('tip-form');
    const tipContent = document.getElementById('tip-content');
    const tipList = document.getElementById('tip-list');
  
    tipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tip = tipContent.value.trim();
  
      if (tip) {
        addTip(tip);
        tipContent.value = '';
      }
    });
  
    function addTip(tip) {
      const tipItem = document.createElement('div');
      tipItem.className = 'tip-item';
      tipItem.innerText = tip;
  
      const rating = document.createElement('div');
      rating.className = 'rating';
      rating.innerHTML = `
        <span class="upvote" onclick="vote(this, 1)">&#x25B2;</span>
        <span class="votes">0</span>
        <span class="downvote" onclick="vote(this, -1)">&#x25BC;</span>
      `;
  
      tipItem.appendChild(rating);
      tipList.appendChild(tipItem);
    }
  });
  
  function vote(element, value) {
    const votesSpan = element.parentElement.querySelector('.votes');
    let votes = parseInt(votesSpan.innerText);
    votes += value;
    votesSpan.innerText = votes;
  }
  


