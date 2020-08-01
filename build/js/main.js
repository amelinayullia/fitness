var subscriptionTimeElements = document.querySelectorAll('[data-tab]');
var tabs = document.querySelectorAll('[data-list]');

var handleTabClick = function(evt) {
  for (let index = 0; index < tabs.length; index++) {
    tabs[index].classList.remove('active');

  }

  for (let index = 0; index < subscriptionTimeElements.length; index++) {
    subscriptionTimeElements[index].classList.remove('active');
  }

  var activeTab = document.querySelector('[data-list="' + evt.target.dataset.tab + '"]');

  evt.target.classList.add('active');
  activeTab.classList.add('active');
};

for (let index = 0; index < subscriptionTimeElements.length; index++) {
  subscriptionTimeElements[index].addEventListener('click', handleTabClick)
}

