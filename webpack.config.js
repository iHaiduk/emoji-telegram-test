const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction =
    process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const mainDir = path.join(__dirname, 'emoji', 'src');
const sourceDist = path.join(mainDir, '..', 'static');

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'entry',
                    targets: '> 1%, last 3 version',
                    corejs: '3.2.1',
                    shippedProposals: true,
                },
            ],
            'optimizations',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            'babel-plugin-loop-optimizer',
            'closure-elimination',
        ],
    },
};

const cacheLoader = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: path.join(__dirname, '.cache'),
    },
};

const config = {
    entry: {
        application: [
            path.join(mainDir, 'style', 'reset.scss'),
            path.join(mainDir, 'index.tsx'),
        ],
    },
    output: {
        path: sourceDist,
        filename: isProduction ? '[name].js' : '[name].js',
        chunkFilename: isProduction ? '[name].js' : '[name].js',
        publicPath: './static/',
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
        mainFields: ['jsnext:main', 'module', 'browser', 'main'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    mainDir,
                ],
                exclude: /node_modules/,
                use: [
                    cacheLoader,
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.scss$/i,
                include: [
                    mainDir,
                ],
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProduction,
                        },
                    },
                    cacheLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url: false,
                            sourceMap: true,
                            modules: {
                                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            use: ['sass'],
                            syntax: 'postcss-scss',
                            parser: 'postcss-scss',
                            ident: 'postcss',
                            sourceMap: true,
                            modules: true,
                            writeDefinitions: true,
                            plugins: [
                                require('autoprefixer'),
                                isProduction ? require('cssnano')() : require("postcss-reporter")({clearReportedMessages: true}),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                include: [
                    mainDir,
                ],
                exclude: /node_modules/,
                use: [
                    cacheLoader,
                    babelLoader,
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: false,
                            svgo: {
                                floatPrecision: 5,
                                removeViewBox: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: isProduction ? 'production' : 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        }),
        new WebpackCleanupPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].css' : '[name].css',
            ignoreOrder: false,
        }),
    ],
    optimization: {
        mangleWasmImports: true,
        sideEffects: true,
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10,
                    name: 'vendors',
                    filename: '[name].js',
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },
    resolveLoader: {
        modules: [
            'node_modules',
        ],
    },
};

if (isProduction) {
    config.optimization.minimizer = [
        new TerserPlugin({
            parallel: true,
            cache: path.join(mainDir, '.cache'),
            sourceMap: !isProduction,
        }),
        new OptimizeCSSAssetsPlugin({}),
    ];
}

module.exports = config;
