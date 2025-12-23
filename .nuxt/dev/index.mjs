import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, useSession, setCookie, removeResponseHeader, getQuery as getQuery$1, readBody, handleCors, getRequestIP, readMultipartFormData, getRouterParam, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getResponseStatusText } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import crypto$1 from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import wsAdapter from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/crossws/dist/adapters/node.mjs';
import { escapeHtml } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47redis from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unstorage/drivers/redis.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu, defu as defu$1 } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/source-map/source-map.js';
import { createPathIndexLanguageParser, parseAcceptLanguage } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/@intlify/utils/dist/index.mjs';
import { parse } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/cookie-es/dist/index.mjs';
import { createRouterMatcher } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1, isAbsolute } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unhead/dist/server.mjs';
import process$1 from 'node:process';
import { renderToString } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/unhead/dist/utils.mjs';
import { FilterXSS } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/xss/lib/index.js';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///home/meebuzo/github/Meeovi-Starter-Template/node_modules/ipx/dist/index.mjs';

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const serverAssets = [{"baseName":"server","dir":"/home/meebuzo/github/Meeovi-Starter-Template/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$2 = createStorage({});

storage$2.mount('/assets', assets$1);

storage$2.mount('redis', unstorage_47drivers_47redis({"driver":"redis","port":6379,"host":"","password":""}));
storage$2.mount('#rate-limiter-storage', unstorage_47drivers_47lru_45cache({"driver":"lruCache"}));
storage$2.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/meebuzo/github/Meeovi-Starter-Template","watchOptions":{"ignored":[null]}}));
storage$2.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/meebuzo/github/Meeovi-Starter-Template/server","watchOptions":{"ignored":[null]}}));
storage$2.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/meebuzo/github/Meeovi-Starter-Template/.nuxt"}));
storage$2.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/meebuzo/github/Meeovi-Starter-Template/.nuxt/cache"}));
storage$2.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/home/meebuzo/github/Meeovi-Starter-Template/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$2, base) : storage$2;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "titleSuffix": "",
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/**": {
        "headers": {
          "Referrer-Policy": "no-referrer",
          "Strict-Transport-Security": "max-age=0; includeSubDomains",
          "X-Content-Type-Options": "nosniff",
          "X-Download-Options": "noopen",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Permitted-Cross-Domain-Policies": "none",
          "X-XSS-Protection": "0"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "directus": {
      "url": "https://cms.meeovicms.com",
      "nuxtBaseUrl": "http://localhost:3000",
      "auth": {
        "email": "",
        "password": "",
        "token": "",
        "enabled": true,
        "enableGlobalAuthMiddleware": false,
        "userFields": [
          "*"
        ],
        "redirect": {
          "login": "/auth/login",
          "logout": "/",
          "home": "/",
          "resetPassword": "/auth/reset-password",
          "callback": "/auth/callback"
        }
      }
    },
    "indexName": "xxxxx",
    "meilisearch": {
      "host": "http://localhost:7700/",
      "searchApiKey": "xxxxxxxx",
      "options": {
        "primaryKey": "id",
        "keepZeroFacets": false,
        "finitePagination": false
      }
    },
    "commerceUrl": "https://meeovi.com",
    "commerceGraphql": "https://meeovi.com/graphql",
    "commerceApiToken": "",
    "gtagId": "UA-",
    "stripe": {
      "publishableKey": ""
    },
    "auth": {
      "loadStrategy": "server-first"
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en-GB",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en-GB",
          "language": "en-GB"
        },
        {
          "code": "pl-PL",
          "language": "pl-PL"
        },
        {
          "code": "testde",
          "language": "de-DE",
          "localeId": "c19b753b5f2c4bea8ad15e00027802d4"
        }
      ],
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true
      },
      "domainLocales": {
        "en-GB": {
          "domain": ""
        },
        "pl-PL": {
          "domain": ""
        },
        "testde": {
          "domain": ""
        }
      }
    }
  },
  "turnstile": {
    "secretKey": ""
  },
  "stripe": {
    "secretKey": ""
  },
  "private": {
    "basicAuth": false
  },
  "security": {
    "strict": false,
    "headers": {
      "crossOriginResourcePolicy": "same-origin",
      "crossOriginOpenerPolicy": false,
      "crossOriginEmbedderPolicy": false,
      "contentSecurityPolicy": false,
      "originAgentCluster": "?1",
      "referrerPolicy": "no-referrer",
      "strictTransportSecurity": {
        "maxAge": 0,
        "includeSubdomains": true
      },
      "xContentTypeOptions": "nosniff",
      "xDNSPrefetchControl": "off",
      "xDownloadOptions": "noopen",
      "xFrameOptions": "SAMEORIGIN",
      "xPermittedCrossDomainPolicies": "none",
      "xXSSProtection": "0",
      "permissionsPolicy": false
    },
    "requestSizeLimiter": {
      "maxRequestSizeInBytes": 2000000,
      "maxUploadFileRequestInBytes": 8000000,
      "throwError": true
    },
    "rateLimiter": {
      "tokensPerInterval": 150,
      "interval": 300000,
      "headers": false,
      "driver": {
        "name": "lruCache"
      },
      "whiteList": "",
      "ipHeader": "",
      "throwError": true
    },
    "xssValidator": {
      "methods": [
        "GET",
        "POST"
      ],
      "throwError": true
    },
    "corsHandler": {
      "origin": "http://localhost:3000",
      "methods": [
        "GET",
        "HEAD",
        "PUT",
        "PATCH",
        "POST",
        "DELETE"
      ],
      "preflight": {
        "statusCode": 204
      }
    },
    "allowedMethodsRestricter": {
      "methods": "*",
      "throwError": true
    },
    "hidePoweredBy": true,
    "enabled": true,
    "csrf": false,
    "nonce": true,
    "removeLoggers": true,
    "ssg": {
      "meta": true,
      "hashScripts": true,
      "hashStyles": false,
      "nitroHeaders": true,
      "exportToPresets": true
    },
    "sri": true
  },
  "session": {
    "name": "nuxt-session",
    "password": "",
    "cookie": {
      "sameSite": "lax"
    }
  },
  "hash": {
    "scrypt": {}
  },
  "webauthn": {
    "register": {},
    "authenticate": {}
  },
  "oauth": {
    "gitea": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": ""
    },
    "github": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "gitlab": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "https://gitlab.com"
    },
    "spotify": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "google": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "twitch": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "auth0": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "audience": "",
      "redirectURL": ""
    },
    "workos": {
      "clientId": "",
      "clientSecret": "",
      "connectionId": "",
      "screenHint": "",
      "redirectURL": ""
    },
    "microsoft": {
      "clientId": "",
      "clientSecret": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "azureb2c": {
      "clientId": "",
      "policy": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "discord": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "battledotnet": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "bluesky": {
      "clientMetadataFilename": "",
      "clientName": "",
      "clientUri": "",
      "logoUri": "",
      "policyUri": "",
      "tosUri": "",
      "scope": [
        "atproto"
      ],
      "grantTypes": [
        "authorization_code"
      ],
      "responseTypes": [
        "code"
      ],
      "applicationType": "web",
      "redirectUris": "",
      "dpopBoundAccessTokens": true,
      "tokenEndpointAuthMethod": "none"
    },
    "keycloak": {
      "clientId": "",
      "clientSecret": "",
      "serverUrl": "",
      "serverUrlInternal": "",
      "realm": "",
      "redirectURL": ""
    },
    "linear": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "linkedin": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "cognito": {
      "clientId": "",
      "clientSecret": "",
      "region": "",
      "userPoolId": "",
      "redirectURL": ""
    },
    "facebook": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "instagram": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "paypal": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "steam": {
      "apiKey": "",
      "redirectURL": ""
    },
    "x": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "xsuaa": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "vk": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "yandex": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "tiktok": {
      "clientKey": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "dropbox": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "polar": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "zitadel": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "authentik": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "seznam": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "strava": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "hubspot": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "line": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "atlassian": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "apple": {
      "teamId": "",
      "keyId": "",
      "privateKey": "",
      "redirectURL": "",
      "clientId": ""
    },
    "kick": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "livechat": {
      "clientId": "",
      "clientSecret": ""
    },
    "salesforce": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "",
      "scope": ""
    },
    "slack": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "heroku": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "roblox": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "okta": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "audience": "",
      "scope": [],
      "redirectURL": ""
    },
    "ory": {
      "clientId": "",
      "clientSecret": "",
      "sdkURL": "",
      "redirectURL": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": ""
    },
    "shopifyCustomer": {
      "shopDomain": "",
      "clientId": "",
      "redirectURL": "",
      "scope": []
    }
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/home/meebuzo/github/Meeovi-Starter-Template/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config$2 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$2.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const memoryStore = {};

  const NONCE = ${JSON.stringify(nonce)}
  
  const mockStorage = {
    getItem: function(key) {
      return memoryStore[key] !== undefined ? memoryStore[key] : null;
    },
    setItem: function(key, value) {
      memoryStore[key] = String(value);
      window.parent.postMessage({
        type: 'storage-set',
        key: key,
        value: String(value),
        nonce: NONCE
      }, '*');
    },
    removeItem: function(key) {
      delete memoryStore[key];
      window.parent.postMessage({
        type: 'storage-remove',
        key: key,
        nonce: NONCE
      }, '*');
    },
    clear: function() {
      for (const key in memoryStore) {
        delete memoryStore[key];
      }
      window.parent.postMessage({
        type: 'storage-clear',
        nonce: NONCE
      }, '*');
    },
    key: function(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] !== undefined ? keys[index] : null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };
  
  try {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: false,
      configurable: true
    });
  } catch (e) {
    window.localStorage = mockStorage;
  }
  
  window.addEventListener('message', function(event) {
    if (event.data.type === 'storage-sync-data' && event.data.nonce === NONCE) {
      const data = event.data.data;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          memoryStore[key] = data[key];
        }
      }
      if (typeof window.initTheme === 'function') {
        window.initTheme();
      }
      window.dispatchEvent(new Event('storage-ready'));
    }
  });
  
  window.parent.postMessage({ 
    type: 'storage-sync-request',
    nonce: NONCE
  }, '*');
})();
`
);
const parentStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;
  
  // Wait for shadow root to be attached
  const checkShadow = setInterval(function() {
    if (host.shadowRoot) {
      clearInterval(checkShadow);
      const iframe = host.shadowRoot.getElementById('frame');
      if (!iframe) return;

      const NONCE = ${JSON.stringify(nonce)}
      
      window.addEventListener('message', function(event) {
        if (!event.data || event.data.nonce !== NONCE) return;
        
        const data = event.data;
        
        if (data.type === 'storage-set') {
          localStorage.setItem(data.key, data.value);
        } else if (data.type === 'storage-remove') {
          localStorage.removeItem(data.key);
        } else if (data.type === 'storage-clear') {
          localStorage.clear();
        } else if (data.type === 'storage-sync-request') {
          const allData = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
          }
          iframe.contentWindow.postMessage({
            type: 'storage-sync-data',
            data: allData,
            nonce: NONCE
          }, '*');
        }
      });
    }
  }, 10);
})();
`
);
const errorCSS = (
  /* css */
  `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  right: 5px;
  bottom: 5px;
  left: auto;
  top: auto;
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: bottom right;
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 3px;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`
);
function webComponentScript(base64HTML, startMinimized) {
  return (
    /* js */
    `
  (function() {
    try {
      const host = document.querySelector('nuxt-error-overlay');
      if (!host) return;
      
      const shadow = host.attachShadow({ mode: 'open' });
      
      // Create elements
      const style = document.createElement('style');
      style.textContent = ${JSON.stringify(errorCSS)};
      
      const iframe = document.createElement('iframe');
      iframe.id = 'frame';
      iframe.src = 'data:text/html;base64,${base64HTML}';
      iframe.title = 'Detailed error stack trace';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      
      const preview = document.createElement('div');
      preview.id = 'preview';
      
      const button = document.createElement('button');
      button.id = 'toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('type', 'button');
      button.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';
      
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.className = 'sr-only';
      
      // Update preview snapshot
      function updatePreview() {
        try {
          let previewIframe = preview.querySelector('iframe');
          if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
            previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            preview.appendChild(previewIframe);
          }
          
          const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
          const cleanedHTML = document.documentElement.outerHTML
            .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
            .replace(/<script[^>]*>.*?<\\/script>/gs, '');
          
          const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(doctype + cleanedHTML);
          iframeDoc.close();
        } catch (error) {
          console.error('Failed to update preview:', error);
        }
      }
      
      function toggleView() {
        const isMinimized = iframe.hasAttribute('inert');
        
        if (isMinimized) {
          updatePreview();
          iframe.removeAttribute('inert');
          button.setAttribute('aria-expanded', 'true');
          liveRegion.textContent = 'Showing detailed error view';
          setTimeout(function() {
            try { iframe.contentWindow.focus(); } catch {}
          }, 100);
        } else {
          iframe.setAttribute('inert', '');
          button.setAttribute('aria-expanded', 'false');
          liveRegion.textContent = 'Showing error page';
          button.focus();
        }
      }
      
      button.onclick = toggleView;
      
      document.addEventListener('keydown', function(e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !iframe.hasAttribute('inert')) {
          toggleView();
        }
      });
      
      // Append to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(liveRegion);
      shadow.appendChild(iframe);
      shadow.appendChild(preview);
      shadow.appendChild(button);
      
      if (${startMinimized}) {
        iframe.setAttribute('inert', '');
        button.setAttribute('aria-expanded', 'false');
      }
      
      // Initialize preview
      setTimeout(updatePreview, 100);
      
    } catch (error) {
      console.error('Failed to initialize Nuxt error overlay:', error);
    }
  })();
  `
  );
}
function generateErrorOverlayHTML(html, options) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
  const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
  const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
  return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return error500; });
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  if (!globalThis._importMeta_.test && typeof html === "string") {
    const prettyResponse = await defaultHandler(error, event, { json: false });
    return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= statusCode && statusCode < 500 })}</body>`));
  }
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _g6p73X5cUiwILBI1stT140LSyw1z7AogYzt2wF_0lXI = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const _VLiWvfHwWh4M57q9Me_5MQXf7RDb6pmpIgQxIp98OA = defineNitroPlugin((nitroApp) => {
  if (process.env.NUXT_OAUTH_FACEBOOK_CLIENT_ID && process.env.NUXT_OAUTH_FACEBOOK_CLIENT_SECRET || process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_ID && process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_SECRET) {
    nitroApp.hooks.hook("render:html", (html) => {
      html.head.unshift(`
      <script>
        if (window.location.hash === "#_=_"){
          history.replaceState
              ? history.replaceState(null, null, window.location.href.split("#")[0])
              : window.location.hash = "";
        }
      <\/script>
    `);
    });
  }
});

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const defuReplaceArray = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) || Array.isArray(value)) {
    obj[key] = value;
    return true;
  }
});

function getOAuthRedirectURL(event) {
  const requestURL = getRequestURL(event);
  return `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
}

