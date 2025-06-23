import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
// @ts-ignore: No types for react-simple-maps
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, useInView } from 'framer-motion';

// ISO Alpha-3 codes for the countries to highlight
const HIGHLIGHTED = ["SAU", "FRA", "MAR", "TUN"];
const COUNTRY_COLORS = {
  SAU: "#2454a1",
  FRA: "#2454a1",
  TUN: "#2454a1",
  MAR: "#2454a1"
};

const COUNTRY_COORDS = {
  SAU: { latitude: 24.7136, longitude: 46.6753 }, // Riyadh
  FRA: { latitude: 48.8566, longitude: 2.3522 },  // Paris
  MAR: { latitude: 33.5731, longitude: -7.5898 }, // Casablanca
  TUN: { latitude: 36.8065, longitude: 10.1815 }, // Tunis
};

const translations = {
  en: {
    title: "4 Countries, 1 Vision",
    description: "Our company operates across four strategic countries, building connections that span continents and cultures:",
    countries: [
      { name: "Saudi Arabia" },
      { name: "France"},
      { name: "Morocco" },
      { name: "Tunisia"}
    ],
  },
  ar: {
    title: "أربع دول، رؤية واحدة",
    description: "تعمل شركتنا في أربع دول استراتيجية، وتبني روابط تمتد عبر القارات والثقافات:",
    countries: [
      { name: "المملكة العربية السعودية" },
      { name: "فرنسا" },
      { name: "المغرب" },
      { name: "تونس" }
    ],
  }
};

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const LocationsAlt = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const currentLang = translations[language];

  // For globe animation
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const globeInView = useInView(globeContainerRef, { once: true, margin: '-100px' });

  // For text animation
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (globeInView) {
      if (!chartRef.current) return;
      let root: am5.Root = am5.Root.new(chartRef.current);
      root.setThemes([am5themes_Animated.new(root)]);
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic(),
        homeGeoPoint: { latitude: 2, longitude: 2 },
        rotationY: -90 // Start from -90deg
      }));

      let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
      backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
      });

      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180)
      });

      let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
      }));

      // Highlight only the four countries in #2454a1 color
      polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
        const id = (target.dataItem?.dataContext as any)?.id;
        const name = (target.dataItem?.dataContext as any)?.name;
        
        // Check both ID and name for the countries
        if (HIGHLIGHTED.includes(id) || 
            name === "Saudi Arabia" || 
            name === "France" || 
            name === "Morocco" || 
            name === "Tunisia") {
          return am5.color("#1c4c94");
        }
        return am5.color("#d8dbde"); // Light gray for other countries
      });

      let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
      lineSeries.mapLines.template.setAll({
        stroke: root.interfaceColors.get("alternativeBackground"),
        strokeOpacity: 0.3
      });

      let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

      pointSeries.bullets.push(function() {
        let circle = am5.Circle.new(root, {
          radius: 7,
          tooltipText: "Location",
          cursorOverStyle: "pointer",
          tooltipY: 0,
          fill: am5.color("#e08d37"),
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 2
        });

        return am5.Bullet.new(root, {
          sprite: circle
        });
      });

      let saudi = addCity({ latitude: 24.7136, longitude: 46.6753 }, "Riyadh");
      let france = addCity({ latitude: 48.8566, longitude: 2.3522 }, "Paris");
      let morocco = addCity({ latitude: 33.5731, longitude: -7.5898 }, "Casablanca");
      let tunisia = addCity({ latitude: 36.8065, longitude: 10.1815 }, "Tunis");

      let lineDataItem = lineSeries.pushDataItem({
        pointsToConnect: [saudi, france, morocco, tunisia]
      });

      let planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

      let plane = am5.Graphics.new(root, {
        svgPath:
          "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
        scale: 0.06,
        centerY: am5.p50,
        centerX: am5.p50,
        fill: am5.color(0x000000)
      });

      planeSeries.bullets.push(function() {
        let container = am5.Container.new(root, {});
        container.children.push(plane);
        return am5.Bullet.new(root, { sprite: container });
      });

      let planeDataItem = planeSeries.pushDataItem({
        lineDataItem: lineDataItem,
        positionOnLine: 0,
        autoRotate: true
      });
      planeDataItem.dataContext = {};

      planeDataItem.animate({
        key: "positionOnLine",
        to: 1,
        duration: 10000,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.linear)
      });

      planeDataItem.on("positionOnLine", (value: number | undefined) => {
        if (typeof value === "number" && planeDataItem.dataContext) {
          if ((planeDataItem.dataContext as any).prevPosition < value) {
            plane.set("rotation", 0);
          }

          if ((planeDataItem.dataContext as any).prevPosition > value) {
            plane.set("rotation", -180);
          }
          (planeDataItem.dataContext as any).prevPosition = value;
        }
      });

      // Animate to final rotation when in view
      chart.animate({
        key: "rotationY",
        to: -20,
        duration: 1200,
        easing: am5.ease.out(am5.ease.cubic)
      });
      chart.set("rotationX", -10);

      function addCity(coords: { latitude: number; longitude: number }, title: string) {
        return pointSeries.pushDataItem({
          latitude: coords.latitude,
          longitude: coords.longitude
        });
      }

      chart.appear(1000, 100);
      return () => {
        root.dispose();
      };
    }
  }, [globeInView, language]);

  return (
    <section className={`w-full bg-white min-h-[80vh] flex items-center justify-center py-12 md:py-24 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 items-center h-auto md:h-[500px]`}>
        {/* Left: Globe */}
        <motion.div
          ref={globeContainerRef}
          initial={{ opacity: 0, x: -60 }}
          animate={globeInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`w-full flex items-center justify-center ${language === 'ar' ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}
        >
          <div className="w-full max-w-[600px] h-auto aspect-square">
            <div ref={chartRef} style={{ width: "100%", height: 500 }} />
          </div>
        </motion.div>
        {/* Right: Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className={`flex flex-col gap-6 justify-center ${language === 'ar' ? 'md:pr-8 order-1 md:order-1' : 'md:pl-8 order-1 md:order-2'}`}
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {currentLang.title}
          </h1>
          <p className={`text-lg text-gray-700 max-w-xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {currentLang.description}
          </p>
          <ul className={`text-lg text-gray-700 space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {currentLang.countries.map((country, index) => {
              const flags = ['🇸🇦', '🇫🇷', '🇲🇦', '🇹🇳'];
              return (
                <li key={index} className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className={`text-2xl ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>{flags[index]}</span>
                  <strong>{country.name}</strong>
                </li>
              );
            })}
          </ul>
          
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsAlt; 