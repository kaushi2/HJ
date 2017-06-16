import { HJAppPage } from './app.po';

describe('hjapp App', function() {
  let page: HJAppPage;

  beforeEach(() => {
    page = new HJAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
