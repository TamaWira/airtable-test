'use client'

import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";
import Marker from "@/components/marker";
import { SearchWrapper } from "@/components/devlink-demo-main";
import { WrapperMapSearchBox } from "@/components/devlink-demo-main";

interface IMaps {
  lat: number;
  lng: number;
  markerId: string;
  draggable: boolean;
  label: string;
  image: string;
}

export default function App() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({map, maps}) => {
    mapRef.current = map;
    setMapReady(true);
  }

  const maps: IMaps[] = [
    { lat: 45.4046987, lng: 12.2472504, markerId: "1", draggable: false, label: "$4.5 M", image: "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drandom%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fHx8MTcxNzg1MDY2NXww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60" },
    { lat: 45.41, lng: 12.27, markerId: "2", draggable: false, label: "$5 M", image: "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drandom%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fHx8MTcxNzg1MDY2NXww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60" },
  ]

  return (
    <main className="relative">
      <div className="fixed top-20 left-0 right-0 mx-auto w-1/2 p-2 px-5 bg-white rounded-full border z-20">
        <WrapperMapSearchBox  />
      </div>
      <GoogleMap
        apiKey="AIzaSyCy49i6KbkV348wS2v8Jd6PKbLfgBYCogI"
        defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
        defaultZoom={10}
        libraries={[]}
        mapMinHeight="100vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log('Map moved', map)}
      >
        {maps?.map((map, index) => (
          <Marker key={index} lat={map.lat} lng={map.lng} label={map.label} markerId={map.markerId} draggable={map.draggable} />
        ))}
      </GoogleMap>
    </main>
  );
}