﻿/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'scripts/app',
    'building': 'scripts/building',
    'person': 'scripts/person',
    'group': 'scripts/group',
    'common': 'scripts/common',
    'canvas': 'scripts/canvas',
    '@angular': 'libs/@angular',
    '@angular2-material': 'libs/@angular2-material',
    'angular2-in-memory-web-api': 'libs/angular2-in-memory-web-api',
    'rxjs': 'libs/rxjs',
    'numericjs': 'libs/numericjs',
    'reflect-metadata': 'libs/reflect-metadata',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'app.js', defaultExtension: 'js' },
    'building': { main: 'building.js', defaultExtension: 'js' },
    'person': { main: 'person.js', defaultExtension: 'js' },
    'group': { main: 'group.js', defaultExtension: 'js' },
    'common': { main: 'material.js', defaultExtension: 'js' },
    'canvas': { main: 'canvas.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'numericjs': { main: 'numeric-1.2.6.js', defaultExtension: 'js' },
    'reflect-metadata': { main: 'Reflect.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  var ngMaterialPackageNames = [
    'core',
    'button',
    'button-toggle',
    'card',
    'checkbox',
    'dialog',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slider',
    'slide-toggle',
    'tabs',
    'toolbar',
    'tooltip'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  function packIndexMaterial(pkgName) {
    packages['@angular2-material/' + pkgName] = { main: pkgName + '.js', defaultExtension: 'js' };
  }

  ngMaterialPackageNames.forEach(packIndexMaterial);

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);