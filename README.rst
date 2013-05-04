Listen to a `CHIRP Radio`_ mp3 stream.

This app was built with `Phone Gap`_ and is basically just a proof of concept
right now. Hopefully you are here to help! :)

.. _`Phone Gap`: http://phonegap.com/
.. _`CHIRP Radio`: http://www.chirpradio.org/

Android
-------

Make sure the `Android SDK`_ tools are on your path.
Do something like this::

    PATH="${HOME}/src/adt-bundle-mac/sdk/platform-tools:${PATH}"
    PATH="${HOME}/src/adt-bundle-mac/sdk/tools:${PATH}"
    export PATH

Plug in your phone and put a debug build on it::

    ant debug && adb install -r bin/CHIRPRadio-debug.apk

Debug what's going on with::

    adb logcat

You don't need Eclipse!

.. _`Android SDK`: http://developer.android.com/sdk/index.html
