var subscriptionTimeElements = document.querySelectorAll('.subscription__time button');
var listItems = document.querySelectorAll('.subscription__time li');
var tabs = document.querySelectorAll('[data-list]');

var handleTabClick = function(evt) {
  for (let index = 0; index < tabs.length; index++) {
    tabs[index].classList.remove('active');

  }

  for (let index = 0; index < subscriptionTimeElements.length; index++) {
    listItems[index].classList.remove('active');
  }

  var activeTab = document.querySelector('[data-list="' + evt.target.parentNode.dataset.tab + '"]');

  evt.target.parentNode.classList.add('active');
  activeTab.classList.add('active');
};

for (let index = 0; index < subscriptionTimeElements.length; index++) {
  subscriptionTimeElements[index].addEventListener('click', handleTabClick)
}
