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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaManagement = exports.CloudinaryService = void 0;
var cloudinary_1 = require("cloudinary");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var CloudinaryService = /** @class */ (function () {
    function CloudinaryService(config, options, uploadResourceTypeHandler) {
        this.config = config;
        this.options = options;
        this.uploadResourceTypeHandler = uploadResourceTypeHandler;
    }
    CloudinaryService.prototype.upload = function (filename, buffer, payload, collectionConfig) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var _cfg, _f, _g, staticDir, _h, staticURL, _j, disableLocalStorage, staticPath, tmpFileName, _opts, _resourceType, uploadPromise;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _cfg = __assign(__assign({}, this.config), { api_key: ((_a = this.config) === null || _a === void 0 ? void 0 : _a.api_key) || process.env.CLOUDINARY_API_KEY, api_secret: ((_b = this.config) === null || _b === void 0 ? void 0 : _b.api_secret) || process.env.CLOUDINARY_API_SECRET, cloud_name: ((_c = this.config) === null || _c === void 0 ? void 0 : _c.cloud_name) || process.env.CLOUDINARY_CLOUD_NAME });
                        cloudinary_1.v2.config(_cfg);
                        _f = (collectionConfig === null || collectionConfig === void 0 ? void 0 : collectionConfig.upload) || {}, _g = _f.staticDir, staticDir = _g === void 0 ? "__tmp_media__" : _g, _h = _f.staticURL, staticURL = _h === void 0 ? "/media" : _h, _j = _f.disableLocalStorage, disableLocalStorage = _j === void 0 ? false : _j;
                        staticPath = path_1.default.resolve(payload.config.paths.configDir, staticDir);
                        tmpFileName = path_1.default.join(staticPath, filename);
                        if (!disableLocalStorage) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_1.default.promises.mkdir(staticPath, { recursive: true })];
                    case 1:
                        _k.sent();
                        tmpFileName = path_1.default.join(staticPath, "".concat(new Date().getTime(), "_").concat(filename));
                        return [4 /*yield*/, fs_1.default.promises.writeFile(tmpFileName, buffer)];
                    case 2:
                        _k.sent();
                        _k.label = 3;
                    case 3:
                        _opts = __assign(__assign({}, this.options), { folder: ((_d = this.options) === null || _d === void 0 ? void 0 : _d.folder) || staticURL });
                        _resourceType = (_e = this.options) === null || _e === void 0 ? void 0 : _e.resource_type;
                        if (!_resourceType) {
                            _resourceType = this.uploadResourceTypeHandler
                                ? this.uploadResourceTypeHandler(_cfg, _opts, tmpFileName)
                                : "auto";
                        }
                        uploadPromise = cloudinary_1.v2.uploader.upload(tmpFileName, __assign(__assign({}, _opts), { resource_type: _resourceType }));
                        if (!disableLocalStorage) return [3 /*break*/, 5];
                        return [4 /*yield*/, fs_1.default.promises.rm(tmpFileName)];
                    case 4:
                        _k.sent();
                        _k.label = 5;
                    case 5: return [2 /*return*/, uploadPromise];
                }
            });
        });
    };
    CloudinaryService.prototype.delete = function (public_id, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, cloudinary_1.v2.uploader.destroy(public_id, options)];
            });
        });
    };
    return CloudinaryService;
}());
exports.CloudinaryService = CloudinaryService;
function mediaManagement(config, uploadApiOptions, uploadResourceTypeHandler) {
    var service = new CloudinaryService(config, uploadApiOptions, uploadResourceTypeHandler);
    return function (req, _, next) {
        req.cloudinaryService = service;
        next();
    };
}
exports.mediaManagement = mediaManagement;
