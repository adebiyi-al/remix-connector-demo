const { join } = require('path');
const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

module.exports = async function prod(port) {
  process.env.PORT = port.toString();
  const serverFilePath = join(process.cwd(), 'build', 'index.js');

  // https://remix.run/docs/en/v1/other-api/adapter#createrequesthandler
  const app = express();

  app.all(
    '*',
    createRequestHandler({
      build: require(serverFilePath),
      getLoadContext(req, res) {
        return {};
      },
    })
  );

  return new Promise((resolve, reject) => {
    try {
      app.listen(port, resolve);
    } catch (e) {
      reject(e);
    }
  });
};

// function prod(port) {
// 	let getNearestUnboundPort;

// 	// Assing a value to getNearestUnboundPort
// 	try {
// 		getNearestUnboundPort = require('@edgio/express/portUtils').getNearestUnboundPort;
// 	} catch (e) {
// 		console.warn(
// 			"Warning: Couldn't import @edgio/express/portUtils. The used port can't be checked."
// 			)
// 			getNearestUnboundPort = async (port, _) => port
// 		}

// 		return new Promise((resolve, reject) => {
// 			try {
// 				process.env.PORT = port.toString()
// 				let app = require('../app')

// 			if (app.default) {
// 				app = app.default
// 			}

// 			if (app && app.listen) {
// 				getNearestUnboundPort(port).then((port) => {
// 					if (port === null) {
// 						console.error(`Error: Couldn't find any unsed port`)
// 						reject()
// 					}
// 					app.listen(port, resolve)
// 				})
// 			} else {
// 				resolve()
// 			}
// 		} catch (e) {
// 			reject(e)
// 		}
// 	})
// }

// module.exports = prod;
