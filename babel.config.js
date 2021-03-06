module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                    alias: {
                        '@components': './src/components',
                        '@styles': './src/styles',
                        '@utils': './src/utils',
                        '@services': './src/services',
                    },
                },
            ],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '~env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
        ],
    }
}
