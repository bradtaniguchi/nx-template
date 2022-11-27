# Internal Client

This project is used to display data within a github-page app using nextjs.

## Building for static export

Run the following to build a static build:

```bash
npx nx run internal-client:export
```

### Building all static contents

This project is one thing that is generated during a full build.
Run the following to execute all the commands that are normally
run during a pipeline run:

```bash
npx nx run internal-client:static
```

## Serving

Run the following to use next to serve the project locally:

```bash
npx nx run internal-client:serve
```

This does not include the statically built files that are usually added during the actual build.
