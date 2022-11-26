import styled from 'styled-components';
import { HeaderBar } from '@nx-template/common-react';
import { DashboardPage } from '../components/dashboard-page/dashboard-page';
import Typography from '@mui/material/Typography';

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
      <HeaderBar>
        <HeaderBar.Row>
          <Typography variant="h5" component="h5">
            nx-template
          </Typography>
        </HeaderBar.Row>
      </HeaderBar>
      <main>
        <DashboardPage />
      </main>
    </StyledPage>
  );
}

export default Index;
