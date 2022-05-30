// Invoke strict mode.
"use strict";
// TAB SELECTION.
// 'tab-item': grab the 3 tab selectors from the DOM.
const tabItems = document.querySelectorAll('.tab-item');
// 'tab-content': grab the tab content from the DOM.
const tabContentItems = document.querySelectorAll('.tab-content-item');
// 'selectItem': function to display the tab content according to what tab is clicked.
function selectItem(e) {
    // Remove current tab border-bottom.
    removeBorder();
    // Remove current tab border-bottom.
    removeShow();
    // Add a red border-bottom to signify current tab.
    this.classList.add('tab-border');
    // 'tabContentItem': will dynamically add the word 'content' to 'tab$'.
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // 'show': add back the 'show' class for the current tab.
    tabContentItem.classList.add('show');
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// 'tab-item': add an event listener for when a 'tab-item' is clicked.
tabItems.forEach(item => item.addEventListener('click', selectItem));