const atprotoProviders = ["bluesky"];
function getClientMetadataFilename(provider, config) {
  return config?.clientMetadataFilename || provider + "/client-metadata.json";
}

function getAtprotoClientMetadata(event, provider, config) {
  const providerRuntimeConfig = useRuntimeConfig(event).oauth[provider];
  const scopes = [.../* @__PURE__ */ new Set(["atproto", ...[], ...providerRuntimeConfig.scope ?? []])];
  const scope = scopes.join(" ");
  const grantTypes = [.../* @__PURE__ */ new Set(["authorization_code", ...providerRuntimeConfig.grantTypes ?? []])];
  const requestURL = getRequestURL(event);
  const baseUrl = `${requestURL.protocol}//${requestURL.host}`;
  const redirectURL = new URL(
    providerRuntimeConfig.redirectUris[0] && baseUrl + providerRuntimeConfig.redirectUris[0] || getOAuthRedirectURL(event)
  );
  if (redirectURL.hostname === "localhost") {
    redirectURL.hostname = "127.0.0.1";
  }
  const redirectUris = (providerRuntimeConfig.redirectUris.length ? providerRuntimeConfig.redirectUris : [requestURL.pathname]).map((uri) => new URL(`${redirectURL.protocol}//${redirectURL.host}${uri}`).toString());
  const clientId = `http://localhost?redirect_uri=${encodeURIComponent(redirectURL.toString())}&scope=${encodeURIComponent(scope)}` ;
  const clientMetadata = {
    client_name: providerRuntimeConfig.clientName || void 0,
    client_uri: providerRuntimeConfig.clientUri || void 0,
    logo_uri: providerRuntimeConfig.logoUri || void 0,
    policy_uri: providerRuntimeConfig.policyUri || void 0,
    tos_uri: providerRuntimeConfig.tosUri || void 0,
    client_id: clientId,
    redirect_uris: redirectUris,
    scope,
    grant_types: grantTypes,
    application_type: providerRuntimeConfig.applicationType,
    token_endpoint_auth_method: providerRuntimeConfig.tokenEndpointAuthMethod,
    dpop_bound_access_tokens: true
  };
  return clientMetadata;
}

const sessionHooks = createHooks();
async function getUserSession(event) {
  const session = await _useSession(event);
  return {
    ...session.data,
    id: session.id
  };
}
async function clearUserSession(event, config) {
  const session = await _useSession(event, config);
  await sessionHooks.callHookParallel("clear", session.data, event);
  await session.clear();
  return true;
}
let sessionConfig;
function _useSession(event, config = {}) {
  if (!sessionConfig) {
    const runtimeConfig = useRuntimeConfig(isEvent(event) ? event : void 0);
    const envSessionPassword = `${runtimeConfig.nitro?.envPrefix || "NUXT_"}SESSION_PASSWORD`;
    sessionConfig = defu$1({ password: process.env[envSessionPassword] }, runtimeConfig.session);
    if (!sessionConfig.password) {
      console.error(`[nuxt-auth-utils] ${envSessionPassword} environment variable or runtimeConfig.session.password was not set.`);
    }
  }
  const finalConfig = defu$1(config, sessionConfig);
  return useSession(event, finalConfig);
}

const _PumbESYpQgsKro7BlNgEZ3pySiO1gRErD9hPLiJvwo = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event) => {
    await getUserSession(event);
  });
});

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const headers = new Headers({ "x-nuxt-i18n": "internal" });
{
  headers.set("Cache-Control", "no-cache");
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

// @ts-nocheck
const localeCodes =  [
  "en-GB",
  "pl-PL",
  "testde"
];
const localeLoaders = {
  "en-GB": [
    {
      key: "locale_en_45GB_46ts_0405cb7b",
      load: () => Promise.resolve().then(function () { return enGB$1; }),
      cache: false
    }
  ],
  "pl-PL": [
    {
      key: "locale_pl_45PL_46ts_cddab94c",
      load: () => Promise.resolve().then(function () { return plPL$1; }),
      cache: false
    }
  ],
  testde: [
    {
      key: "locale_de_45DE_46ts_023d65b2",
      load: () => Promise.resolve().then(function () { return deDE$1; }),
      cache: false
    }
  ]
};
const vueI18nConfigs = [
  () => Promise.resolve().then(function () { return config$1; })
];
const normalizedLocales = [
  {
    code: "en-GB",
    language: "en-GB"
  },
  {
    code: "pl-PL",
    language: "pl-PL"
  },
  {
    code: "testde",
    language: "de-DE",
    localeId: "c19b753b5f2c4bea8ad15e00027802d4"
  }
];

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) return [];
  if (isArray(fallback)) return fallback;
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) continue;
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const merged = {};
  for (const loader of loaders) {
    deepCopy(await nuxtApp.runWithContext(async () => await getLocaleMessages(locale, loader)), merged);
  }
  return merged;
}

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

const appHead = {"meta":[{"name":"viewport","content":"minimum-scale=1, initial-scale=1, width=device-width"},{"charset":"utf-8"},{"name":"description","content":"Starter Template for the M Framework"}],"link":[{"rel":"icon","href":"/favicon.ico"},{"rel":"apple-touch-icon","href":"/icons/apple-touch-icon-180x180.png"},{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"},{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap"}],"style":[],"script":[],"noscript":[],"viewport":"minimum-scale=1, initial-scale=1, width=device-width","templateParams":{"separator":"·"},"htmlAttrs":{"lang":"en"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

function useRuntimeI18n(nuxtApp) {
  {
    return useRuntimeConfig().public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) return void 0;
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || // fallback to default locale for the domain
    matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => {
  const cookieValue = getRequestHeader(event, "cookie") || "";
  return parse(cookieValue)[cookieName];
};
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => {
  return findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
};
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/": {
    "en-GB": "/",
    "pl-PL": "/",
    "testde": "/"
  },
  "/results": {
    "en-GB": "/results",
    "pl-PL": "/results",
    "testde": "/results"
  },
  "/:slug(.*)*": {
    "en-GB": "/:slug(.*)*",
    "pl-PL": "/:slug(.*)*",
    "testde": "/:slug(.*)*"
  },
  "/Auth/login": {
    "en-GB": "/Auth/login",
    "pl-PL": "/Auth/login",
    "testde": "/Auth/login"
  },
  "/User": {
    "en-GB": "/User",
    "pl-PL": "/User",
    "testde": "/User"
  },
  "/User/account": {
    "en-GB": "/User/account",
    "pl-PL": "/User/account",
    "testde": "/User/account"
  },
  "/Auth/callback": {
    "en-GB": "/Auth/callback",
    "pl-PL": "/Auth/callback",
    "testde": "/Auth/callback"
  },
  "/Auth/register": {
    "en-GB": "/Auth/register",
    "pl-PL": "/Auth/register",
    "testde": "/Auth/register"
  },
  "/User/notifications": {
    "en-GB": "/User/notifications",
    "pl-PL": "/User/notifications",
    "testde": "/User/notifications"
  },
  "/Auth/reset-password": {
    "en-GB": "/Auth/reset-password",
    "pl-PL": "/Auth/reset-password",
    "testde": "/Auth/reset-password"
  },
  "/Auth/forgot-password": {
    "en-GB": "/Auth/forgot-password",
    "pl-PL": "/Auth/forgot-password",
    "testde": "/Auth/forgot-password"
  }
};
const i18nPathToPath = {
  "/": "/",
  "/results": "/results",
  "/:slug(.*)*": "/:slug(.*)*",
  "/Auth/login": "/Auth/login",
  "/User": "/User",
  "/User/account": "/User/account",
  "/Auth/callback": "/Auth/callback",
  "/Auth/register": "/Auth/register",
  "/User/notifications": "/User/notifications",
  "/Auth/reset-password": "/Auth/reset-password",
  "/Auth/forgot-password": "/Auth/forgot-password"
};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) return;
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") return;
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") return;
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    const isPrefixable = prefixable(locale, defaultLocale);
    return withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path));
  }
}
function prefixable(currentLocale, defaultLocale) {
  return   (currentLocale !== defaultLocale || "prefix_except_default" === "prefix");
}

const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _H7_AuKbdNTwdFz9rl_TR8C9rx99yiDisk759eHKiI = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  const _defaultLocale = runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") break;
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) break;
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix_except_default" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || _defaultLocale);
    const url = getRequestURL(event);
    const ctx = createI18nContext();
    event.context.nuxtI18n = ctx;
    {
      const detector = useDetectors(event, detection);
      const localeSegment = detector.route(event.path);
      const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
      const path = pathLocale && url.pathname.slice(pathLocale.length + 1) || url.pathname;
      if (!url.pathname.includes("/_i18n/") && !isExistingNuxtRoute(path)) {
        return;
      }
      const resolved = resolveRedirectPath(event, path, pathLocale, options.defaultLocale, detector);
      if (resolved.path && resolved.path !== url.pathname) {
        ctx.detectLocale = resolved.locale;
        detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
        await sendRedirect(
          event,
          joinURL(baseUrlGetter(event, options.defaultLocale), resolved.path + url.search),
          resolved.code
        );
        return;
      }
    }
    const localeConfigs = createLocaleConfigs(options.fallbackLocale);
    ctx.vueI18nOptions = options;
    ctx.localeConfigs = localeConfigs;
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/home/meebuzo/github/Meeovi-Starter-Template";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _ZCX5Nr82b2GSaS_HYO_x8uOFQwieITPQkOUMoh2YWaA = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const nitroAppSecurityOptions = {};
function getAppSecurityOptions() {
  return nitroAppSecurityOptions;
}
function resolveSecurityRules(event) {
  if (!event.context.security) {
    event.context.security = {};
  }
  if (!event.context.security.rules) {
    const router = createRouter({ routes: structuredClone(nitroAppSecurityOptions) });
    const matcher = toRouteMatcher(router);
    const matches = matcher.matchAll(event.path.split("?")[0]);
    const rules = defuReplaceArray({}, ...matches.reverse());
    event.context.security.rules = rules;
  }
  return event.context.security.rules;
}
function resolveSecurityRoute(event) {
  if (!event.context.security) {
    event.context.security = {};
  }
  if (!event.context.security.route) {
    const routeNames = Object.fromEntries(Object.entries(nitroAppSecurityOptions).map(([name]) => [name, { name }]));
    const router = createRouter({ routes: routeNames });
    const match = router.lookup(event.path.split("?")[0]);
    const route = match?.name ?? "";
    event.context.security.route = route;
  }
  return event.context.security.route;
}

const KEYS_TO_NAMES = {
  contentSecurityPolicy: "Content-Security-Policy",
  crossOriginEmbedderPolicy: "Cross-Origin-Embedder-Policy",
  crossOriginOpenerPolicy: "Cross-Origin-Opener-Policy",
  crossOriginResourcePolicy: "Cross-Origin-Resource-Policy",
  originAgentCluster: "Origin-Agent-Cluster",
  referrerPolicy: "Referrer-Policy",
  strictTransportSecurity: "Strict-Transport-Security",
  xContentTypeOptions: "X-Content-Type-Options",
  xDNSPrefetchControl: "X-DNS-Prefetch-Control",
  xDownloadOptions: "X-Download-Options",
  xFrameOptions: "X-Frame-Options",
  xPermittedCrossDomainPolicies: "X-Permitted-Cross-Domain-Policies",
  xXSSProtection: "X-XSS-Protection",
  permissionsPolicy: "Permissions-Policy"
};
const NAMES_TO_KEYS = Object.fromEntries(Object.entries(KEYS_TO_NAMES).map(([key, name]) => [name, key]));
function getNameFromKey(key) {
  return KEYS_TO_NAMES[key];
}
function getKeyFromName(headerName) {
  const [, key] = Object.entries(NAMES_TO_KEYS).find(([name]) => name.toLowerCase() === headerName.toLowerCase()) || [];
  return key;
}
function headerStringFromObject(optionKey, optionValue) {
  if (optionValue === false) {
    return "";
  }
  if (optionKey === "contentSecurityPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (directive === "upgrade-insecure-requests") {
        return "upgrade-insecure-requests;";
      } else {
        const stringifiedSources = typeof sources === "string" ? sources : sources.map((source) => source.trim()).join(" ");
        return `${directive} ${stringifiedSources};`;
      }
    }).join(" ");
  } else if (optionKey === "strictTransportSecurity") {
    const policies = optionValue;
    return [
      `max-age=${policies.maxAge}`,
      policies.includeSubdomains && "includeSubDomains",
      policies.preload && "preload"
    ].filter(Boolean).join("; ");
  } else if (optionKey === "permissionsPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (typeof sources === "string") {
        return `${directive}=${sources}`;
      } else {
        return `${directive}=(${sources.join(" ")})`;
      }
    }).join(", ");
  } else {
    return optionValue;
  }
}
function headerObjectFromString(optionKey, headerValue) {
  if (!headerValue) {
    return false;
  }
  if (optionKey === "contentSecurityPolicy") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, ...sources] = directive.split(" ").map((token) => token.trim());
      if (type === "upgrade-insecure-requests") {
        objectForm[type] = true;
      } else {
        objectForm[type] = sources.join(" ");
      }
    }
    return objectForm;
  } else if (optionKey === "strictTransportSecurity") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      if (type === "max-age") {
        objectForm.maxAge = Number(value);
      } else if (type === "includeSubdomains" || type === "preload") {
        objectForm[type] = true;
      }
    }
    return objectForm;
  } else if (optionKey === "permissionsPolicy") {
    const directives = headerValue.split(",").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      objectForm[type] = value;
    }
    return objectForm;
  } else {
    return headerValue;
  }
}
function standardToSecurity(standardHeaders) {
  if (!standardHeaders) {
    return void 0;
  }
  const standardHeadersAsObject = {};
  Object.entries(standardHeaders).forEach(([headerName, headerValue]) => {
    const optionKey = getKeyFromName(headerName);
    if (optionKey) {
      if (typeof headerValue === "string") {
        const objectValue = headerObjectFromString(optionKey, headerValue);
        standardHeadersAsObject[optionKey] = objectValue;
      } else {
        standardHeadersAsObject[optionKey] = headerValue;
      }
    }
  });
  if (Object.keys(standardHeadersAsObject).length === 0) {
    return void 0;
  }
  return standardHeadersAsObject;
}
function backwardsCompatibleSecurity(securityHeaders) {
  if (!securityHeaders) {
    return void 0;
  }
  const securityHeadersAsObject = {};
  Object.entries(securityHeaders).forEach(([key, value]) => {
    const optionKey = key;
    if ((optionKey === "contentSecurityPolicy" || optionKey === "permissionsPolicy" || optionKey === "strictTransportSecurity") && typeof value === "string") {
      const objectValue = headerObjectFromString(optionKey, value);
      securityHeadersAsObject[optionKey] = objectValue;
    } else if (value === "") {
      securityHeadersAsObject[optionKey] = false;
    } else {
      securityHeadersAsObject[optionKey] = value;
    }
  });
  return securityHeadersAsObject;
}

