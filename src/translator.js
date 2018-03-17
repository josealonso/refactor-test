"use strict";

const Translate = require('@google-cloud/translate');

const translateserviceObject = {
  "content": content,
  "targetLang": targetLang,

};

let translateModule = new Translate({
  keyFilename: './src/translator.conf.json',
});

async function translate({content, targetLang}) {
  return translateModule.translate({content, targetLang});
}

async function doAfterTranslation(results, callback) {
  return callback(null, results[0])
}

async function internationalize(content, targetLang, err, callback) {
    try {
        const textTranslated = await translate({content, targetLang});
        const textInternationalization = await doAfterTranslation(textTranslated, callback);
        return textInternationalization;
    } 
    catch(err) {
        console.error('ERROR:', err);
    }
}

let internationalizationText = await internationalize(content, targetLang, err, callback);
calls.push(internationalizationText);

module.exports = internationalizationText;
