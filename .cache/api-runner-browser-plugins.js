module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Aidan Meyer-Golden - Personal Portfolio","short_name":"Aidan Meyer-Golden","start_url":"/","icon":"src/images/logo.png","display":"standalone","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"bd4c8ee30c7e1f055e287e0ff10b3458"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/gabrielgoodman/Documents/Code_Chrysalis/aidan/node_modules/gatsby-remark-images","id":"1e382b73-334c-586b-9efb-413c43db3cb0","name":"gatsby-remark-images","version":"5.12.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/gabrielgoodman/Documents/Code_Chrysalis/aidan/node_modules/gatsby-remark-images-medium-zoom","id":"9a661529-a37d-52cd-b9a8-f94d932ba2e7","name":"gatsby-remark-images-medium-zoom","version":"1.7.0","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-images-medium-zoom","options":{}}],"extensions":[".md",".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/gabrielgoodman/Documents/Code_Chrysalis/aidan","JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images-medium-zoom/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
