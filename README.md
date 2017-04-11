AR Client
===

Prequsities
---
- **node.js** : https://nodejs.org/en/
- **cordova** : Install using npm `npm install cordova -g`
- Android SDK (for Android)
- Xcode (for iOS)

Getting Started
---
Make sure to update `env.js` to set the correct URL for the API.

For **Android** Build:

Connect your Android Device via USB or copy the application from `platforms/android/build/outputs/apk/android-debug.apk` to your phone after build.
```
cordova build android
```

Connect your iOS device via USB.
For **iOS** build:
```
cordova build ios
```