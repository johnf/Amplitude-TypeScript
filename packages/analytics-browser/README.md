<p align="center">
  <a href="https://amplitude.com" target="_blank" align="center">
    <img src="https://static.amplitude.com/lightning/46c85bfd91905de8047f1ee65c7c93d6fa9ee6ea/static/media/amplitude-logo-with-text.4fb9e463.svg" width="280">
  </a>
  <br />
</p>

# @amplitude/analytics-browser

Official Amplitude SDK for Web

# Doc

See our [Typescript Analytics Browser SDK](https://amplitude.github.io/Amplitude-TypeScript/modules/_amplitude_analytics_browser.html) Reference for a list and description of all available SDK methods.

# Installation and Quick Start

Please visit our :100:[Developer Center](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/) for instructions on installing and using our the SDK.

## Installation

To get started with using Amplitude Browser SDK, install the package to your project via npm, yarn or script loader.

### Installing via package manager

This SDK is available as a package on npm registry named `@amplitude/analytics-browser`. You can install the package using npm or yarn CLI.

#### Using npm CLI
```sh
npm install @amplitude/analytics-browser
```

#### Using yarn CLI
```sh
# yarn
yarn add @amplitude/analytics-browser
```

Import the package into your project and initialize it with your API key.

```ts
import * as amplitude from '@amplitude/analytics-browser';

amplitude.init('<YOUR_API_KEY>');
```

### Installing via script loader

This SDK is also available through CDN. Copy the script loader below and paste before the `</head>` tag of every page you want to track and initialize it with your API key.

<!-- README_SNIPPET_BLOCK -->
```html
<script type="text/javascript">
!function(){"use strict";!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,n){return function(r){e._q.push({name:t,args:Array.prototype.slice.call(n,0),resolve:r})}},o=function(e,t,n){e[t]=function(){if(n)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<g.length;t++)o(e,g[t],!1);for(var n=0;n<m.length;n++)o(e,m[n],!0)};n.invoked=!0;var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-8CaobklqZpnKMCN5+Q7pFJe8EmuAgXW7EEpqcvOvMpY1+hYicT2sXEwyLIcF7FG2",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-2.0.1-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a);for(var u=function(){return this._q=[],this},p=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<p.length;l++)r(u,p[l]);n.Identify=u;for(var d=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)r(d,v[f]);n.Revenue=d;var g=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],m=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(n),n.createInstance=function(e){return n._iq[e]={_q:[]},i(n._iq[e]),n._iq[e]},e.amplitude=n}}(window,document)}();

amplitude.init("<YOUR_API_KEY>");
</script>
```
<!-- / OF README_SNIPPET_BLOCK -->

## Tracking events

Once the SDK is initialize, you can start tracking events.

```ts
amplitude.track('Page Viewed');
```

For in-depth documentation, please visit to our [Developer Center](https://www.docs.developers.amplitude.com/data/sdks/sdk-quickstart/#browser).
