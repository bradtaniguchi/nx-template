import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import {
  getProjectsByTarget,
  useConfig,
  useNxGraph,
} from '@nx-template/common-react';
import { useMemo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const { config, configError, configLoading } = useConfig({
    path: '/nx-template/config.json',
  });
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph({
    path: '/nx-template/nx-graph/graph.json',
  });

  const projects = useMemo(
    () =>
      nxGraph ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' }) : [],
    [nxGraph]
  );

  const spinner = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );

  return (
    <div>
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
                <Typography variant="h5" component="h5">
                  config.json
                </Typography>
                <Typography component="div">
                  {(() => {
                    if (configLoading) return spinner;
                    if (configError)
                      return <Typography>Error Loading config.json</Typography>;
                    return (
                      <Card variant="outlined">
                        <pre style={{ margin: '0' }}>
                          {JSON.stringify(config, null, 2)}
                        </pre>
                      </Card>
                    );
                  })()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h5">
                  External Links
                </Typography>
                <Grid container spacing={1} columns={2}>
                  <Grid item xs={8}>
                    <Typography
                      component="a"
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <EqualizerIcon color="primary" />
                      <Link href="nx-template/nx-graph">nx-graph</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="a"
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <BookIcon color="primary" />
                      <Link href="nx-template/storybooks">storybooks</Link>
                    </Typography>
                  </Grid>
                  {(() => {
                    if (nxGraphLoading) return spinner;
                    if (nxGraphError)
                      return <Typography>Error Loading nx-graph</Typography>;
                    return projects.map((project) => (
                      <Grid item xs={8} key={project}>
                        <Typography
                          component="a"
                          sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            display: 'flex',
                          }}
                        >
                          <ArticleIcon color="primary" />
                          <Link
                            href={`nx-template/docs/${project}`}
                          >{`${project} docs`}</Link>
                        </Typography>
                      </Grid>
                    ));
                  })()}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DashboardPage;
