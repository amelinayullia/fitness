var subscriptionTimeElements = document.querySelectorAll('[data-tab]');
var tabs = document.querySelectorAll('[data-list]');

var handleTabClick = (evt) => {
  tabs.forEach(item => item.classList.remove('active'));
  subscriptionTimeElements.forEach(item => item.classList.remove('active'));

  var activeTab = document.querySelector(`[data-list="${evt.target.dataset.tab}"]`);

  evt.target.classList.add('active');
  activeTab.classList.add('active');
};


subscriptionTimeElements.forEach(item => item.addEventListener('click', handleTabClick))