const _UfLcVtYrl_L2_wI0u4PDgnKgOnLXkPYx5E7GhhJDC7Y = defineNitroPlugin(async (nitroApp) => {
  const appSecurityOptions = getAppSecurityOptions();
  const runtimeConfig = useRuntimeConfig();
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    const { headers: headers2 } = rule;
    const securityHeaders2 = standardToSecurity(headers2);
    if (securityHeaders2) {
      appSecurityOptions[route] = { headers: securityHeaders2 };
    }
  }
  const securityOptions = runtimeConfig.security;
  const { headers } = securityOptions;
  const securityHeaders = backwardsCompatibleSecurity(headers);
  appSecurityOptions["/**"] = defuReplaceArray(
    { headers: securityHeaders },
    securityOptions,
    appSecurityOptions["/**"]
  );
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    const { security } = rule;
    if (security) {
      const { headers: headers2 } = security;
      const securityHeaders2 = backwardsCompatibleSecurity(headers2);
      appSecurityOptions[route] = defuReplaceArray(
        { headers: securityHeaders2 },
        security,
        appSecurityOptions[route]
      );
    }
  }
  nitroApp.hooks.hook("nuxt-security:headers", ({ route, headers: headers2 }) => {
    appSecurityOptions[route] = defuReplaceArray(
      { headers: headers2 },
      appSecurityOptions[route]
    );
  });
  nitroApp.hooks.hook("nuxt-security:ready", async () => {
    await nitroApp.hooks.callHook("nuxt-security:routeRules", appSecurityOptions);
  });
  await nitroApp.hooks.callHook("nuxt-security:ready");
});

const sriHashes = {"/_nuxt/builds/meta/9789230e-8140-4a6f-b9dc-a28bcdaad57c.json":"sha384-0qI7x4Pjqjj0AeE8dIhQUTfElUp/2IMx8Vl8X/cREdyAfHNwpbKCxtpUHFbt5p8w","/_nuxt/builds/meta/dev.json":"sha384-r2fDj7poQcufOG/YZNUDtkq+UqNKrirg2AUmibIW9bLxhcX1Sb84JFSOWnPoiLTF","/_nuxt/builds/latest.json":"sha384-YCJ1LEDe1ufhRHx2ZpgmdW3yrNJalYGjJ0IslLeJ1+QjeQOKH3V1BJMwGt7H0FsR","/_robots.txt":"sha384-BgP/Fsypf0v7aBp0G7SgrJwYcN0568VyTy8YmI8xJBjp+aKdtfDSrvy187QMd0E8","/favicon.ico":"sha384-vzbz+7u2igubihE5wsiFTFtK3X/HjogcZOaHfsnC1n+xPtYNLevLl+NRDk/C3rtl","/logo.svg":"sha384-+BuKCMBo397XNFUKODY0egGt8/fiStijQ1xZ4zbFrO5OqumbkPxttykHiZIlv9Qb"};

const SCRIPT_RE$1 = /<script((?=[^>]+\bsrc="([^"]+)")(?![^>]+\bintegrity="[^"]+")[^>]+)(?:\/>|><\/script>)/g;
const LINK_RE$1 = /<link((?=[^>]+\brel="(?:stylesheet|preload|modulepreload)")(?=[^>]+\bhref="([^"]+)")(?![^>]+\bintegrity="[\w\-+/=]+")[^>]+)>/g;
const _U20I690jhTjDoQ3BxIXVf6VOEAnSp0BliGRjO4jXo8E = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.sri) {
      return;
    }
    const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
    for (const section of sections) {
      html[section] = html[section].map((element) => {
        if (typeof element !== "string") {
          return element;
        }
        element = element.replace(SCRIPT_RE$1, (match, rest, src) => {
          const hash = sriHashes[src];
          if (hash) {
            const integrityScript = `<script integrity="${hash}"${rest}><\/script>`;
            return integrityScript;
          } else {
            return match;
          }
        });
        element = element.replace(LINK_RE$1, (match, rest, href) => {
          const hash = sriHashes[href];
          if (hash) {
            const integrityLink = `<link integrity="${hash}"${rest}>`;
            return integrityLink;
          } else {
            return match;
          }
        });
        return element;
      });
    }
  });
});

function generateRandomNonce() {
  const array = new Uint8Array(18);
  crypto.getRandomValues(array);
  const nonce = btoa(String.fromCharCode(...array));
  return nonce;
}

const _tOzjLrmgO8kykGfv_t7hy_t6V5Dj5cDzVGZLHf5Homo = defineNitroPlugin((nitroApp) => {
  {
    return;
  }
});

const LINK_RE = /<link([^>]*?>)/gi;
const NONCE_RE = /nonce="[^"]+"/i;
const SCRIPT_RE = /<script([^>]*?>)/gi;
const STYLE_RE = /<style([^>]*?>)/gi;
const __jjM5sny4UBk37ILE2PSDpfHYebsFNb_k2t77nKkLo = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", (event) => {
    if (event.context.security?.nonce) {
      return;
    }
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.nonce && true) {
      const nonce = generateRandomNonce();
      event.context.security.nonce = nonce;
    }
  });
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.headers || !rules.headers.contentSecurityPolicy || !rules.nonce) {
      return;
    }
    const nonce = event.context.security.nonce;
    const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
    for (const section of sections) {
      html[section] = html[section].map((element) => {
        if (typeof element !== "string") {
          return element;
        }
        element = element.replace(LINK_RE, (match, rest) => {
          if (NONCE_RE.test(rest)) {
            return match.replace(NONCE_RE, `nonce="${nonce}"`);
          }
          return `<link nonce="${nonce}"` + rest;
        });
        element = element.replace(SCRIPT_RE, (match, rest) => {
          return `<script nonce="${nonce}"` + rest;
        });
        element = element.replace(STYLE_RE, (match, rest) => {
          return `<style nonce="${nonce}"` + rest;
        });
        return element;
      });
    }
    {
      html.head.push(
        `<meta property="csp-nonce" nonce="${nonce}">`
      );
    }
  });
});

const _vfB_0qvE24x8JsG48Jhe8brGms6Fg466gqw3aTaAU = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (response, { event }) => {
    if (response.island) {
      return;
    }
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      if (headers.contentSecurityPolicy) {
        const csp = headers.contentSecurityPolicy;
        const nonce = event.context.security?.nonce;
        const scriptHashes = event.context.security?.hashes?.script;
        const styleHashes = event.context.security?.hashes?.style;
        headers.contentSecurityPolicy = updateCspVariables(csp, nonce, scriptHashes, styleHashes);
      }
    }
  });
});
function updateCspVariables(csp, nonce, scriptHashes, styleHashes) {
  const generatedCsp = Object.fromEntries(Object.entries(csp).map(([directive, value]) => {
    if (typeof value === "boolean") {
      return [directive, value];
    }
    const sources = typeof value === "string" ? value.split(" ").map((token) => token.trim()).filter((token) => token) : value;
    const modifiedSources = sources.filter((source) => {
      if (source.startsWith("'nonce-") && source !== "'nonce-{{nonce}}'") {
        console.warn("[nuxt-security] removing static nonce from CSP header");
        return false;
      }
      return true;
    }).map((source) => {
      if (source === "'nonce-{{nonce}}'") {
        return nonce ? `'nonce-${nonce}'` : "";
      } else {
        return source;
      }
    }).filter((source) => source);
    if (directive === "script-src" && scriptHashes) {
      modifiedSources.push(...scriptHashes);
    }
    if (directive === "style-src" && styleHashes) {
      modifiedSources.push(...styleHashes);
    }
    return [directive, modifiedSources];
  }));
  return generatedCsp;
}

const _TFxqxN50WvpLSgnVDhATHGkSYvycFBr05oAJOGY90 = defineNitroPlugin((nitroApp) => {
  {
    return;
  }
});

const _g1lQ68JIuViSuGFcLbpWHZpy3ky2IiRlPUJ6JZsyY = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      Object.entries(headers).forEach(([header, value]) => {
        const headerName = getNameFromKey(header);
        if (value === false) {
          const { headers: standardHeaders } = getRouteRules(event);
          const standardHeaderValue = standardHeaders?.[headerName];
          const currentHeaderValue = getResponseHeader(event, headerName);
          if (standardHeaderValue === currentHeaderValue) {
            removeResponseHeader(event, headerName);
          }
        } else {
          const headerValue = headerStringFromObject(header, value);
          setResponseHeader(event, headerName, headerValue);
        }
      });
    }
  });
});

const _GvqVZ7lEe0PsLAcILClkLcEcUNnm2fU4tXV8RXRuMhY = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.hidePoweredBy && !event.node.res.headersSent) {
      removeResponseHeader(event, "x-powered-by");
    }
  });
});

const _4GzukduFQi1Zdio7AGyQDplOGerlS2pXZBPjaOQ8s = defineNitroPlugin(async (nitroApp) => {
  {
    const prerenderedHeaders = await useStorage("assets:nuxt-security").getItem("headers.json") || {};
    nitroApp.hooks.hook("beforeResponse", (event) => {
      const rules = resolveSecurityRules(event);
      if (rules.enabled && rules.ssg && rules.ssg.nitroHeaders) {
        const path = event.path.split("?")[0];
        if (prerenderedHeaders[path]) {
          setResponseHeaders(event, prerenderedHeaders[path]);
        }
      }
    });
  }
});

const plugins = [
  _g6p73X5cUiwILBI1stT140LSyw1z7AogYzt2wF_0lXI,
_VLiWvfHwWh4M57q9Me_5MQXf7RDb6pmpIgQxIp98OA,
_PumbESYpQgsKro7BlNgEZ3pySiO1gRErD9hPLiJvwo,
_H7_AuKbdNTwdFz9rl_TR8C9rx99yiDisk759eHKiI,
_ZCX5Nr82b2GSaS_HYO_x8uOFQwieITPQkOUMoh2YWaA,
_UfLcVtYrl_L2_wI0u4PDgnKgOnLXkPYx5E7GhhJDC7Y,
_U20I690jhTjDoQ3BxIXVf6VOEAnSp0BliGRjO4jXo8E,
_tOzjLrmgO8kykGfv_t7hy_t6V5Dj5cDzVGZLHf5Homo,
__jjM5sny4UBk37ILE2PSDpfHYebsFNb_k2t77nKkLo,
_vfB_0qvE24x8JsG48Jhe8brGms6Fg466gqw3aTaAU,
_TFxqxN50WvpLSgnVDhATHGkSYvycFBr05oAJOGY90,
_g1lQ68JIuViSuGFcLbpWHZpy3ky2IiRlPUJ6JZsyY,
_GvqVZ7lEe0PsLAcILClkLcEcUNnm2fU4tXV8RXRuMhY,
_4GzukduFQi1Zdio7AGyQDplOGerlS2pXZBPjaOQ8s
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _ftDG2f = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///home/meebuzo/github/Meeovi-Starter-Template/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///home/meebuzo/github/Meeovi-Starter-Template/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = void 0 ;
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process$1.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = void 0 ;
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const renderer = createRenderer(() => () => {
  }, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: () => spaTemplate,
    buildAssetsURL
  });
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", err);
    throw err;
  });
  if (ssrContext.payload?.error) {
    throw ssrContext.payload.error;
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const defaultThrowErrorValue = { throwError: true };
const defaultSecurityConfig = (serverlUrl, strict) => {
  const defaultConfig = {
    strict,
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "unsafe-none" ,
      contentSecurityPolicy: {
        "base-uri": ["'none'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "script-src": ["'self'", "https:", "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "upgrade-insecure-requests": true
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552e3,
        includeSubdomains: true
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: [],
        "display-capture": [],
        fullscreen: [],
        geolocation: [],
        microphone: []
      }
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2e6,
      maxUploadFileRequestInBytes: 8e6,
      ...defaultThrowErrorValue
    },
    rateLimiter: {
      // Twitter search rate limiting
      tokensPerInterval: 150,
      interval: 3e5,
      headers: false,
      driver: {
        name: "lruCache"
      },
      whiteList: void 0,
      ipHeader: void 0,
      ...defaultThrowErrorValue
    },
    xssValidator: {
      methods: ["GET", "POST"],
      ...defaultThrowErrorValue
    },
    corsHandler: {
      // Options by CORS middleware for Express https://github.com/expressjs/cors#configuration-options
      origin: serverlUrl,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204
      }
    },
    allowedMethodsRestricter: {
      methods: "*",
      ...defaultThrowErrorValue
    },
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: true,
    removeLoggers: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true
    },
    sri: true
  };
  return defaultConfig;
};

