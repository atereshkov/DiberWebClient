import { DiberWebClientPage } from './app.po';

describe('diber-web-client App', () => {
  let page: DiberWebClientPage;

  beforeEach(() => {
    page = new DiberWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
