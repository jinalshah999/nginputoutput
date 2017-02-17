import { NginputouputPage } from './app.po';

describe('nginputouput App', function() {
  let page: NginputouputPage;

  beforeEach(() => {
    page = new NginputouputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