const FILE_UPLOAD_HEADER = "multipart/form-data";
const defaultSizeLimiter = defaultSecurityConfig("").requestSizeLimiter;
const _AY0b4N = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.requestSizeLimiter) {
    const requestSizeLimiter = defu(
      rules.requestSizeLimiter,
      defaultSizeLimiter
    );
    if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, "content-length");
      const contentTypeValue = getRequestHeader(event, "content-type");
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
      const requestLimit = isFileUpload ? requestSizeLimiter.maxUploadFileRequestInBytes : requestSizeLimiter.maxRequestSizeInBytes;
      if (parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: "Payload Too Large"
        };
        if (requestSizeLimiter.throwError === false) {
          return payloadTooLargeError;
        }
        throw createError(payloadTooLargeError);
      }
    }
  }
});

const _kEaIyM = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.corsHandler) {
    const { corsHandler } = rules;
    let origin;
    if (typeof corsHandler.origin === "string" && corsHandler.origin !== "*") {
      origin = [corsHandler.origin];
    } else {
      origin = corsHandler.origin;
    }
    if (origin && origin !== "*" && corsHandler.useRegExp) {
      origin = origin.map((o) => new RegExp(o, "i"));
    }
    handleCors(event, {
      origin,
      methods: corsHandler.methods,
      allowHeaders: corsHandler.allowHeaders,
      exposeHeaders: corsHandler.exposeHeaders,
      credentials: corsHandler.credentials,
      maxAge: corsHandler.maxAge,
      preflight: corsHandler.preflight
    });
  }
});

const _POU8do = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.allowedMethodsRestricter) {
    const { allowedMethodsRestricter } = rules;
    const allowedMethods = allowedMethodsRestricter.methods;
    if (allowedMethods !== "*" && !allowedMethods.includes(event.node.req.method)) {
      const methodNotAllowedError = {
        statusCode: 405,
        statusMessage: "Method not allowed"
      };
      if (allowedMethodsRestricter.throwError === false) {
        return methodNotAllowedError;
      }
      throw createError(methodNotAllowedError);
    }
  }
});

const storage$1 = useStorage("#rate-limiter-storage");
const defaultRateLimiter = defaultSecurityConfig("").rateLimiter;
const _eW9Iys = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event);
  const route = resolveSecurityRoute(event);
  if (rules.enabled && rules.rateLimiter) {
    const rateLimiter = defu(
      rules.rateLimiter,
      defaultRateLimiter
    );
    const ip = getIP(event, rateLimiter.ipHeader);
    if (rateLimiter.whiteList && rateLimiter.whiteList.includes(ip)) {
      return;
    }
    const url = ip + route;
    let storageItem = await storage$1.getItem(url);
    if (!storageItem) {
      await setStorageItem(rateLimiter, url);
    } else {
      if (typeof storageItem !== "object") {
        return;
      }
      const timeSinceFirstRateLimit = storageItem.date;
      const timeForInterval = storageItem.date + Number(rateLimiter.interval);
      if (Date.now() >= timeForInterval) {
        await setStorageItem(rateLimiter, url);
        storageItem = await storage$1.getItem(url);
      }
      const isLimited = timeSinceFirstRateLimit <= timeForInterval && storageItem.value === 0;
      if (isLimited) {
        const tooManyRequestsError = {
          statusCode: 429,
          statusMessage: "Too Many Requests"
        };
        if (rules.rateLimiter.headers) {
          setResponseHeader(event, "x-ratelimit-remaining", 0);
          setResponseHeader(event, "x-ratelimit-limit", rateLimiter.tokensPerInterval);
          setResponseHeader(event, "x-ratelimit-reset", timeForInterval);
        }
        if (rateLimiter.throwError === false) {
          return tooManyRequestsError;
        }
        throw createError(tooManyRequestsError);
      }
      const newItemDate = timeSinceFirstRateLimit > timeForInterval ? Date.now() : storageItem.date;
      const newStorageItem = { value: storageItem.value - 1, date: newItemDate };
      await storage$1.setItem(url, newStorageItem);
      const currentItem = await storage$1.getItem(url);
      if (currentItem && rateLimiter.headers) {
        setResponseHeader(event, "x-ratelimit-remaining", currentItem.value);
        setResponseHeader(event, "x-ratelimit-limit", rateLimiter.tokensPerInterval);
        setResponseHeader(event, "x-ratelimit-reset", timeForInterval);
      }
    }
  }
});
async function setStorageItem(rateLimiter, url) {
  const rateLimitedObject = { value: rateLimiter.tokensPerInterval, date: Date.now() };
  await storage$1.setItem(url, rateLimitedObject);
}
function getIP(event, customIpHeader) {
  const ip = customIpHeader ? getRequestHeader(event, customIpHeader) || "" : getRequestIP(event, { xForwardedFor: true }) || "";
  return ip;
}

const _Mo4TIK = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.xssValidator) {
    const filterOpt = {
      ...rules.xssValidator,
      escapeHtml: void 0
    };
    if (rules.xssValidator.escapeHtml === false) {
      filterOpt.escapeHtml = (value) => value;
    }
    const xssValidator = new FilterXSS(filterOpt);
    if (event.node.req.socket.readyState !== "readOnly") {
      if (rules.xssValidator.methods && rules.xssValidator.methods.includes(
        event.node.req.method
      )) {
        const valueToFilter = event.node.req.method === "GET" ? getQuery$1(event) : event.node.req.headers["content-type"]?.includes(
          "multipart/form-data"
        ) ? await readMultipartFormData(event) : await readBody(event);
        if (valueToFilter && Object.keys(valueToFilter).length) {
          if (valueToFilter.statusMessage && valueToFilter.statusMessage !== "Bad Request") {
            return;
          }
          const stringifiedValue = JSON.stringify(valueToFilter);
          const processedValue = xssValidator.process(
            JSON.stringify(valueToFilter)
          );
          if (processedValue !== stringifiedValue) {
            const badRequestError = {
              statusCode: 400,
              statusMessage: "Bad Request"
            };
            if (rules.xssValidator.throwError === false) {
              return badRequestError;
            }
            throw createError(badRequestError);
          }
        }
      }
    }
  }
});

const _sQamxB = eventHandler(async (event) => {
  await clearUserSession(event);
  return { loggedOut: true };
});

const _IUBA6a = eventHandler(async (event) => {
  const session = await getUserSession(event);
  if (Object.keys(session).length > 0) {
    await sessionHooks.callHookParallel("fetch", session, event);
  }
  const { secure, ...data } = session;
  return data;
});

const _myr9_V = defineEventHandler((event) => {
  const path = event.path.slice(1);
  const runtimeConfig = useRuntimeConfig(event);
  for (const provider of atprotoProviders) {
    const config = runtimeConfig.oauth[provider];
    if (getClientMetadataFilename(provider, config) === path) {
      return getAtprotoClientMetadata(event, provider);
    }
  }
  throw createError({
    statusCode: 404,
    message: "Provider not found"
  });
});

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) return false;
    return !useI18nContext(event).localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _YxoodC = _messagesHandler ;

