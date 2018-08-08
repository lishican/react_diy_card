const fs = require("fs");
const path = require("path");
const qn = require("qn");
let v = process.argv[process.argv.length - 1] || "card" + new Date().valueOf();
const CONFIG = {
  version: v,
  accessKey: "-NI5bgnkkh",
  secretKey: "-uQmbh-DKLplmPrN",
  bucket: "heka",
  origin: "http://qn.kiis.cn",
  dist: "./build"
};
let Total = 0;
let havaUpload = 0;
let urls = [];
const client = qn.create({
  accessKey: CONFIG.accessKey,
  secretKey: CONFIG.secretKey,
  bucket: CONFIG.bucket,
  origin: CONFIG.origin,
  uploadURL: "http://up-z2.qiniup.com"
});
console.log("Version:" + v);
runApp(CONFIG.dist);
function upload(oriName, pathName) {
  client.uploadFile(pathName, { key: oriName }, function(err, result) {
    havaUpload += 1;
    urls.push(result.url);
    console.log("\x1B[32m", "havaUpload:" + havaUpload + " --> " + "" + Total);
    if (Total == havaUpload) {
      console.log("上传成功");
      // console.log(urls);
    }
  });
}
function runApp(pathn) {
  let pathfn = fs.readdirSync(path.resolve(__dirname, pathn));
  pathfn.forEach(v => {
    let pathName = pathn + "/" + v;
    let stat = fs.statSync(path.resolve(pathName));
    if (stat.isFile()) {
      Total += 1;
      let oriName = pathName.replace(CONFIG.dist, CONFIG.version);
      upload(oriName, pathName);
    } else {
      runApp(pathName);
    }
  });
}
