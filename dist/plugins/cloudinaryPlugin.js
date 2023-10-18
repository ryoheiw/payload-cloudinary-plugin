"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterReadHook = exports.afterDeleteHook = exports.beforeChangeHook = exports.mapRequiredFields = exports.getPartialField = exports.DEFAULT_REQUIRED_FIELDS = exports.GROUP_NAME = void 0;
var errors_1 = require("payload/errors");
exports.GROUP_NAME = "cloudinary";
exports.DEFAULT_REQUIRED_FIELDS = [
    { name: "public_id", label: "Public ID" },
    { name: "original_filename", label: "Original filename" },
    { name: "format", label: "Format" },
    { name: "secure_url", label: "URL" },
    { name: "resource_type", label: "Resource Type" },
];
var setCloudinaryField = function (inputField) {
    var numberField = ["height", "width", "size"];
    var booleanField = ["isPrivateFile"];
    var field = (0, exports.getPartialField)(inputField);
    var name = field.name;
    if (numberField.includes(name)) {
        field.type = "number";
    }
    else if (booleanField.includes(name)) {
        field.type = "checkbox";
    }
    else {
        field.type = "text";
    }
    return field;
};
var getPartialField = function (field) {
    return typeof field === "string"
        ? {
            name: field,
        }
        : field;
};
exports.getPartialField = getPartialField;
var mapRequiredFields = function (additionalFields) {
    var merge = (additionalFields || []).concat(exports.DEFAULT_REQUIRED_FIELDS);
    return merge
        .filter(function (item, idx, arr) {
        return arr.findIndex(function (itemToFind) {
            var partialItem = (0, exports.getPartialField)(item);
            var partialItemToFind = (0, exports.getPartialField)(itemToFind);
            return partialItem.name === partialItemToFind.name;
        }) === idx;
    })
        .map(function (name) { return setCloudinaryField(name); });
};
exports.mapRequiredFields = mapRequiredFields;
var beforeChangeHook = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadResponse, e_1;
    var _a;
    var _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                file = (_b = args.req.files) === null || _b === void 0 ? void 0 : _b.file;
                if (!(file && ((_c = args.data) === null || _c === void 0 ? void 0 : _c.filename))) {
                    return [2 /*return*/];
                }
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4 /*yield*/, args.req.cloudinaryService.upload(args.data.filename, file.data, args.req.payload, (_d = args.req.collection) === null || _d === void 0 ? void 0 : _d.config)];
            case 2:
                uploadResponse = _e.sent();
                return [2 /*return*/, __assign(__assign({}, args.data), (_a = {}, _a[exports.GROUP_NAME] = uploadResponse, _a))];
            case 3:
                e_1 = _e.sent();
                throw new errors_1.APIError("Cloudinary: ".concat(JSON.stringify(e_1)));
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.beforeChangeHook = beforeChangeHook;
var afterDeleteHook = function (_a) {
    var req = _a.req, doc = _a.doc;
    return __awaiter(void 0, void 0, void 0, function () {
        var apiResponse, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!doc[exports.GROUP_NAME]) {
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    apiResponse = doc[exports.GROUP_NAME];
                    return [4 /*yield*/, req.cloudinaryService.delete(apiResponse.public_id, {
                            resource_type: apiResponse.resource_type,
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    throw new errors_1.APIError("Cloudinary: ".concat(JSON.stringify(e_2)));
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.afterDeleteHook = afterDeleteHook;
var afterReadHook = function (_a) {
    var doc = _a.doc;
    var newDoc = __assign(__assign({}, doc), { original_doc: {
            url: doc.url,
            filename: doc.filename,
        }, url: doc.cloudinary.secure_url, filename: doc.cloudinary.public_id });
    return newDoc;
};
exports.afterReadHook = afterReadHook;
var cloudinaryPlugin = function (pluginConfig) {
    return (function (incomingConfig) {
        var config = __assign(__assign({}, incomingConfig), { collections: (incomingConfig.collections || []).map(function (collection) {
                var _a, _b, _c;
                if (!collection.upload ||
                    (typeof collection.upload !== "boolean" &&
                        !collection.upload.disableLocalStorage)) {
                    return collection;
                }
                return __assign(__assign({}, collection), { hooks: __assign(__assign({}, collection.hooks), { beforeChange: __spreadArray(__spreadArray([], (((_a = collection.hooks) === null || _a === void 0 ? void 0 : _a.beforeChange) || []), true), [
                            exports.beforeChangeHook,
                        ], false), afterDelete: __spreadArray(__spreadArray([], (((_b = collection.hooks) === null || _b === void 0 ? void 0 : _b.afterDelete) || []), true), [
                            exports.afterDeleteHook,
                        ], false), afterRead: __spreadArray(__spreadArray([], (((_c = collection.hooks) === null || _c === void 0 ? void 0 : _c.afterRead) || []), true), [exports.afterReadHook], false) }), fields: __spreadArray(__spreadArray([], collection.fields, true), [
                        {
                            name: exports.GROUP_NAME,
                            type: "group",
                            fields: __spreadArray([], (0, exports.mapRequiredFields)(pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.cloudinaryFields), true),
                            admin: { readOnly: true },
                        },
                    ], false), upload: __assign(__assign({}, collection.upload), { adminThumbnail: function (_a) {
                            var _b;
                            var doc = _a.doc;
                            return (_b = doc[exports.GROUP_NAME]) === null || _b === void 0 ? void 0 : _b.secure_url;
                        } }) });
            }) });
        return config;
    });
};
exports.default = cloudinaryPlugin;
