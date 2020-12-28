<template>
    <div class="map">
        <h1>Map</h1>
        <h2 class="text-md-center font-weight-light">Map123456789</h2>
        <div class="d-flex justify-center">
            <div class="mapCanvas" id="map"></div>
        </div>
    </div>
        
</template>

<script>
export default {
    sockets: {
        connect() {
            this.connection = true;},
        disconnect() {
            this.connection = false;}
    },

    mounted() {
        this.initMap();
    },
    methods: {
    initMap() {
      var ros = new ROSLIB.Ros({
          url:  'ws://' + window.location.hostname + ':6060'
      });
      var viewer = new ROS2D.Viewer({
          divID: 'map',
          width: 600,
          height: 500
      });
      var gridClient = new ROS2D.OccupancyGridClient({
          ros: ros,
          rootObject: viewer.scene,
          continuous: true
      });
      gridClient.on('change', function () {
          viewer.scaleToDimensions(gridClient.currentGrid.width, gridClient.currentGrid.height);
          viewer.shift(gridClient.currentGrid.pose.position.x * 1, gridClient.currentGrid.pose.position.y);
      });
      var robotMarker = new ROS2D.NavigationArrow({
          size: 0.05,
          strokeSize: 0.5,
          pulse: true,
          strokeColor: createjs.Graphics.getRGB(254, 0, 0),
          fillColor: createjs.Graphics.getRGB(254, 0, 0)
      });
      var poseTopic = new ROSLIB.Topic({
          ros: ros,
          name: '/amcl_pose',
          messageType: 'geometry_msgs/PoseWithCovarianceStamped'
      });
      poseTopic.subscribe(function (posewithc) {
          var pose = posewithc.pose.pose;
          robotMarker.x = pose.position.x;
          robotMarker.y = -pose.position.y;
      });
      gridClient.rootObject.addChild(robotMarker);
    }
    }
}
</script>