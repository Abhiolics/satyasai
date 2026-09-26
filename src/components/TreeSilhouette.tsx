import React from "react";

export default function TreeSilhouette({
  fill = "#1b3a2b",
}: {
  fill?: string;
}) {
  return (
    <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 sm:h-20 md:h-24 block"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Distant soft canopy */}
        <path
          d="M0,80 Q40,45 90,65 Q140,30 200,60 Q260,20 330,55 Q390,35 460,60 Q520,25 590,50 Q660,30 730,55 Q800,20 870,50 Q940,35 1010,60 Q1070,25 1140,55 Q1210,35 1280,60 Q1350,20 1440,65 L1440,100 L0,100 Z"
          fill={fill}
          fillOpacity="0.4"
        />

        {/* Layer 2: Detailed foreground forest silhouettes with organic tree crowns */}
        <path
          d="
            M0,100 
            L0,60 
            C15,58 25,45 35,45 C45,45 52,54 60,54 
            C70,40 85,38 95,45 C105,35 125,32 135,42 C145,30 165,28 175,40 
            C185,25 210,22 225,38 C235,32 250,30 260,38 
            C270,20 295,15 315,32 C325,25 340,28 350,36
            C360,18 385,14 405,30 C415,22 430,24 440,35 
            C450,15 480,10 500,28 C515,18 535,22 545,32
            C555,20 575,18 590,28 C605,12 630,8 650,25 
            C665,15 685,18 700,28 C715,10 745,6 770,24 
            C785,16 805,20 820,32 C835,14 860,10 880,26 
            C895,18 915,22 930,34 C945,12 975,8 1000,26 
            C1015,18 1035,22 1050,32 C1065,15 1090,12 1110,28 
            C1125,18 1145,22 1160,34 C1175,10 1205,8 1230,26 
            C1245,18 1265,20 1280,32 C1295,15 1320,12 1340,28 
            C1355,20 1375,22 1390,35 C1405,25 1425,28 1440,38
            L1440,100 Z
          "
          fill={fill}
        />

        {/* Canopy Highlights: Distinctive Tree Trunks & Conifers matching reference */}
        <g fill={fill}>
          {/* Conifer 1 */}
          <polygon points="210,40 215,20 220,40" />
          <polygon points="208,30 215,12 222,30" />
          {/* Broad Oak 1 */}
          <circle cx="480" cy="22" r="14" />
          <circle cx="468" cy="26" r="10" />
          <circle cx="492" cy="26" r="10" />
          {/* Centerpiece Pavilion / Canopy Arch like reference image */}
          <ellipse cx="720" cy="18" rx="22" ry="14" />
          <circle cx="705" cy="22" r="11" />
          <circle cx="735" cy="22" r="11" />
          {/* Conifer 2 */}
          <polygon points="910,42 915,18 920,42" />
          <polygon points="908,28 915,10 922,28" />
          {/* Tall Teak Tree 2 */}
          <circle cx="1120" cy="20" r="15" />
          <circle cx="1108" cy="24" r="11" />
          <circle cx="1132" cy="24" r="11" />
        </g>
      </svg>
    </div>
  );
}
