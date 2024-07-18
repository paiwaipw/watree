import React, { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike, Map as MapboxMap } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface Tree {
  treeId: string;
  latitude: number;
  longitude: number;
  spesies: string;
  status: string;
}

const Mapbox = ({ trees }: { trees: Tree[] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapboxMap | null>(null);
  const markers = useRef<Record<string, mapboxgl.Marker>>({});

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [trees[0]?.longitude || 0, trees[0]?.latitude || 0],
      zoom: 16,
    });

    map.current.on("load", () => {
      // Clear existing markers
      Object.values(markers.current).forEach((marker) => marker.remove());

      // Add new markers
      if (Array.isArray(trees)) {
        trees.forEach((tree) => {
          const popup = new mapboxgl.Popup().setHTML(`
                <h3>${tree.treeId}</h3>
                <h5>Spesies : ${tree.spesies}</h5>
                <h5>Status : ${tree.status}</h5>
                <p>Lat: ${tree.latitude}</p>
                <p>Lng: ${tree.longitude}</p>
                <a href="/trees/${tree.treeId}">See Details
                </a>
            `);

          // Custom marker
          const el = document.createElement("div");
          el.className = "custom-marker";
          el.style.backgroundColor =
            tree.status === "Hidup" ? "lawngreen" : "red";

          const marker = new mapboxgl.Marker(el)
            .setLngLat([tree.longitude, tree.latitude] as LngLatLike)
            .setPopup(popup)
            .addTo(map.current!);

          markers.current[tree.treeId] = marker; // Store marker reference
        });
      }
    });

    return () => {
      if (map.current) {
        map.current.remove(); // Clean up map instance if it exists
        map.current = null; // Reset map instance
      }
    };
  }, [trees]);

  return (
    <div ref={mapContainer} className="map-container absolute h-full w-full " />
  );
};

export default Mapbox;
