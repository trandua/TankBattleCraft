window.h5Ubi = {
    isAndroidWebView: function () {
        const ua = navigator.userAgent || '';
        const isAndroid = /Android/i.test(ua);
        const isWebView = ua.includes('wv') || (ua.includes('Version/') && !ua.includes('Chrome'));
        return isAndroid && isWebView;
      },
    
    onCheckCallAndroid: function ({ onAndroidWebView, onBrowser }) {
        if (this.isAndroidWebView()) {
          onAndroidWebView?.();
        } else {
          onBrowser?.();
        }
      },
      onCallShowInters: function ({ onAndroidWebView, onBrowser }) {
        if (this.isAndroidWebView()) {
          onAndroidWebView?.();
          Android.showInterstitial();
        } else {
          onBrowser?.();
        }
      },
      onCallShowImageInters: function ({ onAndroidWebView, onBrowser }) {
        if (this.isAndroidWebView()) {
          onAndroidWebView?.();
          Android.showIntersImage();
        } else {
          onBrowser?.();
        }
      },
    onCallShowReward: function ({ onAndroidWebView, onBrowser }) {
        if (this.isAndroidWebView()) {
          onAndroidWebView?.();
          Android.showRewardAd();
        } else {
          onBrowser?.();
        }
      },
};