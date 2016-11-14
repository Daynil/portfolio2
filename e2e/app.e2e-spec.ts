import { Portfolio2Page } from './app.po';

describe('portfolio2 App', function() {
  let page: Portfolio2Page;

  beforeEach(() => {
    page = new Portfolio2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
