import { CompoundInterestPage } from './app.po';

describe('compound-interest App', () => {
  let page: CompoundInterestPage;

  beforeEach(() => {
    page = new CompoundInterestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
