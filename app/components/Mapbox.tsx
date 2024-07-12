import React, { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike, Map as MapboxMap } from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
type MarkerWithId = mapboxgl.Marker & { id: string };
const Mapbox = ({ trees }: any) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapboxMap | null>(null);
  const markers = useRef<Record<string, MarkerWithId>>({});
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [trees[0]?.longitude || 0, trees[0]?.latitude || 0],
      zoom: 12,
    });

    map.current.on("load", () => {
      // markers for each tree
      trees.forEach((tree: any) => {
        const popup = new mapboxgl.Popup().setHTML(`
              <h3>${tree.treeId}</h3>
              <p>Latitude: ${tree.latitude}</p>
              <p>Longitude: ${tree.longitude}</p>
            `);
        const marker = new mapboxgl.Marker()
          .setLngLat([tree.longitude, tree.latitude] as LngLatLike)
          .setPopup(popup)
          .addTo(map.current!);
        // Store the marker reference
        map.current?._markers?.push(marker);

        // const marker = new mapboxgl.Marker()
        //   .setLngLat([tree.longitude, tree.latitude])
        //   .addTo(map.current!)
        //   .setPopup(popup);
      });
    });

    return () => {
      Object.values(markers.current).forEach((marker) => marker.remove());
    };
  }, [trees]);

  return <div ref={mapContainer} className="w-full h-[100vh]" />;
};

export default Mapbox;
