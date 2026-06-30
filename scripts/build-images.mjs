// Build all site imagery from source assets:
//  1. Render the beehive logo SVG into logo.webp + the full favicon set.
//  2. Resize/convert the Google-Maps project photos into the site's image slots.
//
// Run after `npm install` (needs sharp):  node scripts/build-images.mjs
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "google-maps-images");
const PUB = path.join(ROOT, "public");
const IMG = path.join(PUB, "Images");

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function photo(srcName, outRel, w, h) {
  const src = path.join(SRC, srcName);
  const out = path.join(IMG, outRel);
  await ensureDir(path.dirname(out));
  await sharp(src)
    .resize(w, h, { fit: "cover", position: "attention" })
    .webp({ quality: 82 })
    .toFile(out);
  console.log("photo  ->", outRel);
}

async function fromLogo(size, outAbs, format) {
  // Source logo: the client's beehive PNG in /google-maps-images/logo.png.
  const src = path.join(SRC, "logo.png");
  let pipe = sharp(src)
    .flatten({ background: "#ffffff" }) // collapse any transparency onto white
    .resize(size, size, { fit: "cover" });
  pipe = format === "png" ? pipe.png() : pipe.webp({ quality: 92 });
  await ensureDir(path.dirname(outAbs));
  await pipe.toFile(outAbs);
  console.log("logo   ->", path.relative(ROOT, outAbs));
}

// ---- Photo slot map (source photo -> destination, width, height) ----
const HERO = [["photo-11.jpg", "hero.webp", 1600, 1000]];
const ABOUT = [["photo-22.jpg", "about.webp", 1200, 900]];

const SERVICES = [
  ["photo-18.jpg", "services/plumbing.webp"],
  ["photo-12.jpg", "services/electrical.webp"],
  ["photo-10.jpg", "services/drywall.webp"],
  ["photo-13.jpg", "services/carpentry.webp"],
  ["photo-26.jpg", "services/doors.webp"],
  ["photo-03.jpg", "services/bathroom-remodel.webp"],
  ["photo-27.jpg", "services/honey-do.webp"],
];

const SPECIALTIES = [
  ["photo-18.jpg", "specialties/plumbing.webp"],
  ["photo-12.jpg", "specialties/electrical.webp"],
  ["photo-10.jpg", "specialties/drywall-repair.webp"],
  ["photo-13.jpg", "specialties/carpentry.webp"],
  ["photo-07.jpg", "specialties/ceiling-fan-installation.webp"],
  ["photo-26.jpg", "specialties/door-installation.webp"],
  ["photo-03.jpg", "specialties/bathroom-remodeling.webp"],
  ["photo-15.jpg", "specialties/kitchen-remodeling.webp"],
  ["photo-14.jpg", "specialties/painting.webp"],
  ["photo-11.jpg", "specialties/patio-covers.webp"],
  ["photo-27.jpg", "specialties/handyman.webp"],
];

const GALLERY = [
  "photo-03.jpg", "photo-26.jpg", "photo-27.jpg", "photo-22.jpg",
  "photo-07.jpg", "photo-11.jpg", "photo-20.jpg", "photo-08.jpg",
  "photo-21.jpg", "photo-24.jpg", "photo-09.jpg", "photo-02.jpg",
].map((src, i) => [src, `gallery/project-${String(i + 1).padStart(2, "0")}.webp`]);

async function main() {
  await ensureDir(IMG);

  // Logo + favicons from the SVG
  await fromLogo(512, path.join(IMG, "logo.webp"), "webp");
  await fromLogo(512, path.join(PUB, "favicon-512.webp"), "webp");
  await fromLogo(192, path.join(PUB, "favicon-192.webp"), "webp");
  await fromLogo(32, path.join(PUB, "favicon-32.png"), "png");
  await fromLogo(180, path.join(PUB, "apple-touch-icon.png"), "png");
  await fromLogo(512, path.join(ROOT, "src", "app", "icon.png"), "png");
  await fromLogo(48, path.join(PUB, "favicon.ico"), "png"); // PNG bytes; browsers accept it

  // Photos
  for (const [s, o, w, h] of HERO) await photo(s, o, w, h);
  for (const [s, o, w, h] of ABOUT) await photo(s, o, w, h);
  for (const [s, o] of SERVICES) await photo(s, o, 1200, 800);
  for (const [s, o] of SPECIALTIES) await photo(s, o, 1200, 800);
  for (const [s, o] of GALLERY) await photo(s, o, 1000, 750);

  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
