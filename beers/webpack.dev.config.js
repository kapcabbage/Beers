'use strict';

const path = require('path');
const webpack = require('webpack');
//const merge = require('webpack-merge');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//const htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
//const asyncChunkNames = require('webpack-async-chunk-names-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const vuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

// the path(s) that should be cleaned
let pathsToClean = ['wwwroot/dist/*.*', 'wwwroot/dist/js/*.*', 'wwwroot/dist/css/*.*']

// the clean options to use
let cleanOptions = {
  verbose: true,
  dry: false
}

module.exports = (env, argv) => {
    return {
  
      entry: {
        app: path.join(__dirname, './src/index.js')
      },
  
      output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, './wwwroot/dist'),
        chunkFilename: 'js/[name].[hash].bundle.js',
        publicPath: 'dist' //devMode ? 'http://localhost:8080/dist' : '~/dist' //'~/dist'
      },
      
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.styl$/,
            loader: [
              'style-loader',
              {
                loader: miniCssExtractPlugin.loader,
                //options: { publicPath: devMode ? 'http://localhost:8080/dist' : '~/dist' }
              },
              { loader: 'css-loader', options: { url: false, sourceMap: true } },
              'stylus-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              'style-loader', {
                loader: miniCssExtractPlugin.loader,
                //options: { publicPath: devMode ? 'http://localhost:8080/dist' : '~/dist' }
              },
              { loader: 'css-loader', options: { url: false, sourceMap: true } },
              'postcss-loader'
            ]
          },
          {
            test: /\.s[c|a]ss$/,
            use: [
              'style-loader',
              {
                loader: miniCssExtractPlugin.loader,
                //options: { publicPath: devMode ? 'http://localhost:8080/dist' : '~/dist' }
              },
              { loader: 'css-loader', options: { url: false, sourceMap: true } },
              'postcss-loader',
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
          
        ]
      },
  
      plugins: [
        new cleanWebpackPlugin(cleanOptions),
        new vueLoaderPlugin(),
        new miniCssExtractPlugin(
          {
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css',
            publicPath: 'dist' 
          }),
        new htmlWebpackPlugin(
          {
            filename: path.join(__dirname, './wwwroot/dist/index.html'),
            template: './src/index.html',
            chunksSortMode: 'dependency',
            alwaysWriteToDisk: false
          }),
        new vuetifyLoaderPlugin()
      ],
  
  
    }
  
  };