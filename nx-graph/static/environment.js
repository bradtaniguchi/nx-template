window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"8968090a1877e966beb158e4e89efbdf65cce2081d044a580ff5e47c2a3489bf","projects":[{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.eslintrc.json","hash":"f13f56cc53c7d94063a3c717349e025e863bc78c"},{"file":"apps/internal-client/.gitignore","hash":"3b2917437a329a616ab9794f052d42499acfb142"},{"file":"apps/internal-client/components/dashboard-page/dashboard-page.tsx","hash":"95a88d95be6e677fe306901cc8ceb3b79430475d","deps":["npm:@mui/icons-material","npm:@mui/material","common-react","npm:react"]},{"file":"apps/internal-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/internal-client/jest.config.ts","hash":"315b134a141cb9ac26109a983501097abfe95d35"},{"file":"apps/internal-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/internal-client/next.config.js","hash":"afd1bf67ace5e5e405a08c19ab699f7c460fd028","deps":["npm:@nrwl/next","npm:@sentry/nextjs"]},{"file":"apps/internal-client/pages/_app.tsx","hash":"631a38aa5ae7b6b3a8a0784e6ebd0720c6cad3ce","deps":["npm:next"]},{"file":"apps/internal-client/pages/_document.tsx","hash":"65fdc1cbb1338a782f6233f299fb14e611d7fa60","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/internal-client/pages/_error.tsx","hash":"49f0ea6e15ade4ef05bb42162b2c7b584d864d84","deps":["npm:@sentry/nextjs","npm:next"]},{"file":"apps/internal-client/pages/404.tsx","hash":"07c722102e80f95c5916411ecf574d2dd643ef7f","deps":["npm:@mui/material"]},{"file":"apps/internal-client/pages/index.tsx","hash":"fafbea9a176e69c72b3116a21b7d87d158376c97","deps":["npm:styled-components","common-react","npm:@mui/material"]},{"file":"apps/internal-client/pages/styles.css","hash":"e8df664b21310fb18e3a97b2c89935b5db788787"},{"file":"apps/internal-client/project.json","hash":"8894d4036b79d663947f1ce4c301b12d940cea22"},{"file":"apps/internal-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/.nojekyll","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/config.json","hash":"677e3cdebdf644bcfcb8f9416e5b8822b2c01bb0"},{"file":"apps/internal-client/public/nx-graph/graph.json","hash":"c5f027dc631c9c97b9542f93e1d522bd804d98fe"},{"file":"apps/internal-client/README.md","hash":"3621d89b6e8de790afd54ac835bf82292cf2420e"},{"file":"apps/internal-client/sentry.client.config.js","hash":"107558b057878933225eadfabd2d1ce06f1228b6","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/sentry.properties","hash":"f51633b67e1028c4cbc985ad5d0f52cb3e0e7e96"},{"file":"apps/internal-client/sentry.server.config.js","hash":"764ac4683848b7df8e1054dd0181c6ec004f424d","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/specs/index.spec.tsx","hash":"77269d9ec1d2ead92093b9882e49eda89c5ccb74","deps":["npm:@testing-library/react"]},{"file":"apps/internal-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"23a8088f2767edee8d855ed96148c2ec01fda8fc"}]}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"7a1170995999ff179ae31ea7b87133b1c2161bc2"},{"file":"libs/common-react/jest.config.ts","hash":"b59a0a99ecbe1f0f88b49e3267d438b75f245568"},{"file":"libs/common-react/package.json","hash":"2dd5d55d0b94246e35c02731745fcaab54edf696"},{"file":"libs/common-react/project.json","hash":"bec8a20259078de9a3fc2340234d37049c5fffb8"},{"file":"libs/common-react/README.md","hash":"f351f7ff8075ea3a997a7e45950bfe94141af6df"},{"file":"libs/common-react/src/index.ts","hash":"bc2818fa2e5d5c727db6803e4944d1a2531c9d3d"},{"file":"libs/common-react/src/lib/components/google-analytics/google-analytics.tsx","hash":"df4d1326d02425b0b183a7403f144af54705b292"},{"file":"libs/common-react/src/lib/components/header-bar/header-bar-context.ts","hash":"0677e6b9daddd842b49751c2ee94f3f64f3aa532","deps":["npm:react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.spec.tsx","hash":"e7b2f6b49ce9dacea72c24862f46f3d58b4c12ae","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.stories.tsx","hash":"f96c6496b0df7ae21f4e8438feb82b8deb3f9330","deps":["npm:@mui/material","npm:@mui/icons-material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.tsx","hash":"dd37a253333ef0109de8459df0cfa1bc74b86bcb","deps":["npm:@mui/icons-material","npm:@mui/material","npm:react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.spec.tsx","hash":"bd89a59660cf03e8cd28252a21d958be65295502","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.stories.tsx","hash":"2d939604e03b5b1857074fc9686220c6fa1ce2eb","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.tsx","hash":"b150c7377635b2c11d666e4901737c77c96bb39e","deps":["npm:@mui/material","npm:@mui/icons-material","npm:react"]},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"12bce91618b2ae9f148542d5d0e0dd04a18aac2a"},{"file":"libs/common-react/src/lib/hooks/theme-context.ts","hash":"6ca8fdcab60f4567c825b7a2695a88f2b1428243","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/theme-provider.tsx","hash":"4675eae508d5157070d7e7fd9e5508ae956c83e7","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.spec.tsx","hash":"74a81f5919a6c4e049a79b22410c60226e6a56b2","deps":["npm:@testing-library/react","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"1fc5c8d39dbbc669fa29dbc980e83195737679c4","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"145b7cabbc42d258f2690578ac911d889708d094","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-logger.ts","hash":"832d8c2a257ef059aa9644e30720cb59e71362b8","deps":["common","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"36c11fd630a96b4ded3d5c8784541b7d97bc8965","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-script.ts","hash":"8b5bf160ac1ea391287b718cedff8444e9426d6a","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"5648d8afc499d735be0b82653fd3120e882276a3"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"5161f4c99558ace611f07d674479df81aab171eb"},{"file":"libs/common-react/src/lib/types/themes.ts","hash":"8f233e77e5937a78b7da8e04e8d74555ee7bf853"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"6e13194af9442ef6c8e506b8240596ee89c73deb","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"e1c5b38b333ee58223fe8bc99610e4ca0237f663"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"9c87613999586cf84dd4dcfdfa6ebb6fcb5e79e8"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"0b8a3e7fdb9092e8827c2f6c96b8d4b62487ef6f"},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common-react/typedoc.json","hash":"0df9bd3ed0bb9c9319f89ab55b71985fcba330f7"}]}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"b274f2bef88b29d7aa5fc0f4b63c1fb83b8aba96"},{"file":"libs/storybook/.storybook/preview-head.html","hash":"31db416a9aabb1122a1a6e59418a61272abebc0c"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"5236331a19174caa1865949505d8ce05a8163da9"},{"file":"libs/storybook/jest.config.ts","hash":"d6e42f3cbe680e87312920043cf29c1665fabe9b"},{"file":"libs/storybook/package.json","hash":"e11efb1c82d82a7f137a0585c943452d65202408"},{"file":"libs/storybook/project.json","hash":"c1ae4064a69befa55127f465489aad319cc66140"},{"file":"libs/storybook/README.md","hash":"c306e6e0eae27e2bfc81452ae718cc3303644c2f"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"1077d8f56b34ca2b9f8e07a33947ddfb279b71fa","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"a96abdad9b66b78a33e24d7eb76a10745314fa5e","deps":["npm:@mui/material","npm:react"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/storybook/typedoc.json","hash":"85163ace684abcf02f209f2c1db480fd9beecaeb"}]}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"36788b226c6c19d105c48c4e931beea1759afc5c"},{"file":"libs/common/project.json","hash":"3065be444d5cea02c7da0b6e4b2e59faa9bf6d48"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"9e14486f59a3369a386505fc095ce32164e5b6e8"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"fde9fcff48dc13f65b4c6f88bbb2d5ceb2a16e92"},{"file":"libs/common/src/lib/utils/get-id.spec.ts","hash":"1a131e1c17bf5f523d6530d9058974b596800eaa"},{"file":"libs/common/src/lib/utils/get-id.ts","hash":"d1cb5ac3f252c82aadc32014eeff341c40d06dbb"},{"file":"libs/common/src/lib/utils/index.ts","hash":"2c5250e0749b07a09903b23cede950e91baf8ce2"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common/typedoc.json","hash":"f17b64fe6c15fb08a2b83fc32b966310866c0297"}]}}],"dependencies":{"internal-client":[{"source":"internal-client","target":"common-react","type":"static"}],"common-react":[{"source":"common-react","target":"common","type":"static"}],"storybook":[],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};