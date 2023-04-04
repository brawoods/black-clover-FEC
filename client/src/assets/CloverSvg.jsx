import React from 'react';

const svgContainerStyle = {
  display: 'inline-block',
  width: '3.25rem'
}

const svgStyle = {
  fillRule: 'nonzero',
  clipRule: 'evenodd',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  height: '100%',
};

function CloverSvg({ color }) {
  return (
    <div style={svgContainerStyle}>
      <svg height="100%" strokeMiterlimit="10" style={svgStyle} version="1.1" viewBox="0 0 376.536 474.354" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d='M188.714 147.943C178.714 110.776 172.554 72.3568 158.714 36.4428C155.654 28.502 146.887 23.7467 139.339 19.8178C108.627 3.83339 76.4732 25.114 65.2762 54.6616C62.3314 62.4325 67.0087 73.0184 61.5887 79.3178C55.6082 86.2686 43.9394 84.6748 35.8074 88.9116C6.49353 104.184-0.46341 139.755 16.2762 166.974C19.7901 172.688 25.9343 176.786 32.1199 179.38C65.078 193.204 103.068 188.348 138.714 190.943C110.13 195.651 81.4032 199.557 52.9637 205.068C42.3631 207.122 28.9507 209.86 21.4637 219.068C-1.09381 246.811 5.99308 288.732 40.9637 303.568C49.2847 307.098 60.462 305.54 66.7137 312.068C74.0534 319.732 72.9134 332.479 77.7137 341.943C85.6637 357.617 105.078 369.545 122.682 369.13C131.304 368.927 140.556 368.91 148.214 364.943C155.775 361.026 163.165 354.671 166.057 346.662C174.345 323.712 175.828 298.849 180.714 274.943C183.794 339.55 185.555 404.268 184.714 468.943C189.224 468.149 194.63 469.373 198.245 466.562C201.52 464.014 202.683 459.092 202.714 454.943C203.174 393.27 200.714 331.609 199.714 269.943C209.88 294.109 216.937 319.835 230.214 342.443C234.025 348.932 242.151 352.213 249.339 354.443C263.641 358.88 281.734 356.75 293.776 347.849C307.12 337.987 312.323 329.532 316.714 313.474C318.94 305.33 315.81 295.404 320.589 288.443C325.747 280.929 336.454 279.389 343.807 274.005C355.728 265.278 370.28 245.544 368.589 229.599C367.495 219.289 364.673 208.757 359.214 199.943C351.982 188.267 335.944 182.122 322.214 181.818C299.716 181.32 277.214 182.568 254.714 182.943C276.568 176.412 298.767 170.94 320.276 163.349C330.017 159.911 339.883 156.049 348.214 149.943C377.498 128.478 361.685 82.0381 333.87 68.1616C322.709 62.5935 307.795 65.5811 297.839 58.0678C289.998 52.1512 290.639 39.631 285.214 31.4428C270.645 9.45413 243.591 4.29094 219.714 11.4428C214.579 12.9807 209.707 15.9847 206.026 19.8803C200.959 25.2426 195.102 31.2229 194.114 38.5341C189.222 74.7189 190.514 111.473 188.714 147.943Z' fill={color} opacity='1' stroke='none' width='100%' height='100%' />
      </svg>
    </div>
  )
};

export default CloverSvg;