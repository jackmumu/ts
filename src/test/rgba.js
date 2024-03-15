"use strict";
// function limitRange(v: number, min: number, max: number): number {
//   return Math.min(max, Math.max(min, v));
// }
// function isNumber(v: number): v is number {
//   return typeof v == "number" && !Number.isNaN(v);
// }
// //https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
// class RGBColor {
//   public readonly R: number; /* 0-255 */
//   public readonly G: number; /* 0-255 */
//   public readonly B: number; /* 0-255 */
//   public readonly A: number; /* 0-255 */
//   constructor(r: number, g: number, b: number, a: number = 255) {
//     this.R = limitRange(r, 0, 255);
//     this.G = limitRange(g, 0, 255);
//     this.B = limitRange(b, 0, 255);
//     this.A = limitRange(a, 0, 255);
//   }
//   public get red(): number {
//     return this.R;
//   }
//   public get green(): number {
//     return this.G;
//   }
//   public get blue(): number {
//     return this.B;
//   }
//   public get alpha(): number {
//     return this.A;
//   }
//   public equal(c: RGBColor): boolean {
//     return this.R == c.R && this.G == c.G && this.B == c.B && this.A == c.A;
//   }
//   public toCSS(type: "rgba" | "rgb" | "hex" = "rgba") {
//     switch (type) {
//       case "rgba":
//         return `rgba(${this.R},${this.G},${this.B},${
//           Math.round((this.A * 100) / 255) / 100
//         })`;
//       case "rgb":
//         return `rgb(${this.R},${this.G},${this.B})`;
//       case "hex":
//         const rgb = `#${this.R.toString(16).padStart(2, "0")}${this.G.toString(
//           16
//         ).padStart(2, "0")}${this.B.toString(16).padStart(2, "0")}`;
//         if (this.A == 255) {
//           return rgb;
//         }
//         return rgb + this.A.toString(16).padStart(2, "0");
//     }
//   }
//   public toARGB(): number {
//     return (this.A << 24) | (this.R << 16) | (this.G << 8) | this.B;
//   }
//   public toRGBA(): number {
//     return (this.R << 24) | (this.G << 16) | (this.B << 8) | this.A;
//   }
//   public static readonly BLACK = new RGBColor(0, 0, 0);
//   public static readonly WHITE = new RGBColor(255, 255, 255);
//   public static readonly TRANSPARENT = new RGBColor(0, 0, 0, 0);
//   public static random(range = [0, 255], withAlpha = false): RGBColor {
//     const rand = () =>
//       Math.floor(Math.random() * (range[1] + 1 - range[0])) + range[0];
//     return new RGBColor(rand(), rand(), rand(), withAlpha ? rand() : undefined);
//   }
//   public static fromARGB(v: number): RGBColor {
//     return new RGBColor(
//       (v >> 16) & 0xff,
//       (v >> 8) & 0xff,
//       v & 0xff,
//       (v >> 24) & 0xff
//     );
//   }
//   public static fromRGBA(v: number): RGBColor {
//     return new RGBColor(
//       (v >> 24) & 0xff,
//       (v >> 16) & 0xff,
//       (v >> 8) & 0xff,
//       v & 0xff
//     );
//   }
//   private static parseHex(v: string): RGBColor | null {
//     //#RGB[A] or#RRGGBB[AA]
//     const rgba = v.substring(1);
//     const array =
//       rgba.length <= 4
//         ? rgba.match(/.{1}/g) //#RGB[A]
//         : rgba.match(/.{2}/g); //#RRGGBB[AA]
//     if (array) {
//       const [r, g, b, a] = array
//         .map((i) => i.trim())
//         .map((i) => Number.parseInt(i.length == 1 ? i + i : i, 16));
//       if (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b)) {
//         return new RGBColor(r, g, b, Number.isInteger(a) ? a : 255);
//       }
//     }
//     return null;
//   }
//   private static parseRGB(v: string): RGBColor | null {
//     //rgb[a](R, G, B[, A]) or rgb[a](R G B[ / A])
//     const rgb = v.substring(v.indexOf("(") + 1, v.indexOf(")"));
//     const [r, g, b, a] = rgb
//       .split(/[,\s\/]+/)
//       .map((i) => i.trim())
//       .map((i) => {
//         if (i.endsWith("%")) {
//           return -1 * Math.round((Number.parseFloat(i) * 255) / 100);
//         } else {
//           return Number.parseFloat(i);
//         }
//       });
//     if (isNumber(r) && isNumber(g) && isNumber(b)) {
//       let alpha = 255;
//       if (isNumber(a)) {
//         if (a < 0) {
//           alpha = Math.abs(a);
//         } else {
//           alpha = Math.round(a * 255);
//         }
//       }
//       return new RGBColor(Math.abs(r), Math.abs(g), Math.abs(b), alpha);
//     }
//     return null;
//   }
//   public static parseCSS(v: string): RGBColor | null {
//     if (v && v.length) {
//       const lv = v.trim().toLowerCase();
//       if (lv == "transparent") {
//         return RGBColor.TRANSPARENT;
//       } else if (lv == "none") {
//         return null;
//       }
//       if (lv.startsWith("#")) {
//         return RGBColor.parseHex(lv);
//       } else if (lv.startsWith("rgb(") || lv.startsWith("rgba(")) {
//         return RGBColor.parseRGB(lv);
//       }
//     }
//     return null;
//   }
// }
// let a = "rgb(255, 255, 255)";
// let b = "rgba(255, 255, 255, 0.5)";
// let arr2 = a.match(/\d+(\.\d+)?/g) ?? [255, 255, 255];
// let arr2Number = arr2.map(Number)
// let o = new RGBColor(...arr2Number);
