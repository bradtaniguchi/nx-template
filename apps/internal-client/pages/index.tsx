import styled from 'styled-components';
import { DashboardPage } from '../components/dashboard-page/dashboard-page';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';

const StyledPage = styled.div`
  .page {
  }
`;

/**
 * The Main index landing page. Renders the dashboard page
 */
export function Index() {
  return (
    <StyledPage>
      <Navbar fluid={true}>
        <Navbar.Brand>
          <Link href="/">nx-template</Link>
        </Navbar.Brand>
      </Navbar>
      <main>
        <DashboardPage />
      </main>
    </StyledPage>
  );
}

export default Index;
