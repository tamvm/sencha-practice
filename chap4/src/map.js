
new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    var map = new Ext.Panel({
      fullscreen: true,
      items
      : [
        {
        xtype: 'map',
        useCurrentLocation: true
      }
      ]});
      this.viewport = map;
  }
});

