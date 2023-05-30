import L from "leaflet";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw/dist/leaflet.draw.js";
import markerIcon from "../assets/logo/icon_info.png";
import React from "react";
import { useEffect, useState, useRef } from "react";
const MyMap = () => {
  const markersData = [
    { lat: 51.525126, lng: -0.156845 },
    { lat: 51.841505, lng: -0.358903 },
  ];
  const mapRef = useRef(null);
  const [drawnItems, setDrawnItems] = useState(null);
  useEffect(() => {
    // Tạo bản đồ Leaflet
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
    const customIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [32, 32], // Kích thước của biểu tượng (chiều rộng x chiều cao)
    });
    // Thêm một lớp TileLayer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }).addTo(map);

    // Tạo một đối tượng markerClusterGroup
    const markers = L.markerClusterGroup();

    // Thêm các đánh dấu vào markerClusterGroup
    for (const markerData of markersData) {
      const marker = L.marker([markerData.lat, markerData.lng], {
        icon: customIcon,
      });
      marker.on("click", () => {
        markers.removeLayer(marker);
      });
      markers.addLayer(marker);
    }

    // Thêm markerClusterGroup vào bản đồ
    map.addLayer(markers);

    //--
    const drawnItems = new L.FeatureGroup();
    setDrawnItems(drawnItems);

    // Thêm drawnItems vào bản đồ
    map.addLayer(drawnItems);

    // Tạo một control để vẽ các hình
    const drawControl = new L.Control.Draw({
      draw: {
        marker: true,
        polyline: true,
        circle: true,
        circlemarker: true,
      },
      edit: {
        featureGroup: drawnItems,
        remove: true,
      },
    });
    map.addControl(drawControl);

    // Lắng nghe sự kiện khi vẽ hoàn tất
    map.on("draw:created", (e) => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
    });

    const polyline = L.polyline([
      [51.505, -0.09],
      [51.507, -0.12],
      [51.51, -0.1],
    ]).addTo(map);
    // Cleanup khi unmount
    return () => {
      map.remove();
    };
  }, []);
  return <div ref={mapRef} style={{ height: "500px" }}></div>;
};

export default MyMap;
