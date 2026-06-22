'use client';

import { useState, useCallback } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/mapbox';
import Link from 'next/link';
import { neighborhoods } from '@/data/neighborhoods';
import type { Neighborhood } from '@/data/neighborhoods';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// South Florida center — spans Miami-Dade, Broward, and Palm Beach
const INITIAL_VIEW = {
  longitude: -80.25,
  latitude: 26.28,
  zoom: 9.2,
};

export default function NeighborhoodsMap() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood | null>(null);
  const [viewState, setViewState] = useState(INITIAL_VIEW);

  const handleMarkerClick = useCallback((neighborhood: Neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    setViewState((prev) => ({
      ...prev,
      longitude: neighborhood.coordinates.lng,
      latitude: neighborhood.coordinates.lat - 0.04,
      zoom: 12,
    }));
  }, []);

  const handleMapClick = useCallback(() => {
    setSelectedNeighborhood(null);
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gold/20 h-[360px] md:h-[520px]">
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleMapClick}
        style={{ width: '100%', height: '100%' }}
        reuseMaps
      >
        <NavigationControl position="top-right" />
        {neighborhoods.map((neighborhood) => (
          <Marker
            key={neighborhood.slug}
            longitude={neighborhood.coordinates.lng}
            latitude={neighborhood.coordinates.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              handleMarkerClick(neighborhood);
            }}
          >
            <div
              className="cursor-pointer transition-transform duration-200 hover:scale-125"
              title={neighborhood.name}
            >
              <div
                className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                style={{
                  backgroundColor:
                    selectedNeighborhood?.slug === neighborhood.slug ? '#C4A35A' : '#0D2442',
                }}
              />
            </div>
          </Marker>
        ))}
        {selectedNeighborhood && (
          <Popup
            longitude={selectedNeighborhood.coordinates.lng}
            latitude={selectedNeighborhood.coordinates.lat}
            anchor="bottom"
            offset={20}
            onClose={() => setSelectedNeighborhood(null)}
            closeButton
            closeOnClick={false}
            className="neighborhoods-popup"
          >
            <div className="p-1 min-w-[200px]">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                {selectedNeighborhood.county} County
              </p>
              <h3 className="text-base font-semibold text-navy mb-2">
                {selectedNeighborhood.name}
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Median Price</p>
                  <p className="text-sm font-semibold text-navy">
                    {selectedNeighborhood.medianHomePrice}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg Days</p>
                  <p className="text-sm font-semibold text-navy">
                    {selectedNeighborhood.avgDaysOnMarket}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                {selectedNeighborhood.tagline}
              </p>
              <Link
                href={`/neighborhoods/${selectedNeighborhood.slug}`}
                className="block text-center text-xs font-medium py-2 px-3 rounded"
                style={{ backgroundColor: '#0D2442', color: '#fff' }}
              >
                View Neighborhood →
              </Link>
            </div>
          </Popup>
        )}
      </Map>
      <div
        className="absolute bottom-8 left-3 text-xs px-2 py-1 rounded pointer-events-none"
        style={{ background: 'rgba(8,18,28,0.65)', color: 'rgba(255,255,255,0.75)' }}
      >
        Click any marker to explore
      </div>
    </div>
  );
}
