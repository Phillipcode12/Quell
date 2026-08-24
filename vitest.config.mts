import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

/**
 * Test setup for a Next.js App Router project.
 *
 * Two pieces of resolution here are not optional and will cost an afternoon
 * if they go missing, so they are written down rather than left to be
 * rediscovered.
 */
export default defineConfig({
  resolve: {
    alias: {
      // Mirrors the "@/*" path in tsconfig.json. Vitest does not read
      // tsconfig paths on its own.
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      // `import 'server-only'` sits at the top of most of lib/. That package's
      // default export throws on purpose -- it is a marker whose whole job is
      // to fail the build when a server module gets pulled into a client
      // bundle. Next satisfies it by resolving the "react-server" export
      // condition; Vitest does not, so every server module fails to import
      // with "This module cannot be imported from a Client Component module",
      // which reads like a bug in the code under test rather than in the
      // runner.
      //
      // Aliased to the no-op entry the package itself ships for that
      // condition. Setting `resolve.conditions` instead does NOT work here:
      // Vitest resolves test modules through its SSR pipeline, which reads
      // `ssr.resolve.conditions`, so the plain `conditions` list is quietly
      // ignored and the failure looks identical.
      'server-only': fileURLToPath(
        new URL('./node_modules/server-only/empty.js', import.meta.url),
      ),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // These are unit tests. They must not reach the network or the database:
    // anything needing either is mocked, and a test that starts making real
    // calls should fail loudly rather than pass slowly.
    restoreMocks: true,
    unstubEnvs: true,
  },
})
