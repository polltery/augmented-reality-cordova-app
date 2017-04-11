AR Client
===

Prequsities
---
- **node.js** : https://nodejs.org/en/
- **cordova** : Install using npm `npm install cordova -g`
- Android SDK (for Android)
- Xcode (for iOS)
- AR Server (for AR interaction)
- CraftAR Collection Token

Getting Started
---

**Before you compile the application:**
Make sure to update `env.js` with the correct `apiUrl` and `craftARCollectionToken`

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

*Created by Balraj Singh Bains for 4th Year Honours Dissertation at Heriot Watt University.*