const subscriptionTimeElements = document.querySelectorAll('[data-tab]');
const tabs = document.querySelectorAll('[data-list]');

const handleTabClick = (evt) => {
  tabs.forEach(item => item.classList.remove('active'));
  subscriptionTimeElements.forEach(item => item.classList.remove('active'));

  const activeTab = document.querySelector(`[data-list="${evt.target.dataset.tab}"]`);

  evt.target.classList.add('active');
  activeTab.classList.add('active');
};


subscriptionTimeElements.forEach(item => item.addEventListener('click', handleTabClick))

