import "@testing-library/jest-dom";
require('../app/app.js');


beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    const event = new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
    });
    window.document.dispatchEvent(event);
  });


test('popover toggles on button click and centers correctly', () => {
  const button = document.querySelector('.button');
  const popover = document.querySelector('.popover');
  expect(button).not.toBeNull(); 
  expect(popover).not.toBeNull();


  expect(popover).not.toBeVisible();
  
  button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(popover).toBeVisible();
  
  button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(popover).not.toBeVisible();

  const buttonRect = button.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();

  const expectedPopoverLeft = buttonRect.left + buttonRect.width / 2 - popoverRect.width / 2;
  
  expect(popoverRect.left).toBeCloseTo(expectedPopoverLeft, 1);
});