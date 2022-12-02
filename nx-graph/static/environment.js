window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projects: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultProject: 'local',
  };
  window.projectGraphResponse = {"hash":"dfbfefe26fd453eab2b5f32b217a52efbbebdb20248473628d412da1e0092140","projects":[{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.eslintrc.json","hash":"f13f56cc53c7d94063a3c717349e025e863bc78c"},{"file":"apps/internal-client/.gitignore","hash":"3b2917437a329a616ab9794f052d42499acfb142"},{"file":"apps/internal-client/components/dashboard-page/dashboard-page-config.tsx","hash":"517af4f709bc37e940176665b3f699ad0aace247","deps":["common-react","npm:flowbite-react","npm:react"]},{"file":"apps/internal-client/components/dashboard-page/dashboard-page-links.tsx","hash":"8e8741c5ceedf85960693a34338c0759bf65913d","deps":["npm:flowbite-react","npm:next"]},{"file":"apps/internal-client/components/dashboard-page/dashboard-page-projects.tsx","hash":"293f3b6c86a49453917c5e00a3bc46aa5ad2a269","deps":["common-react","npm:flowbite-react","npm:nx","npm:react","npm:next"]},{"file":"apps/internal-client/components/dashboard-page/dashboard-page.tsx","hash":"1a3332f2eeb813a04fb8559eff560c8e94c9ada2","deps":["npm:@nrwl/devkit","common-react"]},{"file":"apps/internal-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/internal-client/jest.config.ts","hash":"315b134a141cb9ac26109a983501097abfe95d35"},{"file":"apps/internal-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/internal-client/next.config.js","hash":"0558ca134dd82d785ae1a45921141990bf1581ba","deps":["npm:@nrwl/next","npm:@sentry/nextjs"]},{"file":"apps/internal-client/pages/_app.tsx","hash":"09c20e8d428982852ff7855a5e49c23acb4cb232","deps":["common-react","npm:flowbite-react","npm:next"]},{"file":"apps/internal-client/pages/_document.tsx","hash":"432b7539389a8bb4c067a2d78708bbec21a5b21a","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/internal-client/pages/_error.tsx","hash":"49f0ea6e15ade4ef05bb42162b2c7b584d864d84","deps":["npm:@sentry/nextjs","npm:next"]},{"file":"apps/internal-client/pages/404.tsx","hash":"612bbd16d2debe77bb52d53748d1fceb51835afd","deps":["npm:flowbite-react"]},{"file":"apps/internal-client/pages/index.tsx","hash":"830b39fc79b1719de095b69e0c209e2a7442fcfb"},{"file":"apps/internal-client/pages/styles.css","hash":"eac17f08a5ff16741271166904ea58cf311fc3cf"},{"file":"apps/internal-client/postcss.config.js","hash":"2d6ed243d22b23395afa1833e840071c1ed4c935"},{"file":"apps/internal-client/project.json","hash":"4d8920e01f0b1d85b34d0dffe4d936093aff74b7"},{"file":"apps/internal-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/.nojekyll","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/config.json","hash":"677e3cdebdf644bcfcb8f9416e5b8822b2c01bb0"},{"file":"apps/internal-client/README.md","hash":"1ff4adcb8f70a03b41b4d57eb8edebe9035dbee2"},{"file":"apps/internal-client/scripts/static-build.js","hash":"a3bd4de5a3b9c7d37912ffc8cdc19ea36a446712"},{"file":"apps/internal-client/sentry.client.config.js","hash":"09f7c52f3f95dc6907fdb47fdbeff354867e30ec","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/sentry.properties","hash":"f51633b67e1028c4cbc985ad5d0f52cb3e0e7e96"},{"file":"apps/internal-client/sentry.server.config.js","hash":"990cf22a51e1d45c954980e0670c53fbcc68d64e","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/specs/index.spec.tsx","hash":"77269d9ec1d2ead92093b9882e49eda89c5ccb74","deps":["npm:@testing-library/react"]},{"file":"apps/internal-client/tailwind.config.js","hash":"c9f7518af4144da9c796011b06d5043fb76cb625","deps":["npm:@nrwl/react","npm:flowbite","npm:@tailwindcss/typography"]},{"file":"apps/internal-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"23a8088f2767edee8d855ed96148c2ec01fda8fc"},{"file":"apps/internal-client/utils/load-nx-graph.ts","hash":"a38f998ff52a8b230adae9a2f9093bca963f56ae","deps":["common","npm:util","npm:nx"]}],"targets":{"build":{"executor":"@nrwl/next:build","outputs":["{options.outputPath}"],"defaultConfiguration":"production","options":{"root":"apps/internal-client","outputPath":"dist/apps/internal-client"},"configurations":{"development":{"outputPath":"apps/internal-client"},"production":{}},"dependsOn":["^build"],"inputs":["production","^production"]},"serve":{"executor":"@nrwl/next:server","defaultConfiguration":"development","options":{"buildTarget":"internal-client:build","dev":true},"configurations":{"development":{"buildTarget":"internal-client:build:development","dev":true},"production":{"buildTarget":"internal-client:build:production","dev":false}}},"export":{"executor":"@nrwl/next:export","options":{"buildTarget":"internal-client:build:production"}},"test":{"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/apps/internal-client"],"options":{"jestConfig":"apps/internal-client/jest.config.ts","passWithNoTests":true},"inputs":["default","^production","{workspaceRoot}/jest.preset.js"]},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/internal-client/**/*.{ts,tsx,js,jsx}"]},"inputs":["default","{workspaceRoot}/.eslintrc.json"]},"smoke":{"executor":"nx:run-commands","options":{"command":"npx http-server dist/apps/internal-client/exported"}},"lighthouse":{"executor":"nx:run-commands","options":{"commands":[{"command":"mkdir dist/apps/internal-client/exported/nx-template","description":"Make missing directories"},{"command":"cp -r dist/apps/internal-client/exported/_next dist/apps/internal-client/exported/nx-template/","description":"Copy files into nx-template sub-folder for testing"},{"command":"npx lhci autorun --config=./.lighthouse/lighthouserc.js --collect.staticDistDir=./dist/apps/internal-client/exported","description":"Run lighthouse"}],"parallel":false}},"static":{"executor":"nx:run-commands","options":{"command":"node apps/internal-client/scripts/static-build.js"}}}}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"eb7aa20406201b06b95da6f0e25f40f20ca656bd"},{"file":"libs/common-react/.storybook/preview.js","hash":"8c8889d1a414d3f6aac36db631cb19fab5756751"},{"file":"libs/common-react/.storybook/tailwind-imports.css","hash":"b5c61c956711f981a41e95f7fcf0038436cfbb22"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"a33db61008e5c3b0872a277348574e07dcf7b6d7"},{"file":"libs/common-react/jest.config.ts","hash":"607a2c9467c4e24dff219ae919f1d4a544add75b"},{"file":"libs/common-react/package.json","hash":"2dd5d55d0b94246e35c02731745fcaab54edf696"},{"file":"libs/common-react/postcss.config.js","hash":"2d6ed243d22b23395afa1833e840071c1ed4c935"},{"file":"libs/common-react/project.json","hash":"f9f86f09e65a8d8bfb90aaf65f9d5d4ee6a4468d"},{"file":"libs/common-react/README.md","hash":"84032cddc589299b5f63a918379781664482271f"},{"file":"libs/common-react/src/index.ts","hash":"e07c97f79c8a865a189e1e481d53d0d72fb46479"},{"file":"libs/common-react/src/lib/components/google-analytics/google-analytics.tsx","hash":"88e0add92a31d7b2789fbeab16d065d588412da9"},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"d2c6b421e232df2ef6ba5e7ad35263ef1c061949"},{"file":"libs/common-react/src/lib/hooks/theme-context.ts","hash":"6ca8fdcab60f4567c825b7a2695a88f2b1428243","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/theme-provider.tsx","hash":"fcf6e93dea7a2c5c4e324b5815f621c9c6d22ab9","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.spec.tsx","hash":"788166375d1983f0956bf11a4e01a18a31660be5","deps":["npm:@testing-library/react","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"c7f90ce8f18415ea1673287c556884664cd5ef99","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"46f5f4f8c3df84afec332dd85e649e0587952159","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-logger.ts","hash":"31617d5cfb427b7c7d227c3cd06719fb9b595901","deps":["common","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"845a1a23b78222365e716980a22d846c8592890f","deps":["npm:@nrwl/devkit","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-script.ts","hash":"293cb68d77d38559ee005ea1d994461432dc24bd","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-theme.ts","hash":"c6d3071aa4874a59024a73c60094afaa1e4b4fd8","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"006fbb76b49aa84824acd8760b01956742cb6a9d"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"5161f4c99558ace611f07d674479df81aab171eb"},{"file":"libs/common-react/src/lib/types/themes.ts","hash":"0fd379e5ba4fa89c1cd35b6bc9687ce6f1f2d10a"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"044c7f142c530014fa4e619b53e8773ddc160885","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"00abc3ec576a7d204d07d136bb8b18af8e882421"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"b6cca4fcc8aaeb0acdfd62a0a713d25b8aa6e487","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"f79f0b32cfd586e45c333bb18284c54ff64b50aa","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tailwind.config.js","hash":"16c52d11fb862c82fee9c05c2e9c5baf97f007cb","deps":["npm:@nrwl/react","npm:flowbite","npm:@tailwindcss/typography"]},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common-react/typedoc.json","hash":"0df9bd3ed0bb9c9319f89ab55b71985fcba330f7"}],"targets":{"build":{"executor":"@nrwl/rollup:rollup","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/libs/common-react","tsConfig":"libs/common-react/tsconfig.lib.json","project":"libs/common-react/package.json","entryFile":"libs/common-react/src/index.ts","external":["react/jsx-runtime"],"rollupConfig":"@nrwl/react/plugins/bundle-rollup","compiler":"babel","assets":[{"glob":"libs/common-react/README.md","input":".","output":"."}]},"dependsOn":["^build"],"inputs":["production","^production"]},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/common-react/**/*.{ts,tsx,js,jsx}"]},"inputs":["default","{workspaceRoot}/.eslintrc.json"]},"test":{"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/libs/common-react"],"options":{"jestConfig":"libs/common-react/jest.config.ts","passWithNoTests":true},"inputs":["default","^production","{workspaceRoot}/jest.preset.js"]},"typedoc":{"executor":"nx:run-commands","options":{"command":"npx typedoc --options libs/common-react/typedoc.json"}},"storybook":{"executor":"@nrwl/storybook:storybook","options":{"uiFramework":"@storybook/react","port":4400,"config":{"configFolder":"libs/common-react/.storybook"}},"configurations":{"ci":{"quiet":true}}},"build-storybook":{"executor":"@nrwl/storybook:build","outputs":["{options.outputPath}"],"options":{"uiFramework":"@storybook/react","outputPath":"dist/storybook/common-react","config":{"configFolder":"libs/common-react/.storybook"}},"configurations":{"ci":{"quiet":true}},"inputs":["default","^production","{workspaceRoot}/.storybook/**/*"]}}}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"b274f2bef88b29d7aa5fc0f4b63c1fb83b8aba96"},{"file":"libs/storybook/.storybook/preview.js","hash":"8c8889d1a414d3f6aac36db631cb19fab5756751"},{"file":"libs/storybook/.storybook/tailwind-imports.css","hash":"b5c61c956711f981a41e95f7fcf0038436cfbb22"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"bad38c5bb45877d16e33a1ca64e49bb11aae7eb4"},{"file":"libs/storybook/jest.config.ts","hash":"7c61a2bf538e00a86344276bfad3211a1778c387"},{"file":"libs/storybook/package.json","hash":"e11efb1c82d82a7f137a0585c943452d65202408"},{"file":"libs/storybook/postcss.config.js","hash":"2d6ed243d22b23395afa1833e840071c1ed4c935"},{"file":"libs/storybook/project.json","hash":"6380cd8dcfeb4ef477cb4e4cf14b449be1603750"},{"file":"libs/storybook/README.md","hash":"c306e6e0eae27e2bfc81452ae718cc3303644c2f"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"395533efdeec57b49d7e7a9473dcac3d04cec652","deps":["npm:@storybook/react","npm:flowbite-react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"17686349e2e737005511da6148ed1058cbcd3c28","deps":["npm:flowbite-react","npm:react"]},{"file":"libs/storybook/tailwind.config.js","hash":"16c52d11fb862c82fee9c05c2e9c5baf97f007cb","deps":["npm:@nrwl/react","npm:flowbite","npm:@tailwindcss/typography"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/storybook/typedoc.json","hash":"85163ace684abcf02f209f2c1db480fd9beecaeb"}],"targets":{"build":{"executor":"@nrwl/rollup:rollup","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/libs/storybook","tsConfig":"libs/storybook/tsconfig.lib.json","project":"libs/storybook/package.json","entryFile":"libs/storybook/src/index.ts","external":["react/jsx-runtime"],"rollupConfig":"@nrwl/react/plugins/bundle-rollup","compiler":"babel","assets":[{"glob":"libs/storybook/README.md","input":".","output":"."}]},"dependsOn":["^build"],"inputs":["production","^production"]},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/storybook/**/*.{ts,tsx,js,jsx}"]},"inputs":["default","{workspaceRoot}/.eslintrc.json"]},"test":{"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/libs/storybook"],"options":{"jestConfig":"libs/storybook/jest.config.ts","passWithNoTests":true},"inputs":["default","^production","{workspaceRoot}/jest.preset.js"]},"storybook":{"executor":"@nrwl/storybook:storybook","options":{"uiFramework":"@storybook/react","port":4400,"config":{"configFolder":"libs/storybook/.storybook"}},"configurations":{"ci":{"quiet":true}}},"build-storybook":{"executor":"@nrwl/storybook:build","outputs":["{options.outputPath}"],"options":{"uiFramework":"@storybook/react","outputPath":"dist/storybook/storybook","config":{"configFolder":"libs/storybook/.storybook"}},"configurations":{"ci":{"quiet":true}},"inputs":["default","^production","{workspaceRoot}/.storybook/**/*"]},"typedoc":{"executor":"nx:run-commands","options":{"command":"npx typedoc --options libs/storybook/typedoc.json"}}}}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"36788b226c6c19d105c48c4e931beea1759afc5c"},{"file":"libs/common/project.json","hash":"636354f61aa644cadde67b2d35e6671afede7207"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"9e14486f59a3369a386505fc095ce32164e5b6e8"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"a25dde89fd847103b0d94b28be4352d895e629f1"},{"file":"libs/common/src/lib/utils/get-id.spec.ts","hash":"1a131e1c17bf5f523d6530d9058974b596800eaa"},{"file":"libs/common/src/lib/utils/get-id.ts","hash":"ce37f1cbb7a75164db89a0b44bfb5a16a485beb5"},{"file":"libs/common/src/lib/utils/index.ts","hash":"2c5250e0749b07a09903b23cede950e91baf8ce2"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common/typedoc.json","hash":"f17b64fe6c15fb08a2b83fc32b966310866c0297"}],"targets":{"build":{"executor":"@nrwl/js:tsc","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/libs/common","tsConfig":"libs/common/tsconfig.lib.json","packageJson":"libs/common/package.json","main":"libs/common/src/index.ts","assets":["libs/common/*.md"]},"dependsOn":["^build"],"inputs":["production","^production"]},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/common/**/*.ts"]},"inputs":["default","{workspaceRoot}/.eslintrc.json"]},"test":{"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/libs/common"],"options":{"jestConfig":"libs/common/jest.config.ts","passWithNoTests":true},"inputs":["default","^production","{workspaceRoot}/jest.preset.js"]},"typedoc":{"executor":"nx:run-commands","options":{"command":"npx typedoc --options libs/common/typedoc.json"}}}}}],"dependencies":{"internal-client":[{"source":"internal-client","target":"common-react","type":"static"},{"source":"internal-client","target":"common","type":"static"}],"common-react":[{"source":"common-react","target":"common","type":"static"}],"storybook":[],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"internal-client:build":{"roots":["common:build"],"tasks":{"internal-client:build:production":{"id":"internal-client:build:production","target":{"project":"internal-client","target":"build","configuration":"production"},"projectRoot":"apps/internal-client","overrides":{}},"common-react:build":{"id":"common-react:build","target":{"project":"common-react","target":"build"},"projectRoot":"libs/common-react","overrides":{"__overrides_unparsed__":[]}},"common:build":{"id":"common:build","target":{"project":"common","target":"build"},"projectRoot":"libs/common","overrides":{"__overrides_unparsed__":[]}}},"dependencies":{"internal-client:build:production":["common-react:build","common:build"],"common-react:build":["common:build"],"common:build":[]}},"internal-client:build:development":{"roots":["common:build"],"tasks":{"internal-client:build:development":{"id":"internal-client:build:development","target":{"project":"internal-client","target":"build","configuration":"development"},"projectRoot":"apps/internal-client","overrides":{}},"common-react:build":{"id":"common-react:build","target":{"project":"common-react","target":"build"},"projectRoot":"libs/common-react","overrides":{"__overrides_unparsed__":[]}},"common:build":{"id":"common:build","target":{"project":"common","target":"build"},"projectRoot":"libs/common","overrides":{"__overrides_unparsed__":[]}}},"dependencies":{"internal-client:build:development":["common-react:build","common:build"],"common-react:build":["common:build"],"common:build":[]}},"internal-client:build:production":{"roots":["common:build"],"tasks":{"internal-client:build:production":{"id":"internal-client:build:production","target":{"project":"internal-client","target":"build","configuration":"production"},"projectRoot":"apps/internal-client","overrides":{}},"common-react:build":{"id":"common-react:build","target":{"project":"common-react","target":"build"},"projectRoot":"libs/common-react","overrides":{"__overrides_unparsed__":[]}},"common:build":{"id":"common:build","target":{"project":"common","target":"build"},"projectRoot":"libs/common","overrides":{"__overrides_unparsed__":[]}}},"dependencies":{"internal-client:build:production":["common-react:build","common:build"],"common-react:build":["common:build"],"common:build":[]}},"internal-client:serve":{"roots":["internal-client:serve:development"],"tasks":{"internal-client:serve:development":{"id":"internal-client:serve:development","target":{"project":"internal-client","target":"serve","configuration":"development"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:serve:development":[]}},"internal-client:serve:development":{"roots":["internal-client:serve:development"],"tasks":{"internal-client:serve:development":{"id":"internal-client:serve:development","target":{"project":"internal-client","target":"serve","configuration":"development"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:serve:development":[]}},"internal-client:serve:production":{"roots":["internal-client:serve:production"],"tasks":{"internal-client:serve:production":{"id":"internal-client:serve:production","target":{"project":"internal-client","target":"serve","configuration":"production"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:serve:production":[]}},"internal-client:export":{"roots":["internal-client:export"],"tasks":{"internal-client:export":{"id":"internal-client:export","target":{"project":"internal-client","target":"export"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:export":[]}},"internal-client:test":{"roots":["internal-client:test"],"tasks":{"internal-client:test":{"id":"internal-client:test","target":{"project":"internal-client","target":"test"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:test":[]}},"internal-client:lint":{"roots":["internal-client:lint"],"tasks":{"internal-client:lint":{"id":"internal-client:lint","target":{"project":"internal-client","target":"lint"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:lint":[]}},"internal-client:smoke":{"roots":["internal-client:smoke"],"tasks":{"internal-client:smoke":{"id":"internal-client:smoke","target":{"project":"internal-client","target":"smoke"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:smoke":[]}},"internal-client:lighthouse":{"roots":["internal-client:lighthouse"],"tasks":{"internal-client:lighthouse":{"id":"internal-client:lighthouse","target":{"project":"internal-client","target":"lighthouse"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:lighthouse":[]}},"internal-client:static":{"roots":["internal-client:static"],"tasks":{"internal-client:static":{"id":"internal-client:static","target":{"project":"internal-client","target":"static"},"projectRoot":"apps/internal-client","overrides":{}}},"dependencies":{"internal-client:static":[]}},"common-react:build":{"roots":["common:build"],"tasks":{"common-react:build":{"id":"common-react:build","target":{"project":"common-react","target":"build"},"projectRoot":"libs/common-react","overrides":{}},"common:build":{"id":"common:build","target":{"project":"common","target":"build"},"projectRoot":"libs/common","overrides":{"__overrides_unparsed__":[]}}},"dependencies":{"common-react:build":["common:build"],"common:build":[]}},"common-react:lint":{"roots":["common-react:lint"],"tasks":{"common-react:lint":{"id":"common-react:lint","target":{"project":"common-react","target":"lint"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:lint":[]}},"common-react:test":{"roots":["common-react:test"],"tasks":{"common-react:test":{"id":"common-react:test","target":{"project":"common-react","target":"test"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:test":[]}},"common-react:typedoc":{"roots":["common-react:typedoc"],"tasks":{"common-react:typedoc":{"id":"common-react:typedoc","target":{"project":"common-react","target":"typedoc"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:typedoc":[]}},"common-react:storybook":{"roots":["common-react:storybook"],"tasks":{"common-react:storybook":{"id":"common-react:storybook","target":{"project":"common-react","target":"storybook"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:storybook":[]}},"common-react:storybook:ci":{"roots":["common-react:storybook:ci"],"tasks":{"common-react:storybook:ci":{"id":"common-react:storybook:ci","target":{"project":"common-react","target":"storybook","configuration":"ci"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:storybook:ci":[]}},"common-react:build-storybook":{"roots":["common-react:build-storybook"],"tasks":{"common-react:build-storybook":{"id":"common-react:build-storybook","target":{"project":"common-react","target":"build-storybook"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:build-storybook":[]}},"common-react:build-storybook:ci":{"roots":["common-react:build-storybook:ci"],"tasks":{"common-react:build-storybook:ci":{"id":"common-react:build-storybook:ci","target":{"project":"common-react","target":"build-storybook","configuration":"ci"},"projectRoot":"libs/common-react","overrides":{}}},"dependencies":{"common-react:build-storybook:ci":[]}},"storybook:build":{"roots":["storybook:build"],"tasks":{"storybook:build":{"id":"storybook:build","target":{"project":"storybook","target":"build"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:build":[]}},"storybook:lint":{"roots":["storybook:lint"],"tasks":{"storybook:lint":{"id":"storybook:lint","target":{"project":"storybook","target":"lint"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:lint":[]}},"storybook:test":{"roots":["storybook:test"],"tasks":{"storybook:test":{"id":"storybook:test","target":{"project":"storybook","target":"test"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:test":[]}},"storybook:storybook":{"roots":["storybook:storybook"],"tasks":{"storybook:storybook":{"id":"storybook:storybook","target":{"project":"storybook","target":"storybook"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:storybook":[]}},"storybook:storybook:ci":{"roots":["storybook:storybook:ci"],"tasks":{"storybook:storybook:ci":{"id":"storybook:storybook:ci","target":{"project":"storybook","target":"storybook","configuration":"ci"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:storybook:ci":[]}},"storybook:build-storybook":{"roots":["storybook:build-storybook"],"tasks":{"storybook:build-storybook":{"id":"storybook:build-storybook","target":{"project":"storybook","target":"build-storybook"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:build-storybook":[]}},"storybook:build-storybook:ci":{"roots":["storybook:build-storybook:ci"],"tasks":{"storybook:build-storybook:ci":{"id":"storybook:build-storybook:ci","target":{"project":"storybook","target":"build-storybook","configuration":"ci"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:build-storybook:ci":[]}},"storybook:typedoc":{"roots":["storybook:typedoc"],"tasks":{"storybook:typedoc":{"id":"storybook:typedoc","target":{"project":"storybook","target":"typedoc"},"projectRoot":"libs/storybook","overrides":{}}},"dependencies":{"storybook:typedoc":[]}},"common:build":{"roots":["common:build"],"tasks":{"common:build":{"id":"common:build","target":{"project":"common","target":"build"},"projectRoot":"libs/common","overrides":{}}},"dependencies":{"common:build":[]}},"common:lint":{"roots":["common:lint"],"tasks":{"common:lint":{"id":"common:lint","target":{"project":"common","target":"lint"},"projectRoot":"libs/common","overrides":{}}},"dependencies":{"common:lint":[]}},"common:test":{"roots":["common:test"],"tasks":{"common:test":{"id":"common:test","target":{"project":"common","target":"test"},"projectRoot":"libs/common","overrides":{}}},"dependencies":{"common:test":[]}},"common:typedoc":{"roots":["common:typedoc"],"tasks":{"common:typedoc":{"id":"common:typedoc","target":{"project":"common","target":"typedoc"},"projectRoot":"libs/common","overrides":{}}},"dependencies":{"common:typedoc":[]}}}};
    