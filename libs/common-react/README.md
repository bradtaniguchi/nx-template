# common-react

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test common-react` to execute the unit tests via [Jest](https://jestjs.io).

## Running storybook

Run `nx run storybook:storybook` to execute the local storybook project.

<!-- white space change to trigger nx -->

### Tailwind component migration

The migration to tailwind, and away from MUI will take some time. The following
is a checklist of components to re-create to support the internal-client page:

- [ ] Card
- [ ] Button (for linking)
- [ ] Spinner/Loading
- [ ] Grid/Layout
- [ ] Icon
- [ ] List
- [ ] Header/AppBar

Some of these components could be provided in the internal-client if they can't
be re-used. Otherwise these should be here and defined as a React component
so they can be used later in whatever project this template is used for
