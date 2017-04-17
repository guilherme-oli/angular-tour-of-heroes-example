import { AngularTourOfHeroesPage } from './app.po';
import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

describe('angular-tour-of-heroes App', function() {

  beforeEach(() => {
    browser.get('/dashboard');
  });

  it('should display title app "Tour of Heroes"', () => {
    element(by.tagName('h1')).getText()
    .then(text => expect(text === 'Tour of Heroes'));
  });

  fit('should be clickable link "Heroes"', () => {
    let heroes = element.all(by.tagName('a')).get(1);
    heroes.click();

    let li = element.all(by.tagName('li')).get(2);
    li.click();

    let button: ElementFinder = element(by.tagName('button') && by.buttonText('View Details'));
    
    button.click();
    browser.pause();
    expect(element(by.tagName('button') && by.buttonText('Save'))).toBeTruthy();
  });
});