const _2WiVQ_ = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_6mJHbL = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _ftDG2f, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_6mJHbL, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _AY0b4N, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _kEaIyM, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _POU8do, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _eW9Iys, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _Mo4TIK, lazy: false, middleware: false, method: undefined },
  { route: '/api/_auth/session', handler: _sQamxB, lazy: false, middleware: false, method: "delete" },
  { route: '/api/_auth/session', handler: _IUBA6a, lazy: false, middleware: false, method: "get" },
  { route: '/bluesky/client-metadata.json', handler: _myr9_V, lazy: false, middleware: false, method: "get" },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _YxoodC, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _2WiVQ_, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_6mJHbL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = crypto$1;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
{
  const { handleUpgrade } = wsAdapter(nitroApp.h3App.websocket);
  server.on("upgrade", handleUpgrade);
}
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "statusCode": 500, "statusMessage": "Internal server error", "description": "This page is temporarily unavailable.", "refresh": "Refresh this page" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage) + " | " + escapeHtml(messages.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(messages.statusCode) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(messages.statusMessage) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

var account$4 = {
	addresses: "Addresses",
	addressesLabel: "View your current default addresses or add new ones.",
	addressAddNew: "Add new address",
	accountOverviewHeader: "Account Overview",
	signUpHeader: "I am new here.",
	paymentMethodHeader: "Payment Method",
	newsletterSettingHeader: "Newsletter setting",
	defaultBillingAddressHeader: "Default billing address",
	defaultShippingAddressHeader: "Default shipping address",
	editAddress: "Edit address",
	yourAddress: "Your address",
	myPaymentsHeader: "My payments",
	orderHistoryHeader: "Order history",
	yourProfile: "Your profile",
	documentsLabel: "Documents",
	changePassword: "Change password",
	selectDefaultPaymentLabel: " Select your default payment method",
	logout: "Logout",
	change: "change",
	save: "save",
	setDefaultShippingAddress: "Set as default shipping address",
	setDefaultBillingAddress: "Set as default billing address",
	signInLabel: "Sign in to your account",
	signIn: "Sign in",
	signUp: "Sign up",
	loggedInInfo: "you are logged in",
	view: "View",
	hide: "Hide",
	menu: {
		accountOverviewHeader: "Account Overview",
		signIn: "Sign in",
		hello: "Hello",
		openMenu: "Open user menu",
		myAccount: "My account",
		signOut: "Sign out"
	},
	order: {
		product: "Product",
		quantity: "Quantity",
		price: "Price",
		subtotal: "Subtotal",
		orderNumber: "Order number",
		totalAmount: "Total amount",
		orderDate: "Order date",
		orderStatus: "Order status",
		paymentMethod: "Payment method",
		repeatOrder: "Repeat order",
		order: "Order",
		orders: "Orders"
	},
	orderDetails: {
		order: "Order",
		placedOn: "Placed on {d}",
		shippingAddress: "Shipping address",
		billingAddress: "Billing address",
		orderSummary: "Order Summary",
		paymentMethod: "Payment method",
		shippingMethod: "Shipping method",
		subtotal: "Subtotal",
		shipping: "Shipping",
		total: "Total",
		takesUpTo: "Takes up to",
		change: "Change",
		changePaymentMethod: "Change payment method",
		cancel: "Cancel",
		confirm: "Confirm",
		close: "Close",
		backToOrdersList: "Back to orders list",
		itemsHeader: {
			item: "Item",
			quantity: "Quantity",
			price: "Price",
			total: "Total"
		}
	},
	personalData: {
		infoBox: "Feel free to edit any of your details below so your account is always up to date",
		label: "Personal data"
	},
	changeEmail: {
		label: "Change email",
		infoBox: "You can change your email address here"
	},
	messages: {
		defaultShippingAddressSuccess: "Set default shipping address successfully",
		defaultShippingAddressError: "Set default shipping address error",
		defaultBillingAddressSuccess: "Set default billing address successfully",
		defaultBillingAddressError: "Set default billing address error",
		addressDeletedSuccess: "Address deleted",
		addressDeletedError: "Address deleted error",
		loggedInSuccess: "You are logged in",
		personalDataUpdateSuccess: "Your information has been updated.",
		paymentSetSuccessfully: "Set default payment method successfully",
		signUpSuccess: "Thank you for signing up! You will receive a confirmation email shortly. Click on the link in it to complete the sign-up.",
		paymentMethodChanged: "Payment method changed successfully",
		productsAdded: "Products added to cart",
		verifying: "Account confirmation"
	}
};
const account$5 = {
	account: account$4
};

var cart$4 = {
	checkout: "Checkout",
	header: "Shopping cart",
	itemsInCart: "items in cart",
	viewCart: "view bag",
	orderSummary: "Order summary",
	orderTotal: "Order total",
	subtotal: "Subtotal",
	shippingEstimate: "Shipping estimate",
	shippingCosts: "Shipping costs",
	emptyCartLabel: "Your cart is empty!",
	messages: {
		addedToCart: "{p} has been added to cart."
	},
	promotion: "promotion",
	digital: "digital"
};
const cart$5 = {
	cart: cart$4
};

var changePassword$4 = {
	infoBox: "If you want to change the password to access your account, enter the following information:",
	currentEmail: "Your current email address is",
	form: {
		currentPassword: "Current password",
		newPassword: "New password",
		resetPassword: "Reset password",
		changePassword: "Change password"
	},
	messages: {
		passwordUpdateSuccess: "Your password has been updated."
	}
};
const changePassword$5 = {
	changePassword: changePassword$4
};

var checkout$4 = {
	orderSummary: "Order summary",
	orderSummaryLabel: "Order details and totals.",
	signIn: "Sign in",
	signInToOrder: "In order to place an order.",
	register: "Register",
	header: "Shopping cart",
	empty: "Your shopping cart is empty",
	close: "Close panel",
	logOut: "You can log out here",
	orderTotal: "Order total",
	loginRequired: "You must be logged-in before submitting an order.",
	goToHomepage: "Go to home page",
	here: "here",
	shippingEstimate: "Shipping estimate",
	selectPaymentMethod: "Select a payment method",
	notCreateAccount: "Do not create a customer account.",
	takesUpTo: "Takes up to",
	subtotal: "Subtotal",
	taxesLabel: "Shipping and taxes calculated at checkout.",
	linkCheckout: "Checkout",
	guest: "guest",
	placeOrder: "Place the order",
	linkShippingCart: "Go to shopping cart",
	checkStatus: "You can now check the status of the order in your account. Thank you!",
	unpaidStatus: "Unfortunately, your order couldn't be paid. You can try to pay it again or contact us.",
	checkOrderDetails: "Check the order details",
	loggedInAs: "You are logged-in as",
	or: "or",
	yourOrder: "Your order",
	backToHomepage: "Back to homepage",
	orderPaid: "has been paid",
	orderUnpaid: "is not paid",
	continueShopping: "Continue Shopping",
	goToPayment: "Go to payment",
	shippingAddressLabel: "Shipping address",
	billingAddressLabel: "Billing address",
	selectBillingAddress: "Select a billing address",
	addNewBillingAddress: "Add new billing address",
	addNewShippingAddress: "Add new shipping address",
	differentBillingAddress: "Different shipping address",
	paymentMethodLabel: "Payment method",
	shippingMethodLabel: "Shipping method",
	shippingPriceLabel: "Shipping",
	personalInformationLabel: "Personal Information",
	personalInformationInfo: "Use a permanent address where you can receive mail.",
	totalLabel: "Total",
	termsAdnConditions: "Terms and conditions",
	termsAdnConditionsLabel: "I have read and accepted the general terms and conditions.",
	digitalTerms: "I want immediate access to the digital content and I acknowledge that thereby I waive my right to cancel.",
	promoCode: {
		label: "Applied promo codes",
		remove: "Remove"
	},
	items: {
		removeButton: "Remove"
	},
	success: {
		header: "We have received your order #{0} and will process it as soon as possible.",
		paymentProcessLabel: "Finish payment process.",
		paymentProcessInfo: "You will be redirected to the payment gateway in 5 seconds."
	},
	messages: {
		checkoutSignInSuccess: "Thank you for signing up! You will receive a confirmation email shortly. Click on the link in it to complete the sign-up."
	}
};
const checkout$5 = {
	checkout: checkout$4
};

var errors$2 = {
	"promotions-on-cart-price-zero-error": "Promotions are excluded for cart because the price of the cart is zero",
	"product-stock-reached": "The product {name} is only available {quantity} times",
	"product-stock-reached-empty": "Cannot add this quantity",
	"product-out-of-stock": "The product {name} is not available any more",
	"purchase-steps-quantity": "The product {name} is not available in this quantity. The quantity was changed to {quantity}",
	"min-order-quantity": "The quantity of product {name} did not meet the minimum order quantity threshold. The quantity has automatically been increased to {quantity}.",
	"shipping-method-blocked": "The shipping method {name} is blocked for your current shopping cart.",
	"shipping-method-changed": "{oldShippingMethodName} shipping is not available for your current cart, the shipping was changed to {newShippingMethodName}.",
	"payment-method-blocked": "The payment method {name} is blocked for your current shopping cart.",
	"payment-method-changed": "{oldPaymentMethodName} payment is not available for your current cart, the payment was changed to {newPaymentMethodName}.",
	"promotion-not-found": "Promotion with code {promotionCode} could not be found.",
	"auto-promotion-not-found": "Promotion {name} no longer valid!",
	"promotion-not-eligible": "Promotion code valid - however, not all conditions were met and the discount was not applied. Once all conditions are met, the discount will be applied automatically.",
	"promotion-excluded": "One or more discounts have been removed from the shopping cart, due to conflicts with other discounts. Once the conditions are met again, the discounts will be applied automatically.",
	"shipping-address-blocked": "Shipping to the selected shipping address is currently not possible.",
	"billing-address-blocked": "Billing to the selected address is not possible.",
	"shipping-address-invalid": "The selected shipping address is not valid or incomplete. Please check your entries.",
	"billing-address-invalid": "The selected billing address is not valid or incomplete. Please check your entries.",
	"cart-merged-hint": "The current shopping cart might contain additional products that have been added and saved during a previous visit.",
	"product-not-found": "The product could not be found.",
	"salutation-missing": "A salutation is missing from your profile, please choose one during checkout.",
	login_no_matching_customer_internal: "Invalid username and/or password.",
	"message-default": "Unfortunately, something went wrong.",
	"message-404": "The requested page cannot be found.",
	addToCartError: "An error occurred while trying to add items to the shopping cart.",
	productNotFound: "Product {number} not found.",
	"message-403-ajax": "Your session has expired. Please reload the page and try again.",
	"message-403": "Your session has expired. Please return to the last page and try again.",
	rateLimitExceeded: "Too many requests. Please wait {seconds} seconds before trying again.",
	CHECKOUT__CART_INVALID_LINE_ITEM_QUANTITY: "The quantity must be a positive integer. Given: {quantity}",
	"VIOLATION::CUSTOMER_EMAIL_NOT_UNIQUE": "The email address {email} is already in use",
	"VIOLATION::IS_BLANK_ERROR": "{field} should not be empty.",
	"VIOLATION::TOO_LOW_ERROR": "{field} should not be empty.",
	"VIOLATION::STRICT_CHECK_FAILED_ERROR": "{field} is invalid",
	"VIOLATION::CUSTOMER_PASSWORD_NOT_CORRECT": "Password incorrect.",
	"VIOLATION::VAT_ID_FORMAT_NOT_CORRECT": "The VAT Reg.No. you have entered does not have the correct format.",
	"VIOLATION::ZIP_CODE_INVALID": "The postal code you have entered does not have the correct format.",
	FRAMEWORK__INVALID_UUID: "The selected payment method does not exist.",
	CHECKOUT__UNKNOWN_PAYMENT_METHOD: "The selected payment method does not exist.",
	"VIOLATION::TOO_SHORT_ERROR": "{field} is too short.",
	CHECKOUT__ORDER_ORDER_ALREADY_PAID: "The order with the order number {orderNumber} was already paid and cannot be edited afterwards.",
	CHECKOUT__ORDER_ORDER_NOT_FOUND: "This order could not be found.",
	CHECKOUT__CUSTOMER_IS_ALREADY_CONFIRMED: "Either the email address has already been confirmed or the URL is invalid."
};
const errors$3 = {
	errors: errors$2
};

var form$4 = {
	accountType: {
		title: "Account type",
		"private": "Private",
		business: "Company"
	},
	salutation: "Salutation",
	chooseSalutation: "Choose salutation...",
	firstName: "First name",
	firstNamePlaceholder: "Enter first name...",
	lastName: "Last name",
	lastNamePlaceholder: "Enter last name...",
	country: "Country",
	chooseCountry: "Choose country...",
	company: "Company",
	vatIds: "VAT Registration Number",
	companyPlaceholder: "Enter company...",
	streetAddress: "Street address",
	streetPlaceholder: "Enter street...",
	password: "Password",
	passwordPlaceholder: "Enter password...",
	newPasswordPlaceholder: "New Password",
	repeatPasswordPlaceholder: "Repeat Password",
	email: "Email address",
	emailPlaceholder: "Enter the email...",
	vatId: "VAT-ID",
	vatIdPlaceholder: "Enter VAT-ID...",
	confirmEmail: "Confirm e-mail",
	city: "City",
	cityPlaceholder: "Enter city...",
	postalCode: "ZIP / Postal code",
	postalCodePlaceholder: "Enter zip code...",
	save: "Save",
	submit: "Submit",
	cancel: "Cancel",
	promoCodePlaceholder: "Enter promo code",
	searchPlaceholder: "Search products",
	chooseState: "Choose state",
	state: "State"
};
const form$5 = {
	form: form$4
};

var backToHomepage$2 = "Back to homepage";
var home$2 = "Home";
var error$2 = "Error";
var close$2 = "Close";
var goBackHome$2 = "Go back home";
var returnToHomepage$2 = "Return to Homepage";
var pageNotFound$2 = {
	header: "Page not found",
	text: " We are sorry, the page you're looking for could not be found. It may no longer exist or may have been moved."
};
var sidebar$2 = {
	closeMenu: "Close menu"
};
var search$2 = {
	all: "all",
	filters: "Filters",
	noResults: "No products found",
	resetFilters: "Reset Filters",
	result: "result | results",
	see: "see",
	resultsHeader: "Search Result for"
};
var messages$2 = {
	error: "Something goes wrong please try again later"
};
var wishlist$2 = {
	header: "Wishlist",
	emptyLabel: "Wishlist is empty",
	emptyText: "No products were added to the Wishlist.",
	continueShopping: "Continue Shopping",
	clearWishlist: "Clear wishlist"
};
var errorPages$2 = {
	"404": "We can't find what you are looking for. Are you lost?",
	"408": "The API is taking to long to respond",
	"500": "Oops, something went terribly wrong",
	"502": "Server couldn't complete your request. Please try again in few seconds.",
	"503": "Server is really busy right now"
};
var setup$2 = {
	check_console: "Check the console log to see the details 🖵",
	problems: "Problems during setup? 😬",
	support_start: "Checkout the",
	support_page: "troubleshooting page",
	support_end: "Good luck!"
};
var breadcrumbs$2 = {
	accountOverview: "Account Overview",
	address: "Address",
	order: "Order",
	payment: "Payment",
	myAccount: "My account",
	recoverPassword: "Recover password",
	register: "Register",
	passwordReset: "Password reset",
	search: "Search",
	wishlist: "Wishlist"
};
var maintenance$2 = {
	text: "We are currently performing maintenance. We will be back shortly.",
	title: "Maintenance"
};
const general$2 = {
	backToHomepage: backToHomepage$2,
	home: home$2,
	error: error$2,
	close: close$2,
	goBackHome: goBackHome$2,
	returnToHomepage: returnToHomepage$2,
	pageNotFound: pageNotFound$2,
	sidebar: sidebar$2,
	search: search$2,
	messages: messages$2,
	wishlist: wishlist$2,
	errorPages: errorPages$2,
	setup: setup$2,
	breadcrumbs: breadcrumbs$2,
	maintenance: maintenance$2
};

var listing$4 = {
	filters: "Filters",
	max: "Max",
	min: "Min",
	noProducts: "No products found 😔",
	perPage: "Per Page:",
	product: "Product",
	products: "Products",
	resetFilters: "Reset filters",
	sort: "Sort by",
	from: "From",
	variantsFrom: "Variants from"
};
const listing$5 = {
	listing: listing$4
};

var newsletter$4 = {
	subscriptionHeader: "Newsletter subscription",
	subscriptionCheckbox: "Yes, I would like to subscribe to the free Demostore newsletter. (I may unsubscribe at any time.)",
	subscriptionInfo: "You have just subscribed to our newsletter. To complete the sign-up process, search your inbox for our confirmation email and click on the link provided with it.",
	messages: {
		newsletterSubscribed: "Thank you! We have signed up your address.",
		newsletterUnsubscribed: "Newsletter unsubscribe"
	}
};
const newsletter$5 = {
	newsletter: newsletter$4
};

var product$4 = {
	addToCart: "Add to cart",
	details: "Details",
	amount: "Amount",
	description: "Description",
	properties: "Properties",
	reviews: "Reviews",
	content: "Content",
	choose: "Choose a",
	variantsFrom: "variants from",
	previously: "previously",
	price: {
		label: "Price",
		to: "To",
		from: "From"
	},
	reviewsForm: {
		title: "Title",
		review: "Your review",
		submit: "Submit",
		rating: "Your rating"
	},
	addReview: "Add review",
	noReviews: "No reviews yet.",
	reviewNotAccepted: "Your review has not been approved yet",
	reviewFeedback: "Our feedback",
	messages: {
		addedToWishlist: "{p} has been added to wishlist.",
		removedFromWishlist: "{p} has been removed from wishlist.",
		addedToCart: "{p} has been added to cart.",
		reviewAdded: "Thank you for submitting your review"
	},
	badges: {
		topseller: "Tip"
	},
	to: "To",
	from: "From",
	pricesIncl: "Prices incl. VAT plus shipping costs",
	pricesExcl: "Prices excl. VAT plus shipping costs",
	deliveryTime: "Available, delivery time",
	days: "days",
	noAvailable: "No longer available",
	productNumber: "Product number",
	addedToCart: "has been added to cart.",
	qty: "Qty"
};
const product$5 = {
	product: product$4
};

var recoveryPassword$4 = {
	header: "Reset password",
	infoBox: "You should receive a link in a few moments. Please open that link to reset your password.",
	form: {
		button: "Resend password"
	},
	label: "Don't have an account yet?",
	register: "Register today!",
	orLogin: "or try to log in again.",
	forgotPassword: "Forgot your password?"
};
var resetPassword$2 = {
	header: "Reset password",
	form: {
		newPassword: "New password",
		repeatPassword: "Repeat password",
		button: "Set new password"
	}
};
const recoveryPassword$5 = {
	recoveryPassword: recoveryPassword$4,
	resetPassword: resetPassword$2
};

var validations$4 = {
	alpha: "The value is not alphabetical",
	alphaNum: "The value must be alpha-numeric",
	between: "The value must be between {min} and {max}",
	decimal: "Value must be decimal",
	email: "Value is not a valid email address",
	integer: "Value is not an integer",
	ipAddress: "The value is not a valid IP address",
	macAddress: "The value is not a valid MAC Address",
	maxLength: "The maximum length allowed is {max}",
	minLength: "This minimum length should be at least {min}",
	minValue: "The minimum value allowed is {min}",
	not: "The value does not match the provided validator",
	numeric: "Value must be numeric",
	or: "The value does not match any of the provided validators",
	required: "Value is required",
	requiredIf: "The value is required",
	requiredUnless: "The value is required",
	sameAs: "The value must be equal to the {otherName} value",
	url: "The value is not a valid URL address",
	newPasswordConfirm: "The passwords needs to be the same"
};
const validations$5 = {
	validations: validations$4
};

const enGB$2 = {
  ...form$5,
  ...general$2,
  ...account$5,
  ...changePassword$5,
  ...recoveryPassword$5,
  ...checkout$5,
  ...cart$5,
  ...listing$5,
  ...product$5,
  ...newsletter$5,
  ...validations$5,
  ...errors$3
};

const enGB = () => enGB$2;

const enGB$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: enGB
}, Symbol.toStringTag, { value: 'Module' }));

