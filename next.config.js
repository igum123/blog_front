const removeImports = require("next-remove-imports")();

const nextConfig = removeImports({
    experimental: { esmExternals: true },
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_DOMAIN: 'http://localhost:3000',
        NEXT_PUBLIC_API: 'http://localhost:3030'
    }
});

module.exports = nextConfig;