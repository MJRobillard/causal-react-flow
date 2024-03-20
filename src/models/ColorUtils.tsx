export function getPercentageBlack(percentage: number): string {
  // Ensure percentage is within the range of 0 to 100
  percentage = Math.min(100, Math.max(0, percentage));

  // Calculate the RGB values based on the percentage
  const blackness = (100 - percentage) / 100;
  const r = Math.round(255 * blackness);
  const g = Math.round(255 * blackness);
  const b = Math.round(255 * blackness);

  // Convert RGB values to hexadecimal representation
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

  // Return the color in hexadecimal format
  return `#${hex}`;
}

export function getColorAtPercentage(percentage: number) {
  // Ensure percentage is within 0 to 100 range
  percentage = Math.max(0, Math.min(100, percentage));

  // Convert percentage to a value between 0 and 1
  const normalizedPercentage = percentage / 100;

  // Calculate the hue value between 240 (blue) and 0 (red)
  const hue = (1 - normalizedPercentage) * 240;

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hueToRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  const [r, g, b] = hslToRgb(hue / 360, 1, 0.5); // Set saturation and lightness to 100% and 50% respectively

  // Convert RGB to hexadecimal color code
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