var account$2 = {
	addresses: "Adresy",
	addressesLabel: "Wyświetl swoje aktualne domyślne adresy lub dodaj nowe.",
	addressAddNew: "Dodaj nowy adres",
	accountOverviewHeader: "Przegląd konta",
	signUpHeader: "Jestem tutaj nowy.",
	paymentMethodHeader: "Metoda płatności",
	newsletterSettingHeader: "Ustawienia newslettera",
	defaultBillingAddressHeader: "Domyślny adres rozliczeniowy",
	defaultShippingAddressHeader: "Domyślny adres wysyłki",
	yourAddress: "Twój adres",
	myPaymentsHeader: "Twoje metody płatności",
	orderHistoryHeader: "Historia zamówień",
	yourProfile: "Twój profil",
	documentsLabel: "Dokumenty",
	changePassword: "Zmień hasło",
	selectDefaultPaymentLabel: "Wybierz swoją domyślną metodę płatności",
	logout: "Wyloguj się",
	change: "zmień",
	save: "zapisz",
	setDefaultShippingAddress: "Ustaw jako domyślny adres wysyłki",
	setDefaultBillingAddress: "Ustaw jako domyślny adres rozliczeniowy",
	signInLabel: "Zaloguj się do swojego konta",
	signIn: "Zaloguj się",
	signUp: "Zarejestruj się",
	loggedInInfo: "jesteś zalogowany",
	view: "Wyświetl",
	hide: "Ukryj",
	menu: {
		signIn: "Zaloguj się",
		hello: "Witaj",
		openMenu: "Otwórz menu użytkownika",
		myAccount: "Moje konto",
		signOut: "Wyloguj się"
	},
	order: {
		product: "Produkt",
		quantity: "Ilość",
		price: "Cena",
		subtotal: "Suma częściowa",
		orderNumber: "Numer zamówienia",
		totalAmount: "Całkowita kwota",
		orderDate: "Data zamówienia",
		orderStatus: "Status zamówienia",
		paymentMethod: "Metoda płatności",
		repeatOrder: "Powtórz zamówienie",
		order: "zamówienie",
		orders: "Zamówienia"
	},
	orderDetails: {
		order: "Zamówienie",
		placedOn: "Złożone dnia {d}",
		shippingAddress: "Adres wysyłki",
		billingAddress: "Adres rozliczeniowy",
		orderSummary: "Podsumowanie zamówienia",
		paymentMethod: "Metoda płatności",
		shippingMethod: "Metoda wysyłki",
		subtotal: "Suma częściowa",
		shipping: "Wysyłka",
		total: "Całkowita kwota",
		takesUpTo: "Zajmuje do",
		change: "Zmień",
		changePaymentMethod: "Zmień metodę płatności",
		cancel: "Anuluj",
		confirm: "Potwierdź",
		close: "Zamknij",
		backToOrdersList: "Powrót do listy zamówień",
		itemsHeader: {
			item: "Przedmiot",
			quantity: "Ilość",
			price: "Cena",
			total: "Całkowita kwota"
		}
	},
	personalData: {
		infoBox: "Edytuj swoje dane poniżej, aby twoje konto zawsze było aktualne",
		label: "Dane osobowe"
	},
	changeEmail: {
		label: "Zmień adres e-mail",
		infoBox: "Zmień swój adres e-mail poniżej"
	},
	messages: {
		defaultShippingAddressSuccess: "Domyślny adres wysyłki został pomyślnie ustawiony",
		defaultShippingAddressError: "Wystąpił błąd podczas ustawiania domyślnego adresu wysyłki",
		defaultBillingAddressSuccess: "Domyślny adres rozliczeniowy został pomyślnie ustawiony",
		defaultBillingAddressError: "Wystąpił błąd podczas ustawiania domyślnego adresu rozliczeniowego",
		addressDeletedSuccess: "Adres został usunięty",
		addressDeletedError: "Wystąpił błąd podczas usuwania adresu",
		loggedInSuccess: "Jesteś zalogowany",
		personalDataUpdateSuccess: "Twoje informacje zostały zaktualizowane",
		paymentSetSuccessfully: "Ustawiono domyślną metodę płatności",
		signUpSuccess: "Dziękujemy za rejestrację! Wkrótce otrzymasz e-mail z potwierdzeniem. Kliknij w link w nim zawarty, aby ukończyć rejestrację.",
		paymentMethodChanged: "Metoda płatności została zmieniona",
		productsAdded: "Produkty zostały dodane do koszyka",
		verifying: "Potwierdzenie konta"
	}
};
const account$3 = {
	account: account$2
};

var cart$2 = {
	checkout: "Do kasy",
	header: "Koszyk",
	itemsInCart: "produkty w koszyku",
	viewCart: "zobacz koszyk",
	orderSummary: "Podsumowanie zamówienia",
	orderTotal: "Całkowity koszt zamówienia",
	subtotal: "Suma częściowa",
	shippingEstimate: "Szacowana wysyłka",
	shippingCosts: "Koszty wysyłki",
	emptyCartLabel: "Twój koszyk jest pusty!",
	messages: {
		addedToCart: "{p} został dodany do koszyka."
	},
	promotion: "promocja",
	digital: "cyfrowy"
};
const cart$3 = {
	cart: cart$2
};

var changePassword$2 = {
	infoBox: "Jeśli chcesz zmienić hasło do swojego konta, wprowadź następujące informacje:",
	currentEmail: "Twój obecny adres e-mail to",
	form: {
		currentPassword: "Obecne hasło",
		newPassword: "Nowe hasło",
		resetPassword: "Zresetuj hasło",
		changePassword: "Zmień hasło"
	},
	messages: {
		passwordUpdateSuccess: "Twoje hasło zostało zaktualizowane."
	}
};
const changePassword$3 = {
	changePassword: changePassword$2
};

var checkout$2 = {
	orderSummary: "Podsumowanie zamówienia",
	orderSummaryLabel: "Szczegóły zamówienia oraz kwoty do zapłaty.",
	signIn: "Zaloguj się",
	signInToOrder: "Aby złożyć zamówienie.",
	register: "Zarejestruj się",
	header: "Koszyk",
	empty: "Twój koszyk jest pusty",
	close: "Zamknij panel",
	logOut: "Możesz się wylogować",
	orderTotal: "Łącznie do zapłaty",
	loginRequired: "Musisz być zalogowany, aby złożyć zamówienie.",
	goToHomepage: "Przejdź do strony głównej",
	here: "tutaj",
	shippingEstimate: "Szacowana wysyłka",
	selectPaymentMethod: "Wybierz metodę płatności",
	notCreateAccount: "Nie twórz konta klienta.",
	takesUpTo: "Czas realizacji do",
	subtotal: "Suma częściowa",
	taxesLabel: "Koszty wysyłki i podatki są naliczane podczas realizacji zamówienia.",
	linkCheckout: "Do kasy",
	guest: "gość",
	placeOrder: "Złóż zamówienie",
	linkShippingCart: "Przejdź do koszyka",
	checkStatus: "Możesz teraz sprawdzić status zamówienia w swoim koncie. Dziękujemy!",
	unpaidStatus: "Niestety, Twoje zamówienie nie zostało opłacone. Możesz spróbować ponownie lub skontaktować się z nami.",
	checkOrderDetails: "Sprawdź szczegóły zamówienia",
	loggedInAs: "Jesteś zalogowany jako",
	or: "lub",
	yourOrder: "Twoje zamówienie",
	backToHomepage: "Wróć do strony głównej",
	orderPaid: "zostało opłacone",
	orderUnpaid: "nie zostało opłacone",
	continueShopping: "Kontynuuj zakupy",
	goToPayment: "Przejdź do płatności",
	shippingAddressLabel: "Adres wysyłki",
	billingAddressLabel: "Adres do faktury",
	selectBillingAddress: "Wybierz adres do faktury",
	addNewBillingAddress: "Dodaj nowy adres do faktury",
	addNewShippingAddress: "Dodaj nowy adres wysyłki",
	differentBillingAddress: "Inny adres do faktury",
	paymentMethodLabel: "Metoda płatności",
	shippingMethodLabel: "Metoda wysyłki",
	shippingPriceLabel: "Koszt wysyłki",
	personalInformationLabel: "Dane osobowe",
	personalInformationInfo: "Podaj stały adres, na który możesz otrzymywać korespondencję.",
	totalLabel: "Suma",
	termsAdnConditions: "Regulamin",
	termsAdnConditionsLabel: "Przeczytałem/am i akceptuję ogólne warunki handlowe.",
	digitalTerms: "Chcę mieć natychmiastowy dostęp do treści cyfrowych i świadomie zrzekam się prawa do odstąpienia od umowy.",
	promoCode: {
		label: "Zastosowane kody promocyjne",
		remove: "Usuń"
	},
	items: {
		removeButton: "Usuń"
	},
	success: {
		header: "Otrzymaliśmy zamówienie #{0} i przetworzymy je tak szybko, jak to możliwe.",
		paymentProcessLabel: "Zakończ proces płatności.",
		paymentProcessInfo: "Zostaniesz przekierowany do bramy płatności za 5 sekund."
	},
	messages: {
		checkoutSignInSuccess: "Dziękujemy za rejestrację! Wkrótce otrzymasz e-mail z potwierdzeniem. Kliknij w link w e-mailu, aby ukończyć rejestrację."
	}
};
const checkout$3 = {
	checkout: checkout$2
};

var form$2 = {
	accountType: {
		title: "Typ konta",
		"private": "Osoba prywatna",
		business: "Klient biznesowy"
	},
	salutation: "Forma grzecznościowa",
	chooseSalutation: "Wybierz formę grzecznościową...",
	firstName: "Imię",
	firstNamePlaceholder: "Wpisz imię...",
	lastName: "Nazwisko",
	lastNamePlaceholder: "Wpisz nazwisko...",
	country: "Kraj",
	chooseCountry: "Wybierz kraj...",
	company: "Firma",
	vatIds: "Numer identyfikacji podatkowej",
	companyPlaceholder: "Wprowadź nazwę firmy...",
	streetAddress: "Adres ulicy",
	streetPlaceholder: "Wpisz ulicę...",
	password: "Hasło",
	passwordPlaceholder: "Wpisz hasło...",
	newPasswordPlaceholder: "Nowe hasło",
	repeatPasswordPlaceholder: "Powtórz hasło",
	email: "Adres e-mail",
	emailPlaceholder: "Wpisz adres e-mail...",
	confirmEmail: "Potwierdź e-mail",
	vatId: "Nr VAT",
	vatIdPlaceholder: "Wprowadź Nr VAT...",
	city: "Miasto",
	cityPlaceholder: "Wpisz miasto...",
	postalCode: "Kod pocztowy",
	postalCodePlaceholder: "Wpisz kod pocztowy...",
	save: "Zapisz",
	submit: "Zatwierdź",
	cancel: "Anuluj",
	promoCodePlaceholder: "Wpisz kod promocyjny",
	searchPlaceholder: "Szukaj produktów",
	chooseState: "Wybierz stan",
	state: "Stan"
};
const form$3 = {
	form: form$2
};

var backToHomepage$1 = "Powrót na stronę główną";
var home$1 = "Strona główna";
var error$1 = "Błąd";
var close$1 = "Zamknij";
var goBackHome$1 = "Wróć na stronę główną";
var returnToHomepage$1 = "Powrót do strony głównej";
var pageNotFound$1 = {
	header: "Nie znaleziono strony",
	text: "Przepraszamy, nie udało nam się znaleźć szukanej strony. Być może już jej nie ma lub została przeniesiona."
};
var sidebar$1 = {
	closeMenu: "Zamknij menu"
};
var search$1 = {
	all: "wszystkie",
	filters: "Filtr",
	noResults: "Nie znaleziono produktów",
	resetFilters: "Zresetuj filtry",
	result: "wynik | wyniki | wyników",
	see: "zobacz",
	resultsHeader: "Wynik wyszukiwania dla"
};
var messages$1 = {
	error: "Coś poszło nie tak, spróbuj ponownie później"
};
var wishlist$1 = {
	header: "Lista życzeń",
	emptyLabel: "Lista życzeń jest pusta",
	emptyText: "Nie dodano żadnych produktów do listy życzeń.",
	continueShopping: "Kontynuuj zakupy",
	clearWishlist: "Usuń wszystko"
};
var errorPages$1 = {
	"404": "Nie możemy znaleźć tego, czego szukasz. Zgubiłeś się?",
	"408": "API nie odpowiada w odpowiednim czasie",
	"500": "Ups, coś poszło strasznie nie tak",
	"502": "Serwer nie mógł zrealizować Twojego żądania. Spróbuj ponownie za kilka sekund.",
	"503": "Serwer jest teraz bardzo zajęty"
};
var setup$1 = {
	check_console: "Sprawdź console log żeby sprawdzić szczegóły 🖵",
	problems: "Problemy podczas konfiguracji? 😬",
	support_start: "Sprawdź",
	support_page: "strona rozwiązywania problemów",
	support_end: "Powodzenia!"
};
var breadcrumbs$1 = {
	accountOverview: "Przegląd konta",
	address: "Adres",
	order: "Zamówienie",
	payment: "Płatność",
	myAccount: "Moje konto",
	recoverPassword: "Przywróć hasło",
	register: "Rejestracja",
	passwordReset: "Resetowanie hasła",
	search: "Wyszukiwanie",
	wishlist: "Lista życzeń"
};
var maintenance$1 = {
	text: "Aktualnie przeprowadzamy prace konserwacyjne. Wrócimy wkrótce.",
	title: "Konserwacja"
};
const general$1 = {
	backToHomepage: backToHomepage$1,
	home: home$1,
	error: error$1,
	close: close$1,
	goBackHome: goBackHome$1,
	returnToHomepage: returnToHomepage$1,
	pageNotFound: pageNotFound$1,
	sidebar: sidebar$1,
	search: search$1,
	messages: messages$1,
	wishlist: wishlist$1,
	errorPages: errorPages$1,
	setup: setup$1,
	breadcrumbs: breadcrumbs$1,
	maintenance: maintenance$1
};

var listing$2 = {
	filters: "Filtry",
	max: "Max",
	min: "Min",
	noProducts: "Nie znaleziono produktów 😔",
	perPage: "Na stronę:",
	product: "Produkt",
	products: "Produkty",
	resetFilters: "Resetuj filtry",
	sort: "Sortuj według",
	from: "Od",
	variantsFrom: "Warianty od"
};
const listing$3 = {
	listing: listing$2
};

var newsletter$2 = {
	subscriptionHeader: "Subskrypcja newslettera",
	subscriptionCheckbox: "Tak, chcę otrzymywać bezpłatny newsletter Demostore. (Mogę wypisać się w każdej chwili.)",
	subscriptionInfo: "Właśnie zapisałeś/aś się na nasz newsletter. Aby zakończyć proces rejestracji, wyszukaj w swojej skrzynce odbiorczej naszego e-maila potwierdzającego i kliknij na link w nim zawarty.",
	messages: {
		newsletterSubscribed: "Dziękujemy! Zapisaliśmy Twój adres e-mail.",
		newsletterUnsubscribed: "Wypisanie z newslettera"
	}
};
const newsletter$3 = {
	newsletter: newsletter$2
};

