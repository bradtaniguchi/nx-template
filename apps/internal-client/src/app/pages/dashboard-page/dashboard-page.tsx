import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  getProjectsByTarget,
  useConfig,
  useNxGraph,
} from '@nx-template/common-react';
import styles from './dashboard-page.module.scss';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const { config, configError, configLoading } = useConfig();
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph();

  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardPage!</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={4}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography component="h3">Config.json</Typography>
                <Typography component="p">
                  {configLoading && <div>Loading config...</div>}
                  {!!configError && <div>Error Loading Config</div>}
                  {config && (
                    <div>
                      <pre>{JSON.stringify(config, null, 3)}</pre>
                    </div>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography component="h3">Generated Type docs</Typography>
                <Typography component="p">
                  {nxGraphLoading && <div>Loading nxGraph...</div>}
                  {!!nxGraphError && <div>Error Loading nxGraph</div>}
                  {nxGraph
                    ? getProjectsByTarget({
                        graph: nxGraph,
                        target: 'typedoc',
                      }).join(',')
                    : null}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DashboardPage;
