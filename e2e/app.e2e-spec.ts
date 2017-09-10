import { StampOverPage } from './app.po';

describe('stamp-over App', () => {
  let page: StampOverPage;

  beforeEach(() => {
    page = new StampOverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
