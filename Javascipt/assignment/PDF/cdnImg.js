/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/pdf-image@2.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var Promise = require("es6-promise").Promise, path = require("path"), fs = require("fs"), util = require("util"), exec = require("child_process").exec; function PDFImage(t, e) { e || (e = {}), this.pdfFilePath = t, this.setPdfFileBaseName(e.pdfFileBaseName), this.setConvertOptions(e.convertOptions), this.setConvertExtension(e.convertExtension), this.useGM = e.graphicsMagick || !1, this.combinedImage = e.combinedImage || !1, this.outputDirectory = e.outputDirectory || path.dirname(t) } PDFImage.prototype = { constructGetInfoCommand: function () { return util.format('pdfinfo "%s"', this.pdfFilePath) }, parseGetInfoCommandOutput: function (t) { var e = {}; return t.split("\n").forEach((function (t) { t.match(/^(.*?):[ \t]*(.*)$/) && (e[RegExp.$1] = RegExp.$2) })), e }, getInfo: function () { var t = this, e = this.constructGetInfoCommand(); return new Promise((function (n, o) { exec(e, (function (e, i, r) { return e ? o({ message: "Failed to get PDF'S information", error: e, stdout: i, stderr: r }) : n(t.parseGetInfoCommandOutput(i)) })) })) }, numberOfPages: function () { return this.getInfo().then((function (t) { return t.Pages })) }, getOutputImagePathForPage: function (t) { return path.join(this.outputDirectory, this.pdfFileBaseName + "-" + t + "." + this.convertExtension) }, getOutputImagePathForFile: function () { return path.join(this.outputDirectory, this.pdfFileBaseName + "." + this.convertExtension) }, setConvertOptions: function (t) { this.convertOptions = t || {} }, setPdfFileBaseName: function (t) { this.pdfFileBaseName = t || path.basename(this.pdfFilePath, ".pdf") }, setConvertExtension: function (t) { this.convertExtension = t || "png" }, constructConvertCommandForPage: function (t) { var e = this.pdfFilePath, n = this.getOutputImagePathForPage(t), o = this.constructConvertOptions(); return util.format('%s %s"%s[%d]" "%s"', this.useGM ? "gm convert" : "convert", o ? o + " " : "", e, t, n) }, constructCombineCommandForFile: function (t) { return util.format('%s -append %s "%s"', this.useGM ? "gm convert" : "convert", t.join(" "), this.getOutputImagePathForFile()) }, constructConvertOptions: function () { return Object.keys(this.convertOptions).sort().map((function (t) { return null !== this.convertOptions[t] ? t + " " + this.convertOptions[t] : t }), this).join(" ") }, combineImages: function (t) { var e = this, n = e.constructCombineCommandForFile(t); return new Promise((function (o, i) { exec(n, (function (n, r, s) { return n ? i({ message: "Failed to combine images", error: n, stdout: r, stderr: s }) : (exec("rm " + t.join(" ")), o(e.getOutputImagePathForFile())) })) })) }, convertFile: function () { var t = this; return new Promise((function (e, n) { t.numberOfPages().then((function (o) { var i = new Promise((function (e, n) { for (var i = [], r = 0; r < o; r++)t.convertPage(r).then((function (t) { i.push(t), i.length === parseInt(o) && (i.sort(), e(i)) })).catch((function (t) { n(t) })) })); i.then((function (n) { t.combinedImage ? t.combineImages(n).then((function (t) { e(t) })) : e(n) })).catch((function (t) { n(t) })) })) })) }, convertPage: function (t) { var e = this.pdfFilePath, n = this.getOutputImagePathForPage(t), o = this.constructConvertCommandForPage(t); return new Promise((function (t, i) { function r() { exec(o, (function (e, o, r) { return e ? i({ message: "Failed to convert page to image", error: e, stdout: o, stderr: r }) : t(n) })) } fs.stat(n, (function (o, s) { var a = o && "ENOENT" === o.code; if (!a && o) return i({ message: "Failed to stat image file", error: o }); a ? r() : fs.stat(e, (function (e, o) { return e ? i({ message: "Failed to stat PDF file", error: e }) : s.mtime < o.mtime ? void r() : t(n) })) })) })) } }, exports.PDFImage = PDFImage;
//# sourceMappingURL=/sm/2a1f4a343d29f37d89c237538280d8649670186dade70bb7b0894a264fc4ee1e.map