var product$2 = {
	addToCart: "Dodaj do koszyka",
	details: "Szczegóły",
	amount: "Ilość",
	description: "Opis",
	properties: "Właściwości",
	reviews: "Recenzje",
	content: "Zawartość",
	choose: "Wybierz",
	variantsFrom: "wariantów od",
	previously: "przed",
	price: {
		label: "Cena",
		to: "do",
		from: "od"
	},
	reviewsForm: {
		title: "Tytuł",
		review: "Ocena",
		submit: "Prześlij",
		rating: "Twoja ocena"
	},
	addReview: "Dodaj ocenę",
	noReviews: "Nie ma jeszcze recenzji.",
	reviewNotAccepted: "Twoja recenzja nie została jeszcze zatwierdzona",
	reviewFeedback: "Nasza opinia",
	messages: {
		addedToWishlist: "{p} został dodany do listy życzeń.",
		removedFromWishlist: "{p} został usunięty z listy życzeń.",
		addedToCart: "{p} został dodany do koszyka.",
		reviewAdded: "Dziękujemy za ocenę"
	},
	badges: {
		topseller: "Tip"
	},
	to: "Do",
	from: "Od",
	pricesIncl: "Ceny zawierają VAT plus koszty wysyłki",
	pricesExcl: "Ceny nie zawierają VAT plus koszty wysyłki",
	deliveryTime: "Czas dostawy",
	days: "dni",
	noAvailable: "Produkt niedostępny",
	productNumber: "Numer produktu",
	addedToCart: "został dodany do koszyka",
	qty: "Ilość"
};
const product$3 = {
	product: product$2
};

var recoveryPassword$2 = {
	header: "Zresetuj hasło",
	infoBox: "Powinieneś otrzymać link w ciągu kilku chwil. Otwórz ten link, aby zresetować swoje hasło.",
	form: {
		button: "Wyślij ponownie hasło"
	},
	label: "Nie masz jeszcze konta?",
	register: "Zarejestruj się dziś!",
	orLogin: "lub spróbuj ponownie się zalogować.",
	forgotPassword: "Nie pamiętasz hasła?"
};
var resetPassword$1 = {
	header: "Zresetuj hasło",
	form: {
		newPassword: "Nowe hasło",
		repeatPassword: "Powtórz hasło",
		button: "Ustaw nowe hasło"
	}
};
const recoveryPassword$3 = {
	recoveryPassword: recoveryPassword$2,
	resetPassword: resetPassword$1
};

var validations$2 = {
	alpha: "Wartość nie jest alfabetyczna",
	alphaNum: "Wartość musi być alfanumeryczna",
	between: "Wartość musi być między {min} a {max}",
	decimal: "Wartość musi być dziesiętna",
	email: "Wartość nie jest prawidłowym adresem e-mail",
	integer: "Wartość nie jest liczbą całkowitą",
	ipAddress: "Wartość nie jest prawidłowym adresem IP",
	macAddress: "Wartość nie jest prawidłowym adresem MAC",
	maxLength: "Maksymalna dozwolona długość to {max}",
	minLength: "Minimalna długość {min}",
	minValue: "Minimalna dozwolona wartość to {min}",
	not: "Wartość nie pasuje do podanego walidatora",
	numeric: "Wartość musi być numeryczna",
	or: "Wartość nie pasuje do żadnego z podanych walidatorów",
	required: "Wartość jest wymagana",
	requiredIf: "Wartość jest wymagana",
	requiredUnless: "Wartość jest wymagana",
	sameAs: "Wartość musi być równa wartości {otherName}",
	url: "Wartość nie jest prawidłowym adresem URL",
	newPasswordConfirm: "Hasła nie są takie same"
};
const validations$3 = {
	validations: validations$2
};

const plPL$2 = {
  ...account$3,
  ...form$3,
  ...changePassword$3,
  ...recoveryPassword$3,
  ...checkout$3,
  ...general$1,
  ...cart$3,
  ...listing$3,
  ...product$3,
  ...newsletter$3,
  ...validations$3
};

const plPL = () => plPL$2;

const plPL$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: plPL
}, Symbol.toStringTag, { value: 'Module' }));

var account = {
	addresses: "Adressen",
	addressesLabel: "Sehen Sie sich Ihre aktuellen Standardadressen an oder fügen Sie neue hinzu.",
	addressAddNew: "Neue Adresse hinzufügen",
	accountOverviewHeader: "Kontoübersicht",
	signUpHeader: "Ich bin neu hier.",
	paymentMethodHeader: "Zahlungsmethode",
	newsletterSettingHeader: "Newsletter-Einstellung",
	defaultBillingAddressHeader: "Standardrechnungsadresse",
	defaultShippingAddressHeader: "Standard-Lieferadresse",
	yourAddress: "Ihre Adresse",
	myPaymentsHeader: "meine Zahlungsmethoden",
	orderHistoryHeader: "Bestellverlauf",
	yourProfile: "Ihr Profil",
	documentsLabel: "Dokumente",
	changePassword: "Passwort ändern",
	selectDefaultPaymentLabel: "Wählen Sie Ihre Standardzahlungsmethode aus",
	logout: "ausloggen",
	change: "ändern",
	save: "speichern",
	setDefaultShippingAddress: "Als Standard-Lieferadresse festlegen",
	setDefaultBillingAddress: "Als Standardrechnungsadresse festlegen",
	signInLabel: "Melden Sie sich in Ihrem Konto an",
	signIn: "Anmelden",
	signUp: "Registrieren",
	loggedInInfo: "Sie sind angemeldet",
	view: "Anzeigen",
	hide: "Verbergen",
	menu: {
		signIn: "Anmelden",
		hello: "Hallo",
		openMenu: "Benutzermenü öffnen",
		myAccount: "Mein Konto",
		signOut: "Abmelden"
	},
	order: {
		product: "Produkt",
		quantity: "Menge",
		price: "Preis",
		subtotal: "Zwischensumme",
		orderNumber: "Bestellnummer",
		totalAmount: "Gesamtbetrag",
		orderDate: "Bestelldatum",
		orderStatus: "Bestellstatus",
		paymentMethod: "Zahlungsmethode",
		repeatOrder: "Bestellung wiederholen",
		order: "Bestellung",
		orders: "Bestellungen"
	},
	orderDetails: {
		order: "Bestellung",
		placedOn: "Bestellt am {d}",
		shippingAddress: "Lieferadresse",
		billingAddress: "Rechnungsadresse",
		orderSummary: "Bestellübersicht",
		paymentMethod: "Zahlungsmethode",
		shippingMethod: "Versandart",
		subtotal: "Zwischensumme",
		shipping: "Versand",
		total: "Gesamt",
		takesUpTo: "Dauert bis zu",
		change: "Ändern",
		changePaymentMethod: "Zahlungsmethode ändern",
		cancel: "Stornieren",
		confirm: "Bestätigen",
		close: "Schließen",
		backToOrdersList: "Zurück zur Bestellliste",
		itemsHeader: {
			item: "Artikel",
			quantity: "Menge",
			price: "Preis",
			total: "Gesamt"
		}
	},
	personalData: {
		infoBox: "Bearbeiten Sie Ihre Daten unten, damit Ihr Konto immer auf dem neuesten Stand ist.",
		label: "Persönliche Daten"
	},
	changeEmail: {
		label: "E-Mail-Adresse ändern",
		infoBox: "Ändern Sie Ihre E-Mail-Adresse unten."
	},
	messages: {
		defaultShippingAddressSuccess: "Standard-Lieferadresse erfolgreich festgelegt",
		defaultShippingAddressError: "Fehler beim Festlegen der Standard-Lieferadresse",
		defaultBillingAddressSuccess: "Standardrechnungsadresse erfolgreich festgelegt",
		defaultBillingAddressError: "Fehler beim Festlegen der Standardrechnungsadresse",
		addressDeletedSuccess: "Adresse gelöscht",
		addressDeletedError: "Fehler beim Löschen der Adresse",
		loggedInSuccess: "Sie sind angemeldet",
		personalDataUpdateSuccess: "Ihre Informationen wurden aktualisiert.",
		paymentSetSuccessfully: "Standardzahlungsmethode erfolgreich festgelegt",
		signUpSuccess: "Vielen Dank für Ihre Registrierung! Sie erhalten in Kürze eine Bestätigungs-E-Mail. Klicken Sie auf den Link darin, um die Registrierung abzuschließen.",
		paymentMethodChanged: "Zahlungsmethode geändert",
		productsAdded: "Produkte hinzugefügt",
		verifying: "Konto bestätigen"
	}
};
const account$1 = {
	account: account
};

var cart = {
	checkout: "Zur Kasse gehen",
	header: "Warenkorb",
	itemsInCart: "Artikel im Warenkorb",
	viewCart: "Warenkorb anzeigen",
	orderSummary: "Bestellübersicht",
	orderTotal: "Gesamtbestellwert",
	subtotal: "Zwischensumme",
	shippingEstimate: "Versandkostenabschätzung",
	shippingCosts: "Versandkosten",
	emptyCartLabel: "Ihr Warenkorb ist leer!",
	messages: {
		addedToCart: "{p} wurde dem Warenkorb hinzugefügt."
	},
	promotion: "Promotion",
	digital: "digital"
};
const cart$1 = {
	cart: cart
};

var changePassword = {
	infoBox: "Wenn Sie das Passwort für den Zugriff auf Ihr Konto ändern möchten, geben Sie folgende Informationen ein:",
	currentEmail: "Ihre aktuelle E-Mail-Adresse lautet",
	form: {
		currentPassword: "Aktuelles Passwort",
		newPassword: "Neues Passwort",
		resetPassword: "Passwort zurücksetzen",
		changePassword: "Passwort ändern"
	},
	messages: {
		passwordUpdateSuccess: "Ihr Passwort wurde aktualisiert."
	}
};
const changePassword$1 = {
	changePassword: changePassword
};

var checkout = {
	orderSummary: "Bestellübersicht",
	orderSummaryLabel: "Bestelldetails und Gesamtsummen.",
	signIn: "Anmelden",
	signInToOrder: "Um eine Bestellung aufzugeben.",
	register: "Registrieren",
	header: "Warenkorb",
	empty: "Ihr Warenkorb ist leer",
	close: "Panel schließen",
	logOut: "Hier können Sie sich abmelden",
	orderTotal: "Gesamtbestellwert",
	loginRequired: "Sie müssen angemeldet sein, um eine Bestellung aufzugeben.",
	goToHomepage: "Zur Startseite gehen",
	here: "hier",
	shippingEstimate: "Versandkostenabschätzung",
	selectPaymentMethod: "Wählen Sie eine Zahlungsmethode aus",
	notCreateAccount: "Kein Kundenkonto erstellen.",
	takesUpTo: "Dauert bis zu",
	subtotal: "Zwischensumme",
	taxesLabel: "Versandkosten und Steuern werden beim Checkout berechnet.",
	linkCheckout: "Zur Kasse gehen",
	guest: "Gast",
	placeOrder: "Bestellung aufgeben",
	linkShippingCart: "Zum Warenkorb gehen",
	checkStatus: "Sie können nun den Bestellstatus in Ihrem Konto überprüfen. Vielen Dank!",
	unpaidStatus: "Leider konnte Ihre Bestellung nicht bezahlt werden. Sie können es erneut versuchen oder uns kontaktieren.",
	checkOrderDetails: "Bestelldetails überprüfen",
	loggedInAs: "Sie sind angemeldet als",
	or: "oder",
	yourOrder: "Ihre Bestellung",
	backToHomepage: "Zurück zur Startseite",
	orderPaid: "wurde bezahlt",
	orderUnpaid: "ist nicht bezahlt",
	continueShopping: "Mit dem Einkauf fortfahren",
	goToPayment: "Zur Zahlung gehen",
	shippingAddressLabel: "Lieferadresse",
	billingAddressLabel: "Rechnungsadresse",
	selectBillingAddress: "Wählen Sie eine Rechnungsadresse aus",
	addNewBillingAddress: "Neue Rechnungsadresse hinzufügen",
	addNewShippingAddress: "Neue Lieferadresse hinzufügen",
	differentBillingAddress: "Unterschiedliche Rechnungsadresse",
	paymentMethodLabel: "Zahlungsmethode",
	shippingMethodLabel: "Versandmethode",
	shippingPriceLabel: "Versandkosten",
	personalInformationLabel: "Persönliche Informationen",
	personalInformationInfo: "Geben Sie eine permanente Adresse an, an der Sie Post erhalten können.",
	totalLabel: "Gesamt",
	termsAdnConditions: "Allgemeine Geschäftsbedingungen",
	termsAdnConditionsLabel: "Ich habe die allgemeinen Geschäftsbedingungen gelesen und akzeptiert.",
	digitalTerms: "Ich möchte sofortigen Zugriff auf den digitalen Inhalt und ich erkenne an, dass ich damit mein Recht auf Widerruf verzichte.",
	promoCode: {
		label: "Angewendete Promo-Codes",
		remove: "Entfernen"
	},
	items: {
		removeButton: "Entfernen"
	},
	success: {
		header: "Wir haben Ihre Bestellung #{0} erhalten und werden diese schnellstmöglich bearbeiten.",
		paymentProcessLabel: "Zahlungsvorgang abschließen.",
		paymentProcessInfo: "Sie werden in 5 Sekunden zum Zahlungsgateway weitergeleitet."
	},
	messages: {
		checkoutSignInSuccess: "Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine Bestätigungs-E-Mail. Klicken Sie auf den Link darin, um die Anmeldung abzuschließen."
	}
};
const checkout$1 = {
	checkout: checkout
};

