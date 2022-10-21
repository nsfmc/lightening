const { urlToRequest } = require("loader-utils");
const lightning = require("lightningcss");
const { Buffer } = require("buffer");

function lightningLoader(source, _map, meta) {
  const filename = urlToRequest(this.resourcePath);
  let {
    code,
    map,
    exports: cssExports,
  } = lightning.transform({
    code: Buffer.from(source),
    filename,
    minify: false,
    sourceMap: true,
    cssModules: true,
  });

  const dataToClassName = (data) => `.${data.name}`;
  const flattened = Object.fromEntries(
    Object.entries(cssExports).map(([local, data]) => {
      if (data.composes?.length === 0) {
        return [local, dataToClassName(data)];
      } else {
        const composedClasses = data.composes.map(dataToClassName).join(" ");
        return [local, `${composedClasses} ${dataToClassName(data)}`];
      }
    })
  );

  console.log(flattened);

  output = `module.exports = ${JSON.stringify(flattened)}`;

  this.callback(null, output, map, meta);
  return;
}
// module.exports.raw = true;
module.exports = lightningLoader;
