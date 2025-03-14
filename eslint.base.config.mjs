import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'feature:settings',
              onlyDependOnLibsWithTags: ['feature:settings', 'feature:shared'],
            },
            {
              sourceTag: 'feature:course',
              onlyDependOnLibsWithTags: ['feature:course', 'feature:shared'],
            },
            {
              sourceTag: 'feature:shell',
              onlyDependOnLibsWithTags: ['feature:shell', 'feature:shared'],
            },
            {
              sourceTag: 'feature:shared',
              onlyDependOnLibsWithTags: ['feature:shared'],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:domain',
                'type:util',
                'type:model',
                'type:layout',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:layout',
                'type:util',
                'type:model',
              ],
            },
            {
              sourceTag: 'type:domain',
              onlyDependOnLibsWithTags: ['type:util', 'type:model'],
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:model', 'type:util'],
            },
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: ['type:feature', 'type:model'],
            },
            {
              sourceTag: 'type:model',
              onlyDependOnLibsWithTags: ['type:model'],
            },
            {
              sourceTag: 'type:layout',
              onlyDependOnLibsWithTags: [],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