var errors = {
	"promotions-on-cart-price-zero-error": "Promotionen sind für den Warenkorb ausgeschlossen, da der Preis des Warenkorbs null ist",
	"product-stock-reached": "Das Produkt {name} ist nur noch {quantity} mal verfügbar",
	"product-stock-reached-empty": "Diese Menge kann nicht hinzugefügt werden",
	"product-out-of-stock": "Das Produkt {name} ist nicht mehr verfügbar",
	"purchase-steps-quantity": "Das Produkt {name} ist nicht in der gewünschten Menge verfügbar. Die Anzahl wurde auf {quantity} geändert.",
	"min-order-quantity": "Die Anzahl an Produkten {name} hat die Mindestbestellmenge nicht erreicht. Die Anzahl wurde automatisch auf {quantity} erhöht.",
	"shipping-method-blocked": "Die Versandart {name} ist für Ihren aktuellen Warenkorb gesperrt.",
	"shipping-method-changed": "Die Versandart {oldShippingMethodName} ist für Ihren aktuellen Warenkorb nicht verfügbar, die Versandart wurde auf {newShippingMethodName} geändert.",
	"payment-method-blocked": "Die Zahlungsart {name} ist für Ihren aktuellen Warenkorb gesperrt.",
	"payment-method-changed": "Die Zahlungsart {oldPaymentMethodName} ist für Ihren aktuellen Warenkorb nicht verfügbar, die Zahlungsart wurde auf {newPaymentMethodName} geändert.",
	"promotion-not-found": "Der Gutschein-Code {promotionCode} existiert nicht.",
	"promotion-not-eligible": "Der Gutschein-Code wurde gespeichert, aber nicht auf den Warenkorb angewendet, da die Voraussetzungen dafür nicht zutreffen. Sobald die Voraussetzungen zutreffen, wird er automatisch hinzugefügt.",
	"promotion-excluded": "Mindestens ein Rabatt wurde wegen Konflikten mit anderen Rabatten aus dem Warenkorb entfernt. Sobald die Bedingungen wieder zutreffen, wird der Rabatt automatisch hinzugefügt.",
	"auto-promotion-not-found": "Die Rabattaktion {name} ist nicht länger gültig!",
	"shipping-address-blocked": "Lieferungen an die gewählte Lieferadresse sind nicht möglich.",
	"billing-address-blocked": "Rechnungen können nicht an die gewählte Rechnungsadresse ausgestellt werden.",
	"shipping-address-invalid": "Die gewählte Versandadresse ist nicht gültig oder unvollständig. Bitte prüfen Sie Ihre Angaben.",
	"billing-address-invalid": "Die gewählte Rechnungsadresse ist nicht gültig oder unvollständig. Bitte prüfen Sie Ihre Angaben.",
	"cart-merged-hint": "Der aktuelle Warenkorb enthält u.U. zusätzliche Produkte, die noch von einem früheren Besuch gespeichert waren.",
	"product-not-found": "Das Produkt wurde nicht gefunden.",
	"salutation-missing": "Es wurde keine Anrede konfiguriert, bitte wählen Sie beim Abschluss Ihrer Bestellung eine Anrede aus.",
	login_no_matching_customer_internal: "Ungültiger Benutzername und/oder Passwort.",
	"message-default": "Leider ist ein Fehler aufgetreten.",
	"message-404": "Die angeforderte Seite konnte nicht gefunden werden.",
	addToCartError: "Beim Versuch, Artikel zum Warenkorb hinzuzufügen, ist ein Fehler aufgetreten.",
	productNotFound: "Produkt {number} nicht gefunden.",
	"message-403-ajax": "Ihre Sitzung ist abgelaufen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.",
	"message-403": "Ihre Sitzung ist abgelaufen. Bitte kehren Sie zur letzten Seite zurück und versuchen Sie es erneut.",
	rateLimitExceeded: "Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",
	CHECKOUT__CART_INVALID_LINE_ITEM_QUANTITY: "Die Menge muss eine positive ganze Zahl sein. Gegeben: {quantity}",
	"VIOLATION::IS_BLANK_ERROR": "{field} sollte nicht leer sein.",
	"VIOLATION::TOO_LOW_ERROR": "{field} sollte nicht leer sein.",
	"VIOLATION::STRICT_CHECK_FAILED_ERROR": "{field} ist ungültig.",
	"VIOLATION::CUSTOMER_PASSWORD_NOT_CORRECT": "Passwort inkorrekt.",
	"VIOLATION::VAT_ID_FORMAT_NOT_CORRECT": "Die eingegebene USt-IdNr. hat nicht das richtige Format.",
	"VIOLATION::ZIP_CODE_INVALID": "Die eingegebene Postleitzahl hat nicht das richtige Format.",
	FRAMEWORK__INVALID_UUID: "Die ausgewählte Zahlungsmethode existiert nicht.",
	CHECKOUT__UNKNOWN_PAYMENT_METHOD: "Die ausgewählte Zahlungsmethode existiert nicht.",
	"VIOLATION::TOO_SHORT_ERROR": "{field} ist zu kurz.",
	CHECKOUT__ORDER_ORDER_ALREADY_PAID: "Die Bestellung mit der Bestellnummer {orderNumber} wurde bereits bezahlt und kann nicht mehr bearbeitet werden.",
	CHECKOUT__ORDER_ORDER_NOT_FOUND: "Diese Bestellung konnte nicht gefunden werden.",
	CHECKOUT__CUSTOMER_IS_ALREADY_CONFIRMED: "Die E-Mail-Adresse wurde bereits bestätigt oder die URL ist ungültig."
};
const errors$1 = {
	errors: errors
};

var form = {
	accountType: {
		title: "Kontotyp",
		"private": "Privat",
		business: "Gewerblich"
	},
	salutation: "Anrede",
	chooseSalutation: "Anrede wählen...",
	firstName: "Vorname",
	firstNamePlaceholder: "Vorname eingeben...",
	lastName: "Nachname",
	lastNamePlaceholder: "Nachname eingeben...",
	country: "Land",
	chooseCountry: "Land auswählen...",
	company: "Firma",
	vatIds: "USt-IdNr.",
	companyPlaceholder: "Firma eingeben...",
	streetAddress: "Straße und Hausnummer",
	streetPlaceholder: "Straße eingeben...",
	password: "Passwort",
	passwordPlaceholder: "Passwort eingeben...",
	newPasswordPlaceholder: "Neues Passwort",
	repeatPasswordPlaceholder: "Passwort wiederholen",
	email: "E-Mail-Adresse",
	emailPlaceholder: "E-Mail eingeben...",
	vatId: "USt-IdNr.",
	vatIdPlaceholder: "USt-IdNr. eingeben...",
	confirmEmail: "E-Mail bestätigen",
	city: "Stadt",
	cityPlaceholder: "Stadt eingeben...",
	postalCode: "PLZ",
	postalCodePlaceholder: "PLZ eingeben...",
	save: "Speichern",
	submit: "Senden",
	cancel: "Abbrechen",
	promoCodePlaceholder: "Promo-Code eingeben",
	searchPlaceholder: "Produkte suchen",
	chooseState: "Wählen Sie den Staat",
	state: "Zustand"
};
const form$1 = {
	form: form
};

var backToHomepage = "Zurück zur Startseite";
var home = "Startseite";
var error = "Fehler";
var close = "Schließen";
var goBackHome = "Zurück zur Startseite";
var returnToHomepage = "Zurück zur Startseite";
var pageNotFound = {
	header: "Seite nicht gefunden",
	text: "Es tut uns leid, die von Ihnen gesuchte Seite konnte nicht gefunden werden. Sie existiert möglicherweise nicht mehr oder wurde verschoben."
};
var sidebar = {
	closeMenu: "Menü schließen"
};
var search = {
	noResults: "Keine Produkte gefunden",
	all: "alle",
	result: "Ergebnis | Ergebnisse",
	see: "anzeigen",
	resultsHeader: "Suchergebnis"
};
var messages = {
	error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
};
var wishlist = {
	header: "Wunschliste",
	emptyLabel: "Wunschliste ist leer",
	emptyText: "Es wurden keine Produkte zur Wunschliste hinzugefügt.",
	continueShopping: "Weiter einkaufen",
	clearWishlist: "Wunschliste leeren"
};
var errorPages = {
	"404": "Wir können nicht finden, wonach Sie suchen. Sind Sie verloren?",
	"408": "Die API benötigt zu lange, um zu antworten",
	"500": "Hoppla, es ist ein schwerwiegender Fehler aufgetreten",
	"502": "Der Server konnte Ihre Anfrage nicht abschließen. Bitte versuchen Sie es in wenigen Sekunden erneut.",
	"503": "Der Server ist derzeit sehr beschäftigt"
};
var setup = {
	check_console: "Im Konsolenprotokoll finden Sie die Details 🖵",
	problems: "Probleme beim aufsetzen? 😬",
	support_start: "Schau mal auf die",
	support_page: "Troubleshooting-Seite",
	support_end: "Viel Erfolg!"
};
var breadcrumbs = {
	accountOverview: "Kontoübersicht",
	address: "Adresse",
	order: "Bestellung",
	payment: "Zahlung",
	myAccount: "Mein Konto",
	recoverPassword: "Passwort wiederherstellen",
	register: "Registrieren",
	passwordReset: "Passwort zurücksetzen",
	search: "Suche",
	wishlist: "Wunschliste"
};
var maintenance = {
	text: "Wir führen derzeit Wartungsarbeiten durch. Wir sind bald zurück.",
	title: "Wartung"
};
const general = {
	backToHomepage: backToHomepage,
	home: home,
	error: error,
	close: close,
	goBackHome: goBackHome,
	returnToHomepage: returnToHomepage,
	pageNotFound: pageNotFound,
	sidebar: sidebar,
	search: search,
	messages: messages,
	wishlist: wishlist,
	errorPages: errorPages,
	setup: setup,
	breadcrumbs: breadcrumbs,
	maintenance: maintenance
};

var listing = {
	filters: "Filter",
	max: "Max",
	min: "Min",
	noProducts: "Keine Produkte gefunden 😔",
	perPage: "pro Seite:",
	product: "Produkt",
	products: "Produkte",
	resetFilters: "Filter zurücksetzen",
	sort: "Sortieren nach",
	from: "Ab",
	variantsFrom: "Varianten ab"
};
const listing$1 = {
	listing: listing
};

var newsletter = {
	subscriptionHeader: "Newsletter-Anmeldung",
	subscriptionCheckbox: "Ja, ich möchte den kostenlosen Demostore-Newsletter abonnieren. (Ich kann mich jederzeit abmelden.)",
	subscriptionInfo: "Sie haben sich gerade für unseren Newsletter angemeldet. Um den Anmeldevorgang abzuschließen, suchen Sie in Ihrem Posteingang nach unserer Bestätigungs-E-Mail und klicken Sie auf den darin enthaltenen Link.",
	messages: {
		newsletterSubscribed: "Vielen Dank! Wir haben Ihre E-Mail-Adresse angemeldet.",
		newsletterUnsubscribed: "Newsletter abbestellt"
	}
};
const newsletter$1 = {
	newsletter: newsletter
};

var product = {
	addToCart: "In den Warenkorb",
	details: "Details",
	amount: "Menge",
	description: "Beschreibung",
	properties: "Eigenschaften",
	reviews: "Bewertungen",
	content: "Inhalt",
	choose: "Wähle eine",
	variantsFrom: "Varianten ab",
	previously: "zuvor",
	price: {
		label: "Preis",
		to: "Bis",
		from: "Ab"
	},
	reviewsForm: {
		title: "Titel",
		review: "Ihre Bewertung",
		submit: "Einreichen",
		rating: "Ihre Bewertung"
	},
	addReview: "Bewertung hinzufügen",
	noReviews: "Noch keine Bewertungen.",
	reviewNotAccepted: "Ihre Bewertung wurde noch nicht genehmigt",
	reviewFeedback: "Unser Feedback",
	messages: {
		addedToWishlist: "{p} wurde zur Wunschliste hinzugefügt.",
		removedFromWishlist: "{p} wurde aus der Wunschliste entfernt.",
		addedToCart: "{p} wurde dem Warenkorb hinzugefügt.",
		reviewAdded: "Vielen Dank für Ihre Bewertung"
	},
	badges: {
		topseller: "Tipp"
	},
	to: "Bis",
	from: "Ab",
	pricesIncl: "Preise inkl. MwSt. zzgl. Versandkosten",
	pricesExcl: "Preise exkl. MwSt. zzgl. Versandkosten",
	deliveryTime: "Lieferzeit",
	days: "tage",
	noAvailable: "Nicht verfügbar",
	productNumber: "Artikelnummer",
	addedToCart: "in den Warenkorb gelegt",
	qty: "Menge"
};
const product$1 = {
	product: product
};

var recoveryPassword = {
	header: "Passwort zurücksetzen",
	infoBox: "Sie sollten in wenigen Augenblicken einen Link erhalten. Bitte öffnen Sie diesen Link, um Ihr Passwort zurückzusetzen.",
	form: {
		button: "Passwort erneut senden"
	},
	label: "Haben Sie noch kein Konto?",
	register: "Registrieren Sie sich noch heute!",
	orLogin: "oder versuchen Sie erneut, sich anzumelden.",
	forgotPassword: "Passwort vergessen?"
};
var resetPassword = {
	header: "Passwort zurücksetzen",
	form: {
		newPassword: "Neues Passwort",
		repeatPassword: "Passwort wiederholen",
		button: "Neues Passwort festlegen"
	}
};
const recoveryPassword$1 = {
	recoveryPassword: recoveryPassword,
	resetPassword: resetPassword
};

var validations = {
	alpha: "Der Wert ist nicht alphabetisch",
	alphaNum: "Der Wert muss alphanumerisch sein",
	between: "Der Wert muss zwischen {min} und {max} liegen",
	decimal: "Der Wert muss dezimal sein",
	email: "Der Wert ist keine gültige E-Mail-Adresse",
	integer: "Der Wert ist keine ganze Zahl",
	ipAddress: "Der Wert ist keine gültige IP-Adresse",
	macAddress: "Der Wert ist keine gültige MAC-Adresse",
	maxLength: "Die maximale Länge beträgt {max}",
	minLength: "Mindestlänge {min}",
	minValue: "Der kleinste erlaubte Wert ist {min}",
	not: "Der Wert entspricht dem angegebenen Validierer nicht",
	numeric: "Der Wert muss numerisch sein",
	or: "Der Wert entspricht keinem der angegebenen Validierer",
	required: "Der Wert ist erforderlich",
	requiredIf: "Der Wert ist erforderlich",
	requiredUnless: "Der Wert ist erforderlich",
	sameAs: "Der Wert muss dem Wert {otherName} entsprechen",
	url: "Der Wert ist keine gültige URL-Adresse",
	newPasswordConfirm: "Die Passwörter stimmen nicht überein"
};
const validations$1 = {
	validations: validations
};

const deDE$2 = {
  ...account$1,
  ...form$1,
  ...changePassword$1,
  ...recoveryPassword$1,
  ...checkout$1,
  ...general,
  ...cart$1,
  ...listing$1,
  ...product$1,
  ...newsletter$1,
  ...validations$1,
  ...errors$1
};

const deDE = () => deDE$2;

const deDE$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: deDE
}, Symbol.toStringTag, { value: 'Module' }));

const config = () => ({
  legacy: false,
  fallbackLocale: "en-GB",
  allowComposition: true,
  globalInjection: true
});

const config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    if (typeof ssrError.data === "string") {
      try {
        ssrError.data = destr(ssrError.data);
      } catch {
      }
    }
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
