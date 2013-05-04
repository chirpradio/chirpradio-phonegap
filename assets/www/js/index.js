/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  media: null,
  control: null,
  status: null,
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.control = document.getElementById('audio-control');
    app.control.addEventListener('click', app.onControl);
    console.log('Connecting to audio');
    app.media = new Media('http://chirpradio.org/stream', function(e) {
        console.log('Success');
      },
      function(e){
        console.log('Error' + e);
      },
      function(status){
        var msg = 'Loading...';
        app.status = status;
        console.log('Status ' + status);
        switch (app.status) {
          case Media.MEDIA_NONE:
          case Media.MEDIA_STARTING:
            break;
          case Media.MEDIA_RUNNING:
            msg = 'Pause';
            break;
          case Media.MEDIA_PAUSED:
          case Media.MEDIA_STOPPED:
            msg = 'Play';
            break;
        }
        app.control.innerHTML = msg;
      });
    app.media.play();
  },
  onControl: function() {
    switch (app.status) {
      case Media.MEDIA_STARTING:
      case Media.MEDIA_RUNNING:
        app.media.stop()
        break;
      case Media.MEDIA_NONE:
      case Media.MEDIA_PAUSED:
      case Media.MEDIA_STOPPED:
        app.media.play()
        break;
    }
  }
};
