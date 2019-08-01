let items = Array.from(document.querySelectorAll('.task-list-item'));

items.forEach(item => {
	item.querySelector('[disabled]').removeAttribute('disabled');
});