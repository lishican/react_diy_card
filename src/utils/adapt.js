import device from 'current-device'
export default function adapt(designWidth, rem2px) {
  let d = window.document.createElement("div");
  d.style.width = "1rem";
  d.style.display = "none";
  let head = window.document.getElementsByTagName("head")[0];
  head.appendChild(d);
  let defaultFontSize = parseFloat(
    window.getComputedStyle(d, null).getPropertyValue("width")
  );

  console.log()
  let winw = device.mobile()?window.innerWidth:450
  document.documentElement.style.fontSize =
    winw / designWidth * rem2px / defaultFontSize * 100 + "%";
  let st = document.createElement("style");
  let portrait =
    "@media screen and (min-width: " +
    winw +
    "px) {html{font-size:" +
    winw / (designWidth / rem2px) / defaultFontSize * 100 +
    "%;}}";
  let landscape =
    "@media screen and (min-width: " +
    window.innerHeight +
    "px) {html{font-size:" +
    window.innerHeight / (designWidth / rem2px) / defaultFontSize * 100 +
    "%;}}";
  st.innerHTML = portrait + landscape;
  head.appendChild(st);
  return defaultFontSize;
}
