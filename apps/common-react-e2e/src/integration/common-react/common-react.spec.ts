describe('common-react: CommonReact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonreact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonReact!');
    });
});