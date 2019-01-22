module.exports = {
    productionSourceMap: false,
    lintOnSave: true,
    css: {
        modules: true,
        loaderOptions: {
            postcss: {
                'postcss-pxtorem': {
                    rootValue: 75,
                    unitPrecision: 5,
                    propList: ['*', '!font-size', '!line-height'],
                    selectorBlackList: [],
                    minPixelValue: 12
                },
                'postcss-theme-variables': {
                    vars: {
                        white: '#000'
                    },
                    prefix: '$'
                }
            }
        }
    }
};